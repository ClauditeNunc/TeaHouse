import type { Metadata } from "next";
import { Inter, Playfair } from "next/font/google";
import "./globals.css";
import TeaHeader from "./TeaHeader/page";
import TeaFooter from "./TeaFooter/page";
import { CartProvider } from "./CartContext";
import TeaCart from "./TeaCart/page";

const inter = Inter({ subsets: ["latin"] });
const playdate = Playfair({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tea Home",
  description: "The most popular tea distributor in Europe(not)",
  icons:{
    icon:{
      url: './img/tea.png',
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <TeaHeader/>
          {children}
          <TeaCart/>
          <TeaFooter/>
        </CartProvider>
      </body>
    </html>
  );
}
