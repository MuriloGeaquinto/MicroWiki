import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function SearchBar({ value, onChange, onSearch, className = '' }) {
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-600/50" />
      <Input
        type="text"
        placeholder="Buscar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-12 pr-6 py-4 bg-white border-stone-200 rounded-full text-base placeholder:text-stone-600/50 focus:ring-amber-500 focus:border-amber-500 w-full h-10 shadow-sm"
      />
    </div>
  );
}