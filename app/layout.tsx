import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Método Limpezas | Seu ambiente é a nossa especialidade",
  description:
    "Mais que limpeza, um método! Onde confiança e método se encontram. Limpeza profissional recorrente com pessoa fixa, sem rotatividade, produtos inclusos e garantia de assiduidade para escritórios e clínicas na Grande Florianópolis.",
  keywords: [
    "limpeza corporativa",
    "limpeza de escritórios",
    "limpeza de consultórios",
    "limpeza de clínicas",
    "limpeza comercial Florianópolis",
    "limpeza profissional São José SC",
    "limpeza Palhoça",
    "limpeza Biguaçu",
    "terceirização de limpeza",
    "limpeza recorrente empresas",
    "Método Limpezas",
  ],
  authors: [{ name: "Método Limpezas" }],
  creator: "Método Limpezas",
  publisher: "Método Limpezas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metodolimpezas.com.br"),
  openGraph: {
    title: "Método Limpezas | Onde Confiança e Método se Encontram",
    description:
      "Limpeza profissional recorrente com padrão premium para escritórios e clínicas na Grande Florianópolis. Produtos inclusos, supervisão periódica e reposição imediata.",
    url: "https://metodolimpezas.com.br",
    siteName: "Método Limpezas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/metodo-gold-site.png",
        width: 958,
        height: 818,
        alt: "Método Limpezas - Limpeza Corporativa",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.className} bg-navy-950 text-slate-100 antialiased selection:bg-gold selection:text-navy-950`}>
        {children}
      </body>
    </html>
  )
}
