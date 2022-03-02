import Link from "next/link";
import Layout from "../../components/Layout";


export default function Post({data}){
    return(
        <Layout title="Post">
            <strong>Title: </strong>{data.title}
            <br/>
            <strong>Body: </strong>{data.body}
            <br/>
            <strong>Id: </strong>{data.id}
            <br/>
            <Link href={`/posts/${data.id - 1}`}>
            <a><button disabled={data.id === 1}>Atras</button></a>
            </Link>
            <Link href={`/posts/${data.id + 1}`}>
            <a><button >Adelante</button></a>
            </Link>
        </Layout>
    )
}

export async function getStaticPaths(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        const paths = data.map(({id})=> ({params: {id: `${id}`}}))
        return{
            paths, fallback: false
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({params}){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
        const data = await res.json()
        return{
            props:{data}
        }
    } catch (error) {
        console.log(error);
    }
}