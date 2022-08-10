import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-500">
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
                <h1 className="ml-2 text-white text-2xl font-semibold">
                    Next.js
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <Link href="/">
                    <a className="ml-2 text-white text-2xl font-semibold">
                        Home
                    </a>
                </Link>
                <Link href="/login">
                    <a className="ml-2 text-white text-2xl font-semibold">
                        Login
                    </a>
                </Link>
            </div>
        </div>
    </div> 
  )
}
