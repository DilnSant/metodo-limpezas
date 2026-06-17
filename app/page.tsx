"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Users,
  Star,
  Mail,
  MessageCircle,
  Instagram,
  Award,
  Leaf,
  Eye,
  Heart,
  Calendar,
  Clock,
  DollarSign,
  CheckCircle,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MetodoLimpezasLanding() {
  const whatsappLink = "https://wa.me/5548988482877?text=Olá!+Quero+saber+mais+sobre+o+Método+Limpezas"

  return (
    <div className="min-h-screen bg-[#071529] font-['Poppins',sans-serif]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/icon-blue.png" alt="Método Limpezas" width={32} height={32} className="w-8 h-8" />
            <div className="text-xl font-semibold text-[#004A6F]">Método Limpezas</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-[#004A6F] transition-colors font-semibold">
              Início
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-[#004A6F] transition-colors font-semibold">
              Sobre
            </Link>
            <Link href="#videos" className="text-gray-700 hover:text-[#004A6F] transition-colors font-semibold">
              Vídeos
            </Link>
            <Link href="#planos" className="text-gray-700 hover:text-[#004A6F] transition-colors font-semibold">
              Planos
            </Link>
            <Link href="#beneficios" className="text-gray-700 hover:text-[#004A6F] transition-colors font-semibold">
              Benefícios
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#004A6F] transition-colors font-semibold"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-14 py-16 lg:py-24 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Método Limpezas</h1>
              <p className="text-2xl text-white font-semibold">Onde confiança e método se encontram.</p>
              <p className="text-lg text-gray-300">
                Limpeza corporativa com padrão, leveza e eficiência que inspiram confiança.
              </p>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-5">
                <Button
                  size="lg"
                  className="bg-white text-[#004A6F] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg my-6 font-semibold"
                >
                  Fale conosco no WhatsApp
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/metodo-hero.png"
                alt="Método Limpezas - Mais que limpeza, um método"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Conheça Nosso Trabalho</h2>
            <p className="text-lg text-gray-300">Veja como transformamos ambientes corporativos</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white/95 rounded-lg shadow-xl border-2 border-[#004A6F] p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Video 1 - Short (Vertical) */}
              <div className="space-y-4">
                <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/HDUugVj46WI"
                    title="Método Limpezas - Apresentação"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Play className="w-4 h-4 text-[#004A6F]" />
                    <h3 className="text-lg font-semibold text-gray-900">Nossa Apresentação</h3>
                  </div>
                  <p className="text-sm text-gray-600">Conheça o Método em um minuto</p>
                </div>
              </div>

              {/* Video 2 - Full (Horizontal) + Logo */}
              <div className="space-y-4">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/iNQ64eeZdJc"
                    title="Método Limpezas - Detalhes do Serviço"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Play className="w-4 h-4 text-[#004A6F]" />
                    <h3 className="text-lg font-semibold text-gray-900">Nossos Serviços</h3>
                  </div>
                  <p className="text-sm text-gray-600">Veja como trabalhamos</p>
                </div>

                {/* Logo abaixo do vídeo */}
                <div className="mt-4">
                  <Image
                    src="/images/design-mode/%401350-metodolimpezas.png"
                    alt="Método Limpezas - Limpeza Comercial"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-auto shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-[#004A6F] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Solicite um Orçamento Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Sobre o Método</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white/95 rounded-lg p-8 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>Método Limpezas</strong> nasceu da experiência prática desde 2015 no atendimento a escritórios e
              consultórios.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Desenvolvemos uma <strong>metodologia simples, humanizada e eficaz</strong> para manter ambientes limpos,
              organizados e saudáveis — sem a necessidade de grandes equipes ou equipamentos industriais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso diferencial está em combinar <strong>confiança, leveza e método</strong> para entregar resultados
              visíveis desde o primeiro dia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/95 rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#004A6F] mb-2">10 anos</div>
              <p className="text-gray-700">De experiência no mercado</p>
            </div>
            <div className="bg-white/95 rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#004A6F] mb-2">30%</div>
              <p className="text-gray-700">Aumento na produtividade em ambientes limpos</p>
            </div>
            <div className="bg-white/95 rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#004A6F] mb-2">100%</div>
              <p className="text-gray-700">Satisfação dos nossos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Confira os planos mais usados por nossos clientes</h2>
            <p className="text-lg text-gray-300">
              Solicite uma visita técnica gratuita e receba seu orçamento personalizado!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plano Diário */}
            <Card className="border-2 border-[#004A6F] shadow-lg hover:shadow-xl transition-shadow bg-white/95">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Calendar className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#004A6F] mb-2">Plano Diário</h3>
                  <p className="text-lg font-semibold text-gray-700">Frequência Inteligente</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Descrição:</strong> Ideal para empresas com alto fluxo de pessoas ou que exigem padrão
                      máximo de limpeza.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#004A6F]" />
                    <p className="text-gray-700">Segunda a sexta-feira</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-[#004A6F]" />
                    <p className="text-gray-700">Valor: sob consulta personalizada</p>
                  </div>
                </div>

                <Link
                  href="https://wa.me/5548988482877?text=Olá!+Gostaria+de+saber+mais+sobre+o+Plano+Diário"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#004A6F] hover:bg-[#003a56] text-white">Quero esse plano</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Dinâmico */}
            <Card className="border-2 border-[#004A6F] shadow-lg hover:shadow-xl transition-shadow bg-white/95">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Calendar className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#004A6F] mb-2">Plano Dinâmico</h3>
                  <p className="text-lg font-semibold text-gray-700">Visitas 2x por semana</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Descrição:</strong> Perfeito para escritórios com rotinas constantes e com menor
                      necessidade diária.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#004A6F]" />
                    <p className="text-gray-700">2ª e 4ª ou 3ª e 5ª</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-[#004A6F]" />
                    <p className="text-gray-700">Valor: sob consulta personalizada</p>
                  </div>
                </div>

                <Link
                  href="https://wa.me/5548988482877?text=Olá!+Gostaria+de+saber+mais+sobre+o+Plano+Dinâmico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#004A6F] hover:bg-[#003a56] text-white">Quero esse plano</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Essencial */}
            <Card className="border-2 border-[#004A6F] shadow-lg hover:shadow-xl transition-shadow bg-white/95">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Calendar className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#004A6F] mb-2">Plano Essencial</h3>
                  <p className="text-lg font-semibold text-gray-700">1 visita por semana</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Descrição:</strong> Para empresas que precisam de limpeza periódica e apresentam pouca
                      movimentação diária.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#004A6F]" />
                    <p className="text-gray-700">À combinar</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-[#004A6F]" />
                    <p className="text-gray-700">Valor: sob consulta personalizada</p>
                  </div>
                </div>

                <Link
                  href="https://wa.me/5548988482877?text=Olá!+Gostaria+de+saber+mais+sobre+o+Plano+Essencial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#004A6F] hover:bg-[#003a56] text-white">Quero esse plano</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nossos Benefícios</h2>
            <p className="text-lg text-gray-300">Mais que limpeza, um método.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#004A6F] bg-white/95">
              <CardContent className="pt-6">
                <Leaf className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limpeza leve e sustentável</h3>
                <p className="text-gray-600">Métodos eficientes que respeitam o meio ambiente</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#004A6F] bg-white/95">
              <CardContent className="pt-6">
                <Eye className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados visíveis desde o primeiro dia</h3>
                <p className="text-gray-600">Qualidade que você percebe imediatamente</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#004A6F] bg-white/95">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Profissionais qualificados e treinados</h3>
                <p className="text-gray-600">Equipe preparada e comprometida com a excelência</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#004A6F] bg-white/95">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-[#004A6F] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Atendimento personalizado</h3>
                <p className="text-gray-600">Soluções sob medida para seu espaço</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-300">Especialistas em ambientes corporativos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-white/95">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 text-[#004A6F] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Escritórios</h3>
                <p className="text-gray-600">
                  Limpeza completa de ambientes corporativos com método que não interrompe seu expediente
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-white/95">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-[#004A6F] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultórios</h3>
                <p className="text-gray-600">Higienização especializada para área da saúde com protocolos rigorosos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Depoimentos</h2>
            <p className="text-lg text-gray-300">O que nossos clientes dizem sobre nós</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-lg bg-white/95">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "A leveza e a confiança que a Método Limpezas traz para nosso escritório são impressionantes.
                  Resultados visíveis desde o primeiro dia!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-sm text-gray-600">Diretora - Advocacia Silva & Associados</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white/95">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "O método deles realmente funciona! Profissionais qualificados e um atendimento que transmite total
                  confiança."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Dr. João Santos</p>
                  <p className="text-sm text-gray-600">Médico - Clínica Santos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white/95">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Limpeza corporativa com padrão e confiança. A Método Limpezas entende exatamente o que precisamos!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-600">Gerente - Empresa Tech Solutions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#071529]">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-[#004A6F] rounded-lg p-12 shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Leveza e eficiência que inspiram confiança.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Conheça o método que garante resultados sem interrupções no seu expediente.
            </p>
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-[#004A6F] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Solicitar orçamento pelo WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#071529] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/icon-white.png" alt="Método Limpezas" width={32} height={32} className="w-8 h-8" />
                <h3 className="text-xl font-bold text-white">Método Limpezas</h3>
              </div>
              <p className="text-gray-300 mb-4">Onde confiança e método se encontram.</p>
              <p className="text-sm text-gray-400">Desde 2015</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Menu</h4>
              <div className="space-y-2">
                <Link href="#inicio" className="block text-gray-300 hover:text-white">
                  Início
                </Link>
                <Link href="#sobre" className="block text-gray-300 hover:text-white">
                  Sobre
                </Link>
                <Link href="#videos" className="block text-gray-300 hover:text-white">
                  Vídeos
                </Link>
                <Link href="#planos" className="block text-gray-300 hover:text-white">
                  Planos
                </Link>
                <Link href="#beneficios" className="block text-gray-300 hover:text-white">
                  Benefícios
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-2">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>(48) 98848-2877</span>
                </Link>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-gray-300">contato@metodolimpezas.com.br</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <MessageCircle className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/metodolimpezas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-300">Método Limpezas – Todos os direitos reservados © {new Date().getFullYear()}</p>
            <p className="text-sm text-gray-400 mt-2">Mais que limpeza, um método.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
