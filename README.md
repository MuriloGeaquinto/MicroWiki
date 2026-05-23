# MicroWiki

<div align="center">

**Catálogo digital de microcontroladores, sensores e componentes eletrônicos**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 📋 Sobre o Projeto

**MicroWiki** é uma plataforma digital dedicada à catalogação e divulgação de microcontroladores, sensores, atuadores e componentes eletrônicos. O projeto visa criar uma comunidade colaborativa para entusiastas, engenheiros e estudantes da área de eletrônica e sistemas embarcados.

### 🎯 Objetivos

- Catalogar componentes eletrônicos com especificações técnicas detalhadas
- Fornecer bibliotecas e documentação oficial para cada componente
- Oferecer um fórum de discussão para a comunidade
- Compartilhar ideias de projetos com código base
- Apresentar a linha do tempo da evolução dos componentes eletrônicos
- Garantir uma experiência de usuário fluida e moderna

---

## 👥 Público-alvo

| Perfil | Descrição |
|--------|-----------|
| 👨‍💻 **Jovens desenvolvedores (17+)** | Interessados em implementar componentes em circuitos eletrônicos |
| 🔧 **Engenheiros (20+)** | Buscando componentes para futuros projetos |
| 🧒 **Crianças curiosas (10+)** | Explorando o mundo da eletrônica |

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🔍 **Busca** | Pesquise componentes por nome, categoria ou fabricante |
| 🏷️ **Filtro por categoria** | Filtre por microcontroladores, sensores, atuadores, displays e mais |
| 💬 **Fórum da Comunidade** | Espaço para tirar dúvidas e compartilhar conhecimentos |
| 💡 **Ideias de Projetos** | Projetos práticos com lista de componentes, bibliotecas e código base |
| 📅 **Linha do Tempo** | Evolução dos componentes eletrônicos, do ENIAC ao ESP32 |
| 📊 **Ficha Técnica** | Detalhes completos de cada componente |
| 🔗 **Links Oficiais** | Acesso direto ao site do fabricante e documentação |
| 📚 **Bibliotecas** | Links para bibliotecas oficiais e repositórios GitHub |
| 🎬 **Animações** | Transições suaves com Framer Motion |

---

## 🚀 Tecnologias

### Core
- **React 19** - Biblioteca UI
- **React Router DOM 7** - Roteamento
- **Vite 7** - Build tool

### Estilização
- **Tailwind CSS 4** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones

### Componentes UI
- **Radix UI** - Componentes acessíveis
- **class-variance-authority** - Variantes de componentes
- **clsx + tailwind-merge** - Gerenciamento de classes

---

## 📁 Estrutura do Projeto

MicroWiki 📂/  
├── src 📂/  
│   ├── components 📂/  
│   │   ├── ui 📂/  
│   │   │   ├── button.jsx  
│   │   │   ├── dropdown-menu.jsx  
│   │   │   └── input.jsx  
│   │   │  
│   │   ├── Card.jsx  
│   │   ├── SearchBar.jsx  
│   │   └── Filter.jsx  
│   │  
│   ├── pages 📂/  
│   │   ├── ComponentsDetail.jsx  
│   │   ├── Forum.jsx  
│   │   ├── Home.jsx  
│   │   ├── Ideias.jsx  
│   │   └── Timeline.jsx  
│   │  
│   ├── data 📂/  
│   │   ├── componentsData.js  
│   │   ├── forumData.js  
│   │   └── projetosData.js  
│   │  
│   ├── utils 📂/  
│   │   ├── ScrollToTop.jsx  
│   │   └── index.js  
│   │  
│   ├── Layout.jsx  
│   ├── App.jsx  
│   ├── main.jsx  
│   └── index.css  
│  
├── img 📂/     
│   ├── arduino-uno.png 📷  
│   ├── atmega328p.png 📷  
│   ├── display-oled-ssd1306.png 📷  
│   ├── esp32.png 📷  
│   ├── led-rgb.png 📷  
│   ├── Logo.png 📷  
│   ├── motor-nema17.png 📷  
│   ├── raspberry-pi-4.png 📷  
│   ├── raspberry-pi-pico.png 📷  
│   ├── sensor-dht22.png 📷  
│   └── sensor-hc-sr04.png 📷  
│  
├── lib 📂/   
│   └── utils.js    
│    
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
├── postcss.config.js  
├── README.md  
├── tailwind.config.js  
└── vite.config.js   

---

## 📦 Componentes Catalogados

| Categoria | Componentes |
|-----------|-------------|
| 🖥️ **Microcontroladores** | ESP32, ATmega328P, Raspberry Pi Pico |
| 📱 **Plataformas** | Arduino Uno |
| 💻 **SBCs** | Raspberry Pi 4 |
| 👁️ **Sensores** | DHT22, HC-SR04 |
| ⚙️ **Atuadores** | Motor de Passo NEMA 17 |
| 🖼️ **Displays** | OLED SSD1306 |
| 💡 **LEDs** | LED RGB |

---

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/microwiki.git
cd microwiki

# 2. Instale as dependências
npm install

# 3. Execute em desenvolvimento
npm run dev

# 4. Build para produção
npm run build

# 5. Pré-visualizar build
npm run preview

# 6. Rodar lint
npm run lint
