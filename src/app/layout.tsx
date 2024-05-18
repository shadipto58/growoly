import { ThemeProvider } from "@/components/themeProvider/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growoly - Your Growth Partner",
  description: `Grow your buissness with our excellence.  At grwoly we have highly qualified expert team for our services. we
  are ready to make your dream project lives and make significant
  growth in your business.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={["dark", "light"]}
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
