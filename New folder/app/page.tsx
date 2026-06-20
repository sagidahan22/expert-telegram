import Image from "next/image";
import {
  Check,
  ChevronDown,
  Dumbbell,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { Reveal } from "./components/Reveal";

const whatsappUrl =
  "https://wa.me/972532756603?text=%D7%94%D7%99%D7%99%20%D7%A9%D7%92%D7%99%D7%90%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%9A%20%D7%95%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%91%D7%93%D7%95%D7%A7%20%D7%90%D7%9D%20%D7%94%D7%9C%D7%99%D7%95%D7%95%D7%99%20%D7%9E%D7%AA%D7%90%D7%99%D7%9D%20%D7%9C%D7%99";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "שגיא דהן - ליווי אונליין לכוח ומסה",
  description:
    "ליווי אונליין לגברים שרוצים לעלות במשקל, לבנות שריר, להתחזק, לשפר טכניקה ולהיכנס לעולם הפאוורליפטינג בצורה מסודרת.",
  areaServed: "Israel",
  serviceType: "Online strength coaching and powerlifting coaching",
  founder: {
    "@type": "Person",
    name: "שגיא דהן",
    jobTitle: "מאמן אונליין ופאוורליפטר",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+972532756603",
    contactType: "WhatsApp consultation",
    availableLanguage: ["Hebrew"],
  },
};

const navItems = [
  { label: "הסיפור", href: "#story" },
  { label: "למה איתי", href: "#why" },
  { label: "איך זה עובד", href: "#process" },
  { label: "למי זה מתאים", href: "#fit" },
  { label: "מה מקבלים", href: "#coaching" },
];

const proofPoints = [
  { value: "45 ק״ג", label: "התחלתי רזה", text: "אני מכיר מבפנים את הקושי לעלות במשקל" },
  { value: "IL / EU", label: "ניסיון תחרותי", text: "פאוורליפטינג בישראל ובאירופה" },
  { value: "SBD", label: "שיטה ומעקב", text: "סקוואט, בנץ׳ ודדליפט עם טכניקה ברורה" },
];

const heroTrustBadges = [
  "מתחרה פאוורליפטינג",
  "ניסיון עם עלייה במסה",
  "ליווי אישי ומעקב שבועי",
];

const heroVisualTags = ["POWERLIFTING", "MUSCLE GAIN", "TECHNIQUE", "ONLINE COACHING"];

const heroPerformanceStats = ["45KG → תחרויות", "SBD", "מעקב שבועי", "תיקוני טכניקה"];

const photoSlots = {
  heroCoach: "/images/sagi-dahan-hero.jpeg",
  competition: "/images/sagi-powerlifting-competition.jpg",
  training: "/images/sagi-gym-training.jpg",
  technique: "/images/sagi-technique-review.jpg",
  clientResult: "/images/sagi-client-result.jpg",
};

const audience = [
  "אתה אוכל, מתאמן, ועדיין המשקל כמעט לא זז.",
  "אתה נכנס לחדר כושר ולא בטוח מה באמת לקדם.",
  "אתה רוצה כוח וטכניקה, לא עוד תוכנית גנרית מהאינטרנט.",
  "אתה רוצה מסגרת שמחזיקה אותך עקבי גם כשאין חשק.",
];

const trustReasons = [
  {
    icon: Target,
    title: "עברתי את זה בעצמי",
    text: "התחלתי ב־45 ק״ג, רזה וחסר ביטחון. אני יודע איך זה מרגיש כשאתה מנסה לעלות במשקל ושום דבר לא זז.",
  },
  {
    icon: Trophy,
    title: "ניסיון תחרותי אמיתי",
    text: "התחריתי בפאוורליפטינג בישראל ובאירופה. הליווי מבוסס על עבודה מדידה, לא על סיסמאות.",
  },
  {
    icon: ShieldCheck,
    title: "מבין גברים רזים",
    text: "אני עובד עם מתאמנים שמתקשים לאכול מספיק, מתבלבלים באימון, ורוצים סוף סוף מסגרת ברורה.",
  },
  {
    icon: Gauge,
    title: "אימון, תזונה וטכניקה יחד",
    text: "תוכנית אימונים, הכוונת תזונה, תיקוני טכניקה ואחריות שבועית. הכל מחובר לאותה מטרה.",
  },
];

