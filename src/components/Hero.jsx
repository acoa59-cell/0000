import { motion } from 'framer-motion'

// ─── floating card definitions ──────────────────────────────────────────────
// Card sizes use vw so they scale with viewport width.
// top starts at 22% to respect the ~80px nav safe-zone.
const CARDS = [
  {
    id: 1,
    label: '焙可狐 × Brand',       // ★ 卡片底部標題文字（電腦版可見）
    sublabel: 'IP 插畫 · 品牌識別', // ★ 卡片底部副標題
    image: null,                    // ★ 圖片路徑：把 null 換成圖片檔名，例如 '/images/card1.jpg'
    top: '22%',
    left: '2%',
    rotate: -6,
    delay: 0,
    duration: 5.8,
    width: '18vw',
    height: '22vw',
    minWidth: '120px',
    minHeight: '148px',
    accent: '#4ECDC4',              // ★ 卡片主題色（十六進位色碼）
    zIndex: 14,
  },
  {
    id: 2,
    label: '焙可狐 × Marketing',   // ★ 卡片底部標題文字
    sublabel: '行銷圖 · 社群視覺',  // ★ 卡片底部副標題
    image: null,                    // ★ 圖片路徑
    top: '22%',
    right: '2%',
    rotate: 5,
    delay: 0.8,
    duration: 4.4,
    width: '16vw',
    height: '20vw',
    minWidth: '110px',
    minHeight: '136px',
    accent: '#A8E063',              // ★ 卡片主題色
    zIndex: 14,
  },
  {
    id: 3,
    label: '焙可狐 × UI',          // ★ 卡片底部標題文字
    sublabel: 'UI/UX · 介面設計',   // ★ 卡片底部副標題
    image: null,                    // ★ 圖片路徑
    top: '55%',
    left: '3%',
    rotate: 3,
    delay: 1.4,
    duration: 6.2,
    width: '15vw',
    height: '18vw',
    minWidth: '100px',
    minHeight: '124px',
    accent: '#F6AD55',              // ★ 卡片主題色
    zIndex: 10,
  },
  {
    id: 4,
    label: '焙可狐 × Visual',      // ★ 卡片底部標題文字
    sublabel: '視覺設計 · IP 開發', // ★ 卡片底部副標題
    image: null,                    // ★ 圖片路徑
    top: '58%',
    right: '2%',
    rotate: -4,
    delay: 2,
    duration: 5.0,
    width: '16vw',
    height: '20vw',
    minWidth: '110px',
    minHeight: '136px',
    accent: '#FC8181',              // ★ 卡片主題色
    zIndex: 10,
  },
]

// ─── skill tags ──────────────────────────────────────────────────────────────
const SKILLS = [
  { label: '品牌管理', icon: '◈' },
  { label: '品牌識別', icon: '◉' },
  { label: 'UI/UX 設計', icon: '◎' },
  { label: '視覺設計', icon: '◆' },
  { label: 'IP 開發', icon: '✦' },
]

