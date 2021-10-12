import React, { useEffect, useState } from 'react'
import { getRandomJokes, getCategoriesJokes, getSearchJokes } from '../../services/home'
import HomePage from './HomeView/HomePage'



const HomePageContainer: React.FC = () => {
    const [jokes, setJokes] = useState<any>()
    const [categories, setCategories] = useState<any>()
    const [errorMes, setErrorMes] = useState<string>('')
    useEffect(() => {
        jokesData()
        categoriesData()
    }, [])

    //Action
    const jokesData = async (category?: string) => {
        try {
            const { data } = await getRandomJokes(category)
            setJokes(data)
        } catch (err) {
            console.log(err);
        }
    }

    const categoriesData = async () => {
        try {
            const { data } = await getCategoriesJokes()
            setCategories(data)
        } catch (err) {
            console.log(err);
        }
    }

    const searchQuery = async (query?: string) => {
        setErrorMes('')
        
        try {
            const { data } = await getSearchJokes(query)
            console.log(data);
            setJokes(data)
        } catch (err: any) {
            const { data: { message } } = err.response
            console.log(err.response);
            setErrorMes(message)
        }
    }

    if (!jokes) { return <>Loading...</> }
    return (
        <HomePage
            jokesData={jokesData}
            searchQuery={searchQuery}
            categories={categories}
            errorMessage={errorMes}
            item={jokes} />
    )
}

export default HomePageContainer