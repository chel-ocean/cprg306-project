import "./globals.css";
import { AuthContextProvider } from "./_utils/auth-context";

export const metadata = {
  title: "Tarot Card Reader",
  description: "Final project for CPRG 306",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
      
    </html>
  );
}
