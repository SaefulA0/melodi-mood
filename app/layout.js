import Sidebar from "./components/sidebar";
import "./globals.css";

export const metadata = {
  title: "Melodi Mood",
  description: "Find music that suits your mood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-[#ECEEF9]">
        <Sidebar />
        <div className="w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}
