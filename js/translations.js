// ===========================================
// SISTEMA DE IDIOMA — CONFIGURAÇÃO E TRADUÇÕES
// ===========================================

let currentLanguage = "pt-PT";

const languages = {
  "pt-PT": {
    code: "pt-PT",
    name: "Português (PT)",
    flag: "./image/flags/pt.webp",
    nativeName: "Português",
  },
  "es-ES": {
    code: "es-ES",
    name: "Español",
    flag: "./image/flags/es.webp",
    nativeName: "Español",
  },
  "en-US": {
    code: "en-US",
    name: "English (US)",
    flag: "./image/flags/us.webp",
    nativeName: "English",
  },
  "en-GB": {
    code: "en-GB",
    name: "English (UK)",
    flag: "./image/flags/gb.webp",
    nativeName: "English",
  },
  "fr-FR": {
    code: "fr-FR",
    name: "Français",
    flag: "./image/flags/fr.webp",
    nativeName: "Français",
  },
  "it-IT": {
    code: "it-IT",
    name: "Italiano",
    flag: "./image/flags/it.webp",
    nativeName: "Italiano",
  },
  "de-DE": {
    code: "de-DE",
    name: "Deutsch",
    flag: "./image/flags/de.webp",
    nativeName: "Deutsch",
  },
  "nl-NL": {
    code: "nl-NL",
    name: "Nederlands",
    flag: "./image/flags/nl.webp",
    nativeName: "Nederlands",
  },
  "be-BE": {
    code: "be-BE",
    name: "België",
    flag: "./image/flags/be.webp",
    nativeName: "België",
  },
  "hr-HR": {
    code: "hr-HR",
    name: "Hrvatski",
    flag: "./image/flags/hr.webp",
    nativeName: "Hrvatski",
  },
  "tr-TR": {
    code: "tr-TR",
    name: "Türkçe",
    flag: "./image/flags/tr.webp",
    nativeName: "Türkçe",
  },
  "pl-PL": {
    code: "pl-PL",
    name: "Polski",
    flag: "./image/flags/pl.webp",
    nativeName: "Polski",
  },
};

