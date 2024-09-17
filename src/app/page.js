import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-amber-200">
        <h1 className="text-5xl font-bold mb-4">Welcome to Recipe App</h1>
        <Link  className="text-2xl text-blue-500 hover:underline" href={"/recipe-list"}>Explore Recipes</Link>
        </div>
     
  );
}