const includes = [
  {
    icon: Target,
    title: "תוכנית אימונים",
    text: "מה לעשות בכל אימון, כמה סטים לבצע, באיזה עומסים לעבוד ומתי להתקדם.",
  },
  {
    icon: Dumbbell,
    title: "הכוונת תזונה",
    text: "מסגרת אכילה ברורה לעלייה במשקל ובמסה, בלי להפוך את החיים לפרויקט.",
  },
  {
    icon: Gauge,
    title: "מעקב שבועי",
    text: "בודקים משקל גוף, ביצועים, עייפות, התמדה ותחושת עומס. משם מקבלים החלטות.",
  },
  {
    icon: ShieldCheck,
    title: "תיקוני טכניקה",
    text: "סקוואט, בנץ׳ ודדליפט מקבלים פידבק ברור כדי שתרים חזק יותר ובטוח יותר.",
  },
  {
    icon: Zap,
    title: "התאמות לפי התקדמות",
    text: "העומסים, הנפח והתזונה משתנים לפי מה שקורה בפועל, לא לפי תבנית קבועה.",
  },
  {
    icon: Check,
    title: "אחריות ומסגרת",
    text: "אתה לא נשאר לבד עם התוכנית. יש סדר, מעקב, פידבק ומישהו שבודק שאתה זז קדימה.",
  },
];

const processSteps = [
  {
    title: "שיחת התאמה והבנת המטרה",
    text: "מבינים איפה אתה עומד, מה ניסית עד היום, כמה אתה שוקל ומה היעד הקרוב.",
  },
  {
    title: "בניית תוכנית אימונים ותזונה אישית",
    text: "מקבלים מסגרת אימונים ותזונה שמתאימה לרמה, לציוד, ללוח הזמנים וליכולת האכילה שלך.",
  },
  {
    title: "צ׳ק־אין שבועי ומעקב התקדמות",
    text: "שולחים עדכונים, משקל גוף, ביצועים וסרטוני טכניקה. הכל נבדק בצורה מסודרת.",
  },
  {
    title: "התאמות לפי ביצועים, משקל גוף וטכניקה",
    text: "אם המשקל לא עולה, הטכניקה נשברת או העומס לא מתאים, משנים בזמן ולא מחכים חודשים.",
  },
];

const resultCards = [
  {
    title: "עלייה במשקל",
    text: "תיעוד של משקל גוף, תמונות התקדמות ומדידות.",
  },
  {
    title: "טכניקה יציבה יותר",
    text: "סרטוני לפני ואחרי לסקוואט, בנץ׳ ודדליפט.",
  },
  {
    title: "משקלי עבודה שעולים",
    text: "PRs, סיכומי תחרות ועדויות קצרות.",
  },
];

const packages = [
  {
    name: "Base",
    price: "מסגרת בסיסית וברורה",
    features: ["תוכנית אימונים", "עדכון שבועי", "מעקב משקל וביצועים", "מענה בווטסאפ"],
  },
  {
    name: "Performance",
    price: "המסלול לרוב המתאמנים",
    featured: true,
    features: [
      "תוכנית אימונים מלאה",
      "פידבק על סרטוני טכניקה",
      "התאמות עומסים לפי שבוע",
      "מסגרת תזונה לעלייה במשקל",
      "מענה שוטף בווטסאפ",
    ],
  },
  {
    name: "Powerlifting Prep",
    price: "למי שרוצה להתחרות",
    features: ["תכנון פיק", "בחירת ניסיונות", "ניהול עומסים", "הכנה ליום תחרות"],
  },
];

