import Link from 'next/link'

export default function Navbar(){
    return(
        <nav>
            <Link href="/">
            <a> Inicio |</a>
            </Link>
            <Link href="/about">
            <a> About |</a>
            </Link>
            <Link href="/contact">
            <a> Contact |</a>
            </Link>
            <Link href="/posts">
            <a> Posts |</a>
            </Link>
        </nav>
    )
}