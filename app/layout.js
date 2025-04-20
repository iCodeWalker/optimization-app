import Header from "@/components/header";
import "./globals.css";

// Meta data set in the layout.js will be used for all the pages that don't set their own meta data
export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
