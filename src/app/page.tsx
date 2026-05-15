"use client";
import { useState, useEffect } from "react";
import { Menu, Zap, Layout, Grid, Power, ShieldCheck, Clock, MapPin, CheckCircle, Smartphone, MessageCircle, Star, ChevronDown, Wrench, Shield, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "/imagens/imagem-1.png",
      title: "Segurança e Padrão CEMIG em",
      highlight: "Instalações Elétricas"
    },
    {
      img: "/imagens/imagem-2.png",
      title: "Design e Sofisticação com",
      highlight: "Rebaixamento de Gesso"
    },
    {
      img: "/imagens/imagem-3.png",
      title: "Construção Rápida e Limpa com",
      highlight: "Divisórias em Drywall"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whatsappLink = "https://wa.me/5531988263159?text=Olá,%20vim%20pelo%20site%20da%20Império%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. CABEÇALHO E TOP BAR */}

      
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
              <img src="/imagens/logo-imperio.svg" alt="Império Drywall & Elétrica" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          
          <nav className="hidden md:flex gap-8">
            <Link href="#servicos" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold uppercase tracking-wide">Serviços</Link>
            <Link href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold uppercase tracking-wide">Sobre Nós</Link>
            <Link href="#depoimentos" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold uppercase tracking-wide">Depoimentos</Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold uppercase tracking-wide">Dúvidas</Link>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md">
            SOLICITAR ORÇAMENTO
          </a>

          <button className="md:hidden text-gray-900 hover:text-gray-600 p-2">
            <Menu size={28} />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* 2. SEÇÃO HERO */}
        <section className="relative w-full bg-white min-h-[calc(100vh-7.5rem)] flex items-center border-b border-gray-200 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 flex justify-end">
            <div className="w-full lg:w-[65%] h-full relative bg-gray-100">
              {slides.map((slide, index) => (
                <img 
                  key={index}
                  src={slide.img} 
                  alt={slide.highlight} 
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              {/* Fade linear horizontal suave no desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-30% to-transparent hidden lg:block"></div>
              {/* Fundo semitransparente para garantir legibilidade no mobile */}
              <div className="absolute inset-0 bg-white/85 lg:hidden"></div>
            </div>
          </div>
          {/* Fundo branco sólido à esquerda no desktop */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[35%] bg-white z-0 hidden lg:block"></div>

          <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Esquerda: Conteúdo */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full mb-6 shadow-sm">
                  <span className="text-sm font-extrabold text-gray-800 tracking-wide uppercase">Padrão</span>
                  <img src="/imagens/cemig-logo.svg" alt="CEMIG" className="h-4 w-auto object-contain" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight drop-shadow-sm min-h-[140px] md:min-h-[120px] lg:min-h-[144px]">
                  {slides[currentSlide].title} <br className="hidden md:block" /><span className="text-gold transition-all duration-500 ease-in-out">{slides[currentSlide].highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Especialistas em <strong>Drywall, Rebaixamento de Gesso</strong> e <strong>Instalações Elétricas</strong> Padrão <img src="/imagens/cemig-logo.svg" alt="CEMIG" className="h-4 inline-block align-baseline mx-1" /> para <strong>residências e comércios</strong> em BH e região.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-base py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <img src="/imagens/icone-do-whatsapp-2.svg" alt="WhatsApp" className="w-6 h-6 object-contain" />
                    FALAR COM UM ESPECIALISTA
                  </a>
                </div>
                <p className="mt-4 text-sm text-gray-700 font-bold flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck size={18} className="text-gold" /> Garantia de Serviço e Qualidade Premium
                </p>
              </div>

              {/* Direita: Vazio (para a imagem de fundo brilhar) */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* 3. DIFERENCIAIS (3 Colunas) */}
        <section className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Wrench size={40} className="text-gray-900 shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2">Experiência e Qualificação</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Equipe altamente treinada e especializada em drywall e elétrica avançada.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Shield size={40} className="text-gray-900 shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 flex items-center">Normas e Padrão <img src="/imagens/cemig-logo.svg" alt="CEMIG" className="h-4 ml-2" /></h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Instalações em total conformidade com as normas técnicas (NBR) e a <img src="/imagens/cemig-logo.svg" alt="CEMIG" className="h-3 inline-block align-baseline mx-1" />.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Clock size={40} className="text-gray-900 shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2">Qualidade e Agilidade</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Atendimento rápido em toda BH e região, entregando obras limpas no prazo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVIÇOS */}
        <section id="servicos" className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Nossos Serviços</h2>
              <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img src="/imagens/Rebaixamento-de-gesso.png" alt="Rebaixamento de Gesso" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gold transition-colors">Rebaixamento de Gesso</h3>
                  <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">Acabamento premium e projetos de iluminação embutida impecáveis para sua casa ou comércio.</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm">
                    Solicitar Orçamento
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img src="/imagens/divisorias-em-drywall.png" alt="Divisórias em Drywall" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gold transition-colors">Divisórias em Drywall</h3>
                  <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">Construção de paredes limpas, rápidas e precisas. Otimize seus espaços sem sujeira de obra tradicional.</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm">
                    Solicitar Orçamento
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img src="/imagens/eletrica-geral.png" alt="Elétrica Geral" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gold transition-colors">Elétrica Geral</h3>
                  <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">Reparos, novas instalações, manutenção preventiva e garantia de segurança total para sua rede elétrica.</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm">
                    Solicitar Orçamento
                  </a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img src="/imagens/padrao-cemig.png" alt="Padrão CEMIG" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gold transition-colors flex items-center">Padrão <img src="/imagens/cemig-logo.svg" alt="CEMIG" className="h-5 ml-2" /></h3>
                  <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">Montagem, instalação e regularização completa de medidores e quadros conforme as exigências da <img src="/imagens/cemig-logo.svg" alt="CEMIG" className="h-3 inline-block align-baseline mx-1" />.</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 rounded-full transition-colors shadow-sm">
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GALERIA (Showcase) */}
        <section className="py-24 bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Um pouco do nosso trabalho</h2>
              <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-50 aspect-square rounded-2xl flex items-center justify-center border border-gray-200 relative group overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all">
                   <ImageIcon size={32} className="text-gray-300 group-hover:scale-110 transition-transform" />
                   <div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SOBRE NÓS */}
        <section id="sobre" className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-white h-[450px] rounded-3xl flex items-center justify-center border border-gray-200 shadow-xl relative">
                 <div className="text-center w-full px-8 flex justify-center">
                    <img src="/imagens/logo-imperio.svg" alt="Império Drywall & Elétrica" className="max-w-full h-auto max-h-48" />
                 </div>
                 <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white text-gray-900 p-8 rounded-2xl shadow-2xl font-bold border border-gray-100">
                    <span className="text-5xl font-extrabold block mb-1 text-gold">+10</span>
                    Anos de Experiência
                 </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Por que escolher a Império?</h2>
                <div className="w-16 h-1 bg-gray-900 mb-8 rounded-full"></div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Somos especialistas dedicados a <strong className="text-gray-900 font-extrabold">transformar ambientes</strong> e garantir a <strong className="text-gray-900 font-extrabold">segurança elétrica</strong> do seu patrimônio. Atuando com excelência em <strong className="text-gray-900 font-extrabold">Belo Horizonte e região metropolitana</strong>, construímos nossa reputação na base da <strong className="text-gray-900 font-extrabold">qualidade técnica e compromisso com o cliente</strong>.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Trabalhamos com os <strong className="text-gray-900 font-extrabold">melhores materiais do mercado</strong>, equipe rigorosamente qualificada e foco total em <strong className="text-gray-900 font-extrabold">acabamentos de alto padrão</strong>.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-gray-900 font-bold bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle className="text-[#25D366]" size={24} /> Orçamento Transparente e Sem Compromisso
                  </li>
                  <li className="flex items-center gap-4 text-gray-900 font-bold bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle className="text-[#25D366]" size={24} /> Execução Rápida e Obra Limpa
                  </li>
                  <li className="flex items-center gap-4 text-gray-900 font-bold bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle className="text-[#25D366]" size={24} /> Respeito a todas as Normas Técnicas (NBR)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DEPOIMENTOS */}
        <section id="depoimentos" className="py-24 bg-white border-t border-gray-200 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">O que nossos clientes dizem</h2>
              <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
            </div>
          </div>
            
          <div className="flex overflow-hidden group">
            <div className="flex gap-8 w-max animate-infinite-scroll px-4">
              {[
                { nome: "Carlos Eduardo", cor: "bg-teal-500", texto: "Serviço impecável. O teto de gesso rebaixado com iluminação de LED mudou completamente a sala da minha casa. Equipe educada e pontual." },
                { nome: "Fernanda Souza", cor: "bg-blue-500", texto: "Precisávamos mudar o padrão CEMIG do nosso comércio. A Império resolveu tudo muito rápido e o preço foi o mais justo que encontramos em BH." },
                { nome: "Roberto Alves", cor: "bg-purple-500", texto: "Fizeram toda a instalação elétrica da minha reforma e as divisórias em drywall. Zero dor de cabeça, entregaram antes do prazo e sem sujeira." },
                { nome: "Amanda Costa", cor: "bg-pink-500", texto: "Ótimo atendimento desde o orçamento até a entrega. Rebaixamento de gesso feito com perfeição. Recomendo muito!" },
                { nome: "Lucas Martins", cor: "bg-orange-500", texto: "Profissionais excelentes. Resolveram um problema elétrico na minha casa que outros não conseguiam achar." },
                { nome: "Juliana Silva", cor: "bg-red-500", texto: "Trabalho muito limpo e organizado. Fizeram as paredes de drywall no meu escritório em tempo recorde." }
              ].concat([
                { nome: "Carlos Eduardo", cor: "bg-teal-500", texto: "Serviço impecável. O teto de gesso rebaixado com iluminação de LED mudou completamente a sala da minha casa. Equipe educada e pontual." },
                { nome: "Fernanda Souza", cor: "bg-blue-500", texto: "Precisávamos mudar o padrão CEMIG do nosso comércio. A Império resolveu tudo muito rápido e o preço foi o mais justo que encontramos em BH." },
                { nome: "Roberto Alves", cor: "bg-purple-500", texto: "Fizeram toda a instalação elétrica da minha reforma e as divisórias em drywall. Zero dor de cabeça, entregaram antes do prazo e sem sujeira." },
                { nome: "Amanda Costa", cor: "bg-pink-500", texto: "Ótimo atendimento desde o orçamento até a entrega. Rebaixamento de gesso feito com perfeição. Recomendo muito!" },
                { nome: "Lucas Martins", cor: "bg-orange-500", texto: "Profissionais excelentes. Resolveram um problema elétrico na minha casa que outros não conseguiam achar." },
                { nome: "Juliana Silva", cor: "bg-red-500", texto: "Trabalho muito limpo e organizado. Fizeram as paredes de drywall no meu escritório em tempo recorde." }
              ]).map((dep, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shrink-0 w-[350px] md:w-[400px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(star => <Star key={star} size={20} className="fill-gold text-gold" />)}
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 italic mb-8 leading-relaxed">"{dep.texto}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                    <div className={`w-12 h-12 ${dep.cor} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                      {dep.nome.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-900 font-extrabold uppercase text-sm tracking-wide">{dep.nome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section className="py-32 bg-gray-900 relative overflow-hidden">
           <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 max-w-4xl mx-auto leading-tight tracking-tight">
                 Entre em contato conosco agora mesmo e solicite um orçamento sem compromisso.
              </h2>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold text-lg md:text-xl py-5 px-10 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl"
              >
                <img src="/imagens/icone-do-whatsapp-2.svg" alt="WhatsApp" className="w-7 h-7 object-contain" />
                SOLICITAR ORÇAMENTO
              </a>
           </div>
        </section>

        {/* 9. FAQ (Dúvidas Frequentes) */}
        <section id="faq" className="py-24 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Dúvidas Frequentes</h2>
              <p className="text-gray-600 font-medium">Talvez suas dúvidas estejam abaixo</p>
              <div className="w-16 h-1 bg-gray-900 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="space-y-4 mb-16">
              {[
                { q: "Quais as formas de pagamento?", a: "Aceitamos pagamentos via PIX, cartões de crédito e débito, com opções de parcelamento a combinar de acordo com o valor da obra." },
                { q: "Atendem em toda Belo Horizonte?", a: "Sim! Atendemos em todos os bairros de BH e também em diversas cidades da Região Metropolitana. (Consulte taxa de deslocamento para cidades distantes)." },
                { q: "Como funciona o orçamento?", a: "O orçamento é feito sem compromisso. Podemos realizar uma estimativa inicial via WhatsApp enviando fotos e medidas, mas geralmente agendamos uma visita técnica para precisão absoluta." },
                { q: "Vocês fornecem o material ou apenas a mão de obra?", a: "Trabalhamos das duas formas. Podemos fechar o pacote completo (material + mão de obra) para sua maior comodidade, ou apenas executar o serviço se você já tiver os materiais." }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-extrabold text-gray-900 hover:text-gray-600 transition-colors">
                    {faq.q}
                    <ChevronDown className="text-gray-400 transition-transform group-open:rotate-180" size={24} />
                  </summary>
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
              >
                <img src="/imagens/icone-do-whatsapp-2.svg" alt="WhatsApp" className="w-6 h-6 object-contain" />
                FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 10. RODAPÉ */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <img src="/imagens/logo-imperio.svg" alt="Império Drywall & Elétrica" className="h-12 md:h-16 w-auto object-contain mb-6" />
              <p className="text-gray-600 text-sm leading-relaxed mb-8 pr-4">
                Especialistas em gesso, drywall e elétrica, trazendo o mais alto padrão de qualidade para sua casa ou empresa em BH.
              </p>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all cursor-pointer shadow-sm">
                   IG
                 </div>
                 <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all cursor-pointer shadow-sm">
                   FB
                 </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-extrabold mb-8 uppercase tracking-widest text-sm">Links Úteis</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-600">
                <li><Link href="#servicos" className="hover:text-gray-900 transition-colors">Nossos Serviços</Link></li>
                <li><Link href="#sobre" className="hover:text-gray-900 transition-colors">Sobre a Empresa</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Termos de Segurança</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-extrabold mb-8 uppercase tracking-widest text-sm">Contato</h4>
              <ul className="space-y-5 text-sm font-semibold text-gray-600">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-gray-900 shrink-0 mt-0.5" />
                  <span>Praça Duque de Caxias 15, Santa Tereza<br/>Belo Horizonte - MG</span>
                </li>
                <li className="flex items-center gap-4">
                  <Smartphone size={20} className="text-gray-900 shrink-0" />
                  <span>(31) 98826-3159</span>
                </li>
                <li className="flex items-center gap-4">
                  <MessageCircle size={20} className="text-gray-900 shrink-0" />
                  <span>contato@imperiodrywall.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-semibold text-gray-500">
            <p>&copy; {new Date().getFullYear()} Império Drywall & Elétrica. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Design Minimalista de Alta Conversão</p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform group flex items-center justify-center drop-shadow-2xl"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white z-20 shadow-md">
          1
        </span>
        <img src="/imagens/icone-do-whatsapp.svg" alt="WhatsApp" className="relative z-10 w-16 h-16 object-contain" />
      </a>
    </div>
  );
}
