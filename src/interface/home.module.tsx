
export interface DisabledType {
    categoryDisableBtn: boolean
    searchDisableBtn: boolean
}

export interface ItemType {
    id: string
    icon_url: string
    updated_at: string
    url: string
    created_at: string
    value: string
    categories: string[]
}

export interface SearchResultType {
    total: number
    result: ItemType[]
}