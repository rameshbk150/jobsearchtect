import Header from "@/components/Header";
import { siteData } from "@/data/DataSite";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header siteData={siteData} />
        {children}
      </body>
    </html>
  );
}