import ScrollButton from "@/components/ScrollButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-cooper">
      <nav>

      </nav>
      <main className="relative bg-neutral-50 text-neutral-700 h-dvh flex flex-col justify-center items-center">
        <h1 className="text-6xl ">Go Ducky</h1>
        <h2 className="text-6xl">Shop</h2>
        <h3 className="font-maru font-bold mt-8 text-xl">Explore <span className="font-cooper relative">QUACKY<img src="/svg/squaky-yellow.svg" alt="Yellow underline" className="absolute top-5 left-0" /></span> design that fits <span className="font-cooper relative">YOU<img src="/svg/squaky-pink.svg" alt="Pink underline" className="absolute top-5 left-0" /></span></h3>
        <Link href={'/explore'} className="mt-8 px-4 py-2 bg-amber-300 rounded-full drop-shadow-amber-300 drop-shadow-xl text-white font-maru font-extrabold animate-out hover:translate-y-0.5 active:translate-y-1">Explore Shop</Link>
        <div className="absolute bottom-10">
          <ScrollButton target="what-are-duck-bags" />
        </div>
      </main>
      <section className="h-dvh text-neutral-700">
        <h2 id="what-are-duck-bags">So... what are</h2>
        <h1>Go Ducky Bags?</h1>
      </section>
      <section>

      </section>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  );
}
