"use client"

import { useState } from "react"
import { Send, Calendar, Calculator, CheckCircle2, Building, MapPin, Clock, Phone, User, MessageSquare, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LeadForm({ initialPacote }: { initialPacote?: string }) {
  const [activeTab, setActiveTab] = useState<"orcamento" | "visita">("orcamento")

  // Estado do formulário de orçamento
  const [quoteData, setQuoteData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    cidade: "São José",
    tipoEspaco: "Pequeno Escritório",
    frequencia: "2x a 3x por semana",
    pacote: initialPacote || "Pacote Recomendada (Supervisão + Reposição + Produtos)",
    mensagem: "",
  })

  // Estado do formulário de visita técnica
  const [visitData, setVisitData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    cidade: "São José",
    bairro: "",
    turno: "Manhã (08h às 12h)",
    detalhes: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - MÉTODO LIMPEZAS*
----------------------------------------
*Nome:* ${quoteData.nome || "Não informado"}
*Empresa:* ${quoteData.empresa || "Não informada"}
*Telefone/WhatsApp:* ${quoteData.telefone || "Não informado"}
*Cidade:* ${quoteData.cidade}
*Tipo de Espaço:* ${quoteData.tipoEspaco}
*Frequência pretendida:* ${quoteData.frequencia}
*Pacote de interesse:* ${quoteData.pacote}
${quoteData.mensagem ? `*Observações:* ${quoteData.mensagem}` : ""}
----------------------------------------
_Enviado pelo formulário do site metodo-limpezas.com.br_`

    const url = `https://wa.me/5548988482877?text=${encodeURIComponent(text)}`
    setSubmitted(true)
    window.open(url, "_blank")
  }

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*AGENDAMENTO DE VISITA TÉCNICA - MÉTODO LIMPEZAS*
----------------------------------------
*Nome:* ${visitData.nome || "Não informado"}
*Empresa:* ${visitData.empresa || "Não informada"}
*Telefone/WhatsApp:* ${visitData.telefone || "Não informado"}
*Cidade:* ${visitData.cidade}
*Bairro/Endereço:* ${visitData.bairro || "A combinar"}
*Turno de preferência:* ${visitData.turno}
${visitData.detalhes ? `*Detalhes do local:* ${visitData.detalhes}` : ""}
----------------------------------------
_Enviado pelo formulário do site metodo-limpezas.com.br_`

    const url = `https://wa.me/5548988482877?text=${encodeURIComponent(text)}`
    setSubmitted(true)
    window.open(url, "_blank")
  }

  return (
    <div className="w-full bg-navy-900 border border-gold/30 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur">
      {/* Seletor de Abas */}
      <div className="flex p-1.5 bg-navy-950 rounded-xl border border-navy-800 mb-8">
        <button
          type="button"
          onClick={() => {
            setActiveTab("orcamento")
            setSubmitted(false)
          }}
          className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
            activeTab === "orcamento"
              ? "bg-gold text-navy-950 shadow-md"
              : "text-slate-300 hover:text-white hover:bg-navy-900/50"
          }`}
        >
          <Calculator className="w-4 h-4" />
          Solicitar Orçamento
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("visita")
            setSubmitted(false)
          }}
          className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
            activeTab === "visita"
              ? "bg-gold text-navy-950 shadow-md"
              : "text-slate-300 hover:text-white hover:bg-navy-900/50"
          }`}
        >
          <Calendar className="w-4 h-4" />
          Agendar Visita Técnica
        </button>
      </div>

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white">Solicitação pronta para envio!</p>
            <p className="text-emerald-300/90 text-xs mt-1">
              Abrimos a conversa no WhatsApp com os seus dados prontos para atendimento. Caso não tenha aberto automaticamente, clique novamente no botão abaixo.
            </p>
          </div>
        </div>
      )}

      {/* Formulário: Orçamento */}
      {activeTab === "orcamento" && (
        <form onSubmit={handleQuoteSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold" /> Seu Nome
              </label>
              <input
                type="text"
                required
                placeholder="Ex.: Carlos Silva"
                value={quoteData.nome}
                onChange={(e) => setQuoteData({ ...quoteData, nome: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-gold" /> Empresa / Consultório
              </label>
              <input
                type="text"
                required
                placeholder="Ex.: Clínica Sorriso / Advocacia Silva"
                value={quoteData.empresa}
                onChange={(e) => setQuoteData({ ...quoteData, empresa: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold" /> WhatsApp com DDD
              </label>
              <input
                type="tel"
                required
                placeholder="(48) 99999-9999"
                value={quoteData.telefone}
                onChange={(e) => setQuoteData({ ...quoteData, telefone: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" /> Município
              </label>
              <select
                value={quoteData.cidade}
                onChange={(e) => setQuoteData({ ...quoteData, cidade: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="São José">São José - SC</option>
                <option value="Florianópolis">Florianópolis - SC</option>
                <option value="Palhoça">Palhoça - SC</option>
                <option value="Biguaçu">Biguaçu - SC</option>
                <option value="Outro (Grande Fpolis)">Outro (Grande Florianópolis)</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Tipo de Imóvel
              </label>
              <select
                value={quoteData.tipoEspaco}
                onChange={(e) => setQuoteData({ ...quoteData, tipoEspaco: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-3 py-3 text-xs text-white focus:outline-none transition-colors"
              >
                <option value="Pequeno Escritório / Empresa">Pequeno Escritório</option>
                <option value="Consultório Médico / Odontológico">Consultório / Clínica</option>
                <option value="Condomínio Comercial / Residencial">Condomínio</option>
                <option value="Academia / Centro de Saúde">Academia / Studio</option>
                <option value="Outro espaço comercial">Outro segmento</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Frequência Desejada
              </label>
              <select
                value={quoteData.frequencia}
                onChange={(e) => setQuoteData({ ...quoteData, frequencia: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-3 py-3 text-xs text-white focus:outline-none transition-colors"
              >
                <option value="Diária (Segunda a Sexta)">Diária (Seg a Sex)</option>
                <option value="2x a 3x por semana">2x a 3x por semana</option>
                <option value="1x por semana">1x por semana</option>
                <option value="A definir na avaliação técnica">A definir na visita</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-gold" /> Pacote
              </label>
              <select
                value={quoteData.pacote}
                onChange={(e) => setQuoteData({ ...quoteData, pacote: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-3 py-3 text-xs text-white focus:outline-none transition-colors"
              >
                <option value="Pacote Recomendada (Supervisão + Reposição + Produtos)">Recomendada (Mais Escolhido)</option>
                <option value="Pacote Essencial (Escopo e Produtos Definidos)">Essencial (Rotina Enxuta)</option>
                <option value="Pacote Completa (Escopo Ampliado / Alto Fluxo)">Completa (Intensivo)</option>
                <option value="A definir conforme visita">A definir na avaliação</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-gold" /> Detalhes ou Metragem Aproximada (Opcional)
            </label>
            <textarea
              rows={3}
              placeholder="Ex.: Metragem aproximada de 100m², 2 banheiros e 1 copa. Gostaria de atendimento no período da manhã..."
              value={quoteData.mensagem}
              onChange={(e) => setQuoteData({ ...quoteData, mensagem: e.target.value })}
              className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

          <Button
            type="submit"
            className="w-full py-4 bg-gold hover:bg-gold-hover text-navy-950 text-base font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Enviar Solicitação Direto no WhatsApp
          </Button>
          <p className="text-center text-xs text-slate-400">
            Atendimento B2B humanizado. Seus dados são utilizados exclusivamente para a elaboração do seu orçamento.
          </p>
        </form>
      )}

      {/* Formulário: Visita Técnica */}
      {activeTab === "visita" && (
        <form onSubmit={handleVisitSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold" /> Seu Nome
              </label>
              <input
                type="text"
                required
                placeholder="Ex.: Dra. Marina Castro"
                value={visitData.nome}
                onChange={(e) => setVisitData({ ...visitData, nome: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-gold" /> Nome da Empresa / Consultório
              </label>
              <input
                type="text"
                required
                placeholder="Ex.: Consultório Integrado"
                value={visitData.empresa}
                onChange={(e) => setVisitData({ ...visitData, empresa: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold" /> WhatsApp com DDD
              </label>
              <input
                type="tel"
                required
                placeholder="(48) 98888-8888"
                value={visitData.telefone}
                onChange={(e) => setVisitData({ ...visitData, telefone: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" /> Município
              </label>
              <select
                value={visitData.cidade}
                onChange={(e) => setVisitData({ ...visitData, cidade: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="São José">São José - SC</option>
                <option value="Florianópolis">Florianópolis - SC</option>
                <option value="Palhoça">Palhoça - SC</option>
                <option value="Biguaçu">Biguaçu - SC</option>
                <option value="Outro (Grande Florianópolis)">Outro (Grande Florianópolis)</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" /> Bairro ou Endereço
              </label>
              <input
                type="text"
                placeholder="Ex.: Kobrasol / Campinas / Centro / Pedra Branca"
                value={visitData.bairro}
                onChange={(e) => setVisitData({ ...visitData, bairro: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" /> Melhor Turno
              </label>
              <select
                value={visitData.turno}
                onChange={(e) => setVisitData({ ...visitData, turno: e.target.value })}
                className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                <option value="Tarde (13h30 às 18h)">Tarde (13h30 às 18h)</option>
                <option value="Final do dia (após 17h)">Final do dia (após 17h)</option>
                <option value="A combinar conforme agenda">A combinar</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-gold" /> O que você gostaria de priorizar na avaliação?
            </label>
            <textarea
              rows={3}
              placeholder="Ex.: Gostaria de avaliar pisos vinílicos, desinfecção de consultórios e banheiros de clientes..."
              value={visitData.detalhes}
              onChange={(e) => setVisitData({ ...visitData, detalhes: e.target.value })}
              className="w-full bg-navy-950 border border-navy-700 focus:border-gold rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

          <Button
            type="submit"
            className="w-full py-4 bg-gold hover:bg-gold-hover text-navy-950 text-base font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Confirmar e Agendar Visita Técnica no WhatsApp
          </Button>
          <p className="text-center text-xs text-slate-400">
            A visita técnica é 100% gratuita e sem compromisso para São José, Florianópolis, Palhoça e Biguaçu.
          </p>
        </form>
      )}
    </div>
  )
}
