import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { ReactQueryProvider } from "@/components/providers/reactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ReactQueryProvider>
    </ClerkProvider>
  );
}
