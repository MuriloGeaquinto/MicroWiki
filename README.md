# Mármore Capixaba

<div align="center">

**Catálogo digital de rochas ornamentais do Espírito Santo**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 📋 Sobre o Projeto

**Mármore Capixaba** é uma plataforma digital dedicada à catalogação e divulgação de rochas ornamentais provenientes do Espírito Santo. O projeto visa valorizar a rica geologia capixaba, oferecendo um catálogo interativo com informações técnicas detalhadas sobre cada tipo de rocha.

### 🎯 Objetivos

- Catalogar rochas ornamentais da região do Espírito Santo
- Fornecer informações técnicas completas (composição mineralógica, propriedades físicas)
- Garantir rastreabilidade desde a jazida até o produto final
- Oferecer uma experiência de usuário fluida e moderna

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🔍 **Busca** | Pesquise rochas por nome |
| 🎨 **Filtro por cor** | Filtre rochas por categoria de cor |
| 📱 **Design Responsivo** | Experiência otimizada para mobile, tablet e desktop |
| 📊 **Ficha Técnica** | Detalhes completos de cada rocha (composição, propriedades, localização) |
| 🗺️ **Rastreabilidade** | Acompanhe o processo da jazida ao produto final |
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

ig-do-marmore 📂/  
├── src 📂/  
│   ├── components 📂/  
│   │   ├── ui 📂/  
│   │   │   ├── button.jsx  
│   │   │   ├── dropdown-menu.jsx  
│   │   │   └── input.jsx  
│   │   │  
│   │   ├── RockCard.jsx  
│   │   ├── SearchBar.jsx  
│   │   └── ColorFilter.jsx  
│   │  
│   ├── pages 📂/  
│   │   ├── Home.jsx  
│   │   ├── Sobre.jsx  
│   │   └── RockDetail.jsx  
│   │  
│   ├── data 📂/  
│   │   └── rocksData.js  
│   │  
│   ├── utils 📂/  
│   │   ├── ScrollToTop.jsx  
│   │   └── utils.js  
│   │  
│   ├── Layout.jsx  
│   ├── App.jsx  
│   ├── main.jsx  
│   └── index.css  
│  
├── public 📂/   
│   ├── img 📂/   
│   │   ├── rastreabilidade 📂/  
│   │   │   ├── beneficiamento.png 📷  
│   │   │   ├── bloco.png 📷  
│   │   │   ├── pedreira.jpg 📷  
│   │   │   ├── produto-final.png 📷  
│   │   │   └── produto-final-dumont.png 📷  
│   │   │  
│   │   ├── Arabesco.jpg 📷  
│   │   ├── Bege-Ipanema.jpg 📷  
│   │   ├── Branco-Cintilante.jpg 📷  
│   │   ├── Dumont.jpg 📷  
│   │   └── Luna-Perla.jpg 📷  
│   │  
│   ├── logo1.png 📷  
│   ├── logo2.png 📷  
│   ├── logo3.png 📷  
│   └── logo3.png 📷  
│  
├── index.html  
├── package.json  
├── vite.config.js  
├── tailwind.config.js  
└── postcss.config.js

---

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/ig-do-marmore.git
cd ig-do-marmore

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
