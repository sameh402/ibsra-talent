
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { home: "Home", build: "Build Your Team", process: "Our Process", join: "Join Us", logout: "Logout" },
      hero: { partner: "Business Growth Partner", title1: "Hire Qualified", title2: "Talent Who", title3: "Want to", title4: "Work with You.", desc: "Transforming passionate individuals into specialists trained specifically for your tech stack and culture.", btn_build: "Build Your Team", btn_process: "Our Process" },
      stats: { devs: "Developers Trained", partners: "Enterprise Partners", rate: "Hiring Success Rate", markets: "Markets Served" },
      problem: { label: "Structural Friction", title: "Stop Guessing.", title_alt: "See Results First.", desc: "Strong Teams Build Strong Companies. You Deserve Certainty, Not Guesswork.", gap_title: "Structural Gap", gap_desc: "We solve recruitment and alignment bottlenecks before they impact your velocity." },
      difference: { label: "Deployment DNA", title1: "Passion Meets", title2: "Precision.", desc: "Elite talent dreams of contribution, not just employment. We find individuals with latent excitement for your industry and weaponize their potential.", cert: "KPI Certified", quote: "Turning raw potential into high-performance specialists ready from hour one.", list: ["Candidates with Mission-Alignment", "Training on your exact tech stack", "Workflow integration from week one", "KPI-proven performance tracking"] },
      process: { label: "Flexible Talent Solutions", title: "Every Business Need, One Partner", desc: "Whether you need immediate deployment or long-term team building, we deliver pre-trained, industry-ready professionals.", help_title: "Need help deciding?", help_desc: "Explore the detailed differences between our engagement models.", btn_consult: "Schedule a Consultation", btn_compare: "Compare All Services" },
      ai_planner: { label: "AI Architect Tool", title: "Build Your DNA Training Roadmap", desc: "Enter a job title or stack. Our AI will simulate a specialized 6-phase training cycle for your specific hire.", placeholder: "e.g. Flutter Developer for a real-time logistics app...", btn: "Generate Strategy", btn_auth: "Sign In to Access Platform", status: "Analyzing...", canvas: "Strategy Canvas", canvas_desc: "Design a roadmap that perfectly clones your company's workflows and technical standards." },
      benefits: { label: "Value Proposition", title: "What This Means for Your Business", trans_title: "Not Just Training.", trans_subtitle: "It's Transformation.", trans_desc: "Behind every great company are people who believed in its vision. We find those people and give them the skills to make your company even greater.", trans_quote: "This isn't transactional hiring. It's building a team that truly cares." },
      testimonials: { label: "Social Proof", title: "Trusted by Industry Titans", desc: "Our graduates are driving growth at the world's most prestigious organizations." },
      partners: { label: "Our Network" },
      footer: { platform: "Platform", resources: "Resources", contact: "Contact", legal: "Legal" },
      cta: { title: "Let's Build Your Dream Team", btn: "Schedule a Discovery Call" }
    }
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", build: "ابنِ فريقك", process: "عمليتنا", join: "انضم إلينا", logout: "خروج" },
      hero: { partner: "شريك نمو الأعمال", title1: "وظف كفاءات", title2: "مؤهلة", title3: "ترغب في", title4: "العمل معك.", desc: "تحويل الأفراد المتحمسين إلى متخصصين مدربين خصيصًا لتقنياتك وثقافة شركتك.", btn_build: "ابنِ فريقك", btn_process: "تعرف على عمليتنا" },
      stats: { devs: "مطورون مدربون", partners: "شركاء مؤسسيون", rate: "معدل نجاح التوظيف", markets: "أسواق مخدومة" },
      problem: { label: "الاحتكاك الهيكلي", title: "توقف عن التخمين.", title_alt: "شاهد النتائج أولاً.", desc: "الفرق القوية تبني شركات قوية. أنت تستحق اليقين، وليس التخمين.", gap_title: "الفجوة الهيكلية", gap_desc: "نحن نحل اختناقات التوظيف والمواءمة قبل أن تؤثر على سرعتك." },
      difference: { label: "حمض Deployment النووي", title1: "الشغف يلتقي", title2: "بالدقة.", desc: "تحلم المواهب النخبوية بالمساهمة، وليس مجرد التوظيف. نجد الأفراد الذين لديهم حماس كامن لمجالك.", cert: "معتمد من KPI", quote: "تحويل الإمكانات الخام إلى متخصصين عالي الأداء جاهزين من الساعة الأولى.", list: ["مرشحون متوافقون مع المهمة", "التدريب على تقنياتك الدقيقة", "تكامل سير العمل من الأسبوع الأول", "تتبع الأداء المثبت بـ KPI"] },
      process: { label: "حلول المواهب المرنة", title: "كل احتياجات العمل، شريك واحد", desc: "سواء كنت بحاجة إلى نشر فوري أو بناء فريق طويل الأمد، فنحن نقدم محترفين مدربين مسبقًا وجاهزين للصناعة.", help_title: "هل تحتاج مساعدة في القرار؟", help_desc: "استكشف الاختلافات التفصيلية بين نماذج المشاركة لدينا.", btn_consult: "جدولة استشارة", btn_compare: "قارن بين جميع الخدمات" },
      ai_planner: { label: "أداة المهندس الاصطناعي", title: "ابنِ خارطة طريق تدريب DNA الخاصة بك", desc: "أدخل مسمى وظيفي. سيقوم الذكاء الاصطناعي لدينا بمحاكاة دورة تدريبية متخصصة من 6 مراحل.", placeholder: "مثال: مطور فلاتر لتطبيق لوجستي...", btn: "إنشاء الاستراتيجية", btn_auth: "سجل الدخول للوصول للمنصة", status: "جاري التحليل...", canvas: "لوحة الاستراتيجية", canvas_desc: "صمم خارطة طريق تستنسخ سير عمل شركتك ومعاييرك الفنية تمامًا." },
      benefits: { label: "مقترح القيمة", title: "ماذا يعني هذا لعملك", trans_title: "ليس مجرد تدريب.", trans_subtitle: "إنه تحول.", trans_desc: "خلف كل شركة عظيمة أناس آمنوا برؤيتها. نجد هؤلاء الناس ونمنحهم المهارات لجعل شركتك أعظم.", trans_quote: "هذا ليس توظيفًا عابرًا. إنه بناء فريق يهتم حقًا." },
      testimonials: { label: "دليل اجتماعي", title: "موثوق من قبل عمالقة الصناعة", desc: "خريجونا يقودون النمو في أرقى المنظمات العالمية وقادة السوق المحليين." },
      partners: { label: "شبكتنا" },
      footer: { platform: "المنصة", resources: "الموارد", contact: "اتصل بنا", legal: "قانوني" },
      cta: { title: "لنقم ببناء فريق أحلامك", btn: "جدولة مكالمة استكشافية" }
    }
  },
  fr: {
    translation: {
      nav: { home: "Accueil", build: "Équipe", process: "Processus", join: "Rejoindre", logout: "Déconnexion" },
      hero: { partner: "Partenaire de croissance", title1: "Recrutez des", title2: "Talents", title3: "Qui Veulent", title4: "Travailler.", desc: "Transformer des passionnés en spécialistes formés spécifiquement pour votre stack technique.", btn_build: "Créer votre équipe", btn_process: "Notre processus" },
      stats: { devs: "Développeurs Formés", partners: "Partenaires Entreprise", rate: "Taux de Succès", markets: "Marchés Servis" },
      problem: { label: "Friction Structurelle", title: "Arrêtez de Deviner.", title_alt: "Voyez les Résultats.", desc: "Les équipes solides bâtissent des entreprises solides. Vous méritez de la certitude." },
      cta: { title: "Construisons votre équipe de rêve", btn: "Prendre RDV" }
    }
  }
};

const languages = ['de', 'zh', 'ja', 'ru', 'pt', 'it', 'tr'];
languages.forEach(lng => {
  if (!resources[lng]) {
    resources[lng] = { translation: resources.en.translation };
  }
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