const faqs = [
  {
    q: "האם הליווי מתאים אם אני ממש רזה?",
    a: "כן. זה אחד המצבים שהליווי נבנה עבורם. המטרה היא לעלות במשקל, להתחזק ולהבין מה עובד בשבילך.",
  },
  {
    q: "צריך ניסיון קודם בחדר כושר?",
    a: "לא צריך להיות מתקדם. כן צריך גישה לחדר כושר ורצון לעבוד מסודר. מתחילים מהרמה שלך.",
  },
  {
    q: "חייבים להתחרות בפאוורליפטינג?",
    a: "לא. אפשר לעבוד על מסה, כוח וטכניקה בלבד. אם תרצה להתחרות בהמשך, נכין לזה תהליך מסודר.",
  },
  {
    q: "איך מתבצע הקשר איתך?",
    a: "הקשר מתבצע אונליין. שולחים עדכונים, סרטונים ונתוני אימון. אני מחזיר התאמות ופידבק.",
  },
  {
    q: "כמה מהר רואים שינוי?",
    a: "סדר באימונים מרגישים מהר. שינוי פיזי אמיתי דורש כמה חודשים של עקביות, אוכל והתקדמות מדידה.",
  },
];

function WhatsAppButton({
  label = "בדוק התאמה בווטסאפ",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`cta-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold text-slate-950 transition focus:outline-none focus:ring-2 focus:ring-sky-100 active:scale-[0.99] ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-slate-950/80 px-3 py-1.5 text-[0.72rem] font-extrabold uppercase text-sky-200 shadow-[0_0_24px_rgba(56,214,255,0.1)]">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="soft-divider scroll-mt-24">
      <Reveal className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ${className}`}>
        {children}
      </Reveal>
    </section>
  );
}

