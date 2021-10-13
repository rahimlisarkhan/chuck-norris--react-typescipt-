import React from 'react'
import ItemCard from '../../../components/Card/ItemCard'
import { Loading } from '../../../components/Loading/Loading'
import { NotFound } from '../../../components/NotFound/NotFound'
import { DisabledType, ItemType, SearchResultType } from '../../../interface/home.module'
import CategorySelect from '../CategoryBar/CategorySelect'
import SearchBar from '../SearchBar/SearchBar'
import { Container, HomeBottom, HomeTop } from './HomePage.styled'

interface HomePageProps {
    categories?: string[]
    item: ItemType
    ruseltSearch: SearchResultType
    disabledBtn: DisabledType
    jokesData: (category: string) => void
    searchQuery: (query: string) => void
    errorMessage: string
    loading: boolean
}

const HomePage: React.FC<HomePageProps> = (
    { categories,
        item,
        jokesData,
        searchQuery,
        errorMessage,
        loading,
        ruseltSearch,
        disabledBtn
    }) => {

    return (
        <Container>
            <HomeTop>
                <CategorySelect disabled={disabledBtn.categoryDisableBtn} jokesData={jokesData} categories={categories} />
                <SearchBar disabled={disabledBtn.searchDisableBtn} errorMessage={errorMessage} searchQuery={searchQuery} />
            </HomeTop>
            {loading
                ?
                <Loading />
                :
                <HomeBottom>
                    {item && <ItemCard item={item} />}
                    {ruseltSearch && (ruseltSearch.result.length > 0
                        ? ruseltSearch.result.slice(0, 5).map((item: any) => <ItemCard key={item.id} item={item} />)
                        : <NotFound />)
                    }
                </HomeBottom>
            }
        </Container>
    )
}

export default HomePage