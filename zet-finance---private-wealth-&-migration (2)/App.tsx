import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs'; 
import { WhyMalta } from './components/WhyMalta';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { ContactModal } from './components/ContactModal';
import { LegalPage } from './components/LegalPage';
import { CallbackPage } from './components/CallbackPage';
import { AboutPage } from './components/AboutPage';
import { TaxAdvisoryPage } from './components/TaxAdvisoryPage';

// 1. Define the Master Dictionary
const translations = {
  EN: {
    nav_residency: "Residency & Citizenship",
    nav_tax: "Tax Advisory",
    nav_about: "About Us",
    hero_badge: "Regulated Malta Government Agent",
    hero_title: "Strategic EU Residency & Tax Optimisation.",
    hero_sub: "Fully licensed by the Maltese Government. Find the optimal citizenship or tax residency structure for your profile in under 60 seconds.",
    cta_callback: "Request Callback",
    
    // Metrics
    metric_1: "15% Flat Tax Rate",
    metric_2: "180+ Visa-Free Countries",
    metric_3: "A+ Sovereign Rating",

    // Service Cards
    card1_title: "Malta Citizenship by Direct Investment",
    card1_sub: "Investment from €600,000. Timeline: 1 to 3 years.",
    card2_title: "Malta Permanent Residence (MPRP)",
    card2_sub: "Capital Requirement: ~€150,000. Timeline: 4-6 months.",
    card3_title: "Global Residence Programme (GRP)",
    card3_sub: "Flat 15% Tax Rate. Minimum annual tax: €15,000.",
    card4_title: "Personal Tax Advisory",
    card4_sub: "Bespoke compliance and wealth structuring for HNWIs.",
    card_btn: "View Details & Apply",

    // Checker
    checker_title: "Eligibility Check",
    checker_step1: "What is your primary goal?",
    checker_goal1: "Schengen Access & Residency",
    checker_goal2: "EU Citizenship",
    checker_goal3: "Tax Optimization",
    checker_step2: "Select your nationality",
    checker_btn_calc: "Calculate Eligibility",
    checker_btn_back: "← Back",
    
    // Pillars
    pillars_title: "The Four Pillars",
    pillars_sub: "We specialize exclusively in Maltese government-sanctioned programs, ensuring the highest level of expertise and success rate.",

    // Why Malta
    malta_title: "Why Malta?",
    malta_1_title: "Economic Powerhouse",
    malta_1_sub: "Consistently outperforming the EU average in real GDP growth.",
    malta_2_title: "Top-Tier Safety",
    malta_2_sub: "Ranked as one of the safest countries for wealth preservation.",
    malta_3_title: "English-Speaking Hub",
    malta_3_sub: "A business-friendly ecosystem with a robust legal framework.",

    // Footer
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Engagement",
    footer_dd: "Due Diligence Protocol",
    footer_reg: "Regulatory Disclosures",
    footer_desc: "The premier advisory for European investment migration. We provide bespoke solutions for high-net-worth individuals seeking safety, mobility, and financial optimization.",
    footer_hq: "Headquarters",
    footer_legal: "Legal & Compliance",
    footer_desk: "Private Client Desk",
    footer_encrypted: "Encrypted lines available via Signal/Wire.",
    footer_rights: "© 2026 Zet Finance Ltd. All Rights Reserved. Regulated Financial Service Provider.",

    // Forms/Modals
    modal_title: "Speak with our Advisors",
    modal_sub: "Enter your contact details and our team will reach out discreetly.",
    form_name: "Your Name",
    form_contact: "Mobile or Email",
    placeholder_name: "Enter your name...",
    placeholder_contact: "Enter Mobile or Email...",
    btn_email_direct: "Email Us Directly",

    // Tax Advisory Page
    tax_eyebrow: "Wealth Management",
    tax_hero_title: "Strategic Tax Optimization & Wealth Structuring in Malta.",
    tax_hero_sub: "High taxes shouldn't penalize your success. Malta offers one of the most robust and attractive tax frameworks in the European Union.",
    tax_btn_assess: "Get a Tax Assessment",
    tax_tag_licensed: "Licensed Advice",
    tax_tag_compliance: "Full Compliance",
    tax_btn_inquire: "Inquire Now",
    tax_corp_title: "Corporate Structuring",
    tax_corp_sub: "Establish a Malta holding company with highly efficient effective tax rates through the full imputation system.",
    tax_pers_title: "Personal Tax Compliance",
    tax_pers_sub: "Bespoke advisory to ensure total adherence to local and international regulations (CRS/FATCA).",
    tax_why_title: "Why Malta for Tax Residency?",
    tax_why_sub: "Malta is a reputable financial center within the EU, fully compliant with OECD standards. Its remittance-based tax system for resident non-domiciled individuals is unique in Europe, offering significant fiscal advantages without aggressive tax planning.",
    tax_speak_title: "Speak to a Tax Advisor Today",
    tax_speak_sub: "Schedule a confidential discovery call to understand your eligibility for the 15% tax rate.",
    tax_btn_book: "Book Consultation",

    // About Page
    about_hero_title: "Guiding Your Wealth and Residency with Absolute Integrity.",
    about_hero_sub: "We cultivate enduring partnerships with our individual clients and provide guidance and support for what is truly important to them: freedom, security, and wealth preservation.",
    about_licensed: "Licensed by the Government of Malta (AKM-MERC & ARM04957)",
    about_board: "Executive Board",
    about_leadership: "Our Leadership",
    about_role_mp: "Managing Partner",
    about_role_p: "Partner",
    about_read_bio: "Read Bio",
    about_trusted: "Trusted by Families Worldwide",
    about_trusted_sub: "We are proud to have guided hundreds of clients through complex residency and citizenship processes with discretion and excellence.",
    about_speak: "Speak directly with our leadership team about your future."
  },
  FR: {
    nav_residency: "Résidence et Citoyenneté",
    nav_tax: "Conseil Fiscal",
    nav_about: "À Propos",
    hero_badge: "Agent Agréé par le Gouvernement de Malte",
    hero_title: "Stratégies de Résidence en UE et Optimisation Fiscale.",
    hero_sub: "Entité dûment agréée par le gouvernement maltais. Découvrez la structure de citoyenneté ou de résidence fiscale idéale pour votre profil en moins de 60 secondes.",
    cta_callback: "Demander un Entretien",

    // Metrics
    metric_1: "Taux d'Imposition Fixe de 15%",
    metric_2: "180+ Pays Sans Visa",
    metric_3: "Note Souveraine A+",

    // Service Cards
    card1_title: "Citoyenneté Maltaise par Investissement Direct",
    card1_sub: "Investissement à partir de 600 000 €. Délai : 1 à 3 ans.",
    card2_title: "Résidence Permanente (MPRP)",
    card2_sub: "Capital Requis : ~150 000 €. Délai : 4-6 mois.",
    card3_title: "Programme de Résidence Globale (GRP)",
    card3_sub: "Taux fixe de 15%. Impôt minimum annuel : 15 000 €.",
    card4_title: "Conseil Fiscal Personnel",
    card4_sub: "Conformité sur mesure et structuration patrimoniale pour les UHNWI.",
    card_btn: "Voir les Détails et Postuler",

    // Checker
    checker_title: "Vérification d'Éligibilité",
    checker_step1: "Quel est votre objectif principal ?",
    checker_goal1: "Accès Schengen et Résidence",
    checker_goal2: "Citoyenneté Européenne",
    checker_goal3: "Optimisation Fiscale",
    checker_step2: "Sélectionnez votre nationalité",
    checker_btn_calc: "Calculer l'Éligibilité",
    checker_btn_back: "← Retour",

    // Pillars
    pillars_title: "Nos Quatre Piliers",
    pillars_sub: "Nous nous spécialisons exclusivement dans les programmes agréés par le gouvernement maltais, garantissant un niveau d'expertise et un taux de réussite optimaux.",

    // Why Malta
    malta_title: "Pourquoi Malte ?",
    malta_1_title: "Puissance Économique",
    malta_1_sub: "Surpasse régulièrement la moyenne de l'UE en croissance du PIB.",
    malta_2_title: "Sécurité de Premier Plan",
    malta_2_sub: "L'un des pays les plus sûrs pour la préservation du patrimoine.",
    malta_3_title: "Centre Anglophone",
    malta_3_sub: "Un écosystème favorable aux affaires avec un cadre juridique solide.",

    // Footer
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Engagement",
    footer_dd: "Protocole de Due Diligence",
    footer_reg: "Divulgations Réglementaires",
    footer_desc: "Le cabinet de conseil de premier plan pour la migration d'investissement européenne. Solutions sur mesure pour les UHNWI.",
    footer_hq: "Siège Social",
    footer_legal: "Juridique et Conformité",
    footer_desk: "Bureau des Clients Privés",
    footer_encrypted: "Lignes cryptées disponibles via Signal/Wire.",
    footer_rights: "© 2026 Zet Finance Ltd. Tous droits réservés. Prestataire réglementé.",

    // Forms/Modals
    modal_title: "Parlez à nos Conseillers",
    modal_sub: "Saisissez vos coordonnées et notre équipe vous contactera en toute discrétion.",
    form_name: "Votre Nom",
    form_contact: "Téléphone ou Email",
    placeholder_name: "Entrez votre nom...",
    placeholder_contact: "Téléphone ou Email...",
    btn_email_direct: "Nous Contacter par Email",

    // Tax Advisory Page
    tax_eyebrow: "Gestion de Patrimoine",
    tax_hero_title: "Optimisation Fiscale Stratégique et Structuration à Malte.",
    tax_hero_sub: "Les impôts élevés ne doivent pas pénaliser votre succès. Malte offre l'un des cadres fiscaux les plus solides et attractifs de l'UE.",
    tax_btn_assess: "Obtenir une Évaluation Fiscale",
    tax_tag_licensed: "Conseil Agréé",
    tax_tag_compliance: "Conformité Totale",
    tax_btn_inquire: "Se Renseigner",
    tax_corp_title: "Structuration d'Entreprise",
    tax_corp_sub: "Créez une société holding maltaise bénéficiant de taux d'imposition effectifs très avantageux.",
    tax_pers_title: "Conformité Fiscale Personnelle",
    tax_pers_sub: "Conseil sur mesure garantissant l'adhésion totale aux réglementations (CRS/FATCA).",
    tax_why_title: "Pourquoi Malte pour la Résidence Fiscale ?",
    tax_why_sub: "Malte est un centre financier réputé, conforme aux normes de l'OCDE. Son système d'imposition sur les versements est unique en Europe.",
    tax_speak_title: "Parlez à un Conseiller Fiscal Aujourd'hui",
    tax_speak_sub: "Planifiez un appel confidentiel pour comprendre votre éligibilité au taux de 15%.",
    tax_btn_book: "Réserver une Consultation",

    // About Page
    about_hero_title: "Guidant Votre Patrimoine avec une Intégrité Absolue.",
    about_hero_sub: "Nous cultivons des partenariats durables pour ce qui compte vraiment : liberté, sécurité et préservation du patrimoine.",
    about_licensed: "Agréé par le Gouvernement de Malte (AKM-MERC & ARM04957)",
    about_board: "Conseil d'Administration",
    about_leadership: "Notre Direction",
    about_role_mp: "Partenaire Gérant",
    about_role_p: "Partenaire",
    about_read_bio: "Lire la Biographie",
    about_trusted: "La Confiance des Familles du Monde Entier",
    about_trusted_sub: "Nous avons guidé des centaines de clients dans leurs démarches de résidence avec excellence.",
    about_speak: "Discutez de votre avenir directement avec notre direction."
  },
  RU: {
    nav_residency: "ВНЖ и Гражданство",
    nav_tax: "Налоговый Консалтинг",
    nav_about: "О Компании",
    hero_badge: "Лицензированный агент Правительства Мальты",
    hero_title: "Стратегическое резидентство в ЕС и налоговая оптимизация.",
    hero_sub: "Официальная государственная лицензия. Подберите оптимальную структуру ВНЖ или налогового резидентства под ваш профиль за 60 секунд.",
    cta_callback: "Заказать Звонок",

    // Metrics
    metric_1: "Фиксированный налог 15%",
    metric_2: "180+ стран без визы",
    metric_3: "Кредитный рейтинг A+",

    // Service Cards
    card1_title: "Гражданство Мальты за Прямые Инвестиции",
    card1_sub: "Инвестиции от €600,000. Срок: от 1 до 3 лет.",
    card2_title: "ПМЖ на Мальте (MPRP)",
    card2_sub: "Требования к капиталу: ~€150,000. Срок: 4-6 месяцев.",
    card3_title: "Глобальная Программа Резидентства (GRP)",
    card3_sub: "Налог 15%. Минимальный ежегодный налог: €15,000.",
    card4_title: "Налоговый Консалтинг",
    card4_sub: "Индивидуальный комплаенс и структурирование капитала.",
    card_btn: "Подробнее и Заявка",

    // Checker
    checker_title: "Проверка Соответствия",
    checker_step1: "Какова ваша главная цель?",
    checker_goal1: "Доступ в Шенген и ВНЖ",
    checker_goal2: "Гражданство ЕС",
    checker_goal3: "Налоговая Оптимизация",
    checker_step2: "Выберите ваше гражданство",
    checker_btn_calc: "Проверить Статус",
    checker_btn_back: "← Назад",

    // Pillars
    pillars_title: "Четыре Направления",
    pillars_sub: "Мы специализируемся исключительно на программах, утвержденных правительством Мальты, обеспечивая высочайший уровень экспертизы и успешности.",

    // Why Malta
    malta_title: "Почему Мальта?",
    malta_1_title: "Экономическая Стабильность",
    malta_1_sub: "Стабильно опережает средние показатели роста ВВП в ЕС.",
    malta_2_title: "Исключительная Безопасность",
    malta_2_sub: "Одна из самых безопасных стран Европы для сохранения капитала.",
    malta_3_title: "Англоязычная Юрисдикция",
    malta_3_sub: "Надежная правовая система и идеальная среда для бизнеса.",

    // Footer
    footer_privacy: "Политика Конфиденциальности",
    footer_terms: "Условия Сотрудничества",
    footer_dd: "Протокол Due Diligence",
    footer_reg: "Раскрытие Нормативной Информации",
    footer_desc: "Ведущий консультант по инвестиционной миграции в Европу. Индивидуальные решения для состоятельных лиц.",
    footer_hq: "Штаб-квартира",
    footer_legal: "Право и Комплаенс",
    footer_desk: "Отдел Частных Клиентов",
    footer_encrypted: "Зашифрованная связь через Signal/Wire.",
    footer_rights: "© 2026 Zet Finance Ltd. Все права защищены. Лицензированный провайдер.",

    // Forms/Modals
    modal_title: "Свяжитесь с Консультантами",
    modal_sub: "Оставьте ваши контактные данные, и наша команда конфиденциально свяжется с вами.",
    form_name: "Ваше Имя",
    form_contact: "Телефон или Email",
    placeholder_name: "Ваше имя...",
    placeholder_contact: "Телефон или Email...",
    btn_email_direct: "Написать нам напрямую",

    // Tax Advisory Page
    tax_eyebrow: "Управление Капиталом",
    tax_hero_title: "Стратегическая Налоговая Оптимизация на Мальте.",
    tax_hero_sub: "Высокие налоги не должны наказывать за успех. Мальта предлагает один из самых надежных налоговых режимов в ЕС.",
    tax_btn_assess: "Получить Налоговую Оценку",
    tax_tag_licensed: "Лицензированный Совет",
    tax_tag_compliance: "Полный Комплаенс",
    tax_btn_inquire: "Отправить Запрос",
    tax_corp_title: "Корпоративное Структурирование",
    tax_corp_sub: "Учреждение мальтийской холдинговой компании с высокоэффективными налоговыми ставками.",
    tax_pers_title: "Налоговый Комплаенс",
    tax_pers_sub: "Индивидуальный консалтинг для соблюдения международных правил (CRS/FATCA).",
    tax_why_title: "Почему Мальта для Налогового Резидентства?",
    tax_why_sub: "Мальта — авторитетный финансовый центр ЕС, соответствующий стандартам ОЭСР. Ее система налогообложения ремитированных доходов уникальна.",
    tax_speak_title: "Свяжитесь с Налоговым Советником",
    tax_speak_sub: "Запланируйте конфиденциальный звонок, чтобы узнать о праве на налог 15%.",
    tax_btn_book: "Забронировать Консультацию",

    // About Page
    about_hero_title: "Управляя Вашим Капиталом с Абсолютной Добросовестностью.",
    about_hero_sub: "Мы строим долгосрочные партнерские отношения, обеспечивая свободу, безопасность и сохранение богатства.",
    about_licensed: "Лицензия Правительства Мальты (AKM-MERC & ARM04957)",
    about_board: "Исполнительный Совет",
    about_leadership: "Наше Руководство",
    about_role_mp: "Управляющий Партнер",
    about_role_p: "Партнер",
    about_read_bio: "Читать Биографию",
    about_trusted: "Нам Доверяют Семьи по Всему Миру",
    about_trusted_sub: "Мы с гордостью провели сотни клиентов через сложные процессы получения ВНЖ и гражданства.",
    about_speak: "Обсудите ваше будущее напрямую с нашим руководством."
  },
  ZH: {
    nav_residency: "居留权与公民身份",
    nav_tax: "税务咨询",
    nav_about: "关于我们",
    hero_badge: "马耳他政府授权持牌代理",
    hero_title: "欧洲战略居留与税务优化方案。",
    hero_sub: "马耳他政府全面授权。60秒内为您匹配最佳的公民身份或税务居留架构。",
    cta_callback: "预约咨询",

    // Metrics
    metric_1: "15% 统一税率",
    metric_2: "180+ 免签国家",
    metric_3: "A+ 国家主权评级",

    // Service Cards
    card1_title: "马耳他直接投资入籍计划",
    card1_sub: "投资金额 €600,000 起。办理周期：1 至 3 年。",
    card2_title: "马耳他永久居留计划 (MPRP)",
    card2_sub: "资金要求：约 €150,000。办理周期：4-6 个月。",
    card3_title: "全球居留计划 (GRP)",
    card3_sub: "15% 统一税率。最低年度税额：€15,000。",
    card4_title: "个人税务咨询",
    card4_sub: "为高净值人群量身定制的合规与财富架构。",
    card_btn: "查看详情并申请",

    // Checker
    checker_title: "资格评估",
    checker_step1: "您的主要目标是什么？",
    checker_goal1: "申根通行与居留权",
    checker_goal2: "欧盟公民身份",
    checker_goal3: "税务优化",
    checker_step2: "请选择您的国籍",
    checker_btn_calc: "计算资格",
    checker_btn_back: "← 返回",

    // Pillars
    pillars_title: "四大核心业务",
    pillars_sub: "我们专注于马耳他政府批准的项目，确保提供最高水平的专业知识和成功率。",

    // Why Malta
    malta_title: "为什么选择马耳他？",
    malta_1_title: "经济引擎",
    malta_1_sub: "实际GDP增长率持续超越欧盟平均水平。",
    malta_2_title: "顶级安全",
    malta_2_sub: "被评为最安全的财富保值国家之一。",
    malta_3_title: "英语商业中心",
    malta_3_sub: "拥有健全法律框架的商业友好型生态系统。",

    // Footer
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    footer_dd: "尽职调查协议",
    footer_reg: "监管披露",
    footer_desc: "欧洲投资移民的顶级顾问。我们为寻求安全、流动性和财务优化的高净值人士提供定制解决方案。",
    footer_hq: "总部",
    footer_legal: "法律与合规",
    footer_desk: "私人客户部",
    footer_encrypted: "可通过 Signal/Wire 提供加密通信。",
    footer_rights: "© 2026 Zet Finance Ltd. 保留所有权利。受监管的金融服务提供商。",

    // Forms/Modals
    modal_title: "与我们的顾问交谈",
    modal_sub: "输入您的联系方式，我们的团队将谨慎地与您联系。",
    form_name: "您的姓名",
    form_contact: "手机或电子邮件",
    placeholder_name: "请输入您的姓名...",
    placeholder_contact: "手机号或电子邮件...",
    btn_email_direct: "直接发送电子邮件",

    // Tax Advisory Page
    tax_eyebrow: "财富管理",
    tax_hero_title: "马耳他战略税务优化与财富架构。",
    tax_hero_sub: "高额税收不应成为您成功的惩罚。马耳他提供欧盟中最稳健、最具吸引力的税务框架。",
    tax_btn_assess: "获取税务评估",
    tax_tag_licensed: "持牌顾问",
    tax_tag_compliance: "全面合规",
    tax_btn_inquire: "立即咨询",
    tax_corp_title: "企业架构",
    tax_corp_sub: "通过完全归集抵免制度，建立具有高效实际税率的马耳他控股公司。",
    tax_pers_title: "个人税务合规",
    tax_pers_sub: "定制咨询服务，确保完全遵守当地和国际法规 (CRS/FATCA)。",
    tax_why_title: "为什么选择马耳他作为税务居民？",
    tax_why_sub: "马耳他是欧盟内享有盛誉的金融中心，完全符合经合组织标准。其独特的汇款税制提供显著的财政优势。",
    tax_speak_title: "立即与税务顾问交谈",
    tax_speak_sub: "安排一次保密的发现通话，了解您是否符合15%税率的资格。",
    tax_btn_book: "预约咨询",

    // About Page
    about_hero_title: "以绝对的诚信守护您的财富与居留。",
    about_hero_sub: "我们与客户建立持久的合作伙伴关系，为他们真正重要的事情提供指导和支持：自由、安全和财富保值。",
    about_licensed: "马耳他政府授权持牌 (AKM-MERC & ARM04957)",
    about_board: "执行董事会",
    about_leadership: "我们的领导层",
    about_role_mp: "管理合伙人",
    about_role_p: "合伙人",
    about_read_bio: "阅读简历",
    about_trusted: "深受全球家族信任",
    about_trusted_sub: "我们自豪地以卓越和谨慎的态度，指导了数百名客户完成复杂的居留和公民身份申请流程。",
    about_speak: "直接与我们的领导团队讨论您的未来。"
  }
};

