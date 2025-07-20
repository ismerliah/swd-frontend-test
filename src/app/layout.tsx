"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemBg: "transparent",
              },
            },
          }}
        >
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </ConfigProvider>
      </Provider>
    </html>
  );
}
