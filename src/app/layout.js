import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BB Landscaping",
  description: "Your family-owned, outdoor services in the Twin Cities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/bb_logo_transparent.ico" />
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMmY6JYzZ0elUpU5vQfiAYqPtUVlFVYXaX7tWj2"
          crossorigin="anonymous"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}