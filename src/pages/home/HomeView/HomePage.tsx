import React from 'react'
import ItemCard from '../../../components/Card/ItemCard'
import CategorySelect from '../CategoryBar/CategorySelect'
import SearchBar from '../SearchBar/SearchBar'
import { Container, HomeBottom, HomeTop } from './HomePage.styled'

interface HomePageProps {
    categories?: string[]
    item: any
    jokesData: (category: string) => void
    searchQuery: (query: string) => void
    errorMessage: string

}

const HomePage: React.FC<HomePageProps> = (
    { categories,
        item,
        jokesData,
        searchQuery,
        errorMessage }) => {

    return (
        <Container>
            <HomeTop>
                <CategorySelect jokesData={jokesData} categories={categories} />
                <SearchBar errorMessage={errorMessage} searchQuery={searchQuery} />
            </HomeTop>
            <HomeBottom>
                {item?.result
                    ? item.result.slice(0, 5).map((item: any) => <ItemCard key={item.id} item={item} />)
                    : <ItemCard item={item} />}
            </HomeBottom>
        </Container>
    )
}

export default HomePage