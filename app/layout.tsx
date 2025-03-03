import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
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
    <html dir="rtl" lang="en">
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
