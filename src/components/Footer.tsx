import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contato" className="bg-gradient-to-b from-brand-primary to-brand-blue-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">

          {/* Column 1: Brand & Lawyers */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl inline-block mb-4 hover:bg-white/15 transition-all duration-300">
                <img
                  src="/logo-header.png"
                  alt="Logo Torresantos Advocacia"
                  className="h-12 sm:h-14 md:h-20 w-auto brightness-0 invert"
                />
              </div>
              <h2 className="font-heading font-extrabold text-xl md:text-2xl text-white mb-6 tracking-tight">
                Torresantos Advocacia
              </h2>

              {/* Lawyers directly under brand name */}
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-xl border-y border-r border-white/10 border-l-4 border-l-transparent hover:border-l-brand-accent hover:bg-white/10 transition-all duration-300">
                  <p className="font-extrabold text-white mb-1 text-lg">Dr. Alysson Santos</p>
                  <p className="text-[12px] text-gray-400 uppercase tracking-widest font-bold">
                    OAB/PE 20.168 | OAB/DF 76.848
                  </p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border-y border-r border-white/10 border-l-4 border-l-transparent hover:border-l-brand-accent hover:bg-white/10 transition-all duration-300">
                  <p className="font-extrabold text-white mb-1 text-lg">Dra. Lara Torres</p>
                  <p className="text-[12px] text-gray-400 uppercase tracking-widest font-bold">
                    OAB/PE 22.904 | OAB/SP 501.577
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-lg text-brand-accent mb-6 uppercase tracking-wide">
              Contato
            </h3>
            <div className="space-y-4">
              {/* WhatsApp Card 1: Atendimento/Análise (011) */}
              <a
                href="https://wa.me/5511962888225"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white/5 rounded-xl border-y border-r border-white/10 border-l-4 border-l-transparent hover:bg-green-600/10 hover:border-l-brand-accent transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-green-600/20 flex items-center justify-center mr-3 group-hover:bg-green-600/40 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">WhatsApp (Atendimento)</p>
                  <p className="text-white font-bold">+55 11 96288-8225</p>
                </div>
              </a>

              {/* WhatsApp Card 2: Dúvidas (081) */}
              <a
                href="https://wa.me/5581998508877"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white/5 rounded-xl border-y border-r border-white/10 border-l-4 border-l-transparent hover:bg-green-600/10 hover:border-l-brand-accent transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-green-600/20 flex items-center justify-center mr-3 group-hover:bg-green-600/40 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dúvidas Frequentes</p>
                  <p className="text-white font-bold">+55 81 99850-8877</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:torresantosadvocacia@gmail.com"
                className="flex items-center p-4 bg-white/5 rounded-xl border-y border-r border-white/10 border-l-4 border-l-transparent hover:bg-brand-accent/10 hover:border-l-brand-accent transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-brand-accent/20 flex items-center justify-center mr-3 group-hover:bg-brand-accent/40 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-bold text-sm truncate">torresantosadvocacia@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Offices */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-lg text-brand-accent mb-6 uppercase tracking-wide">
              Escritórios
            </h3>
            <div className="space-y-4">
              {/* Recife Card */}
              <a
                href="https://www.google.com/maps/place/Torre+I/@-8.0870894,-34.8947511,18z/data=!3m1!4b1!4m6!3m5!1s0x7ab1f002542aa2b:0xc52fc4f6f801df36!8m2!3d-8.0870921!4d-34.8923156!16s%2Fg%2F11lv816tjb?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-xl border-y border-r border-white/10 border-l-4 border-l-transparent hover:bg-white/10 hover:border-l-brand-accent transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-accent/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-brand-accent/40 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold mb-1 text-base tracking-tight">Recife/PE</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                      Av. República do Líbano, 256<br />
                      RioMar Tradecenter, Torre 1<br />
                      Sala 2013, CEP 51110-160
                    </p>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">
              <a
                href="/termos-de-uso.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/politica-de-privacidade.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Políticas de Privacidade
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/politicas-de-cookies.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Políticas de Cookies
              </a>
            </div>
            <p className="text-xs text-gray-500">
              © {currentYear} Torresantos Advocacia. Todos os direitos reservados.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-center pt-4 border-t border-white/5">
            <p className="text-[10px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Este site tem caráter exclusivamente informativo, em conformidade com o Provimento 205/2021 da OAB.
              Não constitui promessa ou garantia de resultados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;