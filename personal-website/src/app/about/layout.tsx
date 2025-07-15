import type { Metadata } from "next";
import { Radio_Canada} from "next/font/google";
import "./globals.css";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["400", "600"],
})


export const metadata = {
  title: "Luis",
  description: "Luis's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${radio.className} min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
