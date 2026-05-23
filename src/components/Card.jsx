import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Card({ component }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group">
     <Link to={`/rocha/${component.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="aspect-5/4 overflow-hidden">
            <img src={component.image_url} alt={component.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4 px-1">
          <h3 className="text-lg font-medium text-stone-800 tracking-wide group-hover:text-blue-700 transition-colors">{component.name}</h3>
          {component.category && <p className="text-sm text-stone-500 mt-1">{component.category}</p>}
        </div>
      </Link>
    </motion.div>
  );
}