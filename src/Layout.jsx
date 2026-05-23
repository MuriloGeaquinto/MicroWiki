import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Cpu, MessageCircle, Lightbulb, History } from 'lucide-react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="w-full px-0">
          <div className="flex items-center justify-between h-14 md:h-16 px-4 sm:px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg p-1.5">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-stone-800 hidden sm:inline">MicroWiki</span>
            </Link>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-stone-600 hover:text-blue-600 text-base font-medium transition-colors">
                Início
              </Link>
              <Link to="/forum" className="text-stone-600 hover:text-blue-600 text-base font-medium transition-colors flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                Comunidade
              </Link>
            </nav>

            {/* Menu Mobile Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5 text-stone-600" />
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-4 py-3 shadow-lg">
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="text-stone-600 hover:text-blue-600 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/forum" 
                className="text-stone-600 hover:text-blue-600 py-2 text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                Comunidade
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 pt-16 md:pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-6 mt-16">
        <div className="w-full px-4 sm:px-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-lg p-1">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-stone-100 font-bold text-lg">MicroWiki</h3>
            </div>
            <p className="text-stone-400 text-xs">Sua comunidade de microcontroladores e eletrônica</p>
          </div>
          <div className="border-t border-stone-800 mt-4 pt-4 text-center text-stone-500 text-xs">
            © 2026 MicroWiki. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}