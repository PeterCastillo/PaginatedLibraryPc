import { useState } from "react"
import { Pagina, PaginaContainer, SetAnotherPage } from "../style/paginado"
import { PaginadoProps } from "../types/paginated"

const Paginado = ({ itemsAmount , setPage , page , limit }:PaginadoProps) => {

    const pagAmount = (itemsAmount.length / limit) + 1 | 0 
    const [ itermediate , setItermediate ] = useState(0)
    const pag01 = 3 + itermediate
    const pag02 = 4 + itermediate
    const pag03 = 5 + itermediate


    const handlePage = (page:number) => {
        if(page == pagAmount && pag03 != pagAmount-2){
            setItermediate(((pagAmount-pag03)+itermediate)-2)
        }
        if(page == 1){
            setItermediate(0)
        }
        setPage(page-1)
    }

    const handlemidelPages = (page:number,state:boolean) => {
        if(state){
            if(page <= pagAmount-3){
                setItermediate(itermediate+1)
            }
        } else {
            if(page > 3){
                setItermediate(itermediate-1)
            }
        }
        handlePage(page)
    }

    return (
        <PaginaContainer>
            {/* <SetAnotherPage>⇠</SetAnotherPage> */}
            <Pagina state={0==page} onClick={()=>handlePage(1)}>1</Pagina>
            {
                page+1 > 4
                ? <Pagina>..</Pagina>
                : <Pagina state={2-1==page}  onClick={()=>handlePage(2)}>2</Pagina>
            }
            <Pagina state={pag01-1==page}  onClick={()=> page+1 > 3 || page-1 < pagAmount-2? handlemidelPages(pag01,false):handlePage(pag01)}>{pag01}</Pagina>
            <Pagina state={pag02-1==page}  onClick={()=>handlePage(pag02)}>{pag02}</Pagina>
            <Pagina state={pag03-1==page}  onClick={()=> page+1 > 3 || page-1 < pagAmount-2 ? handlemidelPages(pag03,true):handlePage(pag03)}>{pag03}</Pagina>
            {
                page < pagAmount-4
                ? <Pagina>..</Pagina>
                : <Pagina state={pagAmount-2==page}  onClick={()=>handlePage(pagAmount-1)}>{(pagAmount-1)}</Pagina>
            }
            <Pagina state={pagAmount-1==page}  onClick={()=>handlePage(pagAmount)}>{pagAmount}</Pagina>
            {/* <SetAnotherPage>⇢</SetAnotherPage> */}
        </PaginaContainer>
    )
}

export default Paginado