"use client"

import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/5548988482877?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+o+meu+espaço."

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 bg-navy-900/95 text-white text-xs font-semibold rounded-full border border-gold/40 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        Fale conosco no WhatsApp
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Método Limpezas"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-gold"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  )
}