export type Translation = typeof translations.EN;

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInterest, setContactInterest] = useState<string>("");
  
  // View State Management
  const [currentView, setCurrentView] = useState<string>("home");
  
  // Language State Management
  const [lang, setLang] = useState<keyof typeof translations>("EN");

  // Get current translation object
  const t = translations[lang];

  const handleOpenContact = (interest: string = "") => {
    setContactInterest(interest);
    setIsContactOpen(true);
  };

  // Enhanced Navigation Handler
  const handleNavigate = (target: string) => {
    // Scrollable sections on Home
    if (['services', 'comparison', 'home'].includes(target)) {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          scrollToSection(target);
        }, 100);
      } else {
        scrollToSection(target);
      }
    } else {
      // Full Pages
      setCurrentView(target);
      window.scrollTo(0, 0);
    }
  };

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <div id="home">
              <Hero onNavigate={handleNavigate} t={t} lang={lang} />
            </div>
            
            <Programs 
              t={t}
              onQuoteClick={(service) => handleOpenContact(service)} 
              onMapCheck={() => {}} 
              onComparisonClick={() => handleNavigate('comparison')}
            />
            
            <WhyMalta t={t} />

            <ComparisonMatrix />
          </>
        );
      case 'about':
        return <AboutPage onContactClick={() => handleOpenContact("Leadership Team")} t={t} />;
      case 'advisory':
        return <TaxAdvisoryPage onContactClick={(interest) => handleOpenContact(interest || "Tax Advisory")} t={t} />;
      case 'callback': // Serves as /contact
        return <CallbackPage onBack={() => handleNavigate('home')} />;
      case 'privacy':
        return <LegalPage type="privacy" onBack={() => handleNavigate('home')} />;
      case 'terms':
        return <LegalPage type="terms" onBack={() => handleNavigate('home')} />;
      case 'due-diligence':
        return <LegalPage type="due-diligence" onBack={() => handleNavigate('home')} />;
      case 'regulatory':
        return <LegalPage type="regulatory" onBack={() => handleNavigate('home')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative flex flex-col">
      <Navbar 
        onLoginClick={() => setIsLoginOpen(true)} 
        currentPage={currentView} 
        onNavigate={handleNavigate}
        currentLang={lang}
        onLanguageChange={(l) => setLang(l as keyof typeof translations)}
        t={t}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} t={t} />

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)}
        programOfInterest={contactInterest}
        t={t}
      />
    </div>
  );
}

export default App;