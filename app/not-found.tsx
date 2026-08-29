import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Page not found — Ripely",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="notfound">
        <div className="wrap">
          <span className="eyebrow">Error 404</span>
          <h1>This row doesn&apos;t exist.</h1>
          <p>
            The page you were after has moved, or was never planted here. Head back to the start and
            we&apos;ll get you going again.
          </p>
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
