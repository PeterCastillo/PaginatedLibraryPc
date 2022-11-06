import React from "react"

export interface PaginadoProps {
    itemsAmount: Array<string>
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
    limit: number
}

export interface PaginaPropsStyle {
    state?: boolean
}