import Footer from "~/app/views/footer";
import Header from "~/app/views/header";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#f5f5f5]">
      <body className="grid grid-rows-[86px_auto] justify-center min-h-dvh py-4 h-full">
        <Header />
        <main className="flex flex-col justify-self-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}