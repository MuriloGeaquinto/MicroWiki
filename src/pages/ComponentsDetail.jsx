import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Cpu, BookOpen, ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { componentsData } from '../data/componentsData';

// ─── Popup genérico ───────────────────────────────────────────────────────────
function Popup({ isOpen, onClose, title, icon: Icon, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full z-10 max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              {Icon && (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
              )}
              <h2 className="font-serif text-2xl font-light text-stone-800">{title}</h2>
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Componente de Biblioteca ─────────────────────────────────────────────────
function BibliotecaCard({ biblioteca }) {
  return (
    <a
      href={biblioteca.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg p-3 border border-stone-200 hover:border-blue-500 hover:shadow-md transition-all group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-stone-400 group-hover:text-blue-600" />
          <span className="text-sm font-medium text-stone-700 group-hover:text-blue-600">
            {biblioteca.nome}
          </span>
        </div>
        <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-blue-600" />
      </div>
    </a>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function ComponentsDetail() {
  const { slug } = useParams();
  const component = componentsData.find(c => c.slug === slug);

  const [popupBibliotecas, setPopupBibliotecas] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  if (!component) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-stone-800 mb-4">Componente não encontrado</h1>
          <Link to="/"><Button variant="outline">Voltar ao catálogo</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Popup de Bibliotecas */}
      <Popup
        isOpen={popupBibliotecas}
        onClose={() => setPopupBibliotecas(false)}
        title="Bibliotecas Suportadas"
        icon={BookOpen}
      >
        <div className="space-y-3">
          <p className="text-sm text-stone-600 mb-4">
            Bibliotecas disponíveis para {component.name}:
          </p>
          {component.bibliotecas?.map((lib, idx) => (
            <BibliotecaCard key={idx} biblioteca={lib} />
          ))}
        </div>
      </Popup>

      {/* Imagem expandida */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div 
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
            style={{ background: 'rgba(0, 0, 0, 0.75)' }}
          >
            <motion.div 
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={component.image} 
                alt={component.name} 
                className="w-full h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all"
                onClick={() => setIsImageZoomed(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão voltar */}
      <div className="w-full px-4 sm:px-6 py-6">
        <Link to="/">
          <Button variant="ghost" className="text-stone-600 hover:text-stone-900 gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar ao catálogo
          </Button>
        </Link>
      </div>

      <div className="w-full px-4 sm:px-6 pb-20">
        {/* Foto + info básica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 xl:gap-6 items-start max-w-5xl mx-auto pb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:mr-5"
          >
            <div 
              className="w-80 sm:w-96 md:w-96 lg:w-full lg:max-w-md h-auto aspect-square rounded-3xl overflow-hidden shadow-2xl mx-auto cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsImageZoomed(true)}
            >
              <img src={component.image} alt={component.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:py-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {component.categoria}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-4">
              {component.name}
            </h1>
            <p className="text-stone-600 leading-relaxed mb-6">
              {component.descricao}
            </p>
            
            {/* Links do Fabricante */}
            <div className="flex flex-wrap gap-3 mb-6">
              {component.siteFabricante && (
                <a
                  href={component.siteFabricante}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-stone-100 hover:bg-blue-100 text-stone-700 hover:text-blue-700 px-4 py-2 rounded-full transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Site do Fabricante
                </a>
              )}
              {component.documentacao && (
                <a
                  href={component.documentacao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-stone-100 hover:bg-blue-100 text-stone-700 hover:text-blue-700 px-4 py-2 rounded-full transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Documentação Oficial
                </a>
              )}
              {component.bibliotecas && component.bibliotecas.length > 0 && (
                <button
                  onClick={() => setPopupBibliotecas(true)}
                  className="inline-flex items-center gap-2 text-sm bg-stone-100 hover:bg-blue-100 text-stone-700 hover:text-blue-700 px-4 py-2 rounded-full transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  Bibliotecas ({component.bibliotecas.length})
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Especificações Técnicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="font-serif text-3xl font-light text-stone-800 mb-8">Especificações Técnicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tabela de especificações */}
            <div className="bg-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">📋 Características</h3>
              <div className="space-y-3">
                {component.especificacoes?.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-stone-600">{item.caracteristica}</span>
                    <span className="text-sm text-stone-800">{item.valor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parâmetros Elétricos */}
            <div className="bg-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">⚡ Parâmetros Elétricos</h3>
              <div className="space-y-3">
                {component.tensaoOperacao && (
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-stone-600">Tensão de Operação</span>
                    <span className="text-sm text-stone-800">{component.tensaoOperacao}</span>
                  </div>
                )}
                {component.corrente && (
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-stone-600">Corrente</span>
                    <span className="text-sm text-stone-800">{component.corrente}</span>
                  </div>
                )}
                {component.gpios && (
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-stone-600">GPIOs</span>
                    <span className="text-sm text-stone-800">{component.gpios}</span>
                  </div>
                )}
                {component.adc && (
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-stone-600">ADC</span>
                    <span className="text-sm text-stone-800">{component.adc}</span>
                  </div>
                )}
                {component.pwm && (
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-sm font-medium text-stone-600">PWM</span>
                    <span className="text-sm text-stone-800">{component.pwm}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Linguagens Suportadas */}
          {component.linguagens && component.linguagens.length > 0 && (
            <div className="mt-8 bg-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">🖥️ Linguagens Suportadas</h3>
              <div className="flex flex-wrap gap-2">
                {component.linguagens.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-stone-700 border border-stone-200">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Uso Recomendado */}
          {component.usoRecomendado && (
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-2">💡 Uso Recomendado</h3>
              <p className="text-stone-700">{component.usoRecomendado}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}