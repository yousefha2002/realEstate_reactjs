import React,{ReactNode} from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import './layout.css'
import Footer from './Footer'

type props = {
    children: ReactNode
}

export default function Layout({children}:props) {
    return (
        <>
            <Navbar/>
            <Categories/>
            <div className='min-h-[500px]'>
            {
                children
            }
            </div>
            <Footer/>
        </>
    )
}
