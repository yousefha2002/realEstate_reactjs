import React from 'react'
import NewEstases from '../components/home/NewEstases'
import Categories from '../components/home/Categories'
import Layout from '../components/layout/Layout'

export default function Home() {
    return (
        <Layout>
            <NewEstases/>
            <Categories/>
        </Layout>
    )
}
