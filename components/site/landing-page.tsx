"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappNumber = "5548988482877"
const whatsappHref = `https://wa.me/${whatsappNumber}`
const cities = ["São José", "Florianópolis", "Palhoça", "Biguaçu"]

const faqItems = [
  {
    question: "Como funciona a avaliação do ambiente?",
    answer:
      "Agendamos uma visita técnica para conhecer o espaço, entender a rotina da equipe e identificar as prioridades. Com essas informações, preparamos uma proposta adequada ao estabelecimento.",
  },
  {
    question: "Como é definida a frequência da limpeza?",
    answer:
      "A frequência é definida após a avaliação, considerando o tamanho do ambiente, o fluxo de pessoas e as necessidades do negócio. Escopo e periodicidade são alinhados antes do início do atendimento.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "Depois da visita, você recebe uma proposta com escopo, frequência e condições do serviço. A contratação é formalizada antes de iniciarmos a rotina.",
  },
  {
    question: "Quais ambientes são atendidos?",
    answer:
      "Atendemos pequenos escritórios, salas comerciais e clínicas de pequeno porte em São José, Florianópolis, Palhoça e Biguaçu.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "As condições são apresentadas na proposta. Para os serviços contratados, o pagamento é mensal por boleto, conforme acordado.",
  },
  {
    question: "Como posso solicitar uma proposta?",
    answer:
      "Preencha o formulário desta página para abrir uma conversa no WhatsApp comercial. Você também pode falar diretamente pelo botão flutuante.",
  },
]

function SectionIntro({ eyebrow, title, description, light = false }: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-[#D4AF37]" : "text-[#0D5EA6]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-[#002D4D]"}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-white/70" : "text-slate-600"}`}>{description}</p>}
    </div>
  )
}

