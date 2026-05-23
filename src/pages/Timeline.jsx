import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, Monitor, Lightbulb, Zap, Watch, 
  Smartphone, Radio, Cctv, ChevronRight, ExternalLink
} from 'lucide-react';

// Dados da linha do tempo
const timelineEvents = [
  {
    id: 1,
    year: 1946,
    title: "ENIAC - Primeiro Computador Eletrônico",
    description: "O ENIAC (Electronic Numerical Integrator and Computer) foi o primeiro computador digital eletrônico de grande escala. Ocupava 180m² e pesava 30 toneladas.",
    icon: Monitor,
    color: "bg-gray-700",
    image: "/img/timeline/eniac.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/ENIAC",
    inventors: "John Presper Eckert e John William Mauchly"
  },
  {
    id: 2,
    year: 1962,
    title: "LED Vermelho",
    description: "Nick Holonyak Jr. inventou o primeiro LED de luz visível, emitindo luz vermelha. Este foi o marco inicial para a tecnologia de iluminação LED.",
    icon: Lightbulb,
    color: "bg-red-600",
    image: "/img/timeline/led-red.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/LED",
    inventors: "Nick Holonyak Jr. (General Electric)"
  },
  {
    id: 3,
    year: 1971,
    title: "Intel 4004 - Primeiro Microprocessador",
    description: "O Intel 4004 foi o primeiro microprocessador comercial do mundo. Tinha 2.300 transistores e operava a 740 kHz. Revolucionou a computação pessoal.",
    icon: Cpu,
    color: "bg-blue-700",
    image: "/img/timeline/intel-4004.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/Intel_4004",
    inventors: "Federico Faggin, Ted Hoff, Stan Mazor (Intel)"
  },
  {
    id: 4,
    year: 1972,
    title: "LED Verde e Amarelo",
    description: "Após o LED vermelho, foram desenvolvidos LEDs verdes e amarelos, expandindo as possibilidades de uso em displays e indicadores.",
    icon: Lightbulb,
    color: "bg-green-600",
    image: "/img/timeline/led-green.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/LED",
    inventors: "Herbert Maruska e Jacques Pankove"
  },
  {
    id: 5,
    year: 1977,
    title: "Apple II - Computador Pessoal",
    description: "O Apple II foi um dos primeiros computadores pessoais de sucesso comercial, com teclado, gráficos coloridos e capacidade de áudio.",
    icon: Monitor,
    color: "bg-gray-600",
    image: "/img/timeline/apple2.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/Apple_II",
    inventors: "Steve Jobs e Steve Wozniak (Apple)"
  },
  {
    id: 6,
    year: 1978,
    title: "Motorola 68000",
    description: "Microprocessador de 16/32 bits usado no Macintosh original, Atari ST, Amiga e Sega Mega Drive. Um dos processadores mais influentes da história.",
    icon: Cpu,
    color: "bg-blue-600",
    image: "/img/timeline/motorola-68000.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/Motorola_68000",
    inventors: "Motorola"
  },
  {
    id: 7,
    year: 1993,
    title: "LED Azul",
    description: "Invenção crucial que permitiu a criação de LEDs brancos e telas coloridas. Shuji Nakamura, Isamu Akasaki e Hiroshi Amano ganharam o Nobel de Física por isso.",
    icon: Lightbulb,
    color: "bg-blue-500",
    image: "/img/timeline/led-blue.jpg",
    tipo: "externo",
    link: "https://pt.wikipedia.org/wiki/LED_azul",
    inventors: "Shuji Nakamura, Isamu Akasaki, Hiroshi Amano"
  },
  {
    id: 8,
    year: 1994,
    title: "LED RGB",
    description: "Combinação de LEDs vermelho, verde e azul em um único encapsulamento, permitindo milhões de cores a partir da mistura aditiva.",
    icon: Lightbulb,
    color: "bg-gradient-to-r from-red-500 via-green-500 to-blue-500",
    image: "/img/timeline/led-rgb.jpg",
    tipo: "interno",
    link: "/rocha/led-rgb",
    inventors: "Desenvolvimento comercial por várias empresas (Nichia, Osram, etc.)"
  },
  {
    id: 9,
    year: 2005,
    title: "Arduino",
    description: "Plataforma de prototipagem eletrônica open-source que revolucionou o ensino e o desenvolvimento de projetos eletrônicos, tornando a tecnologia acessível.",
    icon: Zap,
    color: "bg-teal-600",
    image: "/img/timeline/arduino.jpg",
    tipo: "interno",
    link: "/rocha/arduino-uno",
    inventors: "Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino"
  },
  {
    id: 10,
    year: 2012,
    title: "Raspberry Pi",
    description: "Computador de placa única de baixo custo criado para promover o ensino de ciência da computação. Tornou-se extremamente popular em projetos DIY.",
    icon: Smartphone,
    color: "bg-green-700",
    image: "/img/timeline/raspberry-pi.jpg",
    tipo: "interno",
    link: "/rocha/raspberry-pi-4",
    inventors: "Eben Upton (Raspberry Pi Foundation)"
  },
  {
    id: 11,
    year: 2016,
    title: "ESP32",
    description: "Microcontrolador com WiFi e Bluetooth integrados de baixo custo, popularizou o desenvolvimento de dispositivos IoT (Internet das Coisas).",
    icon: Cpu,
    color: "bg-orange-600",
    image: "/img/timeline/esp32.jpg",
    tipo: "interno",
    link: "/rocha/esp32",
    inventors: "Espressif Systems"
  },
  {
    id: 12,
    year: 2021,
    title: "Raspberry Pi Pico",
    description: "Microcontrolador RP2040 de baixo custo com suporte a MicroPython e C++, tornando-se popular para projetos educacionais e de prototipagem.",
    icon: Cpu,
    color: "bg-purple-600",
    image: "/img/timeline/pico.jpg",
    tipo: "interno",
    link: "/rocha/raspberry-pi-pico",
    inventors: "Raspberry Pi Foundation"
  }
];

function TimelineEvent({ event, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      {/* Linha conectora */}
      {index < timelineEvents.length - 1 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 -z-10" />
      )}

      <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}>
        {/* Ano */}
        <div className="md:w-1/4 text-center md:text-right">
          <div className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold text-2xl px-6 py-3 rounded-full shadow-lg">
            {event.year}
          </div>
        </div>

        {/* Card do evento */}
        <div className={`md:w-2/4 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
            {/* Imagem / Placeholder */}
            <div className="h-48 bg-linear-to-t from-gray-100 to-gray-200 flex items-center justify-center">
              <div className={`w-24 h-24 rounded-full ${event.color} flex items-center justify-center`}>
                <event.icon className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl font-semibold text-stone-800">
                  {event.title}
                </h3>
                {event.tipo === 'interno' ? (
                  <Link
                    to={event.link}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Ver componente
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Ver na Wikipedia
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                {event.description}
              </p>
              
              <div className="text-xs text-stone-400 border-t border-stone-100 pt-3">
                <span className="font-medium">Inventor(es):</span> {event.inventors}
              </div>
            </div>
          </div>
        </div>

        {/* Espaço vazio para alinhamento */}
        <div className="md:w-1/4" />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <div className="min-h-screen bg-linear-to-b from-stone-50 to-stone-100">

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Timeline */}
        <div className="relative">
          {/* Linha central (desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-300 via-indigo-300 to-blue-300 rounded-full" />
          
          {/* Eventos */}
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Legendas finais */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Sobre esta linha do tempo
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span>Componentes disponíveis no catálogo (clique para detalhes)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Eventos históricos (Wikipedia)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}