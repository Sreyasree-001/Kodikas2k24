import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-violet-400 p-4">
            <nav>
            <ul className="flex space-x-4 text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            </nav>
        </header>
    )
}