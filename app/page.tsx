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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import LeadForm from "@/components/LeadForm"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

export default function MetodoLimpezasPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const defaultWhatsAppLink =
    "https://wa.me/5548988482877?text=Olá!+Gostaria+de+informações+sobre+os+serviços+da+Método+Limpezas."

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans">
      {/* Botão flutuante WhatsApp */}
      <FloatingWhatsApp />

      {/* Top Banner de Cobertura Regional */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-gold/20 py-2.5 px-4 text-xs text-center text-slate-300">
        <span className="inline-flex items-center gap-1.5 font-bold text-gold">
          <MapPin className="w-3.5 h-3.5" />
          Atendimento na Grande Florianópolis:
        </span>{" "}
        <span className="font-semibold text-white">São José • Florianópolis • Palhoça • Biguaçu</span>
        <span className="hidden md:inline text-slate-400 ml-2">| Contratos PJ com Nota Fiscal (NF-e) e Boleto Mensal</span>
      </div>

      {/* Header Fixo */}
      <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 shadow-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-44 flex items-center">
              <Image
                src="/images/metodo-gold-site.png"
                alt="Método Limpezas - Limpeza Corporativa e Clínicas"
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
            <Link href="#pacotes" className="hover:text-gold transition-colors">
              Pacotes
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
              Para Quem É (e Quem Não É)
            </Link>
            <Link
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              O Método em 5 Etapas
            </Link>
            <Link
              href="#pacotes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Nossos 3 Pacotes
            </Link>
            <Link
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-gold"
            >
              Diferenciais Verificáveis PJ
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

      {/* HERO SECTION - POSICIONAMENTO DA OFERTA EM 5 LINHAS */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-blue/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute -top-10 right-10 w-72 h-72 bg-gold/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-gold/40 text-gold text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                LIMPEZA PROFISSIONAL RECORRENTE B2B
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
                Limpeza profissional com rotina assumida, produtos inclusos e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                  reposição garantida.
                </span>
              </h1>

              {/* Parágrafo de 30 segundos da Oferta */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                A <strong>Método Limpezas</strong> realiza limpeza profissional recorrente para escritórios, clínicas, condomínios e academias da Grande Florianópolis. Primeiro avaliamos o local e definimos o escopo, a frequência e a rotina de atendimento. A proposta inclui insumos e equipamentos profissionais, e o contrato formaliza todas as responsabilidades, com <strong>supervisão periódica</strong>, <strong>emissão de nota fiscal</strong> e <strong>cobrança mensal por boleto</strong>.
              </p>

              {/* Pilares Verificáveis */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-navy-900/90 border border-navy-800 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Produtos & Equipamentos Inclusos</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-navy-900/90 border border-navy-800 p-2.5 rounded-lg">
                  <Receipt className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Nota Fiscal & Boleto Mensal</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-navy-900/90 border border-navy-800 p-2.5 rounded-lg col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Reposição em Caso de Falta</span>
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
                Atendimento presencial em São José, Florianópolis, Palhoça e Biguaçu.
              </p>
            </div>

            {/* Imagem de Destaque / Card Visual da Equipe */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/50 via-brand-blue/30 to-gold/20 rounded-2xl blur-sm opacity-70" />

                <div className="relative bg-navy-900 rounded-2xl overflow-hidden border border-gold/40 shadow-2xl">
                  <Image
                    src="/images/equipe-hero.png"
                    alt="Equipe Profissional Método Limpezas"
                    width={800}
                    height={550}
                    priority
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-5 bg-navy-900/95 border-t border-navy-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider font-bold text-gold">Operação Coordenada</p>
                        <h4 className="text-sm font-bold text-white">Supervisão Ativa & Foco em Soluções</h4>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold">
                        <Check className="w-3.5 h-3.5" /> Continuidade Garantida
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O ANTES E O DEPOIS (PASSO 3 / 4C DA PLANILHA) */}
      <section className="py-20 bg-navy-900 border-y border-navy-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Transformação da Rotina
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              O que muda no seu dia a dia ao adotar o Método Limpezas
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Compare a realidade de gerenciar a limpeza por conta própria com a segurança de um serviço corporativo estruturado.
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
                    <span><strong>Falta inesperada desestabiliza o dia:</strong> se a profissional falta por doença ou atestado, seu escritório ou consultório fica sem limpeza e ninguém substitui.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span><strong>Perda de tempo comprando produtos:</strong> você precisa controlar estoque, comprar galões pesados e arcar com custos surpresa no final do mês.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span><strong>Sócios e gestores cobrando limpeza:</strong> a equipe técnica perde tempo apontando cantos mal limpos ou cobrando pontualidade.</span>
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
                    <span><strong>Reposição garantida em caso de ausência:</strong> se houver falta ou licença, nossa equipe substituta atua para não interromper seu negócio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Produtos químicos e equipamentos 100% inclusos:</strong> usamos insumos homologados profissionais; você não compra nem administra nada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Supervisão periódica com checklist:</strong> acompanhamos de perto assiduidade, pontualidade e apresentação ativa de soluções.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span><strong>Formalização completa PJ:</strong> contrato de prestação de serviços, emissão mensal de Nota Fiscal (NF-e) e boleto bancário organizado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PARA QUEM É vs. PARA QUEM NÃO É (PASSO 2 / ABA 3 DA PLANILHA) */}
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
              Acreditamos em parcerias comerciais sustentáveis. Por isso, deixamos claro para quem o nosso modelo gera alto valor e quem deve procurar outras alternativas.
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
                Empresas que valorizam continuidade, pontualidade e padrão
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Pequenos escritórios corporativos:</strong> advocacia, contabilidade, empresas de tecnologia, agências e coworkings que recebem clientes e valorizam foco produtivo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Consultórios médicos e clínicas de saúde:</strong> odontologia, estética, fisioterapia e psicologia que exigem biossegurança básica e desinfecção rigorosa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Condomínios comerciais e academias:</strong> espaços com fluxo constante de frequentadores que precisam de rotina previsível e reposição imediata.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Empresas que exigem formalização:</strong> que operam com contrato formal PJ, nota fiscal e pagamento mensal por boleto bancário.</span>
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
                  <span><strong>Limpezas pontuais e faxinas avulsas:</strong> pessoas físicas ou empresas que buscam apenas uma diária isolada, sem rotina ou escopo recorrente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span><strong>Quem decide exclusivamente pelo menor preço:</strong> sem comparar escopo, frequência, insumos químicos, supervisão e responsabilidade de reposição.</span>
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

      {/* SEÇÃO 4: O MÉTODO EM 5 ETAPAS (PASSO 3 / 4B DA PLANILHA) */}
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
                  Visita técnica presencial gratuita para levantar áreas, fluxo de circulação, tipos de piso e necessidades específicas.
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
                  Dimensionamento da equipe, insumos químicos, equipamentos e definição do cronograma de atendimento pelos sócios.
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
                  Início da operação com produtos e equipamentos profissionais incluídos. Ambientes atendidos com pontualidade e discrição.
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

      {/* SEÇÃO 5: OS 3 PACOTES E ANCORAGEM DE VALOR (PASSO 5 / ABA 8 DA PLANILHA) */}
      <section id="pacotes" className="py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              <PackageCheck className="w-3.5 h-3.5 text-gold" />
              Estrutura de Contratação
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Escolha a modalidade ideal para o porte do seu espaço
            </h2>
            <p className="text-slate-300 text-base">
              Trabalhamos com 3 estruturas claras de atendimento para escritórios, clínicas e empresas da Grande Florianópolis. Todos os contratos incluem insumos e faturamento formal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* PACOTE 1: ESSENCIAL */}
            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-7 flex flex-col justify-between hover:border-navy-700 transition-all">
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Operações Enxutas</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Pacote Essencial</h3>
                  <p className="text-xs text-slate-300 mt-2">
                    Ideal para salas comerciais e escritórios com menor fluxo e rotina semanal fixa.
                  </p>
                </div>

                <div className="py-4 border-y border-navy-800 my-5">
                  <span className="text-xs text-slate-400 block">Investimento mensal:</span>
                  <span className="text-lg font-bold text-white">Sob medida após visita técnica</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Faturamento via boleto e NF-e</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Limpeza profissional com escopo e frequência definidos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Produtos químicos e panos incluídos no escopo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Contrato formal PJ e emissão de Nota Fiscal (NF-e)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Pagamento mensal via boleto bancário</span>
                  </li>
                </ul>
              </div>

              <Link href="#contato">
                <Button className="w-full bg-navy-800 hover:bg-navy-700 text-white font-bold py-3 rounded-xl border border-navy-700 transition-all">
                  Consultar Pacote Essencial
                </Button>
              </Link>
            </div>

            {/* PACOTE 2: RECOMENDADA (DESTAQUE DA PLANILHA) */}
            <div className="bg-navy-900 border-2 border-gold rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-navy-950" /> Mais Escolhido
              </div>

              <div>
                <div className="mb-4 mt-2">
                  <span className="text-xs font-bold uppercase text-gold tracking-wider">O Método Completo</span>
                  <h3 className="text-2xl font-black text-white mt-1">Pacote Recomendada</h3>
                  <p className="text-xs text-slate-200 mt-2">
                    A solução completa para escritórios ativos, consultórios médicos e clínicas que não podem ter falhas na rotina.
                  </p>
                </div>

                <div className="py-4 border-y border-gold/30 my-5 bg-gold/5 rounded-lg px-3">
                  <span className="text-xs text-gold font-semibold block">Investimento mensal:</span>
                  <span className="text-lg font-black text-white">Dimensionado sem desperdícios</span>
                  <span className="text-[11px] text-slate-300 block mt-0.5">Visita diagnóstica gratuita no local</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-200 mb-6">
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>O Método completo:</strong> diagnóstico, planejamento e rotina sob medida</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Supervisão periódica ativa</strong> com checklist formal de padrão</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Garantia de reposição</strong> em caso de falta ou ausência justificada</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Produtos químicos e equipamentos profissionais inclusos</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Contrato formal PJ, emissão pontual de NF-e e boleto bancário</span>
                  </li>
                </ul>
              </div>

              <Link href="#contato">
                <Button className="w-full bg-gold hover:bg-gold-hover text-navy-950 font-black py-3.5 rounded-xl shadow-lg transition-all text-sm">
                  Quero o Pacote Recomendada
                </Button>
              </Link>
            </div>

            {/* PACOTE 3: COMPLETA */}
            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-7 flex flex-col justify-between hover:border-navy-700 transition-all">
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Alto Fluxo & Metragens Amplas</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Pacote Completa</h3>
                  <p className="text-xs text-slate-300 mt-2">
                    Para clínicas com alto volume de pacientes, academias, condomínios ou sedes empresariais com múltiplos turnos.
                  </p>
                </div>

                <div className="py-4 border-y border-navy-800 my-5">
                  <span className="text-xs text-slate-400 block">Investimento mensal:</span>
                  <span className="text-lg font-bold text-white">Escopo customizado por ambiente</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Gestão dedicada com os sócios</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Frequência diária ou intensiva com horários estratégicos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Sanitização contínua de banheiros, copas e áreas de circulação</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Supervisão rigorosa e reposição prioritária de pessoal</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Insumos de alta performance e maquinário profissional inclusos</span>
                  </li>
                </ul>
              </div>

              <Link href="#contato">
                <Button className="w-full bg-navy-800 hover:bg-navy-700 text-white font-bold py-3 rounded-xl border border-navy-700 transition-all">
                  Consultar Pacote Completa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: DIFERENCIAIS QUE PASSAM NO TESTE DE INVERSÃO (PASSO 4 / ABA 5) */}
      <section id="diferenciais" className="py-20 bg-navy-900 border-y border-navy-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Teste de Inversão Aprovado
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Diferenciais que você pode conferir na prática
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Ao contrário de promessas genéricas como “atendimento com carinho”, nossos diferenciais são compromissos contratuais que você confere a cada mês.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-xl text-gold border border-navy-800 flex-shrink-0">
                <PackageCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Produtos & Equipamentos Inclusos</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Não transferimos compras para você. Todos os produtos químicos regulamentados e maquinários constam na proposta e no contrato, acabando com surpresas no caixa.
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
                  Se a profissional designada tiver uma licença ou ausência, nossa equipe operacional assume a reposição. Seu expediente não fica desassistido.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex items-start gap-4">
              <div className="p-3 bg-navy-900 rounded-xl text-gold border border-navy-800 flex-shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Supervisão Periódica com Checklist</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Realizamos acompanhamento de rotina com checklist de tarefas assinado, assegurando que o padrão combinado na visita técnica se mantenha ao longo dos meses.
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
                  Segurança tributária e contábil completa. Emitimos Nota Fiscal Eletrônica e enviamos o boleto mensalmente para o seu departamento financeiro.
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
                Quais cidades da região vocês atendem?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Atendemos com foco integral nos municípios de <strong>São José, Florianópolis, Palhoça e Biguaçu</strong>, em Santa Catarina. Essa proximidade geográfica garante que nossa supervisão seja frequente e a reposição de equipe seja cumprida sem atrasos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Como funciona a reposição em caso de ausência da profissional?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Em caso de atestado médico, licença ou imprevisto, nossa gestão operacional organiza a <strong>substituição por outro profissional da equipe</strong> para manter o cumprimento da rotina acordada, sem que a sua empresa fique desassistida.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Minha empresa precisa fornecer ou comprar materiais de limpeza?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                Não. A proposta já contempla todos os <strong>produtos químicos profissionais e os equipamentos necessários</strong> para a execução do escopo contratado. Isso gera economia de escala e elimina compras emergenciais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-white hover:text-gold text-left">
                Como é feita a formalização do contrato e a cobrança?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-sm leading-relaxed pt-2">
                A prestação de serviços é formalizada em <strong>Contrato PJ</strong> com cláusulas detalhadas de escopo, periodicidade e direitos de ambas as partes. Mensalmente, emitimos a <strong>Nota Fiscal de Serviços (NF-e)</strong> e enviamos o <strong>boleto bancário</strong> para o e-mail do seu setor financeiro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-navy-950 border border-navy-800 rounded-xl px-6 py-2">
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

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-navy-950 border-t border-navy-800 py-12 text-slate-400 text-xs">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Coluna 1: Sobre */}
            <div className="space-y-4 md:col-span-1">
              <Image
                src="/images/metodo-gold-site.png"
                alt="Método Limpezas"
                width={170}
                height={55}
                className="h-11 w-auto object-contain"
              />
              <p className="text-slate-400 text-xs leading-relaxed">
                Limpeza profissional recorrente para empresas, clínicas, consultórios, condomínios e academias na Grande Florianópolis, com escopo definido, produtos e equipamentos incluídos e contratação formal PJ.
              </p>
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

            {/* Coluna 3: Formalidade PJ */}
            <div className="space-y-3">
              <h5 className="text-xs uppercase font-bold text-white tracking-wider">Padrão Corporativo</h5>
              <ul className="space-y-1.5 text-slate-400 text-xs">
                <li>• Contratos Formais PJ</li>
                <li>• Emissão de Nota Fiscal (NF-e)</li>
                <li>• Mensalidade via Boleto Bancário</li>
                <li>• Insumos e Equipamentos Inclusos</li>
                <li>• Supervisão & Reposição de Pessoal</li>
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
