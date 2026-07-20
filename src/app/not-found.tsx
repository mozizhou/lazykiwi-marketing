import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | LazyKiwi",
  description: "The page you requested could not be found on LazyKiwi.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-kiwi-green-dark">404</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
        That URL does not match a published LazyKiwi page. Try the hubs below or return home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-2xl bg-kiwi-green px-6 py-3 text-sm font-black text-gray-950 transition hover:bg-kiwi-green-dark hover:text-white">
          Home
        </Link>
        <Link href="/tools" className="rounded-2xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition hover:border-kiwi-green-dark hover:text-kiwi-green-dark">
          Tools
        </Link>
        <Link href="/models" className="rounded-2xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition hover:border-kiwi-green-dark hover:text-kiwi-green-dark">
          Models
        </Link>
      </div>
    </main>
  );
}
