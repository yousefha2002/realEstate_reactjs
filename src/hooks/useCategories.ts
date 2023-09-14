import { useQuery } from "@tanstack/react-query"
import { Category } from "../types/Category"

const fetchCategories = async()=>
{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/category/all`)
    return res.json()
}

export const useCategories = ()=>
{
    return useQuery<Category[]>({ queryKey: ['categories'], queryFn: fetchCategories })
}

const fetchCategoriesWithEstates = async()=>
{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/category/estates-last`)
    return res.json()
}

export const useCategoriesWithEstates = ()=>
{
    return useQuery<Category[]>({ queryKey: ['categories-with-estate'], queryFn: fetchCategoriesWithEstates })
}

const fetchEstatesByCategory = async(id:string|undefined)=>
{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/category/${id}/estates`)
    return res.json()
}

export const useEstatesbyCategory = (id:string|undefined)=>
{
    return useQuery<Category>({ queryKey: ['estate-by-category'], queryFn: ()=>fetchEstatesByCategory(id) })
}