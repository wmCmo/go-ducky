import ScrollButton from "@/components/ScrollButton";
import { InstagramLogoIcon, TiktokLogoIcon, TranslateIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

function ExploreShopButton() {
  return <Link href={'/explore'} className="mt-8 px-4 py-2 bg-amber-300 rounded-full drop-shadow-amber-300 drop-shadow-xl text-white font-maru font-extrabold animate-out hover:translate-y-0.5 active:translate-y-1">Explore Shop</Link>;
}

function BagLineUp({ name, src, alt }: { name: string; src: string; alt: string; }) {
  return <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-2 sm:p-4 transition-all duration-200 ease-out hover:-translate-y-2">
    <Image alt={alt} src={src} width={120} height={120} />
    <p className="font-semibold mt-2">{name}</p>
  </div>;
}

export default function HomePage() {
  return (
    <div className="font-cooper text-neutral-700">
      <nav>

      </nav>
      <main className="relative bg-neutral-50 h-dvh flex flex-col justify-center items-center px-8">
        <h1 className="text-6xl text-center">Go Ducky</h1>
        <h2 className="text-6xl text-center">Shop</h2>
        <h3 className="font-maru font-bold mt-8 text-xl text-center">Explore <span className="font-cooper relative">QUACKY<img src="/svg/squaky-yellow.svg" alt="Yellow underline" className="absolute top-5 left-0" /></span> design that fits <span className="font-cooper relative">YOU<img src="/svg/squaky-pink.svg" alt="Pink underline" className="absolute top-5 left-0" /></span></h3>
        <ExploreShopButton />
        <div className="absolute bottom-10">
          <ScrollButton target="yellow-wave" />
        </div>
      </main>
      <div id="yellow-wave" className="box bg-amber-300 h-20 rotate-180" />
      <section className="px-8 py-4">
        <h2 className="font-maru text-3xl" id="what-are-duck-bags">So... what are</h2>
        <h1 className="text-4xl">Go Ducky Bags?</h1>
        <p className="font-maru">The answer for expressing your love for these adorable animals.</p>
        <div className="mt-8">
          <ExploreShopButton />
        </div>
      </section>
      <section className="px-8 flex flex-col items-center w-full">
        <h2 className="text-4xl mt-8 text-center font-maru"><span className="relative font-cooper"><img src="/svg/squaky-yellow.svg" alt="Squaky yellow line" className="absolute top-9 w-40 left-0" />Discover</span> what fits <span className="relative font-cooper">You <img src="/svg/squaky-pink.svg" alt="Squeaky pink line" className="absolute top-9 left-0 w-40" /></span></h2>
        <div className="flex text-center font-maru mt-8 justify-between max-w-xl w-full gap-4">
          <BagLineUp alt="Japanese casual style tote bag" name="Japanese Casual" src="/png/japanese-casual.png" />
          <BagLineUp alt="Trendy Ladies style tote bag" name="Trendy Ladies" src="/png/trendy-ladies.png" />
          <BagLineUp alt="College style tote bag" name="College Style" src="/png/college-style.png" />
        </div>
      </section>
      <section className="mt-16 px-8">
        <h1 className="text-5xl">Get One Now</h1>
        <h2 className="font-maru text-2xl font-semibold">For yourself!</h2>
        <div className="my-8">
          <ExploreShopButton />
        </div>
      </section>
      <footer className="sm:flex p-8 justify-between items-center">
        <div>
          <div className="flex items-center">
            <img src="/svg/duck-foot.svg" alt="Rough duck foot" />
            <div>
              <h3 className="text-3xl">Go Ducky</h3>
              <h3 className="text-5xl text-amber-400">Shop</h3>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="flex items-center text-neutral-400 gap-2">
              <TiktokLogoIcon weight="fill" size={24} />
              <InstagramLogoIcon weight="fill" size={24} />
            </div>
            <div className="flex items-center">
              <TranslateIcon />
              <select name="language" id="language" className="font-maru">
                <option value="en">English</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-60 justify-between items-center">
          <div className="font-maru flex flex-col">
            <h2 className="font-bold text-2xl">Shop</h2>
            <Link href={'/explore'}>Explore</Link>
            <Link href={'/coupons'}>Coupons</Link>
            <Link href={'/profile'}>Profile</Link>
          </div>
          <div className="font-maru flex flex-col">
            <h2 className="font-bold text-2xl">About</h2>
            <Link href={'/about'}>About us</Link>
            <Link href={'/terms#privacy'}>Privacy Policy</Link>
            <Link href={'/terms#terms'}>Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
