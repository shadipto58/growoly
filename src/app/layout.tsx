import { ThemeProvider } from "@/components/themeProvider/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growoly",
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
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["dark", "light", "orange"]}
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
