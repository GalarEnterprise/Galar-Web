import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Galar Enterprise | Escala sin el Caos Operativo",
  description: "Construimos sistemas automatizados para que recuperes tu tiempo. Consultoría experta en n8n, Python y bases de datos con enfoque financiero.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
