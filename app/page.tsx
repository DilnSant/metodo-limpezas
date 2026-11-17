"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Building2,
  Stethoscope,
  Briefcase,
  Layers,
  Award,
  Users2,
  FileCheck,
  Receipt,
  CreditCard,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  Play,
  HelpCircle,
  MapPin,
  Check,
  ArrowRight,
  XCircle,
  AlertTriangle,
  Flame,
  Star,
  PackageCheck,
  ThumbsUp,
  UserCheck,
  CalendarCheck,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import LeadForm from "@/components/LeadForm"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

export default function MetodoLimpezasPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const defaultWhatsAppLink =
    "https://wa.me/5548988482877?text=Olá!+Gostaria+de+informações+sobre+os+serviços+da+Método+Limpezas."
  
  const getWhatsAppPlanLink = (plano: string) =>
    `https://wa.me/5548988482877?text=${encodeURIComponent(`Olá! Gostaria de saber mais e solicitar um orçamento para o ${plano}.`)}`

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans">
      {/* Botão flutuante WhatsApp */}
      <FloatingWhatsApp />

      {/* Top Banner de Cobertura Regional */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-gold/20 py-2.5 px-4 text-xs text-center text-slate-300">
        <span className="inline-flex items-center gap-1.5 font-bold text-gold">
          <MapPin className="w-3.5 h-3.5" />
          Grande Florianópolis:
        </span>{" "}
        <span className="font-semibold text-white">São José • Florianópolis • Palhoça • Biguaçu</span>
        <span className="hidden md:inline text-slate-400 ml-2">| Mais que limpeza, um método!</span>
      </div>

      {/* Header Fixo */}
      <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 shadow-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-44 flex items-center">
              <Image
                src="/images/metodo-gold-site.png"
                alt="Método Limpezas - Onde confiança e método se encontram"
                width={190}
                height={60}
                priority
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
            <Link href="#perfil" className="hover:text-gold transition-colors">
              Para Quem É
            </Link>
            <Link href="#processo" className="hover:text-gold transition-colors">
              O Método
            </Link>
            <Link href="#planos" className="hover:text-gold transition-colors">
              Planos & Frequências
            </Link>
            <Link href="#diferenciais" className="hover:text-gold transition-colors">
              Diferenciais PJ
            </Link>
            <Link href="#videos" className="hover:text-gold transition-colors">
              Vídeos
            </Link>
            <Link href="#faq" className="hover:text-gold transition-colors">
              FAQ
            </Link>
            <Link href="#contato" className="hover:text-gold transition-colors">
              Orçamento
            </Link>
          </nav>

          {/* Ações Header Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white px-3 py-2 rounded-lg bg-navy-800 hover:bg-navy-700 border border-navy-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              (48) 98848-2877
            </a>

            <Link href="#contato">
              <Button className="bg-gold hover:bg-gold-hover text-navy-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-lg transition-transform active:scale-95">
                Visita Técnica Gratuita
              </Button>
            </Link>
          </div>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-900 border-b border-navy-800 px-6 py-6 space-y-4">
            <Link
              href="#perfil"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Para Quem É
            </Link>
            <Link
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              O Método em 5 Etapas
            </Link>
            <Link
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Planos Mais Usados
            </Link>
            <Link
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Diferenciais PJ
            </Link>
            <Link
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Vídeos Institucionais
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Dúvidas Frequentes (FAQ)
            </Link>
            <div className="pt-4 border-t border-navy-800 flex flex-col gap-3">
              <Link
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center bg-gold hover:bg-gold-hover text-navy-950 font-bold rounded-lg"
              >
                Solicitar Visita Técnica Gratuita
              </Link>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - COM AS FRASES E O DASHBOARD DO FOCO PRINCIPAL */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-blue/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute -top-10 right-10 w-72 h-72 bg-gold/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-gold/40 text-gold text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                MAIS QUE LIMPEZA, UM MÉTODO!
              </div>

              {/* H1 usando a frase solicitada */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
                Seu ambiente é a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                  nossa especialidade.
                </span>
              </h1>

              {/* Subtítulo usando a frase solicitada e destacando pessoa fixa e assiduidade */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                <strong>Onde confiança e método se encontram!</strong> Realizamos limpeza profissional recorrente para escritórios e clínicas com <strong>atendimento personalizado e exclusivo</strong>: profissional com <strong>pessoa fixa</strong> (sem rotatividade), <strong>garantia de assiduidade no dia e hora do agendamento</strong>, insumos e equipamentos inclusos, supervisão periódica e reposição garantida.
              </p>

              {/* Dashboard Rápido de Destaques Operacionais */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-navy-900/95 border border-gold/40 p-2.5 rounded-lg shadow-sm">
                  <UserCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Pessoa Fixa (Sem Rotatividade)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-navy-900/95 border border-gold/40 p-2.5 rounded-lg shadow-sm">
                  <CalendarCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Assiduidade no Dia e Hora</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-navy-900/95 border border-gold/40 p-2.5 rounded-lg shadow-sm col-span-2 sm:col-span-1">
                  <PackageCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Produtos Inclusos & NF-e</span>
                </div>
              </div>

              {/* Botões de Conversão */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link href="#contato" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-navy-950 font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-gold/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar Visita Técnica Gratuita
                  </Button>
                </Link>

                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-navy-900/80 border-navy-700 hover:border-gold hover:bg-navy-800 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    Falar com a Equipe no WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-xs text-slate-400 flex items-center gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Atendimento exclusivo em São José, Florianópolis, Palhoça e Biguaçu.
              </p>
            </div>

            {/* DASHBOARD PRINCIPAL DE EXCLUSIVIDADE & ATENDIMENTO PERSONALIZADO */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/50 via-brand-blue/30 to-gold/20 rounded-2xl blur-sm opacity-70" />

                <div className="relative bg-navy-900 rounded-2xl overflow-hidden border border-gold/40 shadow-2xl">
                  {/* Foto Operacional */}
                  <div className="relative">
                    <Image
                      src="/images/equipe-hero.png"
                      alt="Equipe Profissional Método Limpezas"
                      width={800}
                      height={550}
                      priority
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-navy-950/90 border border-gold/50 rounded-full px-3 py-1 text-[11px] font-bold text-gold backdrop-blur flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                      Atendimento Exclusivo B2B
                    </div>
                  </div>

                  {/* DASHBOARD / PAINEL OPERACIONAL */}
                  <div className="p-5 bg-navy-900/98 border-t border-navy-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-bold text-gold block">
                          Nosso Foco Principal
                        </span>
                        <h4 className="text-sm font-extrabold text-white">
                          Atendimento Personalizado com Pessoa Fixa
                        </h4>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
                        <Check className="w-3 h-3" /> Sem Rotatividade
                      </span>
                    </div>

                    {/* Métricas / Garantias do Dashboard */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-navy-950 p-2.5 rounded-lg border border-navy-800">
                        <div className="text-gold font-bold flex items-center gap-1.5 mb-0.5">
                          <UserCheck className="w-3.5 h-3.5" /> Profissional Dedicado
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Mesma pessoa no seu imóvel, gerando confiança e rotina contínua.
                        </p>
                      </div>

                      <div className="bg-navy-950 p-2.5 rounded-lg border border-navy-800">
                        <div className="text-gold font-bold flex items-center gap-1.5 mb-0.5">
                          <Clock className="w-3.5 h-3.5" /> Assiduidade Garantida
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Presença pontual no dia e no horário do agendamento alinhado.
                        </p>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Supervisão periódica ativa
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                        Reposição em caso de ausência
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O ANTES E O DEPOIS */}
      <section className="py-20 bg-navy-900 border-y border-navy-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Mais que limpeza, um método!
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              O que muda no seu dia a dia ao adotar o Método Limpezas
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Compare a realidade de gerenciar a limpeza por conta própria com a segurança de um serviço corporativo estruturado com pessoa fixa e horário certo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* ANTES */}
            <div className="bg-navy-950/90 border border-red-500/30 rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-950/70 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">Como a empresa vive hoje</span>
                    <h3 className="text-lg font-bold text-white">Sem o Método (Improviso e Risco)</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span><strong>Rotatividade constante de pessoas:</strong> a cada semana uma pessoa diferente entra no seu escritório ou consultório sem conhecer seus hábitos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span><strong>Falta inesperada desestabiliza o dia:</strong> a profissional falta no dia marcado e seu espaço fica desassistido sem nenhuma substituição.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span><strong>Perda de tempo comprando produtos:</strong> você precisa controlar estoque, comprar químicos no atacado e arcar com custos surpresa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span><strong>Informalidade e insegurança fiscal:</strong> sem nota fiscal adequada, sem contrato claro e sem proteção jurídica para a empresa.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DEPOIS */}
            <div className="bg-navy-950 border border-gold/50 rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/50 flex items-center justify-center text-gold font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block">O que muda com o Método</span>
                    <h3 className="text-lg font-bold text-white">Rotina Assumida & Previsibilidade</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Pessoa fixa e exclusiva (sem rotatividade):</strong> profissional dedicado(a) que já conhece cada detalhe e exigência do seu espaço.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Garantia de assiduidade e pontualidade:</strong> atendimento rigoroso no dia e horário definidos e alinhados previamente com você.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Reposição garantida em ausências:</strong> em caso de falta justificada ou licença, nossa equipe substituta atua sem interromper seu negócio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Produtos químicos e equipamentos 100% inclusos:</strong> insumos profissionais homologados fornecidos por nós, com faturamento via boleto e NF-e.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PARA QUEM É vs. PARA QUEM NÃO É */}
      <section id="perfil" className="py-20 bg-navy-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Filtro de Fit & Transparência
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Para quem é o Método Limpezas (e para quem não é)
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Acreditamos em parcerias comerciais sustentáveis. Onde confiança e método se encontram para gerar tranquilidade definitiva ao tomador de decisão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* O CLIENTE CERTO */}
            <div className="p-8 rounded-2xl bg-navy-900 border border-emerald-500/40 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ThumbsUp className="w-4 h-4" />
                O Cliente Certo
              </div>
              <h3 className="text-xl font-bold text-white">
                Empresas que valorizam exclusividade, pessoa fixa e pontualidade
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Pequenos escritórios corporativos:</strong> advocacia, contabilidade, empresas de tecnologia, agências e coworkings que recebem clientes e exigem discrição e foco produtivo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Consultórios médicos e clínicas de saúde:</strong> odontologia, estética, fisioterapia e psicologia que exigem biossegurança básica, desinfecção criteriosa e pessoa de confiança.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Condomínios comerciais e academias:</strong> espaços com fluxo constante de pessoas que precisam de rotina previsível e garantia de reposição.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Empresas que exigem formalização:</strong> contratos PJ transparentes, nota fiscal e pagamento mensal por boleto bancário.</span>
                </li>
              </ul>
            </div>

            {/* QUEM NÃO É */}
            <div className="p-8 rounded-2xl bg-navy-900/60 border border-navy-800 space-y-5">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <XCircle className="w-4 h-4 text-slate-500" />
                Quem NÃO é atendido por este modelo
              </div>
              <h3 className="text-xl font-bold text-slate-300">
                Contratações pontuais ou focadas unicamente no menor preço
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span><strong>Limpezas pontuais e faxinas avulsas:</strong> quem busca apenas uma diária isolada, sem rotina ou escopo recorrente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span><strong>Quem decide exclusivamente pelo menor preço:</strong> sem comparar escopo, frequência, insumos químicos, pessoa fixa e reposição.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span><strong>Contratações sem escopo ou áreas definidas:</strong> onde não é possível realizar uma visita técnica para mapear a rotina real do local.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span><strong>Quem busca contratação informal:</strong> sem nota fiscal ou sem instrumento formal de prestação de serviços.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: O MÉTODO EM 5 ETAPAS */}
      <section id="processo" className="py-20 bg-navy-900 border-y border-navy-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Mecanismo Operacional
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              O Método Limpezas: 5 etapas do início à continuidade
            </h2>
            <p className="text-slate-300 text-base">
              Nosso mecanismo operacional substitui o improviso por um processo validado e coordenado diretamente pelos sócios da empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* ETAPA 1 */}
            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 hover:border-gold/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-gold/30 block mb-3">01</span>
                <h3 className="text-base font-bold text-white mb-2">1. Diagnóstico do Local</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Visita técnica presencial gratuita para levantar áreas, fluxo de circulação, tipos de piso e particularidades do seu espaço.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-900 text-[11px] text-gold font-semibold">
                Entrega: Escopo preliminar
              </div>
            </div>

            {/* ETAPA 2 */}
            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 hover:border-gold/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-gold/30 block mb-3">02</span>
                <h3 className="text-base font-bold text-white mb-2">2. Planejamento da Rotina</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Definição do dia e horário fixos, escalação de profissional dedicado(a), insumos químicos e cronograma pelos sócios.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-900 text-[11px] text-gold font-semibold">
                Entrega: Proposta & Contrato
              </div>
            </div>

            {/* ETAPA 3 */}
            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 hover:border-gold/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-gold/30 block mb-3">03</span>
                <h3 className="text-base font-bold text-white mb-2">3. Execução Acompanhada</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Início da operação com pessoa fixa e produtos profissionais incluídos. Ambientes atendidos com pontualidade e discrição.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-900 text-[11px] text-gold font-semibold">
                Entrega: Ambiente limpo e seguro
              </div>
            </div>

            {/* ETAPA 4 */}
            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 hover:border-gold/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-gold/30 block mb-3">04</span>
                <h3 className="text-base font-bold text-white mb-2">4. Supervisão Periódica</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Acompanhamento regular da qualidade, verificação de assiduidade e apresentação proativa de melhorias para o cliente.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-900 text-[11px] text-gold font-semibold">
                Entrega: Checklist e alinhamentos
              </div>
            </div>

            {/* ETAPA 5 */}
            <div className="bg-navy-950 p-6 rounded-2xl border border-gold/40 hover:border-gold transition-colors flex flex-col justify-between bg-gold/5">
              <div>
                <span className="text-3xl font-black text-gold block mb-3">05</span>
                <h3 className="text-base font-bold text-white mb-2">5. Continuidade Garantida</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Substituição imediata de profissional em caso de falta ou ausência justificada. O seu espaço nunca fica desamparado.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-900 text-[11px] text-emerald-400 font-semibold">
                Entrega: Risco zero de parada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: PLANOS MAIS USADOS (BASEADO NA PLANILHA PLANOS.ODT E PLANILHA OFERTA) */}
      <section id="planos" className="py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              <PackageCheck className="w-3.5 h-3.5 text-gold" />
              Planos & Frequências
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Confira os planos mais usados por nossos clientes
            </h2>
            <p className="text-slate-300 text-base">
              Solicite uma visita técnica gratuita e receba seu orçamento personalizado! Todos os planos com dias e horários definidos e alinhados com o cliente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* PLANO 1: PLANO DIÁRIO */}
            <div className="bg-navy-900 border border-[#1B3C59] hover:border-gold/50 rounded-2xl p-7 flex flex-col justify-between transition-all shadow-xl">
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Alto Fluxo de Pessoas</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Plano Diário</h3>
                  <p className="text-xs text-gold font-semibold mt-1">Frequência Inteligente</p>
                  <p className="text-xs text-slate-300 mt-2">
                    Ideal para empresas com alto fluxo de pessoas ou que exigem padrão máximo de limpeza e sanitização contínua.
                  </p>
                </div>

                <div className="py-3 px-4 bg-navy-950 rounded-xl border border-navy-800 my-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Frequência:</strong> Segunda a sexta-feira</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CalendarCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Horários:</strong> Definidos e alinhados com o cliente</span>
                  </div>
                  <div className="text-xs text-slate-400 pt-1 border-t border-navy-900">
                    <strong>Valor:</strong> sob consulta personalizada
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Pessoa fixa e exclusiva</strong> dedicada ao seu ambiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Sem rotatividade</strong> de equipe no seu imóvel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Produtos químicos profissionais e equipamentos inclusos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Supervisão periódica ativa e reposição imediata em faltas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Contrato formal PJ, Nota Fiscal (NF-e) e boleto bancário</span>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppPlanLink("Plano Diário (Segunda a Sexta)")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-navy-800 hover:bg-gold hover:text-navy-950 text-white font-bold py-3 rounded-xl border border-navy-700 transition-all">
                  Quero esse plano
                </Button>
              </a>
            </div>

            {/* PLANO 2: PLANO DINÂMICO (RECOMENDADO / MAIS ESCOLHIDO) */}
            <div className="bg-navy-900 border-2 border-gold rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-navy-950" /> Mais Escolhido
              </div>

              <div>
                <div className="mb-4 mt-2">
                  <span className="text-xs font-bold uppercase text-gold tracking-wider">Rotina Intermediária</span>
                  <h3 className="text-2xl font-black text-white mt-1">Plano Dinâmico</h3>
                  <p className="text-xs text-gold font-semibold mt-1">Visitas 2x por semana</p>
                  <p className="text-xs text-slate-200 mt-2">
                    Perfeito para escritórios e consultórios com rotinas constantes e com menor necessidade diária.
                  </p>
                </div>

                <div className="py-3 px-4 bg-navy-950 rounded-xl border border-gold/30 my-4 space-y-1.5 bg-gold/5">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Frequência:</strong> 2ª e 4ª ou 3ª e 5ª</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CalendarCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Dias e horários:</strong> Definidos e alinhados com o cliente</span>
                  </div>
                  <div className="text-xs text-slate-300 pt-1 border-t border-gold/20">
                    <strong>Valor:</strong> sob consulta personalizada
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                  <li className="flex items-start gap-2 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Pessoa fixa no seu espaço</strong> (sem rotatividade)</span>
                  </li>
                  <li className="flex items-start gap-2 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Garantia de assiduidade</strong> no dia e hora combinados</span>
                  </li>
                  <li className="flex items-start gap-2 font-medium">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Reposição garantida</strong> em caso de falta ou ausência</span>
                  </li>
                  <li className="flex items-start gap-2 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Produtos químicos profissionais e equipamentos inclusos</span>
                  </li>
                  <li className="flex items-start gap-2 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Supervisão periódica ativa com checklist formal assinado</span>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppPlanLink("Plano Dinâmico (2x por semana)")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gold hover:bg-gold-hover text-navy-950 font-black py-3.5 rounded-xl shadow-lg transition-all text-sm">
                  Quero esse plano
                </Button>
              </a>
            </div>

            {/* PLANO 3: PLANO ESSENCIAL */}
            <div className="bg-navy-900 border border-[#1B3C59] hover:border-gold/50 rounded-2xl p-7 flex flex-col justify-between transition-all shadow-xl">
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Pouca Movimentação Diária</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Plano Essencial</h3>
                  <p className="text-xs text-gold font-semibold mt-1">1 visita por semana</p>
                  <p className="text-xs text-slate-300 mt-2">
                    Para empresas que precisam de limpeza periódica e apresentam pouca movimentação diária.
                  </p>
                </div>

                <div className="py-3 px-4 bg-navy-950 rounded-xl border border-navy-800 my-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Frequência:</strong> 1x por semana (ex: Sexta-feira)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CalendarCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span><strong>Dia e horário:</strong> Definidos e alinhados com o cliente</span>
                  </div>
                  <div className="text-xs text-slate-400 pt-1 border-t border-navy-900">
                    <strong>Valor:</strong> sob consulta personalizada
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Pessoa fixa</strong> para o seu atendimento semanal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Garantia de assiduidade</strong> no dia e horário agendados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Insumos e equipamentos profissionais fornecidos no escopo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Contrato formal PJ, emissão de NF-e e boleto bancário</span>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppPlanLink("Plano Essencial (1x por semana)")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-navy-800 hover:bg-gold hover:text-navy-950 text-white font-bold py-3 rounded-xl border border-navy-700 transition-all">
                  Quero esse plano
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: DIFERENCIAIS QUE PASSAM NO TESTE DE INVERSÃO */}
      <section id="diferenciais" className="py-20 bg-navy-900 border-y border-navy-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Teste de Inversão Aprovado
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Diferenciais que você confere a cada atendimento
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Ao contrário de promessas genéricas, nossos diferenciais são compromissos contratuais verificáveis a cada visita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-xl text-gold border border-navy-800 flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Pessoa Fixa (Sem Rotatividade)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Designamos uma profissional fixa para o seu ambiente. Sem a insegurança de pessoas diferentes circulando no seu consultório ou escritório a cada semana.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-xl text-gold border border-navy-800 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Garantia de Assiduidade no Dia e Hora</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dia e horários rigorosamente alinhados com o cliente. Presença confirmada e pontualidade para não interferir na sua rotina produtiva.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-xl text-gold border border-navy-800 flex-shrink-0">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Reposição Imediata de Pessoal</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Se houver atestado ou imprevisto, nossa gestão operacional realiza a reposição ágil. Seu negócio nunca fica desassistido.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-xl text-gold border border-navy-800 flex-shrink-0">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Contrato PJ, Nota Fiscal & Boleto</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Segurança tributária e contábil completa. Produtos e maquinários inclusos no escopo, com emissão de NF-e e boleto mensal.
                </p>
              </div>
            </div>
          </div>

          {/* Risco Assumido */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-gold/40 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-gold block mb-1">
              Garantia de Risco Operacional Assumido
            </span>
            <p className="text-sm text-slate-200">
              Se houver qualquer imprevisto com a equipe ou necessidade de ajuste no checklist, nós resolvemos diretamente. Você não perde tempo administrando mão de obra.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: VÍDEOS INSTITUCIONAIS */}
      <section id="videos" className="py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              <Play className="w-3.5 h-3.5 text-gold" />
              Na Prática
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Veja a Método Limpezas em Ação
            </h2>
            <p className="text-slate-300 text-base">
              Conheça os vídeos institucionais que apresentam o padrão de atendimento e o compromisso da nossa equipe.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            {/* VÍDEO 1 */}
            <div className="bg-navy-900 p-5 rounded-2xl border border-navy-800 shadow-xl">
              <div className="relative aspect-[9/16] max-h-[500px] mx-auto bg-black rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/HDUugVj46WI"
                  title="Método Limpezas - Apresentação da Metodologia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-gold" />
                  Apresentação da Metodologia
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Como funciona a estrutura de higienização recorrente para empresas e consultórios.
                </p>
              </div>
            </div>

            {/* VÍDEO 2 */}
            <div className="bg-navy-900 p-5 rounded-2xl border border-navy-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-inner mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/iNQ64eeZdJc"
                    title="Método Limpezas - Detalhes do Serviço Corporativo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-gold" />
                  Padrão de Execução
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Cuidado no manuseio de produtos profissionais e respeito à rotina do cliente.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-navy-950 border border-gold/30 flex items-center gap-4">
                <Image
                  src="/images/metodo-gold-logo.png"
                  alt="Selo Método Limpezas"
                  width={60}
                  height={60}
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div className="text-xs">
                  <strong className="text-white block font-semibold">Atendimento Direto com a Gestão</strong>
                  <span className="text-slate-400">Canal direto de WhatsApp para ajustes operacionais imediatos com os sócios.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: PERGUNTAS FREQUENTES (FAQ) */}
      <section id="faq" className="py-20 bg-navy-900 border-t border-navy-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-gold" />
              Esclarecimentos Comerciais
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-300 text-sm">
              Tudo o que você precisa saber sobre prazos, faturamento, reposição e visitas.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Como funciona a garantia de pessoa fixa e sem rotatividade?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Nosso foco principal é o <strong>atendimento personalizado e com exclusividade</strong> para cada cliente. Designamos uma profissional fixa para o seu espaço, garantindo que ela conheça exatamente as particularidades do seu imóvel e seus horários, sem a rotatividade prejudicial de pessoas estranhas a cada visita.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Quais cidades da Grande Florianópolis vocês atendem?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Atendemos com foco integral nos municípios de <strong>São José, Florianópolis, Palhoça e Biguaçu</strong>, em Santa Catarina. Essa proximidade regional nos permite manter a supervisão ativa e o tempo ágil de reposição em caso de necessidade.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Como funciona a reposição em caso de ausência da profissional?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Em caso de atestado médico, licença ou imprevisto, nossa gestão operacional organiza a <strong>substituição por outro profissional da equipe</strong> para manter o cumprimento da rotina acordada, sem que a sua empresa fique desassistida.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Minha empresa precisa fornecer ou comprar materiais de limpeza?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Não. A proposta já contempla todos os <strong>produtos químicos profissionais e os equipamentos necessários</strong> para a execução do escopo contratado. Isso elimina despesas de compras emergenciais de insumos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Como é feita a formalização do contrato e a cobrança?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                A prestação de serviços é formalizada em <strong>Contrato PJ</strong> com cláusulas detalhadas de escopo, periodicidade e direitos de ambas as partes. Mensalmente, emitimos a <strong>Nota Fiscal de Serviços (NF-e)</strong> e enviamos o <strong>boleto bancário</strong> para o e-mail do seu setor financeiro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                A visita técnica para avaliação tem algum custo?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                A visita técnica diagnóstica é <strong>100% gratuita e sem compromisso</strong>. Vamos ao seu imóvel para entender a área, piso, circulação e elaborar uma proposta precisa e transparente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO 9: CAPTURA DE LEAD / CONTATO */}
      <section id="contato" className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 border-t border-navy-800 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Próximo Passo
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Solicite seu Orçamento ou Agende a Visita Técnica
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Preencha os campos para receber uma proposta customizada ou agendar a visita presencial gratuita no seu imóvel em São José, Florianópolis, Palhoça ou Biguaçu.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Informações de Contato / Atendimento */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800">
                <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gold" />
                  Atendimento Comercial B2B
                </h4>
                <div className="space-y-4 text-sm text-slate-300">
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">WhatsApp Oficial</span>
                    <a
                      href={defaultWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-bold hover:underline text-base"
                    >
                      (48) 98848-2877
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Horário Comercial</span>
                    <p className="text-white font-medium">Segunda a Sexta: 08h às 18h</p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Cidades Cobertas</span>
                    <p className="text-white font-medium">São José, Florianópolis, Palhoça e Biguaçu (SC)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl border border-gold/30 text-xs text-slate-300 space-y-2">
                <p className="font-bold text-gold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Compromisso com a Sua Empresa
                </p>
                <p>
                  Seus dados são protegidos e utilizados exclusivamente para elaborar a proposta comercial. Toda solicitação é encaminhada diretamente ao nosso WhatsApp de atendimento.
                </p>
              </div>
            </div>

            {/* Componente LeadForm interativo com 2 abas */}
            <div className="lg:col-span-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO COM A LOGO AO LADO DIREITO DO TEXTO RESPEITANDO A ALTURA DO PARÁGRAFO */}
      <footer className="bg-navy-950 border-t border-navy-800 py-12 text-slate-400 text-xs">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12 items-start">
            {/* Coluna 1: Sobre com a Logo ao lado direito do texto e respeitando a altura */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <p className="text-slate-400 text-xs leading-relaxed flex-1">
                  Limpeza profissional recorrente para empresas, clínicas, consultórios, condomínios e academias na Grande Florianópolis, com escopo definido, produtos e equipamentos incluídos e contratação formal PJ.
                </p>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/metodo-gold-site.png"
                    alt="Método Limpezas"
                    width={90}
                    height={90}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Coluna 2: Cidades */}
            <div className="space-y-3">
              <h5 className="text-xs uppercase font-bold text-white tracking-wider">Cidades Atendidas</h5>
              <ul className="space-y-1.5 text-slate-400 text-xs">
                <li>• São José - SC</li>
                <li>• Florianópolis - SC</li>
                <li>• Palhoça - SC</li>
                <li>• Biguaçu - SC</li>
              </ul>
            </div>

            {/* Coluna 3: Padrão Corporativo */}
            <div className="space-y-3">
              <h5 className="text-xs uppercase font-bold text-white tracking-wider">Padrão Corporativo</h5>
              <ul className="space-y-1.5 text-slate-400 text-xs">
                <li>• Atendimento Personalizado & Exclusivo</li>
                <li>• Pessoa Fixa (Sem Rotatividade)</li>
                <li>• Garantia de Assiduidade no Horário</li>
                <li>• Insumos & Equipamentos Inclusos</li>
                <li>• Contratos PJ com Nota Fiscal e Boleto</li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Legal */}
            <div className="space-y-3">
              <h5 className="text-xs uppercase font-bold text-white tracking-wider">Contato & Termos</h5>
              <div className="space-y-2 text-xs">
                <p>WhatsApp: <a href={defaultWhatsAppLink} target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">+55 48 98848-2877</a></p>
                <p>Santa Catarina - Brasil</p>
                <div className="pt-2 flex flex-col gap-1">
                  <Link href="/privacidade" className="text-slate-300 hover:text-gold transition-colors underline">
                    Política de Privacidade (LGPD)
                  </Link>
                  <Link href="/termos" className="text-slate-300 hover:text-gold transition-colors underline">
                    Termos de Uso & Condições PJ
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Método Limpezas. Todos os direitos reservados.</p>
            <p>Onde confiança e método se encontram.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
