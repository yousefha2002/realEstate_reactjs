import { useQuery } from "@tanstack/react-query"
import { Estate } from "../types/Esatate"

const fetchLastEstates = async()=>
{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/estate/last`)
    return res.json()
}

export const useLastEstates = ()=>
{
    return useQuery<Estate[]>({ queryKey: ['last-estates'], queryFn: fetchLastEstates })
}