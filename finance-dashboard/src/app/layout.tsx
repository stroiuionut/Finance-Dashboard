import "~/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "finance-dashboard",
  description: "An app made for monitoring your finances",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

config.autoAddCss = false;
library.add(faS);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={`font-sans ${inter.variable}`}>
        <main className="relative h-screen overflow-hidden bg-neutral">
          <div className="flex items-start justify-between">
            <div className="flex w-full flex-col md:space-y-4">
              <Header />
              <div className="h-screen overflow-auto px-4 pb-24 md:px-6">
                <TRPCReactProvider>{children}</TRPCReactProvider>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
