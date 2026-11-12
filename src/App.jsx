import React, { useState, useEffect } from 'react';
import { 
  Code2, Sparkles, Mail, Github, Linkedin, ExternalLink, 
  Menu, X, ArrowRight, Copy, Check, Send, User, 
  FolderGit2, Eye, Zap, Layers, Monitor, Cpu
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const email = "renan.klamerick@exemplo.com";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
    document.body.removeChild(textArea);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 4000);
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com" }
  ];

  const knowledgeCategories = [
    {
      title: "Core Frontend",
      icon: <Code2 className="w-6 h-6 text-violet-400" />,
      items: ["React", "Vite", "JavaScript (ES6+)", "TypeScript", "HTML5 / Semantic UI", "CSS3 / Modern CSS"]
    },
    {
      title: "Styling & UI",
      icon: <Monitor className="w-6 h-6 text-fuchsia-400" />,
      items: ["TailwindCSS", "Responsive Design", "UI/UX Principles", "Micro-interactions", "Animations & Transitions"]
    },
    {
      title: "Automação & Integrações",
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
      items: ["Google Apps Script", "Consumo de APIs REST", "Manipulação de JSON", "Workflows Dinâmicos"]
    },
    {
      title: "Ferramentas & Hardware",
      icon: <Cpu className="w-6 h-6 text-fuchsia-400" />,
      items: ["Git & GitHub", "Linux (Pop!_OS)", "RK Informática (Suporte)", "Otimização de Performance"]
    }
  ];

  const projectsList = [
    {
      title: "Sistema de Agendamento Interativo",
      description: "Interface web fluida e responsiva desenvolvida para gerenciamento dinâmico de horários e disponibilidade, priorizando experiência do usuário (UX).",
      tags: ["React", "TailwindCSS", "JavaScript", "UI/UX"],
      link: "#"
    },
    {
      title: "Automações Dinâmicas c/ Apps Script",
      description: "Painéis e scripts inteligentes integrados com Google Sheets para processamento automático de estruturas JSON e relatórios visuais.",
      tags: ["Google Apps Script", "JavaScript", "JSON", "Frontend UI"],
      link: "#"
    },
    {
      title: "RK Informática & Soluções Técnicas",
      description: "Plataforma web informativa e suporte especializado em infraestrutura, hardware e consultoria técnica personalizada.",
      tags: ["HTML/CSS", "JavaScript", "Suporte Técnico", "Responsive"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-slate-100 font-sans selection:bg-violet-600 selection:text-white transition-colors duration-500">
      
      {/* Aba Oculta / Modal Interativa */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#15151c] border border-violet-500/20 rounded-[2.5rem] max-w-lg w-full p-8 shadow-2xl relative">
            <button 
              onClick={() => setShowEasterEgg(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-violet-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3.5 rounded-2xl bg-violet-950/60 text-violet-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Painel Interativo</span>
                <h3 className="text-xl font-extrabold tracking-tight">Bastidores & Detalhes</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-8">
              <p>
                Você descobriu a aba oculta! Como desenvolvedor <strong className="text-violet-400 font-semibold">Frontend</strong>, meu foco obsessivo é criar interfaces que unem beleza visual minimalista, micro-animações fluidas e usabilidade impecável.
              </p>
              <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-900/50 flex items-center justify-between">
                <div>
                  <span className="block font-bold text-violet-200 text-xs uppercase tracking-wider">Stack Favorita</span>
                  <span className="text-xs text-violet-400 font-medium">React + TailwindCSS + Vite</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-violet-500 animate-ping"></div>
              </div>
            </div>

            <button 
              onClick={() => setShowEasterEgg(false)}
              className="w-full py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold transition-all shadow-lg"
            >
              Fechar Painel
            </button>
          </div>
        </div>
      )}

      {/* Header Fixo */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrollY > 20 ? 'bg-[#0b0b0f]/90 backdrop-blur-md shadow-sm border-b border-slate-800/60' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              R
            </div>
            <span className="font-extrabold text-lg tracking-tight">Renan<span className="text-violet-400">.</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#home" className="hover:text-violet-400 transition-colors">Home</a>
            <a href="#sobre" className="hover:text-violet-400 transition-colors">Sobre mim</a>
            <a href="#projetos" className="hover:text-violet-400 transition-colors">Projetos</a>
            <a href="#conhecimentos" className="hover:text-violet-400 transition-colors">Conhecimentos</a>
            <a href="#contato" className="hover:text-violet-400 transition-colors">Fale comigo</a>
            
            <div className="flex items-center gap-2 pl-4 border-l border-slate-800">
              {socialLinks.map((s, idx) => (
                <a 
                  key={idx} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-violet-400 hover:bg-violet-950/40 transition-all"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl bg-slate-900 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#15151c] border-b border-slate-800 px-6 pt-4 pb-6 space-y-3 shadow-2xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-semibold border-b border-slate-800/50">Home</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-semibold border-b border-slate-800/50">Sobre mim</a>
            <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-semibold border-b border-slate-800/50">Projetos</a>
            <a href="#conhecimentos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-semibold border-b border-slate-800/50">Conhecimentos</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 font-semibold border-b border-slate-800/50">Fale comigo</a>
            <div className="flex items-center gap-4 pt-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Redes:</span>
              {socialLinks.map((s, idx) => (
                <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800 text-slate-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-28">
        {/* 1. HOME */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center relative">
          <div className="absolute top-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-950/50 border border-violet-900/40 text-violet-300 text-xs font-bold mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Desenvolvedor Frontend & UI Specialist</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight max-w-4xl mb-6 leading-[1.1]">
            Criando experiências visuais <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">únicas & fluidas</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
            Olá! Sou <strong className="text-slate-100 font-semibold">Renan Klamerick</strong>. Especialista em transformar ideias em interfaces web modernas, responsivas e de alto impacto com React e TailwindCSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold transition-all shadow-xl shadow-violet-600/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explorar Projetos
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button 
              onClick={() => setShowEasterEgg(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#15151c] border border-slate-800 text-slate-200 hover:border-violet-500/50 transition-all font-bold shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Eye className="w-4 h-4 text-violet-400" />
              <span>Painel Interativo</span>
            </button>
          </div>
        </section>

        {/* 2. SOBRE MIM */}
        <section id="sobre" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/60">
          <div className="flex items-center gap-3.5 mb-12">
            <div className="p-3.5 bg-violet-950/50 border border-violet-900/40 rounded-2xl text-violet-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Sobre mim</h2>
              <p className="text-sm font-medium text-slate-400">Minha trajetória e foco atual no frontend</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                Minha paixão sempre foi o design de interfaces e a engenharia frontend. Sou focado em criar aplicações web que não apenas funcionam perfeitamente, mas que encantam visualmente através de uma experiência de usuário (UX) impecável.
              </p>
              <p>
                Trabalho diariamente com <strong className="text-slate-100 font-semibold">React, Vite e TailwindCSS</strong>, construindo componentes reutilizáveis, estados dinâmicos e layouts altamente responsivos para qualquer dispositivo.
              </p>
              <p>
                Além do desenvolvimento frontend, atuo também com soluções técnicas na <strong className="text-slate-100 font-semibold">RK Informática</strong> e automações com Google Apps Script, unindo versatilidade técnica com design de alto nível.
              </p>
            </div>

            <div className="p-8 bg-[#15151c] border border-slate-800 rounded-[2rem] space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-400">Perfil Profissional</span>
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse"></span>
              </div>
              <ul className="space-y-4 text-sm font-semibold text-slate-300">
                <li className="flex justify-between border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400 font-medium">Especialidade:</span>
                  <span className="text-slate-100">Frontend & UI</span>
                </li>
                <li className="flex justify-between border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400 font-medium">Stack Principal:</span>
                  <span className="text-slate-100">React / Tailwind</span>
                </li>
                <li className="flex justify-between border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400 font-medium">Suporte / Lab:</span>
                  <span className="text-slate-100">RK Informática</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400 font-medium">Sistema OS:</span>
                  <span className="text-violet-400">Pop!_OS / Linux</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. PROJETOS */}
        <section id="projetos" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/60">
          <div className="flex items-center gap-3.5 mb-12">
            <div className="p-3.5 bg-violet-950/50 border border-violet-900/40 rounded-2xl text-violet-400">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Projetos</h2>
              <p className="text-sm font-medium text-slate-400">Interfaces e aplicações web recentes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
              <div 
                key={index} 
                className="bg-[#15151c] border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between hover:border-violet-500/40 transition-all group shadow-xl hover:-translate-y-1.5 duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-slate-900 rounded-2xl text-violet-400 group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <a 
                      href={project.link} 
                      className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-violet-400 transition-colors"
                      title="Ver Projeto"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-100 mb-3 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 rounded-xl bg-slate-900 text-xs font-bold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CONHECIMENTOS */}
        <section id="conhecimentos" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/60">
          <div className="flex items-center gap-3.5 mb-12">
            <div className="p-3.5 bg-violet-950/50 border border-violet-900/40 rounded-2xl text-violet-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Conhecimentos</h2>
              <p className="text-sm font-medium text-slate-400">Tecnologias e ferramentas dominadas no frontend</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeCategories.map((cat, index) => (
              <div 
                key={index}
                className="bg-[#15151c] border border-slate-800 rounded-[2rem] p-8 hover:border-violet-500/40 transition-all shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 bg-slate-900 rounded-2xl">
                    {cat.icon}
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-100">{cat.title}</h3>
                </div>

                <ul className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3 text-sm text-slate-400 font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FALE COMIGO */}
        <section id="contato" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/60">
          <div className="flex items-center gap-3.5 mb-12">
            <div className="p-3.5 bg-violet-950/50 border border-violet-900/40 rounded-2xl text-violet-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Fale Comigo</h2>
              <p className="text-sm font-medium text-slate-400">Entre em contato para projetos ou parcerias</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-slate-400 text-base leading-relaxed font-normal">
                Tem algum projeto frontend em mente, precisa de uma interface moderna desenvolvida ou quer conversar sobre tecnologia? Envie uma mensagem!
              </p>

              <div className="p-8 bg-[#15151c] border border-slate-800 rounded-[2rem] space-y-4 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail Profissional</span>
                <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                  <span className="font-mono text-sm font-bold text-violet-400">{email}</span>
                  <button 
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200 transition-all shadow-sm"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? "Copiado!" : "Copiar"}</span>
                  </button>
                </div>
              </div>

              <div className="p-8 bg-[#15151c] border border-slate-800 rounded-[2rem] space-y-4 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Redes Disponíveis</span>
                <div className="flex gap-4">
                  {socialLinks.map((s, idx) => (
                    <a 
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-5 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-200 hover:text-violet-400 hover:border-violet-500 transition-all font-bold text-sm shadow-sm"
                    >
                      {s.icon}
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-[#15151c] border border-slate-800 rounded-[2rem] p-8 space-y-5 shadow-xl">
              <h3 className="text-xl font-black text-slate-100 mb-2">Envie uma mensagem</h3>
              
              {formSubmitted && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-sm font-bold">
                  Mensagem simulada enviada com sucesso! Retornarei em breve.
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Seu Nome</label>
                <input 
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Ex: Maria Souza"
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-violet-600 transition-colors text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Seu E-mail</label>
                <input 
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="maria@exemplo.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-violet-600 transition-colors text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sua Mensagem</label>
                <textarea 
                  rows="4"
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-violet-600 transition-colors text-sm font-semibold resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-violet-600/20"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 6. REDES (Rodapé) */}
      <footer className="border-t border-slate-800/60 bg-[#0b0b0f] py-12 mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 font-extrabold text-sm">
            <div className="w-7 h-7 rounded-xl bg-violet-600 text-white flex items-center justify-center text-xs shadow-md">
              R
            </div>
            <span>Renan Klamerick © 2026</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span className="font-bold text-xs uppercase tracking-wider">Redes:</span>
            {socialLinks.map((s, idx) => (
              <a 
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition-colors flex items-center gap-1.5 font-bold"
              >
                {s.icon}
                <span>{s.name}</span>
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-400 font-medium">
            Frontend UI • React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}