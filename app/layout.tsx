import "@picocss/pico";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gobbledygook",
  description:
    "Welcome to gobbledygook, a constructed language procedural generator.",
};

const menu = [
  { title: "ProcGenConLang", link: `/` },
  { title: "Phrase book", link: `/phrase-book` },
  // { title: "About", link: `${process.env.PUBLIC_URL}/About` },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <nav className="container">
          <h1>Gobbledygook</h1>
          <ul>
            {menu.map((entry) => {
              return (
                <li key={entry.link}>
                  <Link href={entry.link}>{entry.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <main className="container">{children}</main>
        <footer className="container">
          <span>
            made by <a href="https://twitter.com/feelic">@feelic</a> ;-){" "}
          </span>
        </footer>
      </body>
    </html>
  );
}