function Header() {
  const links = [
    ["Início", "#inicio"],
    ["Soluções", "#solucoes"],
    ["Método", "#metodo"],
    ["Vídeos", "#videos"],
    ["Dúvidas", "#faq"],
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#002D4D]/95 text-white shadow-lg shadow-[#00192d]/15 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-3" aria-label="Método Limpezas — início">
          <Image src="/images/icon-white.png" alt="" width={38} height={38} className="h-9 w-9 object-contain" priority />
          <span className="text-sm font-semibold tracking-wide sm:text-base">MÉTODO <span className="text-[#D4AF37]">LIMPEZAS</span></span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-white/75 transition-colors hover:text-white">{label}</Link>)}
          <Button asChild className="rounded-full bg-[#D4AF37] px-5 font-semibold text-[#002D4D] hover:bg-[#e2c357]">
            <Link href="#contato">Solicitar proposta</Link>
          </Button>
        </nav>
        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">
            Menu
          </summary>
          <nav aria-label="Navegação móvel" className="absolute right-0 top-12 flex min-w-52 flex-col gap-1 rounded-2xl border border-white/10 bg-[#002D4D] p-2 shadow-xl">
            {links.map(([label, href]) => <Link key={href} href={href} className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white">{label}</Link>)}
            <Link href="#contato" className="rounded-xl bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#002D4D]">Solicitar proposta</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#002D4D] pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-28 h-[480px] w-[480px] rounded-full border border-white/[0.08]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-4 h-[340px] w-[340px] rounded-full border border-[#D4AF37]/20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-white/85">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" /> EXCELÊNCIA EM CADA DETALHE
          </div>
          <h1 className="text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.65rem]">
            Sua empresa merece um ambiente à altura do seu <span className="text-[#D4AF37]">profissionalismo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Limpeza profissional recorrente para pequenos escritórios e clínicas em São José, Florianópolis, Palhoça e Biguaçu.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full bg-[#D4AF37] px-7 font-semibold text-[#002D4D] shadow-lg shadow-black/10 hover:bg-[#e2c357]">
              <Link href="#contato">Solicitar proposta <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/35 bg-transparent px-7 font-medium text-white hover:bg-white/10 hover:text-white">
              <Link href="#contato">Agendar visita técnica</Link>
            </Button>
          </div>
          <div className="mt-9 flex items-center gap-2 text-sm text-white/60"><MapPin className="h-4 w-4 text-[#D4AF37]" /> Atendimento na Grande Florianópolis</div>
        </div>
        <div className="relative mx-auto w-full max-w-[570px]">
          <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-[2rem] border border-[#D4AF37]/50" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0D5EA6]/20 shadow-2xl shadow-black/30">
            <Image src="/images/metodo-hero.png" alt="Profissional da Método Limpezas cuidando de um ambiente comercial" width={1024} height={1024} priority className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#00192d]/90 to-transparent p-6 pt-16 sm:p-8 sm:pt-20">
              <p className="text-xl font-semibold text-white sm:text-2xl">Mais que limpeza, um método.</p>
              <p className="mt-1 text-sm text-white/75">Uma rotina planejada para o seu ambiente.</p>
            </div>
          </div>
        </div>
      </div>
      <Link href="#proposta" aria-label="Conheça nossa proposta de valor" className="mx-auto mt-14 hidden w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white sm:flex">
        Conheça nossa proposta <ArrowDown className="h-4 w-4" />
      </Link>
    </section>
  )
}

function ValueSection() {
  return (
    <section id="proposta" className="bg-[#F2F4F7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0D5EA6]">Uma rotina que funciona</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#002D4D] sm:text-4xl">Mais do que limpar. Cuidamos da rotina do seu ambiente.</h2>
        </div>
        <div className="rounded-3xl border border-[#002D4D]/[0.08] bg-white p-7 shadow-[0_16px_50px_-35px_rgba(0,45,77,.32)] sm:p-9">
          <p className="text-base leading-8 text-slate-600">Uma limpeza pontual resolve o momento. Uma rotina profissional mantém o ambiente preparado para o dia a dia da sua equipe e de quem você recebe.</p>
          <p className="mt-4 text-base leading-8 text-slate-600">Começamos com uma avaliação do estabelecimento, definimos o escopo e a frequência e organizamos uma rotina de atendimento alinhada às necessidades do seu negócio.</p>
          <div className="mt-7 flex items-start gap-3 border-t border-slate-100 pt-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#8a6d13]"><ClipboardCheck className="h-5 w-5" /></span>
            <p className="text-sm leading-6 text-[#002D4D]"><strong className="font-semibold">Escopo claro, frequência adequada e acompanhamento</strong> desde o início do serviço.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SegmentsSection() {
  const segments = [
    { title: "Escritórios", text: "Recepções, salas comerciais e áreas de trabalho cuidadas para uma rotina mais organizada e acolhedora.", image: "/images/office-cleaning.png", alt: "Escritório comercial organizado e limpo", icon: Building2 },
    { title: "Clínicas", text: "Recepções e consultórios atendidos com atenção às orientações e aos protocolos aplicáveis ao estabelecimento.", image: "/images/clinic-cleaning.png", alt: "Recepção clara e organizada de uma clínica", icon: Stethoscope },
  ]
  return (
    <section id="solucoes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro eyebrow="Para o seu negócio" title="Ambientes profissionais pedem cuidado profissional." description="Atendimento recorrente pensado para pequenos espaços de trabalho e atendimento." />
        <div className="grid gap-6 md:grid-cols-2">
          {segments.map(({ title, text, image, alt, icon: Icon }) => (
            <article key={title} className="group overflow-hidden rounded-3xl border border-[#002D4D]/10 bg-[#F2F4F7] shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#002D4D]/10">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#002D4D] text-[#D4AF37]"><Icon className="h-5 w-5" /></span><h3 className="text-xl font-semibold text-[#002D4D]">{title}</h3></div>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">{text}</p>
                <Link href="#contato" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0D5EA6] hover:text-[#002D4D]">Solicitar avaliação <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section id="videos" className="bg-[#002D4D] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro eyebrow="Por dentro da Método" title="Conheça a Método Limpezas." description="Compromisso, cuidado e profissionalismo em cada detalhe." light />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-xl shadow-black/10 sm:p-4">
            <div className="relative mx-auto aspect-[9/16] max-h-[560px] overflow-hidden rounded-xl bg-[#00192d]">
              <iframe src="https://www.youtube-nocookie.com/embed/HDUugVj46WI" title="Apresentação da Método Limpezas — vídeo vertical" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div><h3 className="font-semibold text-white">Apresentação</h3><p className="mt-1 text-xs text-white/60">Conheça a empresa em formato Shorts</p></div>
              <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">Vídeo curto</span>
            </div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-xl shadow-black/10 sm:p-4">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-[#00192d]">
              <iframe src="https://www.youtube-nocookie.com/embed/iNQ64eeZdJc?start=1" title="Vídeo institucional da Método Limpezas" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div><h3 className="font-semibold text-white">Nosso trabalho</h3><p className="mt-1 text-xs text-white/60">Veja a rotina e o cuidado em cada serviço</p></div>
              <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">Institucional</span>
            </div>
          </article>
        </div>
        <p className="mt-6 text-center text-xs text-white/45">Os vídeos são reproduzidos pelo YouTube somente quando você inicia a reprodução.</p>
      </div>
    </section>
  )
}

function DifferentialsSection() {
  const items = [
    { icon: FileCheck2, title: "Contrato formalizado", text: "Escopo e condições registrados para dar clareza à contratação." },
    { icon: FileText, title: "Nota fiscal", text: "Emissão de nota fiscal para os serviços contratados." },
    { icon: CalendarDays, title: "Rotina organizada", text: "Frequência e horários definidos conforme o escopo acordado." },
    { icon: ShieldCheck, title: "Supervisão periódica", text: "Acompanhamento do serviço e da rotina de atendimento." },
    { icon: Sparkles, title: "Materiais alinhados ao escopo", text: "Produtos e equipamentos definidos conforme a proposta contratada." },
    { icon: UsersRound, title: "Continuidade operacional", text: "Reposição em caso de ausência, conforme condições operacionais acordadas." },
  ]
  return (
    <section id="diferenciais" className="bg-[#F2F4F7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro eyebrow="Cuidado em cada etapa" title="Uma parceria profissional, com combinados claros." description="Diferenciais pensados para trazer previsibilidade à rotina do seu espaço." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-[#002D4D]/[0.08] bg-white p-6 shadow-[0_10px_35px_-30px_rgba(0,45,77,.4)]">
              <Icon className="h-6 w-6 text-[#0D5EA6]" aria-hidden="true" />
              <h3 className="mt-5 font-semibold text-[#002D4D]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-slate-500">Disponibilidade de reposição e fornecimento de materiais seguem as condições descritas em cada proposta.</p>
      </div>
    </section>
  )
}

function MethodSection() {
  const steps = [
    { number: "01", icon: MapPin, title: "Avaliação", text: "Visitamos o estabelecimento para conhecer o ambiente, a operação e as necessidades do espaço." },
    { number: "02", icon: ClipboardCheck, title: "Planejamento", text: "Definimos juntos o escopo, a frequência e a organização da rotina de atendimento." },
    { number: "03", icon: Clock3, title: "Execução e acompanhamento", text: "Realizamos os serviços contratados e acompanhamos a rotina conforme o combinado." },
  ]
  return (
    <section id="metodo" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro eyebrow="Nosso método" title="Três etapas. Uma rotina bem planejada." description="Entendemos o seu contexto antes de definir a forma de atender." />
        <div className="relative grid gap-5 md:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, text }) => (
            <article key={number} className="relative rounded-2xl border border-[#002D4D]/10 bg-[#F2F4F7] p-6 sm:p-7">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold tracking-widest text-[#0D5EA6]">{number}</span><Icon className="h-5 w-5 text-[#0D5EA6]" /></div>
              <h3 className="mt-7 text-lg font-semibold text-[#002D4D]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlansSection() {
  const plans = [
    { name: "Diário", frequency: "Segunda a sexta-feira", text: "Para ambientes com alto fluxo de pessoas ou que precisam de uma rotina mais frequente.", msg: "Olá! Gostaria de solicitar uma proposta para limpeza recorrente diária." },
    { name: "Dinâmico", frequency: "Duas vezes por semana", text: "Uma opção para escritórios com rotina constante e menor necessidade de atendimento diário.", msg: "Olá! Gostaria de solicitar uma proposta para limpeza recorrente duas vezes por semana." },
    { name: "Essencial", frequency: "Uma vez por semana", text: "Para espaços com menor movimentação que precisam manter uma rotina periódica de cuidado.", msg: "Olá! Gostaria de solicitar uma proposta para limpeza recorrente semanal." },
  ]
  return (
    <section id="planos" className="bg-[#002D4D] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro eyebrow="Planos recorrentes" title="Uma frequência adequada à sua operação." description="Os exemplos ajudam a iniciar a conversa. O escopo final é personalizado após a visita técnica." light />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article key={plan.name} className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${index === 1 ? "border-[#D4AF37]/70 bg-white shadow-2xl shadow-black/20 lg:-translate-y-2" : "border-white/15 bg-white/[0.06]"}`}>
              <div className="flex items-start justify-between"><div><p className={`text-xs font-semibold uppercase tracking-[0.2em] ${index === 1 ? "text-[#8a6d13]" : "text-[#D4AF37]"}`}>Plano {plan.name}</p><h3 className={`mt-3 text-2xl font-semibold ${index === 1 ? "text-[#002D4D]" : "text-white"}`}>{plan.frequency}</h3></div><CalendarDays className={`h-6 w-6 ${index === 1 ? "text-[#0D5EA6]" : "text-[#D4AF37]"}`} /></div>
              <p className={`mt-5 flex-1 text-sm leading-7 ${index === 1 ? "text-slate-600" : "text-white/70"}`}>{plan.text}</p>
              <div className={`mt-6 flex items-center gap-2 border-t pt-5 text-xs ${index === 1 ? "border-slate-200 text-slate-600" : "border-white/10 text-white/65"}`}><Check className="h-4 w-4 text-[#D4AF37]" /> Proposta personalizada após avaliação</div>
              <Button asChild className={`mt-6 rounded-full font-semibold ${index === 1 ? "bg-[#002D4D] text-white hover:bg-[#0D5EA6]" : "bg-[#D4AF37] text-[#002D4D] hover:bg-[#e2c357]"}`}>
                <Link href={`${whatsappHref}?text=${encodeURIComponent(plan.msg)}`} target="_blank" rel="noopener noreferrer">Conversar sobre este plano <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const message = [
      "Olá! Gostaria de conversar com a Método Limpezas.",
      "",
      `Nome: ${data.get("name")}`,
      `Empresa: ${data.get("company")}`,
      `Segmento: ${data.get("segment")}`,
      `Cidade: ${data.get("city")}`,
      `Telefone: ${data.get("phone")}`,
      `Solicitação: ${data.get("requestType")}`,
      `Mensagem: ${data.get("message") || "Não informada"}`,
    ].join("\n")
    window.open(`${whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  return (
    <section id="contato" className="bg-[#F2F4F7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="lg:pt-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0D5EA6]">Vamos conversar</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#002D4D] sm:text-4xl">Sua empresa pode ter uma rotina de limpeza mais profissional.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">Conte um pouco sobre o seu ambiente. Vamos entender o que você precisa e conversar sobre uma proposta ou visita técnica.</p>
          <div className="mt-8 space-y-3">
            <p className="flex items-center gap-3 text-sm text-slate-700"><MessageCircle className="h-5 w-5 text-[#0D5EA6]" /> +55 48 98848-2877</p>
            <p className="flex items-center gap-3 text-sm text-slate-700"><MapPin className="h-5 w-5 text-[#0D5EA6]" /> São José, Florianópolis, Palhoça e Biguaçu</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-[#002D4D]/10 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,45,77,.45)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#002D4D]">Nome <span aria-hidden="true" className="text-rose-600">*</span>
              <input name="name" autoComplete="name" required className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15" placeholder="Seu nome" />
            </label>
            <label className="text-sm font-medium text-[#002D4D]">Empresa <span aria-hidden="true" className="text-rose-600">*</span>
              <input name="company" autoComplete="organization" required className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15" placeholder="Nome da empresa" />
            </label>
            <label className="text-sm font-medium text-[#002D4D]">Segmento <span aria-hidden="true" className="text-rose-600">*</span>
              <select name="segment" required defaultValue="" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15"><option value="" disabled>Selecione</option><option>Escritório</option><option>Clínica</option><option>Sala comercial</option><option>Outro</option></select>
            </label>
            <label className="text-sm font-medium text-[#002D4D]">Cidade <span aria-hidden="true" className="text-rose-600">*</span>
              <select name="city" required defaultValue="" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15"><option value="" disabled>Selecione</option>{cities.map((city) => <option key={city}>{city}</option>)}</select>
            </label>
            <label className="text-sm font-medium text-[#002D4D]">Telefone/WhatsApp <span aria-hidden="true" className="text-rose-600">*</span>
              <input name="phone" type="tel" autoComplete="tel" required className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15" placeholder="(48) 99999-9999" />
            </label>
            <label className="text-sm font-medium text-[#002D4D]">O que você precisa? <span aria-hidden="true" className="text-rose-600">*</span>
              <select name="requestType" required defaultValue="" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15"><option value="" disabled>Selecione</option><option>Solicitar proposta</option><option>Agendar visita técnica</option></select>
            </label>
            <label className="text-sm font-medium text-[#002D4D] sm:col-span-2">Mensagem
              <textarea name="message" rows={4} className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0D5EA6] focus:ring-2 focus:ring-[#0D5EA6]/15" placeholder="Conte um pouco sobre o ambiente e a frequência desejada." />
            </label>
          </div>
          <Button type="submit" className="mt-6 h-12 w-full rounded-full bg-[#002D4D] font-semibold text-white hover:bg-[#0D5EA6] sm:w-auto sm:px-8">Continuar pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4" /></Button>
          <p className="mt-4 text-xs leading-5 text-slate-500">Seus dados não são armazenados neste site. Ao continuar, as informações preenchidas serão incluídas em uma mensagem para o WhatsApp comercial.</p>
          {submitted && <p role="status" className="mt-3 text-sm font-medium text-[#0D5EA6]">A conversa foi preparada. Se o WhatsApp não abriu, verifique se o navegador bloqueou a nova janela.</p>}
        </form>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionIntro eyebrow="Perguntas frequentes" title="Informação clara para começar." description="Se ainda tiver dúvidas, fale com a nossa equipe pelo WhatsApp." />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqItems.map((item) => <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[#002D4D] marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5EA6] [&::-webkit-details-marker]:hidden">
              {item.question}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#002D4D]/15 text-[#0D5EA6] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-3xl pr-10 pt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
          </details>)}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#002D4D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_1fr] lg:px-8">
        <div>
          <Link href="#inicio" className="inline-flex items-center gap-3" aria-label="Método Limpezas — início">
            <Image src="/images/icon-white.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" />
            <span className="font-semibold tracking-wide">MÉTODO LIMPEZAS</span>
          </Link>
          <p className="mt-4 text-sm font-medium tracking-wide text-[#D4AF37]">EXCELÊNCIA EM CADA DETALHE.</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">Limpeza profissional recorrente para escritórios e clínicas de pequeno porte.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Navegação</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/65">
            <Link href="#inicio" className="hover:text-white">Início</Link><Link href="#solucoes" className="hover:text-white">Soluções</Link>
            <Link href="#metodo" className="hover:text-white">Nosso método</Link><Link href="#videos" className="hover:text-white">Vídeos</Link>
            <Link href="#diferenciais" className="hover:text-white">Diferenciais</Link><Link href="#faq" className="hover:text-white">Dúvidas</Link>
            <Link href="#planos" className="hover:text-white">Planos</Link><Link href="#contato" className="hover:text-white">Contato</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Fale com a Método</h2>
          <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#D4AF37]"><MessageCircle className="h-4 w-4" /> +55 48 98848-2877</Link>
          <a href="mailto:contato@metodolimpezas.com.br" className="mt-3 block text-sm text-white/70 transition-colors hover:text-[#D4AF37]">contato@metodolimpezas.com.br</a>
          <p className="mt-4 text-sm text-white/55">São José · Florianópolis<br />Palhoça · Biguaçu, SC</p>
          <Link href="https://www.instagram.com/metodolimpezas" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-white/70 hover:text-[#D4AF37]">Instagram</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">
        <p>© {new Date().getFullYear()} Método Limpezas. Todos os direitos reservados.</p>
        <p className="mt-2">Mais que limpeza, um método.</p>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <SegmentsSection />
        <VideoSection />
        <DifferentialsSection />
        <MethodSection />
        <PlansSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Método Limpezas pelo WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-xl shadow-[#00192d]/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </Link>
    </div>
  )
}
