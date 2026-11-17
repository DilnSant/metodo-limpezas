import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Política de Privacidade | Método Limpezas",
  description:
    "Saiba como a Método Limpezas trata e protege os dados dos seus clientes e visitantes em conformidade com a LGPD.",
}

export default function PoliticaPrivacidade() {
  const whatsappLink = "https://wa.me/5548988482877?text=Olá!+Dúvidas+sobre+a+Política+de+Privacidade"

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
          <ShieldCheck className="w-4 h-4 text-gold" />
          LGPD & Segurança
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Política de Privacidade
        </h1>
        <p className="text-slate-400 text-sm mb-8 pb-6 border-b border-navy-800">
          Última atualização: Novembro de 2026. A <strong>Método Limpezas</strong> preza pela transparência, sigilo e segurança dos dados fornecidos por empresas e responsáveis que utilizam nossos canais de atendimento.
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              1. Identificação do Controlador
            </h2>
            <p>
              Esta política aplica-se aos serviços prestados pela <strong>Método Limpezas</strong>, empresa especializada em limpeza profissional corporativa e recorrente para pequenos escritórios, consultórios e clínicas na região de <strong>São José, Florianópolis, Palhoça e Biguaçu - SC</strong>.
            </p>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              2. Dados Coletados e Finalidade
            </h2>
            <p className="mb-4">
              Coletamos exclusivamente as informações estritamente necessárias para a elaboração de propostas comerciais personalizadas, alinhamento de escopo e agendamento de visitas técnicas presenciais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>Nome do contato e razão social / nome fantasia da empresa:</strong> para identificação do solicitante e formalização comercial.</li>
              <li><strong>Número de WhatsApp / Telefone:</strong> para resposta direta com proposta, esclarecimento de dúvidas e agendamento de visita técnica.</li>
              <li><strong>Cidade e localização (São José, Florianópolis, Palhoça ou Biguaçu):</strong> para verificação da cobertura logística e roteirização da supervisão.</li>
              <li><strong>Tipo de imóvel, metragem aproximada e frequência pretendida:</strong> para dimensionamento da rotina operacional, produtos e cronograma de limpeza.</li>
            </ul>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              3. Encaminhamento via WhatsApp
            </h2>
            <p>
              Nosso site opera com direcionamento direto e transparente: os dados preenchidos no formulário de orçamento ou visita técnica são formatados e transmitidos via protocolo padrão diretamente para o canal oficial de atendimento no WhatsApp (+55 48 98848-2877). Não comercializamos, não vendemos e não compartilhamos esses dados com terceiros para fins de marketing não autorizado.
            </p>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              4. Armazenamento e Formalização Contratual
            </h2>
            <p>
              Ao firmar contrato de prestação de serviços com a Método Limpezas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 mt-2">
              <li>Os contratos são devidamente formalizados entre pessoas jurídicas (PJ).</li>
              <li>Notas Fiscais (NF-e) de serviço são emitidas regularmente conforme as obrigações fiscais e tributárias.</li>
              <li>Boletos bancários para pagamento mensal são emitidos via instituições financeiras autorizadas, guardando o sigilo fiscal e cadastral exigido por lei.</li>
            </ul>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              5. Seus Direitos como Titular (LGPD - Lei nº 13.709/2018)
            </h2>
            <p>
              Você tem total direito de confirmar a existência de tratamento dos seus dados, solicitar a atualização, correção ou exclusão definitiva das suas informações de nossos registros de atendimento a qualquer momento, mediante solicitação em nosso canal oficial.
            </p>
          </section>

          <section className="bg-navy-900/70 p-6 md:p-8 rounded-xl border border-navy-800">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              6. Canal de Contato e Dúvidas
            </h2>
            <p className="mb-4">
              Caso tenha dúvidas sobre a presente política ou sobre a forma de tratamento de informações:
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> WhatsApp Oficial: <strong>+55 (48) 98848-2877</strong>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> Região de Atendimento: <strong>São José, Florianópolis, Palhoça e Biguaçu - SC</strong>
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
