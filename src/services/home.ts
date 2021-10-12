
import { AxiosResponse } from "axios"
import { Axios } from "../util/axios-util"


//Jokes Random
export const getRandomJokes = async (category?: string) => {
    const url = category ? `random?category=${category}` : 'random'
    const response = await Axios.get<AxiosResponse>(url)
    return response
}

//Jokes Categories
export const getCategoriesJokes = async () => {
    const response = await Axios.get<AxiosResponse>('categories')
    return response
}


export const getSearchJokes = async (query?: string) => {
    const response = await Axios.get<any,AxiosResponse>(`search?query=${query}`)
    return response
}