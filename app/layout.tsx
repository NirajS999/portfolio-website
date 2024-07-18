import { Navbar,Footer } from "../components";
import "./globals.css";



export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
        <body className='relative'>
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <Navbar />
          {children}
          <Footer />
          
        </body>
    </html>
  );
}
