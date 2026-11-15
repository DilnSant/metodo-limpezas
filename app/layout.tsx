import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Método Limpezas | Limpeza profissional para escritórios e clínicas",
  description: "Limpeza profissional recorrente para pequenos escritórios e clínicas em São José, Florianópolis, Palhoça e Biguaçu. Solicite uma avaliação.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
