import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, CheckCircle2, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Termos de Uso e Condições do Serviço | Método Limpezas",
  description:
    "Condições gerais de atendimento, formalização de contratos corporativos, rotinas de limpeza, produtos inclusos e faturamento da Método Limpezas.",
}

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200">
      {/* Header Simples */}
      <header className="border-b border-navy-800 bg-navy-900/90 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/metodo-gold-site.png"
              alt="Método Limpezas Logo"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
          <FileText className="w-4 h-4 text-gold" />
          Transparência & Contratos PJ
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Termos de Uso e Condições Gerais
        </h1>
        <p className="text-slate-400 text-sm mb-8 pb-6 border-b border-navy-800">
          Última atualização: Novembro de 2026. Conheça as diretrizes operacionais, comerciais e contratuais da <strong>Método Limpezas</strong> para os serviços de limpeza profissional recorrente.
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              1. Natureza dos Serviços
            </h2>
            <p>
              A <strong>Método Limpezas</strong> oferece serviços contínuos e programados de limpeza profissional corporativa e sanitização para <strong>pequenos escritórios, consultórios de saúde e clínicas</strong> situados nos municípios de <strong>São José, Florianópolis, Palhoça e Biguaçu</strong>, no estado de Santa Catarina.
            </p>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              2. Metodologia: Avaliação, Escopo e Visita Técnica
            </h2>
            <p className="mb-3">
              Nossa prestação de serviços baseia-se em transparência operacional e precisão técnica:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>Diagnóstico e Visita Técnica:</strong> Realizamos a avaliação do local para mapear o fluxo de pessoas, tipos de pisos, divisórias, banheiros, copas e exigências específicas (especialmente em ambientes de saúde).</li>
              <li><strong>Definição do Escopo e Frequência:</strong> O contrato detalha com clareza as rotinas diárias, semanais e periódicas, bem como a frequência acordada (ex.: diária, 2x ou 3x por semana).</li>
              <li><strong>Orçamento Customizado:</strong> Não trabalhamos com valores fictícios ou tabelas genéricas; os valores mensais refletem a realidade e o tamanho da sua operação.</li>
            </ul>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              3. Produtos e Equipamentos Inclusos
            </h2>
            <p>
              Salvo ajuste específico em contrato, a Método Limpezas fornece todos os insumos químicos profissionais regulamentados e os equipamentos necessários para a execução do escopo contratado, desonerando o contratante de compras, controle de estoque e despesas surpresa de materiais de limpeza operacional.
            </p>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              4. Supervisão Periódica e Reposição de Pessoal
            </h2>
            <p className="mb-3">
              Garantimos a previsibilidade e a tranquilidade da sua empresa através de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>Supervisão Operacional:</strong> Acompanhamento contínuo da qualidade do atendimento e cumprimento do checklist aprovado.</li>
              <li><strong>Garantia de Reposição:</strong> Em caso de ausência justificada, licença ou imprevisto com a profissional destacada, providenciamos a substituição ou ajuste ágil para que o seu escritório ou consultório nunca fique desassistido.</li>
            </ul>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              5. Formalização Contratual, Faturamento e Pagamento
            </h2>
            <p className="mb-3">
              Toda a relação comercial é pautada na legalidade e formalidade empresarial:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>Contrato Formal PJ:</strong> Instrumento jurídico claro com direitos, deveres, prazos e condições de rescisão acordadas entre as partes.</li>
              <li><strong>Emissão de Nota Fiscal (NF-e):</strong> Emissão mensal regular de Nota Fiscal de Serviços eletrônica.</li>
              <li><strong>Pagamento Mensal via Boleto:</strong> Cobrança mensal unificada via boleto bancário, facilitando a gestão do contas a pagar da sua empresa.</li>
            </ul>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              6. Comunicação e Atendimento
            </h2>
            <p>
              Qualquer solicitação, esclarecimento de dúvidas ou agendamento de visita técnica pode ser realizado pelo canal de atendimento direto:
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> WhatsApp: <strong>+55 (48) 98848-2877</strong>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> Cobertura: <strong>São José, Florianópolis, Palhoça e Biguaçu - SC</strong>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-navy-950 font-bold rounded-lg transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Retornar para a Página Inicial
          </Link>
        </div>
      </main>
    </div>
  )
}
