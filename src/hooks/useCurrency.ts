import { useQuery } from "@tanstack/react-query"
import { Currecny } from "../types/Currency"

const fetchCurrencies = async()=>
{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/currency/all`)
    return res.json()
}

export const useCurrencies = ()=>
{
    return useQuery<Currecny[]>({ queryKey: ['currencies'], queryFn: fetchCurrencies })
}