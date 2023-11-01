import "~/styles/globals.css";

import { headers } from "next/headers";
import { GeistSans, GeistMono } from "geist/font";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "WPuSTools",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${GeistSans.className} min-h-screen w-full bg-[url("/bg.jpg")] bg-cover backdrop-brightness-[40%]`}
        >
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
