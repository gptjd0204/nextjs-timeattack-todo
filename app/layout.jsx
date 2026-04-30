import Header from "./components/Header";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Todo App",
  description: "투두리스트 체크를 위한 사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="min-h-screen flex flex-col items-center">
        <div className="w-full max-w-[1000px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
