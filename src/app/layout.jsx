import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Muminov Muslimbek portfolio sahifasi",
  description:
    "Muminov Muslimbek haqida barcha ma'lumotlarni bu yerdan topishingiz mumkin. Barcha yangiliklar muminov.uz sahifasida",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="bg-body bg-no-repeat bg-cover h-full flex flex-col font-source-sans font-normal">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
