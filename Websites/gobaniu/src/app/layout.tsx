import type { Metadata, Viewport } from "next";
import { Quattrocento } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: "--font-quattrocento",
});

const fogie = localFont({
  src: [
    {
      //! needs fixing (weird personal use version)
      path: "../../public/fonts/fogie.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/fogie-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/fogie-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/fogie-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/fogie-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/fogie-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/fogie-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      //! needs fixing (weird personal use version)
      path: "../../public/fonts/Fogie-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/fogie-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/fogie-thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/fogie-thin-italic.woff2",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-fogie",
  preload: true,
});

export const metadata: Metadata = {
  title: "Gobaniu",
  description: "Die offizielle Website von Gobaniu",
  applicationName: "Gobaniu_Website",
  authors: [
    { name: "Georg Hudritsch" },
    { name: "Georg Ehrentraut" },
    { name: "Julian Nott" },
  ],
  keywords: ["Gobaniu", "Knife", "Quality", "Excellence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de"  className={quattrocento.className}>
      <body suppressHydrationWarning className="bg-gravel-100 dark:bg-back scrollbar-hide">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
