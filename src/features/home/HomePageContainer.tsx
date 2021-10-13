import React, { useEffect, useState } from 'react'
import { DisabledType } from '../../interface/home.module'
import { getRandomJokes, getCategoriesJokes, getSearchJokes } from '../../services/home'
import HomePage from './HomeView/HomePage'


const HomePageContainer = () => {
    const [jokes, setJokes] = useState<any>()
    const [ruseltSearch, setRuseltSearch] = useState<any>()
    const [categories, setCategories] = useState<any>()
    const [errorMes, setErrorMes] = useState<string>('')
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [disabledBtn, setDisabledBtn] = useState<DisabledType>({
        categoryDisableBtn: false,
        searchDisableBtn: false
    })
    useEffect(() => {
        jokesData()
        categoriesData()
    }, [])

    //Action
    const jokesData = async (category?: string) => {
        setIsloading(true)
        setRuseltSearch(null)

        //To reduce excessive requests
        setDisabledBtn({ ...disabledBtn, categoryDisableBtn: true })

        try {
            const { data } = await getRandomJokes(category)
            setJokes(data)
            setIsloading(false)
            setDisabledBtn({ ...disabledBtn, categoryDisableBtn: false })

        } catch (err) {
            setIsloading(false)
            setDisabledBtn({ ...disabledBtn, categoryDisableBtn: false })
            console.log(err);
        }
    }

    const categoriesData = async () => {
        setIsloading(true)

        try {
            const { data } = await getCategoriesJokes()
            setCategories(data)
            setIsloading(false)


        } catch (err) {
            setIsloading(false)
            console.log(err);
        }
    }

    const searchQuery = async (query?: string) => {
        setErrorMes('')
        setJokes(null)
        setIsloading(true)

        //To reduce excessive requests
        setDisabledBtn({ ...disabledBtn, searchDisableBtn: true })

        try {
            const { data } = await getSearchJokes(query)
            setRuseltSearch(data)
            setIsloading(false)
            setDisabledBtn({ ...disabledBtn, searchDisableBtn: false })

        } catch (err: any) {
            const { data: { message } } = err.response
            setErrorMes(message)
            setIsloading(false)
            setDisabledBtn({ ...disabledBtn, searchDisableBtn: false })

        }
    }

    return (
        <HomePage
            jokesData={jokesData}
            ruseltSearch={ruseltSearch}
            searchQuery={searchQuery}
            categories={categories}
            errorMessage={errorMes}
            disabledBtn={disabledBtn}
            loading={isLoading}
            item={jokes} />
    )
}

export default HomePageContainer