import React from 'react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Filter as FilterIcon, Check, Cpu, Zap, Shield, Eye, Radio, Smartphone } from 'lucide-react';

const categories = [
  { value: 'all', label: 'Todos', icon: FilterIcon, color: 'bg-linear-to-r from-stone-300 to-stone-500' },
  { value: 'Microcontrolador', label: 'Microcontroladores', icon: Cpu, color: 'bg-blue-500' },
  { value: 'Plataforma de Desenvolvimento', label: 'Plataformas', icon: Zap, color: 'bg-green-500' },
  { value: 'Computador de Placa Única', label: 'SBCs', icon: Smartphone, color: 'bg-purple-500' },
  { value: 'Sensor', label: 'Sensores', icon: Eye, color: 'bg-yellow-500' },
  { value: 'Atuador', label: 'Atuadores', icon: Radio, color: 'bg-red-500' },
  { value: 'Display', label: 'Displays', icon: Shield, color: 'bg-indigo-500' }
];

export default function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-stone-200 bg-white hover:bg-stone-50 rounded-full px-5 gap-2 shadow-sm h-10 w-full flex-1 md:max-w-80"
        >
          <FilterIcon className="h-4 w-4 text-stone-600/50" />
          <span className="text-stone-600/50 hidden sm:inline text-sm">Filtro</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56 bg-white border border-stone-200 shadow-lg rounded-lg p-1">
        {categories.map((cat) => (
          <DropdownMenuItem 
            key={cat.value} 
            onClick={() => onCategoryChange(cat.value)} 
            className={`flex items-center gap-3 cursor-pointer py-2.5 px-3 rounded-md ${selectedCategory === cat.value ? 'bg-stone-100' : 'bg-white hover:bg-stone-50'}`}
          >
            <div className={`w-6 h-6 rounded-full ${cat.color} flex items-center justify-center`}>
              <cat.icon className="w-3 h-3 text-white" />
            </div>
            <span className="text-stone-700 text-sm">{cat.label}</span>
            {selectedCategory === cat.value && <Check className="h-4 w-4 ml-auto text-blue-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}