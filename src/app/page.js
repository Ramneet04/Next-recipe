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
      <h1>Welcome to Recipie App</h1>
      <Link href={"/recipe-list"}>Go to Recipie</Link>
    </main>
  )
}