window.translations = {
  // ==================== PORTUGUÊS (PT) ====================
  "pt-PT": {
    title: "Matheus Torres | Desenvolvedor Fullstack",
    nav: {
      about: "Sobre",
      services: "Serviços",
      projects: "Projectos",
      contact: "Contacto",
    },
    hero: {
      title: "Desenvolvedor <span>Fullstack</span>",
      subtitle: "Chamo-me <span>Matheus</span>",
      description:
        "Proporciono experiências digitais focadas em usabilidade, performance e design limpo.",
      available: "Disponível para novas oportunidades",
      typingLines: [
        "Desenvolvedor Fullstack em formação...",
        "A criar experiências digitais únicas...",
        "Focado em performance e usabilidade...",
        "Apaixonado por código limpo e design...",
        "Atleta de voleibol de alta performance...",
      ],
    },
    about: {
      title: "Sobre",
      intro:
        "Crio websites que não são apenas bonitos — são máquinas de resultados. Performance brutal, experiência mobile impecável e código que converte visitantes em clientes.",
      card1: {
        title: "Foco em Resultados",
        desc: "Sites rápidos, otimizados para SEO e estruturados para converter visitantes em clientes reais.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Experiências perfeitas em qualquer dispositivo. 70% das decisões de compra acontecem no telemóvel.",
      },
      card3: {
        title: "Stack Moderno",
        desc: "HTML semântico, CSS responsivo, JavaScript otimizado. React e Node.js para projectos robustos.",
      },
      card4: {
        title: "Mentalidade de Atleta",
        desc: "Disciplina, estratégia e foco obsessivo em resultados. Cada projecto tratado como uma competição.",
      },
    },
    services: {
      title: "Serviços Oferecidos",
      subtitle:
        "Soluções web personalizadas para transformar a sua presença digital e impulsionar os seus resultados.",
      siteInstitutional: {
        title: "Site Institucional",
        description:
          "Criação de websites profissionais que representam a sua marca com credibilidade. Sites responsivos, otimizados para SEO e com design moderno.",
        features: [
          "Design personalizado e exclusivo",
          "Totalmente responsivo (mobile, tablet, desktop)",
          "Otimizado para mecanismos de busca (SEO)",
          "Integração com redes sociais",
        ],
        technologies: "Tecnologias utilizadas:",
      },
      landingPage: {
        title: "Landing Page & Páginas de Venda",
        description:
          "Páginas estrategicamente desenvolvidas para converter visitantes em clientes. Foco em UX/UI para maximizar taxas de conversão.",
        features: [
          "Design focado em conversão (CRO)",
          "Formulários otimizados e CTAs estratégicos",
          "Integração com ferramentas de email marketing",
          "Análise de performance e métricas",
        ],
        technologies: "Tecnologias utilizadas:",
      },
      blog: {
        title: "Blog",
        description:
          "Plataformas de conteúdo dinâmicas e interativas para partilhar conhecimento e estabelecer autoridade no seu nicho.",
        features: [
          "Interface de administração intuitiva",
          "Sistema de comentários e interação",
          "Categorias e tags para organização",
          "Integração com redes sociais",
        ],
        technologies: "Tecnologias utilizadas:",
      },
      ecommerce: {
        title: "Sites de Catálogo & E-commerce",
        description:
          "Plataformas completas para exibir produtos e vender online. Desde catálogos digitais até lojas virtuais completas.",
        features: [
          "Catálogo de produtos organizado",
          "Carrinho de compras e checkout seguro",
          "Integração com gateways de pagamento",
          "Painel administrativo para gestão",
        ],
        technologies: "Tecnologias utilizadas:",
      },
      cta: {
        text: "Cada projeto é desenvolvido com atenção aos detalhes, performance otimizada e foco nos resultados do cliente.",
        button: "Solicitar Orçamento",
      },
    },
    projects: {
      more: "Ver mais projetos",
      less: "Ver menos projetos",
      featured: "Destaque",
      title: "Projectos",
      subtitle: "Explore os meus principais projectos abaixo.",
      button: { photos: "Ver Fotos", visit: "Visitar Site" },
      card5: {
        title: "Salão de Beleza",
        description:
          "Site para Salão de beleza-Barbearia, UI/UX moderna com animações.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description:
          "Barbearia clássica buscava aumentar a visibilidade. Criei um design minimalista com foco em conversão, melhorando o alcance local e a apresentação da marca.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description:
          "Experiência premium de barbearia no centro de Lisboa, com design moderno.",
      },
      card3: {
        title: "Cafeteria Gourmet",
        description:
          "Website acolhedor para cafeteria com menu digital e sistema de reservas.",
      },
      card4: {
        title: "Corte Navalha",
        description:
          "Especialistas em degradê e cortes artísticos com acabamento a navalha.",
      },
      card6: {
        title: "Escritório de Advocacia",
        description:
          "Site institucional profissional focado em credibilidade e serviços jurídicos.",
      },
      card7: {
        title: "Burguer Del",
        description:
          "Hamburgueria necessitava de pedidos rápidos. Otimizei a performance e bundle size, proporcionando acesso instantâneo para utilizadores mobile.",
      },
      card8: {
        title: "Pizzaria Animation",
        description:
          "A Pizzaria precisava de impacto digital. Implementei animações GSAP e Vanilla JS, resultando num site interativo, responsivo e com carga de 0.5s.",
      },
      card9: {
        title: "Sapore d'Oro",
        description:
          "Restaurante italiano necessitava de design premium. Desenvolvi uma interface elegante com foco em UX, garantindo uma experiência fluida e sofisticada.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Onde o estilo encontra a sofisticação e a tradição.",
      },
    },
    contact: {
      title: "Contacto",
      description:
        "Sinta-se à vontade para entrar em contacto. Estou sempre aberto a novas oportunidades e colaborações.",
      findme: "Ou encontre-me em:",
    },
    form: {
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      whatsapp: "Falar no WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Todos os direitos reservados.",
      developed:
        "JESUS É O CAMINHO, A VERDADE E A VIDA! NINGUÉM VAI AO PAI SENÃO POR ELE.",
    },
    galeria: { title: "Galeria de Fotos" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== ESPAÑOL ====================
  "es-ES": {
    title: "Matheus Torres | Desarrollador Fullstack",
    nav: {
      about: "Sobre",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Desarrollador <span>Fullstack</span>",
      subtitle: "Me llamo <span>Matheus</span>",
      description:
        "Proporciono experiencias digitales centradas en usabilidad, rendimiento y diseño limpio.",
      available: "Disponible para nuevas oportunidades",
      typingLines: [
        "Desarrollador Fullstack en formación...",
        "Creando experiencias digitales únicas...",
        "Centrado en rendimiento y usabilidad...",
        "Apasionado por código limpio y diseño...",
        "Atleta de voleibol de alto rendimiento...",
      ],
    },
    about: {
      title: "Sobre",
      intro:
        "Creo sitios web que no son solo bonitos — son máquinas de resultados. Rendimiento brutal, experiencia móvil impecable y código que convierte.",
      card1: {
        title: "Enfoque en Resultados",
        desc: "Sitios rápidos, optimizados para SEO y estructurados para convertir visitantes en clientes reales.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Experiencias perfectas en cualquier dispositivo. El 70% de las decisiones de compra ocurren en el móvil.",
      },
      card3: {
        title: "Stack Moderno",
        desc: "HTML semántico, CSS responsive, JavaScript optimizado. React y Node.js para proyectos robustos.",
      },
      card4: {
        title: "Mentalidad de Atleta",
        desc: "Disciplina, estrategia y enfoque obsesivo en resultados. Cada proyecto tratado como una competición.",
      },
    },
    services: {
      title: "Servicios Oferecidos",
      subtitle:
        "Soluciones web personalizadas para transformar tu presencia digital e impulsar tus resultados.",
      siteInstitutional: {
        title: "Sitio Institucional",
        description:
          "Creación de sitios web profesionales que representan tu marca con credibilidad.",
        features: [
          "Diseño personalizado y exclusivo",
          "Completamente responsivo (mobile, tablet, desktop)",
          "Optimizado para motores de búsqueda (SEO)",
          "Integración con redes sociales",
        ],
        technologies: "Tecnologías utilizadas:",
      },
      landingPage: {
        title: "Landing Page & Páginas de Venta",
        description:
          "Páginas desarrolladas estratégicamente para convertir visitantes en clientes.",
        features: [
          "Diseño enfocado en conversión (CRO)",
          "Formularios optimizados y CTAs estratégicos",
          "Integración con herramientas de email marketing",
          "Análisis de rendimiento y métricas",
        ],
        technologies: "Tecnologías utilizadas:",
      },
      blog: {
        title: "Blog",
        description:
          "Plataformas de contenido dinámicas e interactivas para compartir conocimiento.",
        features: [
          "Interfaz de administración intuitiva",
          "Sistema de comentarios e interacción",
          "Categorías y etiquetas para organización",
          "Integración con redes sociales",
        ],
        technologies: "Tecnologías utilizadas:",
      },
      ecommerce: {
        title: "Sitios de Catálogo & E-commerce",
        description:
          "Plataformas completas para mostrar productos y vender online.",
        features: [
          "Catálogo de productos organizado",
          "Carrito de compras y checkout seguro",
          "Integración con pasarelas de pago",
          "Panel administrativo para gestión",
        ],
        technologies: "Tecnologías utilizadas:",
      },
      cta: {
        text: "Cada proyecto se desarrolla con atención a los detalles, rendimiento optimizado y enfoque en los resultados del cliente.",
        button: "Solicitar Presupuesto",
      },
    },
    projects: {
      more: "Ver más proyectos",
      less: "Ver menos proyectos",
      featured: "Destacado",
      title: "Proyectos",
      button: { photos: "Ver Fotos", visit: "Visitar Sitio" },
      card5: {
        title: "Salón de belleza",
        description: "Sitio para Salón de belleza-Barbería, UI/UX moderna.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description:
          "Barbería clásica centrada en técnicas tradicionales y estilo vintage.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description:
          "Experiencia de barbería premium en el centro de Lisboa, diseño moderno.",
      },
      card3: {
        title: "Cafetería Gourmet",
        description:
          "Sitio web acogedor para cafetería con menú digital y reservas.",
      },
      card4: {
        title: "Corte Navalha",
        description:
          "Especialistas en degradados y cortes artísticos con acabado de navaja.",
      },
      card6: {
        title: "Bufete de Abogados",
        description:
          "Sitio institucional profesional centrado en credibilidad y servicios legales.",
      },
      card7: {
        title: "Burguer Del",
        description:
          "Plataforma de pedidos online para hamburguesería centrada en conversión.",
      },
      card8: {
        title: "Pizzaria Animation",
        description:
          "Sitio web interactivo con animaciones fluidas para una experiencia gastronómica.",
      },
      card9: {
        title: "Sapore d'Oro",
        description:
          "Sitio web de alta gastronomía para restaurante especializado en cocina italiana.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description:
          "Donde el estilo se encuentra con la sofisticación y la tradición.",
      },
    },
    contact: {
      title: "Contacto",
      description:
        "Siéntete libre de ponerte en contacto. Siempre estoy abierto a nuevas oportunidades.",
      findme: "O encuéntrame en:",
    },
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar Mensaje",
      whatsapp: "Hablar en WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Todos los derechos reservados.",
      developed:
        "JÉSÚS ES EL CAMINO, LA VERDAD Y LA VIDA! NADIE VA AL PADRE SINO POR ÉL.",
    },
    galeria: { title: "Galería de Fotos" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== ENGLISH (US) ====================
  "en-US": {
    title: "Matheus Torres | Fullstack Developer",
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "<span>Fullstack</span> Developer",
      subtitle: "My name is <span>Matheus</span>",
      description:
        "I provide digital experiences focused on usability, performance and clean design.",
      available: "Available for new opportunities",
      typingLines: [
        "Fullstack Developer in training...",
        "Creating unique digital experiences...",
        "Focused on performance and usability...",
        "Passionate about clean code and design...",
        "High performance volleyball athlete...",
      ],
    },
    about: {
      title: "About",
      intro:
        "I build websites that aren't just beautiful — they're results machines. Brutal performance, flawless mobile experience, and code that converts.",
      card1: {
        title: "Results-Driven",
        desc: "Fast sites, SEO-optimized and structured to convert visitors into real customers.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Perfect experiences on any device. 70% of purchase decisions happen on mobile.",
      },
      card3: {
        title: "Modern Stack",
        desc: "Semantic HTML, responsive CSS, optimized JavaScript. React and Node.js for robust projects.",
      },
      card4: {
        title: "Athlete Mindset",
        desc: "Discipline, strategy, and obsessive focus on results. Every project treated like a competition.",
      },
    },
    services: {
      title: "Services Offered",
      subtitle:
        "Custom web solutions to transform your digital presence and boost your results.",
      siteInstitutional: {
        title: "Institutional Website",
        description:
          "Creation of professional websites that represent your brand with credibility.",
        features: [
          "Custom and exclusive design",
          "Fully responsive (mobile, tablet, desktop)",
          "Optimized for search engines (SEO)",
          "Social media integration",
        ],
        technologies: "Technologies used:",
      },
      landingPage: {
        title: "Landing Page & Sales Pages",
        description:
          "Strategically developed pages to convert visitors into customers.",
        features: [
          "Conversion-focused design (CRO)",
          "Optimized forms and strategic CTAs",
          "Integration with email marketing tools",
          "Performance and metrics analysis",
        ],
        technologies: "Technologies used:",
      },
      blog: {
        title: "Blog",
        description:
          "Dynamic and interactive content platforms to share knowledge and engage audience.",
        features: [
          "Intuitive administration interface",
          "Comment and interaction system",
          "Categories and tags for organization",
          "Social media integration",
        ],
        technologies: "Technologies used:",
      },
      ecommerce: {
        title: "Catalog & E-commerce Sites",
        description: "Complete platforms to display products and sell online.",
        features: [
          "Organized product catalog",
          "Shopping cart and secure checkout",
          "Integration with payment gateways",
          "Administrative panel for management",
        ],
        technologies: "Technologies used:",
      },
      cta: {
        text: "Each project is developed with attention to detail, optimized performance and focus on client results.",
        button: "Request Quote",
      },
    },
    projects: {
      more: "View more projects",
      less: "View less projects",
      featured: "Featured",
      title: "Projects",
      button: { photos: "View Photos", visit: "Visit Site" },
      card5: {
        title: "Beauty Salon",
        description: "Beauty salon website with modern UI/UX and animations.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description:
          "Classic barbershop sought to increase visibility. I created a minimalist conversion-focused design, improving local reach and brand image.",
      },
      card2: {
        title: "BC Lisboa Barbershop",
        description:
          "Premium barbershop experience in central Lisbon, modern design.",
      },
      card3: {
        title: "Gourmet Coffee Shop",
        description:
          "Cozy website for a coffee shop with digital menu and bookings.",
      },
      card4: {
        title: "Razor Cut Barbershop",
        description:
          "Specialists in fades and artistic cuts with razor finish.",
      },
      card6: {
        title: "Law Firm",
        description:
          "Professional institutional website focused on credibility and legal services.",
      },
      card7: {
        title: "Burguer Del",
        description:
          "Burger joint needed fast ordering. I optimized performance and bundle size, providing instant access for mobile users.",
      },
      card8: {
        title: "Animated Pizzeria",
        description:
          "Pizzeria needed digital impact. I implemented GSAP and Vanilla JS animations, resulting in an interactive, responsive 0.5s load site.",
      },
      card9: {
        title: "Sapore d'Oro",
        description:
          "Italian restaurant needed premium design. I developed an elegant UX-focused interface, ensuring a fluid and sophisticated experience.",
      },
      card5_alt: {
        title: "Elegance Barbershop",
        description: "Where style meets sophistication and tradition.",
      },
    },
    contact: {
      title: "Contact",
      description:
        "Feel free to get in touch. I'm always open to new opportunities and collaborations.",
      findme: "Or find me at:",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      copyright: "&copy; 2025 Matheus Torres de Oliveira. All rights reserved.",
      developed:
        "JESUS IS THE WAY, THE TRUTH AND THE LIFE! NO ONE COMES TO THE FATHER EXCEPT THROUGH HIM.",
    },
    galeria: { title: "Photo Gallery" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== ENGLISH (UK) ====================
  "en-GB": {
    title: "Matheus Torres | Full-stack Developer",
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "<span>Fullstack</span> Developer",
      subtitle: "My name is <span>Matheus</span>",
      description:
        "I provide digital experiences focused on usability, performance and clean design.",
      available: "Available for new opportunities",
      typingLines: [
        "Fullstack Developer in training...",
        "Creating unique digital experiences...",
        "Focused on performance and usability...",
        "Passionate about clean code and design...",
        "High performance volleyball athlete...",
      ],
    },
    about: {
      title: "About",
      intro:
        "I build websites that aren't just beautiful — they're results machines. Brutal performance, flawless mobile experience, and code that converts.",
      card1: {
        title: "Results-Driven",
        desc: "Fast sites, SEO-optimised and structured to convert visitors into real customers.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Perfect experiences on any device. 70% of purchase decisions happen on mobile.",
      },
      card3: {
        title: "Modern Stack",
        desc: "Semantic HTML, responsive CSS, optimised JavaScript. React and Node.js for robust projects.",
      },
      card4: {
        title: "Athlete Mindset",
        desc: "Discipline, strategy, and obsessive focus on results. Every project treated like a competition.",
      },
    },
    services: {
      title: "Services Offered",
      subtitle:
        "Custom web solutions to transform your digital presence and boost your results.",
      siteInstitutional: {
        title: "Institutional Website",
        description:
          "Creation of professional websites that represent your brand with credibility.",
        features: [
          "Custom and exclusive design",
          "Fully responsive (mobile, tablet, desktop)",
          "Optimised for search engines (SEO)",
          "Social media integration",
        ],
        technologies: "Technologies used:",
      },
      landingPage: {
        title: "Landing Page & Sales Pages",
        description:
          "Strategically developed pages to convert visitors into customers.",
        features: [
          "Conversion-focused design (CRO)",
          "Optimised forms and strategic CTAs",
          "Integration with email marketing tools",
          "Performance and metrics analysis",
        ],
        technologies: "Technologies used:",
      },
      blog: {
        title: "Blog",
        description:
          "Dynamic and interactive content platforms to share knowledge.",
        features: [
          "Intuitive administration interface",
          "Comment and interaction system",
          "Categories and tags for organisation",
          "Social media integration",
        ],
        technologies: "Technologies used:",
      },
      ecommerce: {
        title: "Catalogue & E-commerce Sites",
        description: "Complete platforms to display products and sell online.",
        features: [
          "Organised product catalogue",
          "Shopping cart and secure checkout",
          "Integration with payment gateways",
          "Administrative panel for organisation",
        ],
        technologies: "Technologies used:",
      },
      cta: {
        text: "Each project is developed with attention to detail, optimised performance and focus on client results.",
        button: "Request Quote",
      },
    },
    projects: {
      more: "View more projects",
      less: "View less projects",
      featured: "Featured",
      title: "Projects",
      button: { photos: "View Photos", visit: "Visit Site" },
      card5: {
        title: "Beauty Salon",
        description: "Beauty salon website with modern UI/UX.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description: "Classic barbershop focused on traditional techniques.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Premium barbershop experience in Lisbon.",
      },
      card3: {
        title: "Coffee Shop",
        description: "Cozy website for a coffee shop.",
      },
      card4: {
        title: "Razor Cut",
        description: "Specialists in fades and artistic cuts.",
      },
      card6: {
        title: "Law Office",
        description: "Professional website for legal services.",
      },
      card7: {
        title: "Burguer Del",
        description: "Online platform for burger delivery.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Interactive website with smooth animations.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Italian fine dining restaurant website.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Where style meets sophistication.",
      },
    },
    contact: {
      title: "Contact",
      description:
        "Feel free to get in touch. I'm always open to new opportunities.",
      findme: "Or find me at:",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      copyright: "&copy; 2025 Matheus Torres de Oliveira. All rights reserved.",
      developed:
        "JESUS IS THE WAY, THE TRUTH AND THE LIFE! NO ONE COMES TO THE FATHER EXCEPT THROUGH HIM.",
    },
    galeria: { title: "Photo Gallery" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== FRANÇAIS ====================
  "fr-FR": {
    title: "Matheus Torres | Développeur Fullstack",
    nav: {
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Développeur <span>Fullstack</span>",
      subtitle: "Je m'appelle <span>Matheus</span>",
      description:
        "Je fournis des expériences digitales axées sur l'utilisabilité, la performance et le design épuré.",
      available: "Disponible pour de nouvelles opportunités",
      typingLines: [
        "Développeur Fullstack en formation...",
        "Création d'expériences digitales uniques...",
        "Concentré sur la performance et l'utilisabilité...",
        "Passionné par le code propre et le design...",
        "Athlète de volley-ball de haute performance...",
      ],
    },
    about: {
      title: "À propos",
      intro:
        "Je crée des sites web qui ne sont pas seulement beaux — ce sont des machines à résultats. Performance brutale, expérience mobile impeccable et code qui convertit.",
      card1: {
        title: "Axé sur les Résultats",
        desc: "Sites rapides, optimisés pour le SEO et structurés pour convertir les visiteurs en vrais clients.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Expériences parfaites sur tout appareil. 70% des décisions d'achat se font sur mobile.",
      },
      card3: {
        title: "Stack Moderne",
        desc: "HTML sémantique, CSS responsive, JavaScript optimisé. React et Node.js pour des projets robustos.",
      },
      card4: {
        title: "Mentalité d'Athlète",
        desc: "Discipline, stratégie et focus obsessionnel sur les résultats. Chaque projet traité comme une compétition.",
      },
    },
    services: {
      title: "Services Offerts",
      subtitle:
        "Solutions web personnalisées pour transformer votre présence numérique.",
      siteInstitutional: {
        title: "Site Institutionnel",
        description:
          "Création de sites web professionnels qui représentent votre marque.",
        features: [
          "Design personnalisé et exclusif",
          "Totalement responsive (mobile, tablette, desktop)",
          "Optimisé pour les moteurs de recherche (SEO)",
          "Intégration avec les réseaux sociaux",
        ],
        technologies: "Technologies utilisées:",
      },
      landingPage: {
        title: "Page de Destination & Pages de Vente",
        description:
          "Pages stratégiquement développées pour convertir les visiteurs en clients.",
        features: [
          "Design axé sur la conversion (CRO)",
          "Formulaires optimisés et CTAs stratégiques",
          "Intégration avec outils d'email marketing",
          "Analyse de performance et métriques",
        ],
        technologies: "Technologies utilisées:",
      },
      blog: {
        title: "Blog",
        description:
          "Plateformes de contenu dynamiques et interactives pour partager des connaissances.",
        features: [
          "Interface d'administration intuitive",
          "Système de commentaires et interaction",
          "Catégories et tags pour organisation",
          "Intégration avec réseaux sociaux",
        ],
        technologies: "Technologies utilisées:",
      },
      ecommerce: {
        title: "Sites de Catalogue & E-commerce",
        description:
          "Plateformes complètes pour afficher des produits et vendre en ligne.",
        features: [
          "Catalogue de produits organisé",
          "Panier d'achat et paiement sécurisé",
          "Intégration avec passerelles de paiement",
          "Panneau administratif pour gestion",
        ],
        technologies: "Technologies utilisées:",
      },
      cta: {
        text: "Chaque projet est développé avec attention aux détails, performance optimisée et focus sur les résultats.",
        button: "Demander un Devis",
      },
    },
    projects: {
      more: "Voir plus de projets",
      less: "Voir moins de projetos",
      featured: "À l'affiche",
      title: "Projets",
      button: { photos: "Voir Photos", visit: "Visiter Site" },
      card5: {
        title: "Salon de beauté",
        description: "Site pour Salon de beauté-Barbier.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description:
          "Barbiere classique axé sur les techniques traditionnelles.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Expérience de barbier premium à Lisbonne.",
      },
      card3: {
        title: "Cafétéria",
        description: "Site web pour un café with menu digital.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Spécialistes des dégradés et des coupes au rasoir.",
      },
      card6: {
        title: "Cabinet d'Avocats",
        description: "Site institutionnel pour services juridiques.",
      },
      card7: {
        title: "Burguer Del",
        description: "Plateforme de commande en ligne pour burgers.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Site interactif avec animations fluides.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Site web pour restaurant italien de luxe.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Où le style rencontre la sophistication.",
      },
    },
    contact: {
      title: "Contact",
      description:
        "N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.",
      findme: "Ou retrouvez-moi sur:",
    },
    form: {
      name: "Nom",
      email: "Email",
      message: "Message",
      submit: "Envoyer Message",
      whatsapp: "Parler sur WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Tous droits réservés.",
      developed:
        "JÉSUS EST LE CHEMIN, LA VÉRITÉ ET LA VIE! PERSONNE NE VA AU PÈRE SAUF PAR LUI.",
    },
    galeria: { title: "Galerie de Photos" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== ITALIANO ====================
  "it-IT": {
    title: "Matheus Torres | Sviluppatore Fullstack",
    nav: {
      about: "Chi sono",
      services: "Servizi",
      projects: "Progetti",
      contact: "Contatto",
    },
    hero: {
      title: "Sviluppatore <span>Fullstack</span>",
      subtitle: "Mi chiamo <span>Matheus</span>",
      description:
        "Fornisco esperienze digitali incentrate su usabilità, performance e design pulito.",
      available: "Disponibile per nuove opportunità",
      typingLines: [
        "Sviluppatore Fullstack in formazione...",
        "Creazione di esperienze digitali uniche...",
        "Concentrato su performance e usabilità...",
        "Appassionato di codice pulito e design...",
        "Atleta di pallavolo ad alte prestazioni...",
      ],
    },
    about: {
      title: "Chi sono",
      intro:
        "Creo siti web che non sono solo belli — sono macchine di risultati. Performance brutale, esperienza mobile impeccabile e codice che converte.",
      card1: {
        title: "Focus sui Risultati",
        desc: "Siti veloci, ottimizzati per SEO e strutturati per convertire i visitatori in clienti reali.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Esperienze perfette su qualsiasi dispositivo. Il 70% delle decisioni d'acquisto avviene su mobile.",
      },
      card3: {
        title: "Stack Moderno",
        desc: "HTML semantico, CSS responsive, JavaScript ottimizzato. React e Node.js per progetti robusti.",
      },
      card4: {
        title: "Mentalità da Atleta",
        desc: "Disciplina, strategia e focus ossessivo sui risultati. Ogni progetto trattato come una competizione.",
      },
    },
    services: {
      title: "Servizi Offerti",
      subtitle:
        "Soluzioni web personalizzate per trasformare la tua presenza digitale.",
      siteInstitutional: {
        title: "Sito Istituzionale",
        description:
          "Creazione di siti web professionali che rappresentano il tuo marchio.",
        features: [
          "Design personalizzato ed esclusivo",
          "Completamente responsive (mobile, tablet, desktop)",
          "Ottimizzato per i motori di ricerca (SEO)",
          "Integrazione con i social media",
        ],
        technologies: "Tecnologie utilizzate:",
      },
      landingPage: {
        title: "Landing Page & Pagine di Vendita",
        description:
          "Pagine sviluppate strategicamente per convertire i visitatori in clienti.",
        features: [
          "Design focalizzato sulla conversione (CRO)",
          "Moduli ottimizzati e CTA strategiche",
          "Integrazione con strumenti di email marketing",
          "Analisi delle prestazioni e metriche",
        ],
        technologies: "Tecnologie utilizzate:",
      },
      blog: {
        title: "Blog",
        description:
          "Piattaforme di contenuto dinamiche e interattive per condividere conoscenza.",
        features: [
          "Interfaccia di amministrazione intuitiva",
          "Sistema di commenti e interazione",
          "Categorie e tag per l'organizzazione",
          "Integrazione con i social media",
        ],
        technologies: "Tecnologie utilizzate:",
      },
      ecommerce: {
        title: "Siti Catalogo & E-commerce",
        description:
          "Piattaforme complete per mostrare prodotti e vendere online.",
        features: [
          "Catalogo prodotti organizzato",
          "Carrello e checkout sicuro",
          "Integrazione con gateway di pagamento",
          "Pannello amministrativo per gestione",
        ],
        technologies: "Tecnologie utilizzate:",
      },
      cta: {
        text: "Ogni progetto è sviluppato con attenzione ai dettagli, prestazioni ottimizzate e focus sui risultati.",
        button: "Richiedi Preventivo",
      },
    },
    projects: {
      more: "Vedi altri progetti",
      less: "Vedi meno progetti",
      featured: "In primo piano",
      title: "Progetti",
      button: { photos: "Vedi Foto", visit: "Visita Sito" },
      card5: {
        title: "Salone di bellezza",
        description: "Sito per Salone di bellezza, UI/UX moderna.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description:
          "Barbiere classico focalizzato sulle tecniche tradizionali.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Esperienza di barbiere premium a Lisbonne.",
      },
      card3: {
        title: "Caffetteria",
        description: "Sito accogliente per caffetteria con menu digitale.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Specialisti in sfumature e tagli a rasoio.",
      },
      card6: {
        title: "Studio Legale",
        description: "Sito professionale per servizi legali.",
      },
      card7: {
        title: "Burguer Del",
        description: "Piattaforma di ordinazione online per hamburgeria.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Sito interattivo con animazioni fluide.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Sito per ristorante italiano raffinato.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Dove lo stile incontra la raffinatezza.",
      },
    },
    contact: {
      title: "Contatto",
      description:
        "Non esitate a contattarmi. Sono sempre aperto a nuove opportunità.",
      findme: "Oppure trovami su:",
    },
    form: {
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      submit: "Invia Messaggio",
      whatsapp: "Parla su WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Tutti i diritti riservati.",
      developed:
        "GESÙ È LA VIA, LA VERITÀ E LA VITA! NESSUNO VA AL PADRE SE NON PER MEZZO DI LUI.",
    },
    galeria: { title: "Galleria Fotografica" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== DEUTSCH ====================
  "de-DE": {
    title: "Matheus Torres | Fullstack-Entwickler",
    nav: {
      about: "Über mich",
      services: "Dienste",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      title: "<span>Fullstack</span>-Entwickler",
      subtitle: "Mein Name ist <span>Matheus</span>",
      description:
        "Ich biete digitale Erfahrungen mit Fokus auf Benutzerfreundlichkeit, Performance und sauberes Design.",
      available: "Verfügbar für neue Möglichkeiten",
      typingLines: [
        "Fullstack-Entwickler in Ausbildung...",
        "Einzigartige digitale Erlebnisse schaffen...",
        "Fokus auf Performance und Benutzerfreundlichkeit...",
        "Leidenschaft für sauberen Code und Design...",
        "Hochleistungs-Volleyballspieler...",
      ],
    },
    about: {
      title: "Über mich",
      intro:
        "Ich erstelle Websites, die nicht nur schön sind — sie sind Ergebnismaschinen. Brutale Performance, makellose mobile Erfahrung und Code, der konvertiert.",
      card1: {
        title: "Ergebnisorientiert",
        desc: "Schnelle Sites, SEO-optimiert und strukturiert, um Besucher in echte Kunden zu verwandeln.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Perfekte Erfahrungen auf jedem Gerät. 70% des Kaufentscheidungen werden mobil getroffen.",
      },
      card3: {
        title: "Moderner Stack",
        desc: "Semantisches HTML, responsives CSS, optimiertes JavaScript. React und Node.js für robuste Projekte.",
      },
      card4: {
        title: "Athleten-Mentalität",
        desc: "Disziplin, Strategie und obsessiver Fokus auf Ergebnisse. Jedes Projekt wie ein Wettkampf.",
      },
    },
    services: {
      title: "Angebotene Dienste",
      subtitle:
        "Maßgeschneiderte Weblösungen zur Transformation Ihrer digitalen Präsenz.",
      siteInstitutional: {
        title: "Institutionelle Website",
        description:
          "Erstellung professioneller Websites, die Ihre Marke glaubwürdig repräsentieren.",
        features: [
          "Individuelles und exklusives Design",
          "Vollständig responsive (Mobil, Tablet, Desktop)",
          "Optimiert für Suchmaschinen (SEO)",
          "Integration mit sozialen Medien",
        ],
        technologies: "Verwendete Technologien:",
      },
      landingPage: {
        title: "Landing Page & Verkaufsseiten",
        description:
          "Strategisch entwickelte Seiten zur Konvertierung von Besuchern in Kunden.",
        features: [
          "Conversion-fokussiertes Design (CRO)",
          "Optimierte Formulare und strategische CTAs",
          "Integration mit E-Mail-Marketing-Tools",
          "Performance- und Metrikanalyse",
        ],
        technologies: "Verwendete Technologien:",
      },
      blog: {
        title: "Blog",
        description:
          "Dynamische und interaktive Content-Plattformen zum Wissensaustausch.",
        features: [
          "Intuitive Administrationsoberfläche",
          "Kommentar- und Interaktionssystem",
          "Kategorien und Tags zur Organisation",
          "Integration mit sozialen Medien",
        ],
        technologies: "Verwendete Technologien:",
      },
      ecommerce: {
        title: "Katalog & E-Commerce-Sites",
        description:
          "Komplette Plattformen zum Anzeigen von Produkten und Online-Verkauf.",
        features: [
          "Organisierter Produktkatalog",
          "Warenkorb und sicherer Checkout",
          "Integration mit Zahlungsgateways",
          "Administratives Panel zur Verwaltung",
        ],
        technologies: "Verwendete Technologien:",
      },
      cta: {
        text: "Jedes Projekt wird mit Liebe zum Detail, optimierter Performance und Fokus auf Kundenergebnisse entwickelt.",
        button: "Angebot anfordern",
      },
    },
    projects: {
      more: "Mehr Projekte ansehen",
      less: "Weniger Projekte ansehen",
      featured: "Vorgestellt",
      title: "Projekte",
      button: { photos: "Fotos ansehen", visit: "Site besuchen" },
      card5: {
        title: "Schönheitssalon",
        description: "Schönheitssalon-Website mit modernem UI/UX.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description:
          "Klassischer Barbershop mit Fokus auf traditionelle Techniken.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Premium Barbershop Erlebnis in Lissabon.",
      },
      card3: {
        title: "Cafeteria",
        description: "Gemütliche Website für ein Café mit digitalem Menü.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Spezialisten für Fades und Rasiermassenschnitte.",
      },
      card6: {
        title: "Anwaltskanzlei",
        description: "Professionelle Website für juristische Dienstleistungen.",
      },
      card7: {
        title: "Burguer Del",
        description: "Online-Bestellplattform für Burger-Laden.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Interaktive Website mit fließenden Animationen.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Website für gehobene italienische Küche.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Wo Stil auf Raffinesse trifft.",
      },
    },
    contact: {
      title: "Kontakt",
      description:
        "Kontaktieren Sie mich gerne. Ich bin immer offen für neue Möglichkeiten.",
      findme: "Oder finden Sie mich auf:",
    },
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Nachricht senden",
      whatsapp: "Auf WhatsApp schreiben",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Alle Rechte vorbehalten.",
      developed:
        "JESUS IST DER WEG, DIE WAHRHEIT UND DAS LEBEN! NIEMAND KOMMT ZUM VATER AUSSER DURCH IHN.",
    },
    galeria: { title: "Fotogalerie" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== NEDERLANDS ====================
  "nl-NL": {
    title: "Matheus Torres | Fullstack Developer",
    nav: {
      about: "Over",
      services: "Diensten",
      projects: "Projecten",
      contact: "Contact",
    },
    hero: {
      title: "<span>Fullstack</span> Ontwikkelaar",
      subtitle: "Mijn naam is <span>Matheus</span>",
      description:
        "Ik lever digitale ervaringen gericht op bruikbaarheid, prestaties en strak design.",
      available: "Beschikbaar voor nieuwe mogelijkheden",
      typingLines: [
        "Fullstack Ontwikkelaar in opleiding...",
        "Unieke digitale ervaringen creëren...",
        "Gericht op prestaties en bruikbaarheid...",
        "Gepassioneerd door schone code en design...",
        "Topsport volleyballer...",
      ],
    },
    about: {
      title: "Over",
      intro:
        "Ik bouw websites die niet alleen mooi zijn — het zijn resultaatmachines. Brutale performance, vlekkeloze mobiele ervaring en code die converteert.",
      card1: {
        title: "Resultaatgericht",
        desc: "Snelle sites, SEO-geoptimaliseerd en gestructureerd om bezoekers in klanten te converteren.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Perfecte ervaringen op elk apparaat. 70% van de aankoopbeslissingen gebeurt op mobiel.",
      },
      card3: {
        title: "Moderne Stack",
        desc: "Semantische HTML, responsieve CSS, geoptimaliseerd JavaScript. React en Node.js.",
      },
      card4: {
        title: "Atleten Mentaliteit",
        desc: "Discipline, strategie en obsessieve focus op resultaten. Elk project als een competitie.",
      },
    },
    services: {
      title: "Aangeboden Diensten",
      subtitle:
        "Maatwerkoplossingen om uw digitale aanwezigheid te transformeren.",
      siteInstitutional: {
        title: "Institutionele Website",
        description:
          "Creatie van professionele websites die uw merk geloofwaardig vertegenwoordigen.",
        features: [
          "Aangepast en exclusief ontwerp",
          "Volledig responsive (mobiel, tablet, desktop)",
          "Geoptimaliseerd voor zoekmachines (SEO)",
          "Integratie met sociale media",
        ],
        technologies: "Gebruikte technologieën:",
      },
      landingPage: {
        title: "Landing Page & Verkooppagina's",
        description:
          "Strategisch ontwikkelde pagina's om bezoekers om te zetten in klanten.",
        features: [
          "Conversiegericht ontwerp (CRO)",
          "Geoptimaliseerde formulieren en strategische CTA's",
          "Integratie met e-mailmarketingtools",
          "Prestatie- en metriekenanalyse",
        ],
        technologies: "Gebruikte technologieën:",
      },
      blog: {
        title: "Blog",
        description:
          "Dynamische en interactieve content平台的 om kennis te delen.",
        features: [
          "Intuïtieve beheerinterface",
          "Commentaar- en interactiesysteem",
          "Categorieën en tags voor organisatie",
          "Integratie met sociale media",
        ],
        technologies: "Gebruikte technologieën:",
      },
      ecommerce: {
        title: "Catalogus & E-commerce Sites",
        description:
          "Complete platforms om producten te tonen en online te verkopen.",
        features: [
          "Georganiseerde productcatalogus",
          "Winkelwagen en veilige checkout",
          "Integratie met betalingsgateways",
          "Administratief paneel voor beheer",
        ],
        technologies: "Gebruikte technologieën:",
      },
      cta: {
        text: "Elk project wordt desenvolvido met atenção aos detalhes e foco nos resultados.",
        button: "Offerte aanvragen",
      },
    },
    projects: {
      more: "Bekijk meer projecten",
      less: "Bekijk minder projecten",
      featured: "Uitgelicht",
      title: "Projecten",
      button: { photos: "Bekijk Foto's", visit: "Bezoek Site" },
      card5: {
        title: "Schoonheidssalon",
        description: "Schoonheidssalon website met modern UI/UX.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description: "Klassieke barbershop gericht op traditionele technieken.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Premium barbierservaring in Lissabon.",
      },
      card3: {
        title: "Cafetaria",
        description: "Gezellige website voor een café met digitaal menu.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Specialisten in fades en messneden.",
      },
      card6: {
        title: "Advocatenkantoor",
        description: "Professionele website voor juridische diensten.",
      },
      card7: {
        title: "Burguer Del",
        description: "Online bestelplatform voor hamburgerwinkel.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Interactieve website met vloeiende animaties.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Website voor Italiaans fine dining restaurant.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Waar stijl en verfijning samenkomen.",
      },
    },
    contact: {
      title: "Contact",
      description:
        "Neem gerust contact met mij op. Ik sta altijd open for nuove opportunità.",
      findme: "Of vind me op:",
    },
    form: {
      name: "Naam",
      email: "E-mail",
      message: "Bericht",
      submit: "Bericht verzenden",
      whatsapp: "Chat op WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Alle rechten voorbehouden.",
      developed:
        "JEZUS IS DE WEG, DE WAARHEID EN HET LEVEN! NIEMAND KOMT TOT DE VADER DAN DOOR HEM.",
    },
    galeria: { title: "Fotogalerij" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== BELGIE ====================
  "be-BE": {
    title: "Matheus Torres | Fullstack Developer",
    nav: {
      about: "Over",
      services: "Diensten",
      projects: "Projecten",
      contact: "Contact",
    },
    hero: {
      title: "<span>Fullstack</span> Ontwikkelaar",
      subtitle: "Mijn naam is <span>Matheus</span>",
      description:
        "Ik lever digitale ervaringen gericht op bruikbaarheid, prestaties en strak design.",
      available: "Beschikbaar voor nieuwe mogelijkheden",
      typingLines: [
        "Fullstack Ontwikkelaar in opleiding...",
        "Unieke digitale ervaringen creëren...",
        "Gericht op prestaties en bruikbaarheid...",
        "Gepassioneerd door schone code en design...",
        "Topsport volleyballer...",
      ],
    },
    about: {
      title: "Over",
      intro:
        "Ik bouw websites die niet alleen mooi zijn — het zijn resultaatmachines. Brutale prestaties, vlekkeloze mobiele ervaring en code die converteert.",
      card1: {
        title: "Resultaatgericht",
        desc: "Snelle sites, SEO-geoptimaliseerd en gestructureerd om bezoekers in klanten om te zetten.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Perfecte ervaringen op elk apparaat. 70% van de aankoopbeslissingen gebeurt op mobiel.",
      },
      card3: {
        title: "Moderne Stack",
        desc: "Semantische HTML, responsieve CSS, geoptimaliseerd JavaScript. React en Node.js.",
      },
      card4: {
        title: "Atleten Mentaliteit",
        desc: "Discipline, strategie en obsessieve focus op resultaten. Elk project als een competitie.",
      },
    },
    services: {
      title: "Aangeboden Diensten",
      subtitle:
        "Maatwerkoplossingen om uw digitale aanwezigheid te transformeren.",
      siteInstitutional: {
        title: "Institutionele Website",
        description: "Creatie van professionele websites.",
        features: [
          "Aangepast ontwerp",
          "Volledig responsive",
          "SEO-geoptimaliseerd",
          "Sociale media integratie",
        ],
        technologies: "Gebruikte technologieën:",
      },
      landingPage: {
        title: "Landing Page & Verkooppagina's",
        description: "Strategisch ontwikkelde pagina's voor conversie.",
        features: [
          "Conversiegericht ontwerp",
          "Geoptimaliseerde formulieren",
          "E-mailmarketing integratie",
          "Prestatie-analyse",
        ],
        technologies: "Gebruikte technologieën:",
      },
      blog: {
        title: "Blog",
        description: "Dynamische contentplatforms om kennis te delen.",
        features: [
          "Intuïtieve beheerinterface",
          "Commentaarsysteem",
          "Categorieën en tags",
          "Sociale media integratie",
        ],
        technologies: "Gebruikte technologieën:",
      },
      ecommerce: {
        title: "Catalogus & E-commerce",
        description: "Complete platforms om online te verkopen.",
        features: [
          "Productcatalogus",
          "Veilige checkout",
          "Betalingsgateways",
          "Administratief paneel",
        ],
        technologies: "Gebruikte technologieën:",
      },
      cta: {
        text: "Elk project wordt ontwikkeld met atenção aos detalhes e foco nos resultados.",
        button: "Offerte aanvragen",
      },
    },
    projects: {
      more: "Bekijk meer projecten",
      less: "Bekijk minder projecten",
      featured: "Uitgelicht",
      title: "Projecten",
      button: { photos: "Bekijk Foto's", visit: "Bezoek Site" },
      card5: {
        title: "Schoonheidssalon",
        description: "Schoonheidssalon website.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description: "Klassieke barbershop.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Premium barbierservaring in Lissabon.",
      },
      card3: { title: "Cafetaria", description: "Gezellige café website." },
      card4: {
        title: "Corte Navalha",
        description: "Specialisten in messneden.",
      },
      card6: {
        title: "Advocatenkantoor",
        description: "Professionele juridische website.",
      },
      card7: { title: "Burguer Del", description: "Online burger platform." },
      card8: {
        title: "Pizzaria Animation",
        description: "Interactieve website met animaties.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Italiaans restaurant website.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Waar stijl en verfijning samenkomen.",
      },
    },
    contact: {
      title: "Contact",
      description: "Neem gerust contact op. Ik sta open for nuove opportunità.",
      findme: "Of vind me op:",
    },
    form: {
      name: "Naam",
      email: "E-mail",
      message: "Bericht",
      submit: "Bericht verzenden",
      whatsapp: "Chat op WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Alle rechten voorbehouden.",
      developed: "JEZUS IS DE WEG, DE WAARHEID EN HET LEVEN!",
    },
    galeria: { title: "Fotogalerij" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== HRVATSKI ====================
  "hr-HR": {
    title: "Matheus Torres | Fullstack Developer",
    nav: {
      about: "O meni",
      services: "Usluge",
      projects: "Projekti",
      contact: "Kontakt",
    },
    hero: {
      title: "<span>Fullstack</span> Programer",
      subtitle: "Moje ime je <span>Matheus</span>",
      description:
        "Pružam digitalna iskustva usmjerena na upotrebljivost, performanse i čist dizajn.",
      available: "Dostupan za nove prilike",
      typingLines: [
        "Fullstack Programer u obuci...",
        "Stvaram jedinstvena digitalna iskustva...",
        "Fokusiran na performanse i upotrebljivost...",
        "Strastveni prema čistom kodu i dizajnu...",
        "Vrhunski odbojkaš...",
      ],
    },
    about: {
      title: "O meni",
      intro:
        "Izgrađujem web stranice koje nisu samo lijepe — to su strojevi za rezultate. Brutalna performansa, besprijekorno mobilno iskustvo i kod koji konvertira.",
      card1: {
        title: "Fokus na Rezultate",
        desc: "Brze stranice, SEO optimizirane i strukturirane za pretvaranje posjetitelja u kupce.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Savršena iskustva na svakom uređaju. 70% odluka o kupnji donosi se na mobilnim uređajima.",
      },
      card3: {
        title: "Moderan Stack",
        desc: "Semantički HTML, responzivan CSS, optimiziran JavaScript. React i Node.js.",
      },
      card4: {
        title: "Mentalitet Sportaša",
        desc: "Disciplina, strategija i opsesivni fokus na rezultate. Svaki projekt kao natjecanje.",
      },
    },
    services: {
      title: "Ponuđene Usluge",
      subtitle:
        "Prilagođena web rješenja za transformaciju vaše digitalne prisutnosti.",
      siteInstitutional: {
        title: "Institucionalna Web Stranica",
        description: "Izrada profesionalnih web stranica.",
        features: [
          "Personalizirani dizajn",
          "Potpuno responzivno",
          "SEO optimizacija",
          "Integracija društvenih mreža",
        ],
        technologies: "Korištene tehnologije:",
      },
      landingPage: {
        title: "Landing Page & Prodajne Stranice",
        description: "Strategijski razvijene stranice za konverziju.",
        features: [
          "Dizajn fokusiran na konverziju",
          "Optimizirani obrasci",
          "Email marketing integracija",
          "Analiza performansi",
        ],
        technologies: "Korištene tehnologije:",
      },
      blog: {
        title: "Blog",
        description: "Dinamične platforme za dijeljenje znanja.",
        features: [
          "Intuitivno sučelje",
          "Sustav komentara",
          "Kategorije i oznake",
          "Integracija s mrežama",
        ],
        technologies: "Korištene tehnologije:",
      },
      ecommerce: {
        title: "Katalog & E-trgovina",
        description: "Kompletne platforme za online prodaju.",
        features: [
          "Organizirani katalog",
          "Sigurna kupnja",
          "Integrirani gateway-i",
          "Admin panel",
        ],
        technologies: "Korištene tehnologije:",
      },
      cta: {
        text: "Svaki projekt se razvija s pažnjom na detalje i fokusom na rezultate.",
        button: "Zatražite ponudu",
      },
    },
    projects: {
      more: "Vidi više projekata",
      less: "Vidi manje projekata",
      featured: "Istaknuto",
      title: "Projekti",
      button: { photos: "Vidi Fotografije", visit: "Posjeti Stranicu" },
      card5: { title: "Salon ljepote", description: "Web stranica za salon." },
      card1: {
        title: "Barber Arte Navalha",
        description: "Klasična brijačnica fokusirana na tradicionalne tehnike.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Vrhunsko iskustvo brijačnice u Lisabonu.",
      },
      card3: {
        title: "Kafić",
        description: "Web stranica za kafić s digitalnim jelovnikom.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Specijalisti za šišanje britvom.",
      },
      card6: {
        title: "Odvjetnički Ured",
        description: "Profesionalna web stranica za pravne usluge.",
      },
      card7: {
        title: "Burguer Del",
        description: "Online platforma za naručivanje hamburgera.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Interaktivna web stranica s animacijama.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Web stranica talijanskog restorana.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Gdje se stil susreće s sofisticiranošću.",
      },
    },
    contact: {
      title: "Kontakt",
      description:
        "Slobodno me kontaktirajte. Uvijek sam otvoren za nove prilike.",
      findme: "Ili me pronađite na:",
    },
    form: {
      name: "Ime",
      email: "Email",
      message: "Poruka",
      submit: "Pošalji Poruku",
      whatsapp: "Razgovaraj na WhatsApp",
    },
    footer: {
      copyright: "&copy; 2025 Matheus Torres de Oliveira. Sva prava pridržana.",
      developed:
        "ISUS JE PUT, ISTINA I ŽIVOT! NITKO NE DOLAZI OCEV OSIM PO MENI.",
    },
    galeria: { title: "Foto Galerija" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== TÜRKÇE ====================
  "tr-TR": {
    title: "Matheus Torres | Fullstack Geliştirici",
    nav: {
      about: "Hakkımda",
      services: "Hizmetler",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      title: "<span>Fullstack</span> Geliştirici",
      subtitle: "Benim adım <span>Matheus</span>",
      description:
        "Kullanılabilirlik, performans ve temiz tasarıma odaklı dijital deneyimler sunuyorum.",
      available: "Yeni fırsatlara açık",
      typingLines: [
        "Fullstack Geliştirici eğitimde...",
        "Benzersiz dijital deneyimler yaratıyorum...",
        "Performans ve kullanılabilirliğe odaklı...",
        "Temiz kod ve tasarıma tutkulu...",
        "Yüksek performanslı voleybol sporcusu...",
      ],
    },
    about: {
      title: "Hakkımda",
      intro:
        "Sadece güzel değil — sonuç üreten web siteleri oluşturuyorum. Acımasız performans, kusursuz mobil deneyim ve dönüştüren kod.",
      card1: {
        title: "Sonuç Odaklı",
        desc: "Hızlı siteler, SEO optimizasyonlu ve ziyaretçileri gerçek müşterilere dönüştürmek için yapılandırılmış.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Her cihazda mükemmel deneyimler. Satın alma kararlarının %70'i mobilde gerçekleşir.",
      },
      card3: {
        title: "Modern Stack",
        desc: "Semantik HTML, duyarlı CSS, optimize JavaScript. React ve Node.js.",
      },
      card4: {
        title: "Sporcu Zihniyeti",
        desc: "Disiplin, strateji ve sonuçlara obsesif odaklanma. Her proje bir yarışma gibi.",
      },
    },
    services: {
      title: "Sunulan Hizmetler",
      subtitle: "Dijital varlığınızı dönüştürmek için özel web çözümleri.",
      siteInstitutional: {
        title: "Kurumsal Web Sitesi",
        description:
          "Markanızı güvenilir şekilde temsil eden profesyonel web siteleri.",
        features: [
          "Özel ve benzersiz tasarım",
          "Tam responsive (mobil, tablet, masaüstü)",
          "SEO için optimize edilmiş",
          "Sosyal medya entegrasyonu",
        ],
        technologies: "Kullanılan teknolojiler:",
      },
      landingPage: {
        title: "Landing Page & Satış Sayfaları",
        description:
          "Ziyaretçileri müşteriye dönüştürmek için stratejik sayfalar.",
        features: [
          "Dönüşüm odaklı tasarım (CRO)",
          "Optimize formlar ve CTA'lar",
          "E-posta pazarlama entegrasyonu",
          "Performans analizi",
        ],
        technologies: "Kullanılan teknolojiler:",
      },
      blog: {
        title: "Blog",
        description: "Bilgi paylaşımı için dinamik içerik platformları.",
        features: [
          "Sezgisel yönetim arayüzü",
          "Yorum ve etkileşim sistemi",
          "Kategoriler ve etiketler",
          "Sosyal medya entegrasyonu",
        ],
        technologies: "Kullanılan teknolojiler:",
      },
      ecommerce: {
        title: "Katalog & E-ticaret",
        description: "Ürünleri sergilemek ve online satış için platformlar.",
        features: [
          "Düzenli ürün kataloğu",
          "Güvenli ödeme",
          "Ödeme gateway entegrasyonu",
          "Yönetim paneli",
        ],
        technologies: "Kullanılan teknolojiler:",
      },
      cta: {
        text: "Her proje detaylara özen, optimize performans ve müşteri sonuçlarına odaklanarak geliştirilir.",
        button: "Teklif İste",
      },
    },
    projects: {
      more: "Daha fazla proje gör",
      less: "Daha az proje gör",
      featured: "Öne Çıkanlar",
      title: "Projeler",
      button: { photos: "Fotoğrafları Gör", visit: "Siteyi Ziyaret Et" },
      card5: {
        title: "Güzellik Salonu",
        description: "Modern UI/UX ile güzellik salonu sitesi.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description: "Geleneksel tekniklere odaklanmış klasik berber.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Lizbon'da premium berber deneyimi.",
      },
      card3: {
        title: "Kafeterya",
        description: "Dijital menülü kafe web sitesi.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Ustura tıraşı ve modern kesim uzmanları.",
      },
      card6: {
        title: "Hukuk Bürosu",
        description: "Hukuki hizmetler için kurumsal web sitesi.",
      },
      card7: {
        title: "Burguer Del",
        description: "Hamburger sipariş platformu.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Akıcı animasyonlara sahip pizzería sitesi.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "İtalyan restoranı web sitesi.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Stilin sofistike ile buluştuğu yer.",
      },
    },
    contact: {
      title: "İletişim",
      description:
        "Benimle iletişime geçmekten çekinmeyin. Her zaman yeni fırsatlara açığım.",
      findme: "Veya beni burada bulun:",
    },
    form: {
      name: "İsim",
      email: "E-posta",
      message: "Mesaj",
      submit: "Mesaj Gönder",
      whatsapp: "Yaz WhatsApp'ta",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Tüm hakları saklıdır.",
      developed:
        "İSA YOL, HAKİKAT VE HAYATTIR! BABA'YA ANCAK BENİM ARACILIĞIMLA GELİNİR.",
    },
    galeria: { title: "Fotoğraf Galerisi" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },

  // ==================== POLSKI ====================
  "pl-PL": {
    title: "Matheus Torres | Programista Fullstack",
    nav: {
      about: "O mnie",
      services: "Usługi",
      projects: "Projekti",
      contact: "Kontakt",
    },
    hero: {
      title: "Programista <span>Fullstack</span>",
      subtitle: "Mam na imię <span>Matheus</span>",
      description:
        "Dostarczam doświadczenia cyfrowe skoncentrowane na użyteczności, wydajności i czystym designie.",
      available: "Dostępny na nowe możliwości",
      typingLines: [
        "Programista Fullstack w trakcie szkolenia...",
        "Tworzenie unikalnych doświadczeń cyfrowych...",
        "Skoncentrowany na wydajności i użyteczności...",
        "Pasjonat czystego kodu i designu...",
        "Wysoko wydajny siatkarz...",
      ],
    },
    about: {
      title: "O mnie",
      intro:
        "Tworzę strony internetowe, które nie są tylko piękne — to maszyny do wyników. Brutalna wydajność, nienaganne doświadczenie mobilne i kod, który konwertuje.",
      card1: {
        title: "Skupienie na Wynikach",
        desc: "Szybkie strony, zoptymalizowane pod SEO i ustrukturyzowane do konwersji.",
      },
      card2: {
        title: "Mobile-First",
        desc: "Idealne doświadczenia na każdym urządzeniu. 70% decyzji zakupowych podejmowanych jest mobilnie.",
      },
      card3: {
        title: "Nowoczesny Stack",
        desc: "Semantyczny HTML, responsywny CSS, zoptymalizowany JavaScript. React i Node.js.",
      },
      card4: {
        title: "Mentalność Sportowca",
        desc: "Dyscyplina, strategia i obsesyjne skupienie na wynikach. Każdy projekt jak zawody.",
      },
    },
    services: {
      title: "Oferowane Usługi",
      subtitle:
        "Niestandardowe rozwiązania webowe do transformacji Twojej obecności cyfrowej.",
      siteInstitutional: {
        title: "Strona Instytucjonalna",
        description:
          "Tworzenie profesjonalnych stron reprezentujących Twoją markę.",
        features: [
          "Spersonalizowany design",
          "W pełni responsywna",
          "Zoptymalizowana pod SEO",
          "Integracja z mediami społecznościowymi",
        ],
        technologies: "Użyte technologie:",
      },
      landingPage: {
        title: "Landing Page & Strony Sprzedażowe",
        description: "Strategicznie opracowane strony do konwersji.",
        features: [
          "Design zorientowany na konwersję",
          "Zoptymalizowane formularze",
          "Integracja z email marketingiem",
          "Analiza wydajności",
        ],
        technologies: "Użyte technologie:",
      },
      blog: {
        title: "Blog",
        description: "Dynamiczne platformy treściowe do dzielenia się wiedzą.",
        features: [
          "Intuicyjny interfejs administracyjny",
          "System komentarzy",
          "Kategorie i tagi",
          "Integracja z mediami społecznościowymi",
        ],
        technologies: "Użyte technologie:",
      },
      ecommerce: {
        title: "Katalog & E-commerce",
        description: "Kompletne platformy do sprzedaży online.",
        features: [
          "Zorganizowany katalog produktów",
          "Bezpieczny koszyk",
          "Integracja z bramkami płatności",
          "Panel administracyjny",
        ],
        technologies: "Użyte technologie:",
      },
      cta: {
        text: "Każdy projeto jest desenvolvido com atenção aos detalhes e foco nos resultados.",
        button: "Poproś o wycenę",
      },
    },
    projects: {
      more: "Zobacz więcej projektów",
      less: "Zobacz mniej projektów",
      featured: "Wyróżnione",
      title: "Projekty",
      button: { photos: "Zobacz Zdjęcia", visit: "Odwiedź Stronę" },
      card5: {
        title: "Salon piękności",
        description: "Strona salonu piękności.",
      },
      card1: {
        title: "Barber Arte Navalha",
        description: "Klasyczny barber skupiony na tradycyjnych technikach.",
      },
      card2: {
        title: "Barbearia BC Lisboa",
        description: "Luksusowe doświadczenie barberskie w Lizbonie.",
      },
      card3: {
        title: "Kawiarnia",
        description: "Strona kawiarni z cyfrowym menu.",
      },
      card4: {
        title: "Corte Navalha",
        description: "Specjaliści od cięcia brzytwą.",
      },
      card6: {
        title: "Kancelaria Adwokacka",
        description: "Profesjonalna strona usług prawnych.",
      },
      card7: {
        title: "Burguer Del",
        description: "Platforma zamówień online dla hamburgerowni.",
      },
      card8: {
        title: "Pizzaria Animation",
        description: "Interaktive strona pizzerii z animacjami.",
      },
      card9: {
        title: "Sapore d'Oro",
        description: "Strona włoskiej restauracji.",
      },
      card5_alt: {
        title: "Barbearia Elegance",
        description: "Gdzie styl spotyka się z wyrafonowaniem.",
      },
    },
    contact: {
      title: "Kontakt",
      description:
        "Skontaktuj się ze mną. Zawsze jestem otwarty for nuove opportunità.",
      findme: "Lub znajdź mnie na:",
    },
    form: {
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      submit: "Wyślij Wiadomość",
      whatsapp: "Napisz na WhatsApp",
    },
    footer: {
      copyright:
        "&copy; 2025 Matheus Torres de Oliveira. Wszelkie prawa zastrzeżone.",
      developed: "JEZUS JEST DROGĄ, PRAWDĄ I ŻYCIEM!",
    },
    galeria: { title: "Galeria Zdjęć" },
    tech: {
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      mysql: "MySQL",
      vscode: "VSCode",
      react: "React",
      bootstrap: "Bootstrap",
      tailwind: "Tailwind",
    },
  },
};
