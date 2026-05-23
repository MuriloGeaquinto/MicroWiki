import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, History, Cpu } from 'lucide-react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import { componentsData } from '../data/componentsData';

const components = componentsData.map(component => ({
  id: component.id,
  name: component.name,
  slug: component.slug,
  image_url: component.image,        
  color: component.naturezaCor,  
  description: component.descricao,
  category: component.categoria,
  fabricante: component.fabricante
}));

// Botões de navegação
const navButtons = [
  { name: "Comunidade", path: "/forum", icon: MessageCircle, color: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
  { name: "Ideias", path: "/ideias", icon: Lightbulb, color: "bg-yellow-500", hoverColor: "hover:bg-yellow-600" },
  { name: "Linha do Tempo", path: "/timeline", icon: History, color: "bg-purple-500", hoverColor: "hover:bg-purple-600" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // EASTER EGG: Primeiro de abril
  const handleSearch = (query) => {
    const normalizedQuery = query.toLowerCase().trim();
  
    if (normalizedQuery === 'primeiro de abril') {
      window.location.href = 'https://youtu.be/dQw4w9WgXcQ?t=42';
      return;
    }
  
    if (normalizedQuery === 'schayder') {
      window.location.href = 'https://youtu.be/HpC4K9e9pHs';
      return;
    }
  };

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          component.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          component.fabricante?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section com cards de navegação */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 -mt-8">
        {/* Logo e título */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center w-full px-2"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-4">
              <Cpu className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="font-bold text-5xl md:text-6xl text-stone-800 mb-3">MicroWiki</h1>
          <p className="text-stone-500 text-lg md:text-xl">
            Catálogo de microcontroladores, sensores e componentes eletrônicos
          </p>
        </motion.div>

        {/* Cards de navegação */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {navButtons.map((btn) => (
            <Link
              key={btn.name}
              to={btn.path}
              className={`group ${btn.color} ${btn.hoverColor} text-white rounded-2xl px-6 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-40 text-center`}
            >
              <btn.icon className="w-8 h-8 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
              <span className="font-medium text-sm">{btn.name}</span>
            </Link>
          ))}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-stone-50 to-transparent" />
      </section>

      {/* Catalog Section */}
      <section className="w-full px-2 sm:px-4 py-12">
        {/* Cabeçalho do catálogo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-13 px-2"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800">Catálogo de Componentes</h2>
            <p className="text-stone-600 mt-2">Descubra componentes eletrônicos</p>
          </div>
          
          {/* Barra de pesquisa e filtro */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery}
              onSearch={handleSearch}
              className="w-full md:w-80" 
            />
            <Filter 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory} 
            />
          </div>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2">
          {filteredComponents.map((component, index) => (
            <motion.div 
              key={component.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-70 sm:max-w-75 lg:max-w-75 mx-auto"
            >
              <Card component={component} />
            </motion.div>
          ))}
        </div>

        {/* Mensagem quando não encontra resultados */}
        {filteredComponents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-16"
          >
            <p className="text-stone-500 text-lg">
              Nenhum componente encontrado com os filtros selecionados.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
}