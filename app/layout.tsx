import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ContextProvider from "@/app/_lib/Context";
import "./globals.css";

export const metadata = {
  title: "فروشگاه اینترنتی نکست مارکت",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <html dir="rtl" lang="en">
        <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
          <header>
            <Header />
          </header>
          <main className=" mt-[118px] md:mt-20 p-4 md:py-8 md:px-24 bg-gray-100 dark:bg-gray-800">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ContextProvider>
  );
}

export default RootLayout;
