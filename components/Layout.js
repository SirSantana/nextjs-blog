import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({children, title}){
    return(
        <>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <Navbar/>
        
        <main>{children}</main>
        <footer>
            Created By SantaNaN 2022
        </footer>
        </>
    )
}

Layout.defaultProps={
    title: "Aprendiendo NextJs"
}