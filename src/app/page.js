"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = ()=>{
    router.push("/products");
  }
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Hello Ramneet</h1>
      <Link href={"/products"}>Navigate to products</Link>
      <h2 className="text-xl text-red">Navigate to products</h2>
      <button onClick={handleNavigate} className="font-bold">Navigate</button>
    </main>
  )
}
