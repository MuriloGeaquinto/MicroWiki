import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, Code, BookOpen, ExternalLink, 
  Cpu, Clock, Target, X, ChevronRight
} from 'lucide-react';
import { projetosData } from '../data/projetosData';
import { componentsData } from '../data/componentsData';

// Popup do projeto
function ProjetoPopup({ projeto, isOpen, onClose }) {
  const [copiado, setCopiado] = useState(false);

  const copiarCodigo = () => {
    navigator.clipboard.writeText(projeto.codigoBase);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const getComponentLink = (slug) => {
    return `/rocha/${slug}`;
  };

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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="sticky top-0 right-0 z-10 float-right m-4 text-stone-400 hover:text-stone-700 transition-colors bg-white rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 pt-0">
              {/* Cabeçalho */}
              <div className="border-b border-stone-200 pb-4 mb-6">
                <h2 className="font-serif text-3xl font-light text-stone-800">{projeto.titulo}</h2>
                <div className="flex gap-4 mt-3">
                  <span className="flex items-center gap-1 text-sm text-stone-500">
                    <Target className="w-4 h-4" />
                    {projeto.nivel}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-stone-500">
                    <Clock className="w-4 h-4" />
                    {projeto.tempo}
                  </span>
                </div>
                <p className="text-stone-600 mt-3">{projeto.descricao}</p>
              </div>

              {/* Componentes Necessários */}
              <div className="mb-6">
                <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  Componentes Necessários
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projeto.componentes.map((comp) => (
                    <Link
                      key={comp.id}
                      to={getComponentLink(comp.slug)}
                      onClick={onClose}
                      className="inline-flex items-center gap-1 bg-stone-100 hover:bg-blue-100 text-stone-700 hover:text-blue-700 px-3 py-1.5 rounded-full text-sm transition-colors"
                    >
                      {comp.nome}
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bibliotecas */}
              {projeto.bibliotecas.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    Bibliotecas Necessárias
                  </h3>
                  <div className="space-y-2">
                    {projeto.bibliotecas.map((lib, idx) => (
                      <a
                        key={idx}
                        href={lib.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-sm text-stone-700 group-hover:text-blue-700">{lib.nome}</span>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-blue-600" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Código Base */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-stone-800 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-600" />
                    Código Base
                  </h3>
                  <button
                    onClick={copiarCodigo}
                    className="text-sm bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded-lg transition-colors"
                  >
                    {copiado ? "Copiado! ✓" : "Copiar código"}
                  </button>
                </div>
                <pre className="bg-stone-900 text-stone-100 p-4 rounded-xl overflow-x-auto text-sm">
                  <code>{projeto.codigoBase}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Card do projeto
function ProjetoCard({ projeto, onClick }) {
  const niveisCores = {
    "Iniciante": "bg-green-100 text-green-700",
    "Intermediário": "bg-yellow-100 text-yellow-700",
    "Avançado": "bg-red-100 text-red-700"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden"
      onClick={() => onClick(projeto)}
    >
      <div className="aspect-video bg-linear-to-t from-blue-500 to-indigo-600 flex items-center justify-center">
        <Lightbulb className="w-16 h-16 text-white/30" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${niveisCores[projeto.nivel]}`}>
            {projeto.nivel}
          </span>
          <span className="text-xs text-stone-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {projeto.tempo}
          </span>
        </div>
        <h3 className="font-semibold text-stone-800 mb-2">{projeto.titulo}</h3>
        <p className="text-stone-500 text-sm line-clamp-2">{projeto.descricao}</p>
        <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium">
          Ver detalhes
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Ideias() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [filtroNivel, setFiltroNivel] = useState("todos");

  const niveis = ["todos", "Iniciante", "Intermediário", "Avançado"];
  
  const projetosFiltrados = filtroNivel === "todos" 
    ? projetosData 
    : projetosData.filter(p => p.nivel === filtroNivel);

  return (
    <div className="min-h-screen bg-stone-50">

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-8">
          {niveis.map(nivel => (
            <button
              key={nivel}
              onClick={() => setFiltroNivel(nivel)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filtroNivel === nivel
                  ? "bg-blue-600 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-100"
              }`}
            >
              {nivel === "todos" ? "Todos os níveis" : nivel}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosFiltrados.map(projeto => (
            <ProjetoCard
              key={projeto.id}
              projeto={projeto}
              onClick={setProjetoSelecionado}
            />
          ))}
        </div>

        {/* Mensagem vazia */}
        {projetosFiltrados.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl">
            <Lightbulb className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500">Nenhum projeto encontrado neste nível.</p>
          </div>
        )}
      </div>

      {/* Popup do Projeto */}
      {projetoSelecionado && (
        <ProjetoPopup
          projeto={projetoSelecionado}
          isOpen={!!projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
        />
      )}
    </div>
  );
}