function PremiumPhotoFrame({
  label,
  title,
  detail,
  replacePath,
  className = "",
}: {
  label: string;
  title: string;
  detail: string;
  replacePath: string;
  className?: string;
}) {
  return (
    <div className={`premium-photo-frame blue-glow ${className}`} data-replace-path={replacePath}>
      <div className="premium-photo-slot">
        <div className="premium-photo-placeholder" aria-hidden="true">
          <span>{label}</span>
          <strong>{title}</strong>
          <em>{detail}</em>
        </div>
        <div className="premium-photo-label">
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="brand-grid pointer-events-none absolute inset-x-0 top-0 h-[680px]" />

      <header className="site-header sticky top-0 z-30 border-b border-white/10 bg-[#01030a]/86 shadow-[0_18px_50px_rgba(1,3,10,0.32)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <span className="logo-mark grid h-10 w-10 shrink-0 place-items-center rounded-md border border-sky-300/30 bg-white text-sm font-black text-slate-950">
              SD
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-extrabold text-white">שגיא דהן</span>
              <span className="block truncate text-xs text-slate-400">Online Strength Coaching</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton label="וואטסאפ" className="px-4" />
        </div>
      </header>

      <SectionShell className="hero-shell relative grid items-center gap-10 overflow-hidden pb-14 pt-10 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-16">
        <div className="hero-aurora pointer-events-none absolute inset-0" />
        <div className="hero-beam pointer-events-none absolute left-[-14%] top-8 h-[62%] w-[44%]" />
        <div className="hero-content relative z-10">
          <SectionLabel>ליווי אונליין לגברים רזים שרוצים לבנות גוף חזק</SectionLabel>
          <h1 className="hero-title text-balance max-w-3xl font-black text-white">
            לגברים רזים שרוצים לעלות במסה, להתחזק ולהתאמן עם שיטה ברורה.
          </h1>
          <p className="hero-subtitle mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl sm:leading-9">
            אם אתה רזה, אוכל יותר, מתאמן ועדיין לא רואה שינוי, הליווי נותן לך תוכנית אימונים,
            מסגרת תזונה, תיקוני טכניקה ומעקב שבועי כדי לבנות שריר, כוח וביטחון בלי להתפזר.
          </p>
          <div className="hero-cta-wrap mt-7 max-w-xl">
            <WhatsAppButton label="בדוק התאמה לליווי בוואטסאפ" className="primary-cta w-full sm:w-auto" />
            <p className="hero-trust-line mt-3 text-sm leading-6 text-slate-400">
              שיחת התאמה קצרה. בלי התחייבות. נבדוק איפה אתה עומד ומה חסר כדי להתקדם.
            </p>
            <div className="hero-trust-badges mt-4 grid gap-2 sm:grid-cols-3">
              {heroTrustBadges.map((item) => (
                <span key={item} className="hero-trust-badge">
                  <span aria-hidden="true" />
                  {item}
                </span>
            ))}
            </div>
          </div>
          <div className="hero-proof-grid mt-8 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.value} className="premium-card stat-card animated-border rounded-md p-5">
                <div className="text-2xl font-extrabold text-sky-200">{item.value}</div>
                <div className="mt-1 text-sm font-extrabold text-white">{item.label}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative">
          <div className="coach-visual-card blue-glow relative overflow-hidden rounded-md" aria-label="ויז׳ואל פרימיום לליווי אונליין של שגיא דהן">
            <div className="coach-visual-frame">
              <div className="coach-photo-slot has-photo">
                {/* Hero coach photo: replace the file at public/images/sagi-dahan-hero.jpeg when you want to update this image. */}
                <Image
                  src={photoSlots.heroCoach}
                  alt="שגיא דהן מאמן אונליין ופאוורליפטר"
                  width={1230}
                  height={1536}
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="coach-photo-image"
                />
              </div>

              <div className="coach-visual-tags" aria-label="תחומי הליווי">
                {heroVisualTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="coach-visual-caption">
                <p>ONLINE STRENGTH COACHING</p>
                <strong>מסגרת מסודרת לעלייה במסה, כוח וטכניקה.</strong>
              </div>
            </div>

            <div className="coach-performance-grid" aria-label="נקודות ביצוע">
              {heroPerformanceStats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="story" className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionLabel>הסיפור שלי</SectionLabel>
          <h2 className="section-heading font-black">אני יודע איך זה להתחיל רזה.</h2>
        </div>
        <div className="premium-card story-card rounded-md p-6 text-base leading-8 text-slate-300 sm:p-8 sm:text-lg sm:leading-9">
          <p>
            אני שגיא דהן, פאוורליפטר ומאמן אונליין. התחלתי ב־45 ק״ג.
            הייתי רזה, חסר ביטחון, ולא באמת הבנתי איך להתקדם.
          </p>
          <p className="mt-5">
            מה ששינה את זה היה סדר. תוכנית שמתאימה לרמה. עומסים שמנוהלים לפי ביצועים.
            פידבק על טכניקה. אוכל שמחזיק עלייה במשקל. היום אני בונה את אותה מסגרת
            למתאמנים שרוצים להפסיק להתפזר.
          </p>
          <div className="transformation-block mt-7 grid gap-3 rounded-md p-4 sm:grid-cols-3">
            <div>
              <span className="block text-xs font-bold text-slate-500">לפני</span>
              <strong className="mt-1 block text-2xl text-white">45 ק״ג</strong>
              <span className="mt-1 block text-sm text-slate-400">רזה, מבולבל, בלי מסגרת</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-500">המעבר</span>
              <strong className="mt-1 block text-2xl text-sky-200">שיטה</strong>
              <span className="mt-1 block text-sm text-slate-400">אימונים, אוכל, טכניקה ומעקב</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-500">היום</span>
              <strong className="mt-1 block text-2xl text-white">במה</strong>
              <span className="mt-1 block text-sm text-slate-400">פאוורליפטינג בישראל ובאירופה</span>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="why">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>למה לעבוד איתי</SectionLabel>
            <h2 className="section-heading font-black">כי אני לא מלמד אותך משהו שקראתי. עברתי את זה.</h2>
            <p className="section-copy mt-4 text-lg leading-8 text-slate-400">
              הליווי בנוי לגברים רזים שרוצים מסה, כוח וביטחון בלי לנחש כל שבוע מחדש.
              אימונים, תזונה, טכניקה ואחריות נמצאים באותה מסגרת.
            </p>
          </div>
          <WhatsAppButton label="בדוק אם הליווי מתאים לך" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustReasons.map(({ icon: Icon, title, text }) => (
            <article key={title} className="premium-card trust-card rounded-md p-6">
              <div className="icon-tile grid h-11 w-11 place-items-center rounded-md border border-sky-300/20 bg-sky-300/10 text-sky-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="fit">
        <div className="mb-8 max-w-3xl">
          <SectionLabel>למי זה מתאים</SectionLabel>
          <h2 className="section-heading font-black">זה מתאים אם נמאס לך להתאמן בערך.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <div key={item} className="premium-card audience-card flex gap-4 rounded-md p-5">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-sky-300 text-slate-950">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-base font-bold leading-7 text-white sm:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="process">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>איך הליווי עובד</SectionLabel>
            <h2 className="section-heading font-black">תהליך פשוט. מעקב ברור. החלטות לפי נתונים.</h2>
            <p className="section-copy mt-4 text-lg leading-8 text-slate-400">
              אתה יודע מה לעשות, מה לשלוח, ומה משתנה בכל שבוע. ככה בונים מסה וכוח בלי להתפזר.
            </p>
          </div>
          <WhatsAppButton label="התחל משיחת התאמה" />
        </div>
        <div className="premium-panel timeline-panel rounded-md p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="timeline-card rounded-md p-5">
                <div className="flex items-center gap-3">
                  <span className="timeline-number grid h-9 w-9 shrink-0 place-items-center rounded-md text-sm font-black">
                    {index + 1}
                  </span>
                  <p className="text-xs font-extrabold uppercase text-sky-200">שלב {index + 1}</p>
                </div>
                <h3 className="mt-5 text-lg font-extrabold leading-7 text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="coaching">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>מה מקבלים בליווי</SectionLabel>
            <h2 className="section-heading font-black">כל מה שצריך כדי להתקדם בלי לנחש.</h2>
            <p className="section-copy mt-4 text-lg leading-8 text-slate-400">
              תוכנית, תזונה, מעקב, תיקוני טכניקה והתאמות. לא קובץ ששוכחים לפתוח, אלא מסגרת שמחזיקה אותך בתהליך.
            </p>
          </div>
          <WhatsAppButton label="רוצה לבדוק התאמה" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {includes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="premium-card feature-card offer-card rounded-md p-6">
              <div className="icon-tile grid h-11 w-11 place-items-center rounded-md border border-sky-300/20 bg-sky-300/10 text-sky-200 shadow-[0_0_24px_rgba(56,214,255,0.08)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
        <div className="photo-showcase-grid mt-5 grid gap-4 lg:grid-cols-2">
          {/* Gym/training photo: add a real image at public/images/sagi-gym-training.jpg, then replace this placeholder with an Image component using photoSlots.training. */}
          <PremiumPhotoFrame
            label="GYM / TRAINING"
            title="תמונת אימון אמיתית"
            detail="מקום לתמונה מחדר כושר, סט עבודה או הכנה לאימון"
            replacePath={photoSlots.training}
          />
          {/* Technique review photo: add a real image at public/images/sagi-technique-review.jpg, then replace this placeholder with an Image component using photoSlots.technique. */}
          <PremiumPhotoFrame
            label="TECHNIQUE REVIEW"
            title="תיקוני טכניקה"
            detail="מקום למסך פידבק, ניתוח וידאו או תיקון תנועה"
            replacePath={photoSlots.technique}
          />
        </div>
        <div className="premium-panel offer-cta mt-5 flex flex-col justify-between gap-4 rounded-md p-5 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-base font-bold leading-7 text-slate-300">
            אם אתה לא בטוח איזה חלק חסר לך, נבדוק את זה בשיחת התאמה קצרה ונראה אם הליווי נכון עבורך.
          </p>
          <WhatsAppButton label="שלח הודעה לשגיא" className="w-full sm:w-auto" />
        </div>
      </SectionShell>

      <SectionShell className="grid items-center gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          {/* Powerlifting competition photo: add a real image at public/images/sagi-powerlifting-competition.jpg, then replace this placeholder with an Image component using photoSlots.competition. */}
          <PremiumPhotoFrame
            label="POWERLIFTING COMPETITION"
            title="תמונת תחרות"
            detail="מקום לתמונה מבמה, ניסיון SBD או רגע תחרות"
            replacePath={photoSlots.competition}
            className="competition-photo-frame"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionLabel>פאוורליפטינג ותוצאות</SectionLabel>
          <h2 className="section-heading font-black">כוח נבנה כשיש שיטה.</h2>
          <p className="section-copy mt-5 text-lg leading-8 text-slate-300">
            לא חייבים להתחרות. כן צריך לדעת למה עושים כל סט. הליווי מחבר בין טכניקה,
            עומסים והתאוששות כדי שתראה התקדמות ולא רק תרגיש שהתאמצת.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["סקוואט", "בנץ׳", "דדליפט"].map((lift) => (
              <div key={lift} className="premium-card lift-card rounded-md p-4 text-center font-extrabold text-sky-100">
                {lift}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-8 max-w-3xl">
          <SectionLabel>תוצאות ועדויות</SectionLabel>
          <h2 className="section-heading font-black">התקדמות שאפשר לראות ולמדוד.</h2>
          <p className="section-copy mt-4 text-lg leading-8 text-slate-400">
            כאן יופיעו תוצאות מתאמנים: עלייה במשקל, שיפור טכניקה, PRs ועדויות קצרות.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Client result/testimonial photo: add a real image at public/images/sagi-client-result.jpg, then replace this placeholder with an Image component using photoSlots.clientResult. */}
          <PremiumPhotoFrame
            label="CLIENT RESULT"
            title="תמונת תוצאה / עדות"
            detail="מקום לתמונת לפני־אחרי, צילום התקדמות או צילום עדות"
            replacePath={photoSlots.clientResult}
            className="client-result-photo-frame"
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {resultCards.map((card) => (
              <article key={card.title} className="premium-card result-card-clean rounded-md p-5">
                <p className="text-lg font-extrabold">{card.title}</p>
                <p className="mt-2 leading-7 text-slate-400">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="packages">
        <div className="mb-8 max-w-3xl">
          <SectionLabel>חבילות ליווי</SectionLabel>
          <h2 className="section-heading font-black">נבחר מסלול לפי המצב שלך.</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((plan) => (
            <article
              key={plan.name}
              className={`package-card rounded-md p-6 ${
                plan.featured
                  ? "premium-panel blue-glow animated-border"
                  : "premium-card"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                {plan.featured ? <Trophy className="h-6 w-6 text-sky-200" /> : <Zap className="h-6 w-6 text-slate-400" />}
              </div>
              <p className="mt-2 font-bold text-sky-200">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-slate-300">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <WhatsAppButton label="שאל על המסלול" className="w-full" />
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq">
        <div className="mb-8 max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="section-heading font-black">שאלות שעולות לפני שמתחילים</h2>
        </div>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="premium-card faq-item group rounded-md p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold sm:text-lg">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-sky-300 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 max-w-4xl leading-8 text-slate-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-24">
        <div className="premium-panel final-cta-panel animated-border overflow-hidden rounded-md p-7 text-center blue-glow sm:p-12">
          <SectionLabel>הצעד הבא</SectionLabel>
          <h2 className="section-heading mx-auto max-w-4xl text-balance font-black">
            רוצה להפסיק לנחש? נתחיל משיחה קצרה.
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            שלח הודעה בווטסאפ. נבדוק איפה אתה עומד, מה חסר, ואם הליווי מתאים לך עכשיו.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="שלח הודעה לשגיא" />
          </div>
        </div>
      </SectionShell>

      <div className="mobile-floating-cta fixed inset-x-3 bottom-3 z-40 md:hidden">
        <WhatsAppButton label="בדוק התאמה בווטסאפ" className="w-full" />
      </div>
    </main>
  );
}