// ─── variants ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const cardEntrance = {
  hidden: { opacity: 0, scale: 0.82, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

// ─── sub-components ──────────────────────────────────────────────────────────

function FloatingCard({ card }) {
  const posStyle = {
    position: 'absolute',
    top: card.top,
    left: card.left,
    right: card.right,
    zIndex: card.zIndex,
  }

  return (
    <motion.div
      style={posStyle}
      custom={card.delay}
      variants={cardEntrance}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [card.rotate, card.rotate + 1.5, card.rotate],
        }}
        transition={{
          duration: card.duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: card.delay,
        }}
        whileHover={{ scale: 1.06, transition: { duration: 0.25 } }}
        style={{
          width: card.width,
          height: card.height,
          minWidth: card.minWidth,
          minHeight: card.minHeight,
        }}
        className="glass-card rounded-2xl cursor-pointer overflow-hidden flex flex-col"
      >
        {/* illustration art — 有 image 就顯示圖片，否則顯示預設圖案 */}
        <div className="flex-1 relative overflow-hidden">
          {card.image
            ? <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
            : <CardArt id={card.id} accent={card.accent} />
          }
        </div>

        {/* card footer — hidden on mobile, visible from md up */}
        <div className="hidden md:block px-3 py-2.5 border-t border-white/10">
          <p className="text-white text-[11px] md:text-xs font-semibold leading-tight">
            {card.label}
          </p>
          <p className="text-white/50 text-[9px] md:text-[10px] mt-0.5">
            {card.sublabel}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function SkillTag({ skill, index }) {
  return (
    <motion.div
      custom={0.78 + index * 0.07}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="rounded-full px-3.5 py-1.5 flex items-center gap-1.5 border border-white/20 select-none"
    >
      <span className="text-white/35 text-xs">{skill.icon}</span>
      <span className="text-white/40 text-[11px] tracking-wide whitespace-nowrap">
        {skill.label}
      </span>
    </motion.div>
  )
}

// ─── placeholder illustration art ───────────────────────────────────────────
function CardArt({ id, accent }) {
  const base = { width: '100%', height: '100%' }

  if (id === 1) return (
    <svg viewBox="0 0 160 195" fill="none" xmlns="http://www.w3.org/2000/svg" style={base}>
      <defs>
        <radialGradient id="rg1" cx="50%" cy="44%" r="65%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <rect width="160" height="195" fill="#061614" />
      <rect width="160" height="195" fill="url(#rg1)" />
      <circle cx="80" cy="88" r="56" stroke={accent} strokeWidth="1" opacity="0.25" />
      <polygon points="50,58 60,26 76,58" fill={accent} opacity="0.85" />
      <polygon points="84,58 100,26 110,58" fill={accent} opacity="0.85" />
      <polygon points="54,56 61,34 71,56" fill="#061614" opacity="0.6" />
      <polygon points="89,56 99,34 106,56" fill="#061614" opacity="0.6" />
      <circle cx="80" cy="90" r="30" fill={accent} opacity="0.8" />
      <ellipse cx="80" cy="101" rx="14" ry="10" fill="#fff" opacity="0.1" />
      <circle cx="70" cy="84" r="5" fill="#061614" />
      <circle cx="90" cy="84" r="5" fill="#061614" />
      <circle cx="71.5" cy="82.5" r="1.8" fill="#fff" opacity="0.65" />
      <circle cx="91.5" cy="82.5" r="1.8" fill="#fff" opacity="0.65" />
      <ellipse cx="80" cy="97" rx="3" ry="2.2" fill="#061614" opacity="0.75" />
      <rect x="24" y="148" width="52" height="4" rx="2" fill={accent} opacity="0.45" />
      <rect x="24" y="157" width="36" height="3" rx="1.5" fill={accent} opacity="0.3" />
      <circle cx="108" cy="150" r="5" fill={accent} opacity="0.8" />
      <circle cx="120" cy="150" r="5" fill="#FC8181" opacity="0.7" />
      <circle cx="132" cy="150" r="5" fill="#A8E063" opacity="0.7" />
    </svg>
  )

  if (id === 2) return (
    <svg viewBox="0 0 160 195" fill="none" xmlns="http://www.w3.org/2000/svg" style={base}>
      <defs>
        <radialGradient id="rg2" cx="50%" cy="65%" r="70%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <rect width="160" height="195" fill="#0a1008" />
      <rect width="160" height="195" fill="url(#rg2)" />
      <line x1="18" y1="145" x2="148" y2="145" stroke={accent} strokeWidth="0.5" opacity="0.2" />
      <line x1="18" y1="115" x2="148" y2="115" stroke={accent} strokeWidth="0.5" opacity="0.15" />
      <line x1="18" y1="85" x2="148" y2="85" stroke={accent} strokeWidth="0.5" opacity="0.12" />
      <rect x="18" y="108" width="16" height="37" rx="3" fill={accent} opacity="0.45" />
      <rect x="42" y="88" width="16" height="57" rx="3" fill={accent} opacity="0.6" />
      <rect x="66" y="68" width="16" height="77" rx="3" fill={accent} opacity="0.75" />
      <rect x="90" y="80" width="16" height="65" rx="3" fill={accent} opacity="0.65" />
      <rect x="114" y="55" width="16" height="90" rx="3" fill={accent} opacity="0.88" />
      <polyline points="26,108 50,88 74,68 98,80 122,55"
        stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      <circle cx="26" cy="108" r="2.5" fill="#fff" opacity="0.75" />
      <circle cx="50" cy="88" r="2.5" fill="#fff" opacity="0.75" />
      <circle cx="74" cy="68" r="2.5" fill="#fff" opacity="0.75" />
      <circle cx="98" cy="80" r="2.5" fill="#fff" opacity="0.75" />
      <circle cx="122" cy="55" r="3.5" fill={accent} stroke="#fff" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="14" fill={accent} opacity="0.15" stroke={accent} strokeWidth="0.8" />
      <circle cx="82" cy="22" r="10" fill={accent} opacity="0.12" stroke={accent} strokeWidth="0.8" />
      <circle cx="130" cy="30" r="12" fill={accent} opacity="0.13" stroke={accent} strokeWidth="0.8" />
      <text x="24" y="35" fill={accent} fontSize="12" opacity="0.85">♡</text>
      <text x="78" y="26" fill={accent} fontSize="8" opacity="0.75" fontFamily="sans-serif">+1k</text>
      <text x="124" y="35" fill={accent} fontSize="11" opacity="0.8">↗</text>
      <rect x="18" y="162" width="55" height="4" rx="2" fill={accent} opacity="0.4" />
      <rect x="18" y="171" width="38" height="3" rx="1.5" fill={accent} opacity="0.28" />
    </svg>
  )

  if (id === 3) return (
    <svg viewBox="0 0 160 195" fill="none" xmlns="http://www.w3.org/2000/svg" style={base}>
      <defs>
        <radialGradient id="rg3" cx="50%" cy="48%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <rect width="160" height="195" fill="#140b00" />
      <rect width="160" height="195" fill="url(#rg3)" />
      <rect x="40" y="14" width="80" height="142" rx="13" fill="#fff" opacity="0.03" stroke={accent} strokeWidth="1.2" />
      <rect x="62" y="18" width="36" height="5" rx="2.5" fill={accent} opacity="0.35" />
      <rect x="50" y="28" width="60" height="5" rx="2.5" fill={accent} opacity="0.12" />
      <rect x="50" y="37" width="60" height="16" rx="4" fill={accent} opacity="0.16" />
      <rect x="56" y="42" width="22" height="5" rx="2.5" fill={accent} opacity="0.55" />
      <rect x="98" y="43" width="8" height="4" rx="2" fill={accent} opacity="0.38" />
      <rect x="50" y="57" width="60" height="30" rx="4" fill={accent} opacity="0.2" />
      <circle cx="65" cy="72" r="9" fill={accent} opacity="0.45" />
      <rect x="79" y="65" width="26" height="5" rx="2.5" fill="#fff" opacity="0.4" />
      <rect x="79" y="74" width="18" height="4" rx="2" fill="#fff" opacity="0.25" />
      <rect x="50" y="92" width="28" height="26" rx="4" fill={accent} opacity="0.18" />
      <rect x="82" y="92" width="28" height="26" rx="4" fill={accent} opacity="0.14" />
      <rect x="58" y="124" width="44" height="9" rx="4.5" fill={accent} opacity="0.5" />
      <rect x="65" y="145" width="30" height="3" rx="1.5" fill={accent} opacity="0.35" />
      <rect x="18" y="168" width="55" height="4" rx="2" fill={accent} opacity="0.4" />
      <rect x="18" y="177" width="38" height="3" rx="1.5" fill={accent} opacity="0.28" />
    </svg>
  )

  return (
    <svg viewBox="0 0 160 195" fill="none" xmlns="http://www.w3.org/2000/svg" style={base}>
      <defs>
        <radialGradient id="rg4" cx="38%" cy="38%" r="68%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.85" />
        </radialGradient>
      </defs>
      <rect width="160" height="195" fill="#140606" />
      <rect width="160" height="195" fill="url(#rg4)" />
      <circle cx="58" cy="78" r="44" fill={accent} opacity="0.15" />
      <circle cx="108" cy="96" r="36" fill={accent} opacity="0.12" />
      <rect x="28" y="45" width="62" height="62" rx="8" fill={accent} opacity="0.22"
        transform="rotate(-18 59 76)" />
      <rect x="72" y="60" width="56" height="56" rx="8" fill={accent} opacity="0.16"
        transform="rotate(12 100 88)" />
      <circle cx="52" cy="60" r="11" fill={accent} opacity="0.65" />
      <circle cx="114" cy="76" r="8" fill={accent} opacity="0.55" />
      <circle cx="82" cy="112" r="13" fill={accent} opacity="0.5" />
      <line x1="18" y1="38" x2="76" y2="138" stroke={accent} strokeWidth="1" opacity="0.28" />
      <line x1="142" y1="28" x2="84" y2="138" stroke={accent} strokeWidth="1" opacity="0.28" />
      <line x1="76" y1="106" x2="88" y2="118" stroke="#fff" strokeWidth="1.5" opacity="0.45" />
      <line x1="88" y1="106" x2="76" y2="118" stroke="#fff" strokeWidth="1.5" opacity="0.45" />
      <rect x="18" y="152" width="24" height="4" rx="2" fill={accent} opacity="0.6" />
      <rect x="18" y="161" width="18" height="3" rx="1.5" fill={accent} opacity="0.4" />
      <circle cx="122" cy="154" r="8" fill={accent} opacity="0.25" stroke={accent} strokeWidth="1" />
      <circle cx="138" cy="160" r="5" fill={accent} opacity="0.18" stroke={accent} strokeWidth="0.8" />
    </svg>
  )
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* ── gradient mesh background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #24FFEF 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-12 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #24FFEF 0%, transparent 70%)',
            bottom: '-5%',
            right: '-5%',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.06] blur-2xl"
          style={{
            background: 'radial-gradient(circle, #24FFEF 0%, transparent 70%)',
            top: '40%',
            left: '45%',
          }}
        />
        {/* dark center vignette — keeps neon glows on edges, text area stays dark */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 65% at 50% 44%, rgba(0,0,0,0.65) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── floating cards (desktop only) ── */}
      <div className="hidden md:block">
        {CARDS.map((card) => (
          <FloatingCard key={card.id} card={card} />
        ))}
      </div>

      {/* ── hero headline ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-10 md:pt-0 text-center">
        {/* eyebrow */}
        <motion.p
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#4ECDC4] text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-4"
        >
          Creative Portfolio · 2026
        </motion.p>

        {/* main title — split into rows for dramatic layout */}
        <div className="relative">
          <motion.h1
            className="font-black uppercase leading-[0.88] select-none"
          >
            {/* Row 1 */}
            <motion.span
              custom={0.2}
              variants={fadeUp}
              className="block text-white text-[14vw] md:text-[11vw] lg:text-[9rem] xl:text-[10rem]"
              style={{ letterSpacing: '-0.02em' }}
            >
              ACO
            </motion.span>

            {/* Row 2 — slightly offset + accent colour mix */}
            <motion.span
              custom={0.3}
              variants={fadeUp}
              className="block text-[14vw] md:text-[11vw] lg:text-[9rem] xl:text-[10rem]"
              style={{
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #fff 0%, #4ECDC4 60%, #A8E063 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              LIN
            </motion.span>

            {/* Row 3 — frosted glass fill: diagonal milky gradient clipped to text */}
            <motion.span
              custom={0.4}
              variants={fadeUp}
              className="block text-[10vw] md:text-[7.5vw] lg:text-[6rem] xl:text-[7rem]"
              style={{
                letterSpacing: '0.04em',
                background: `linear-gradient(
                  140deg,
                  rgba(255,255,255,0.92) 0%,
                  rgba(190,235,248,0.60) 28%,
                  rgba(255,255,255,0.30) 52%,
                  rgba(180,228,245,0.72) 74%,
                  rgba(255,255,255,0.88) 100%
                )`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter:
                  'drop-shadow(0 2px 18px rgba(78,205,196,0.40)) drop-shadow(0 1px 0px rgba(255,255,255,0.55))',
              }}
            >
              PORTFOLIO
            </motion.span>
          </motion.h1>
        </div>

        {/* descriptor line */}
        <motion.p
          custom={0.52}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 md:mt-8 text-white/75 text-sm md:text-base max-w-sm md:max-w-md leading-relaxed"
        >
          品牌策略 · 視覺設計 · IP 開發
          <br className="hidden md:block" />
          用設計說故事，讓品牌被記住。
        </motion.p>

        {/* ── skill tags (desktop only) ── */}
        <div className="mt-8 md:mt-10 hidden md:flex flex-wrap gap-2 justify-center">
          {SKILLS.map((skill, i) => (
            <SkillTag key={skill.label} skill={skill} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          custom={0.82}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 flex flex-wrap gap-3 justify-center"
        >
          <button
            type="button"
            className="px-6 py-3 rounded-full text-sm font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(90deg, #4ECDC4, #A8E063)' }}
          >
            查看作品集
          </button>
          <button type="button" className="glass-tag px-6 py-3 rounded-full text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95">
            關於我 →
          </button>
        </motion.div>

        {/* ── mobile card row (phones only) — 3 cards, edge-to-edge ── */}
        <div className="mt-6 flex md:hidden gap-2.5 px-3 pb-16">
          {CARDS.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.id}
              custom={card.delay + 0.9}
              variants={cardEntrance}
              initial="hidden"
              animate="visible"
              className="flex-1"
              style={{ marginTop: i === 0 ? '18px' : i === 2 ? '10px' : '0px' }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [card.rotate * 0.5, card.rotate * 0.5 + 1, card.rotate * 0.5],
                }}
                transition={{
                  duration: card.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: card.delay,
                }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col"
                style={{ height: '42vw', maxHeight: '168px' }}
              >
                <div className="flex-1 relative overflow-hidden">
                  {card.image
                    ? <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
                    : <CardArt id={card.id} accent={card.accent} />
                  }
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
      >
        <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6 bg-white/20"
        />
      </motion.div>
    </section>
  )
}
