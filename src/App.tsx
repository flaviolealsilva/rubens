/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  Zap, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Lock, 
  Code, 
  Star,
  Menu,
  X,
  FileText,
  MousePointer2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Form State and Handler
  const FormContainer = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      interest: 'Marca (Nome / Logo)'
    });

    const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      const message = `Olá Rubens! Meu nome é ${formData.name}.
Gostaria de um diagnóstico sobre Propriedade Intelectual.
E-mail: ${formData.email}
Telefone: ${formData.phone}
Interesse: ${formData.interest}`;

      const whatsappUrl = `https://wa.me/5511937201963?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <form className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10" onSubmit={handleSendMessage}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nome Completo</label>
            <input 
              required
              type="text" 
              placeholder="Ex: João Silva" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-main transition-all" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">E-mail Corporativo</label>
            <input 
              required
              type="email" 
              placeholder="nome@suaempresa.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-main transition-all" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Telefone / WhatsApp</label>
            <input 
              required
              type="tel" 
              placeholder="(11) 99999-9999" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-main transition-all" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">O que você deseja proteger?</label>
            <div className="relative">
              <select 
                className="w-full bg-[#110101] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-main transition-all appearance-none cursor-pointer"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option>Marca (Nome / Logo)</option>
                <option>Software / App</option>
                <option>Patente de Invenção</option>
                <option>Direitos Autorais</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                <ArrowRight className="rotate-90 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <button 
          type="submit"
          className="w-full bg-brand-main hover:bg-brand-main/90 text-white py-5 rounded-2xl font-black text-xl transition-all glow-main flex items-center justify-center gap-2 mt-4"
        >
          Falar com um Especialista Agora
          <MousePointer2 size={24} />
        </button>
        <p className="text-[10px] text-gray-500 text-center mt-4">
          Ao clicar, os dados serão enviados via WhatsApp para Rubens dos Santos Filho.
        </p>
      </form>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-main/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-main p-2 rounded-lg">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                TALENT
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors">Serviços</a>
              <a href="#proof" className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors">Segurança</a>
              <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors">Contato</a>
              <a 
                href="https://wa.me/5511937201963?text=Vim%20pelo%20site%20e%20tenho%20uma%20d%C3%BAvida" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-main hover:bg-brand-main/90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all glow-main flex items-center gap-2"
              >
                Proteger Minha Ideia Agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-dark-bg border-t border-white/10 px-4 py-6 space-y-4"
          >
            <a href="#services" className="block text-lg text-gray-300">Serviços</a>
            <a href="#proof" className="block text-lg text-gray-300">Segurança</a>
            <a href="#contact" className="block text-lg text-gray-300">Contato</a>
            <a 
              href="https://wa.me/5511937201963?text=Vim%20pelo%20site%20e%20tenho%20uma%20d%C3%BAvida" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-center block"
            >
              Proteger Minha Ideia Agora
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-main/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-main/10 border border-brand-main/20 text-brand-main text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} /> Inteligência Jurídica em Tempo Real
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
              Uma ideia genial sem registro é apenas um <span className="text-brand-accent">presente para o seu concorrente.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Proteja sua marca, software ou patente hoje. Garantimos segurança jurídica total para que você foque apenas em crescer, sem o medo de ser copiado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5511937201963?text=Vim%20pelo%20site%20e%20tenho%20uma%20d%C3%BAvida" 
                target="_blank" 
                rel="noreferrer"
                className="animate-pulse-soft bg-brand-main hover:bg-brand-main/90 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all glow-main group flex items-center gap-3"
              >
                <Search className="group-hover:rotate-12 transition-transform" />
                Fazer Busca Gratuita de Disponibilidade
              </a>
              <button className="bg-transparent hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-bold text-xl border border-white/20 transition-all flex items-center gap-2 text-brand-accent border-brand-accent/20">
                Ver Planos
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/WIPO_logo.svg" alt="WIPO" className="h-8 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/INPI_Logo.svg/2560px-INPI_Logo.svg.png" alt="INPI" className="h-6 invert" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain & Urgency Section */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que o Tempo é seu Pior Inimigo?</h2>
            <div className="h-1.5 w-24 bg-brand-main mx-auto rounded-full"></div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Zap className="text-brand-gold" />,
                title: "O Risco da Demora",
                desc: "Alguém pode registrar sua marca hoje mesmo. No Brasil, o direito pertence ao primeiro que protocola, não ao primeiro que usa.",
                highlight: "Protocolos diários: +4.000"
              },
              {
                icon: <AlertTriangle className="text-red-500" />,
                title: "Casos Históricos",
                desc: "A Apple pagou US$ 60 milhões para usar a marca 'iPad' na China por não ter garantido o registro global corretamente.",
                highlight: "Prejuízo evitado com Protege.AI"
              },
              {
                icon: <Globe className="text-brand-main" />,
                title: "Domínio Público",
                desc: "Sem patente, sua invenção não tem dono. Em 12 meses de exposição pública sem pedido, sua ideia torna-se de todos.",
                highlight: "Proteja enquanto há tempo"
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="glass p-8 rounded-3xl group hover:border-brand-main/50 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4 bg-white/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="text-brand-main" />
                </div>
                <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{card.desc}</p>
                <div className="text-sm font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-4 py-2 rounded-lg inline-block">
                  {card.highlight}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Board for Engagement */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-brand-main rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-main to-[#4c0519] opacity-50"></div>
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-black mb-2">+15.000</p>
              <p className="text-red-100 text-sm font-bold uppercase tracking-widest">Marcas Protegidas</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">99.2%</p>
              <p className="text-red-100 text-sm font-bold uppercase tracking-widest">Taxa de Sucesso</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">R$ 2Bi+</p>
              <p className="text-red-100 text-sm font-bold uppercase tracking-widest">Valuation Blindado</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">24h</p>
              <p className="text-red-100 text-sm font-bold uppercase tracking-widest">Tempo de Resposta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <span className="text-brand-main font-bold text-sm tracking-widest uppercase mb-2 block">Nosso Portfolio de Proteção</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Segurança 360º para seu Ativo</h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Desde o logo até o código-fonte, cuidamos de cada vírgula da sua propriedade intelectual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck />, name: "Registro de Marca", desc: "Nome, logo e identidade visual exclusiva." },
              { icon: <Zap />, name: "Patentes de Invenção", desc: "Processos, dispositivos e novas tecnologias." },
              { icon: <Code />, name: "Registro de Software", desc: "Proteção total do código-fonte e algoritmos." },
              { icon: <FileText />, name: "Direitos Autorais", desc: "Obras artísticas, textos e design exclusivo." }
            ].map((service, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl hover:bg-white/[0.05] transition-all cursor-pointer border-transparent group">
                <div className="text-brand-main mb-6 group-hover:scale-125 transition-transform origin-left">{service.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="proof" className="py-24 px-4 bg-brand-main/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-16 italic">"A TALENT transformou nosso maior risco em nosso maior ativo de valuation."</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lucas Almeida",
                role: "CEO na TechNova",
                text: "Estávamos sendo copiados por uma gigante asiática. Graças ao registro ágil da Protege.AI, vencemos a disputa judicial.",
                stars: 5
              },
              {
                name: "Marina Costa",
                role: "Fundadora da NeoHealth",
                text: "O registro do nosso software foi essencial para atrair os investidores Série A. Aumentou nossa confiança no mercado.",
                stars: 5
              },
              {
                name: "Ricardo Mendes",
                role: "Inventor Independente",
                text: "Nunca achei que registrar uma patente fosse tão simples. A equipe é técnica e extremamente rápida.",
                stars: 5
              }
            ].map((testimony, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl text-left"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimony.stars)].map((_, i) => <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimony.text}"</p>
                <div>
                  <p className="text-white font-bold">{testimony.name}</p>
                  <p className="text-brand-main text-sm">{testimony.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511937201963?text=Olá,%20gostaria%20de%20falar%20com%20Rubens%20dos%20Santos%20Filho%20sobre%20proteção%20de%20marca."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group animate-bounce"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.208-.242-.581-.487-.503-.67-.512-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.822 11.822 0 001.606 6.005L0 24l6.128-1.607a11.803 11.803 0 005.922 1.586h.005c6.64 0 12.05-5.414 12.053-12.052a11.85 11.85 0 00-3.479-8.422z" />
        </svg>
        <span className="hidden group-hover:inline font-bold">Falar com Rubens</span>
      </a>

      {/* Final CTA & Contact Form */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-main/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                O seu maior ativo é a sua criatividade. <span className="text-brand-main">Não deixe que ela vire lucro de outra pessoa.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Preencha o formulário e receba um diagnóstico gratuito da sua propriedade intelectual em menos de 24 horas.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="text-green-500 w-5 h-5" /></div>
                  Diagnóstico por Rubens dos Santos Filho
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="text-green-500 w-5 h-5" /></div>
                  Acompanhamento Jurídico em Tempo Real
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="bg-brand-main/20 p-1 rounded-full"><Zap className="text-brand-main w-5 h-5" /></div>
                  Protocolo TALENT: Rapidez & Precisão
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <FormContainer />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-[#0a0101]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-main p-2 rounded-lg">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">TALENT</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Liderança e excelência em Propriedade Intelectual. Protegemos o que você tem de mais valioso: seu talento e sua inovação.
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-white font-bold">Contato Direto</h5>
            <div className="space-y-3">
              <a href="mailto:contato@talentpi.com.br" className="flex items-center gap-3 text-gray-400 hover:text-brand-main transition-colors text-sm">
                <div className="bg-white/5 p-2 rounded-lg">@</div>
                contato@talentpi.com.br
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="bg-white/5 p-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                Rubens dos Santos Filho
              </div>
              <a href="https://wa.me/5511937201963" className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors text-sm">
                <div className="bg-white/5 p-2 rounded-lg">W</div>
                (11) 93720-1963
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold">Links Rápidos</h5>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Suporte Jurídico</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2026 TALENT - Propriedade Intelectual. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
