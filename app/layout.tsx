import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import LogOut from "./Mycomponents/signInOut/logout";
import SignInOut from "./Mycomponents/signInOut/SigninOut";
import Recent from "./Mycomponents/Recent";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Share",
  description: "Share and manage code snippets with syntax highlighting and expiry options",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {isAuthenticated} = await getKindeServerSession();
  const isAuthed = isAuthenticated();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <nav>
            <div className="bg-blue-500 flex justify-between items-center">
            <Link href="/"><h1 className="text-2xl text-white font-bold px-8">Code Share</h1></Link>


            {isAuthed ? <LogOut /> :   <SignInOut /> }

            </div>
          </nav>
        </div>
        {/* <div className="grid grid-cols-10 w-full">
          <div className="col-span-7">
            {children}
          </div>

          <div className="col-span-3 border-l pl-4">
            Recent Paste
          </div>

          </div> */}
          <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-10 gap-6 px-6 items-start">

              <div className="col-span-7 bg-white p-6 rounded-md shadow-sm">
                {children}
              </div>
              <Recent />
            </div>
        </div>
       
      </body>
    </html>
  );
}
