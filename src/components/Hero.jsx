import { motion } from 'framer-motion'

// ─── floating card definitions ──────────────────────────────────────────────
const CARDS = [
  {
    id: 1,
    label: '焙可狐 × Brand',
    sublabel: 'IP 插畫 · 品牌識別',
    top: '8%',
    left: '3%',
    rotate: -6,
    delay: 0,
    duration: 5.8,
    size: 'w-40 h-48 md:w-52 md:h-64',
    accent: '#4ECDC4',
    zIndex: 20,
  },
  {
    id: 2,
    label: '焙可狐 × Marketing',
    sublabel: '行銷圖 · 社群視覺',
    top: '5%',
    right: '4%',
    rotate: 5,
    delay: 0.8,
    duration: 4.4,
    size: 'w-36 h-44 md:w-48 md:h-60',
    accent: '#A8E063',
    zIndex: 20,
  },
  {
    id: 3,
    label: '焙可狐 × UI',
    sublabel: 'UI/UX · 介面設計',
    top: '52%',
    left: '5%',
    rotate: 3,
    delay: 1.4,
    duration: 6.2,
    size: 'w-32 h-40 md:w-44 md:h-52',
    accent: '#F6AD55',
    zIndex: 20,
  },
  {
    id: 4,
    label: '焙可狐 × Visual',
    sublabel: '視覺設計 · IP 開發',
    top: '55%',
    right: '3%',
    rotate: -4,
    delay: 2,
    duration: 5.0,
    size: 'w-36 h-44 md:w-48 md:h-56',
    accent: '#FC8181',
    zIndex: 20,
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
        className={`${card.size} glass-card rounded-2xl cursor-pointer overflow-hidden flex flex-col`}
      >
        {/* image placeholder */}
        <div
          className="flex-1 flex flex-col items-center justify-center gap-2 relative"
          style={{
            background: `linear-gradient(135deg, ${card.accent}22 0%, ${card.accent}08 100%)`,
          }}
        >
          {/* decorative fox silhouette placeholder */}
          <div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl"
            style={{ background: `${card.accent}30` }}
          >
            🦊
          </div>
          <span className="text-[10px] md:text-xs text-white/40 tracking-widest uppercase">
            插畫待置入
          </span>
          {/* accent dot */}
          <span
            className="absolute top-3 right-3 w-2 h-2 rounded-full"
            style={{ background: card.accent }}
          />
        </div>

        {/* card footer */}
        <div className="px-3 py-2.5 border-t border-white/10">
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
      custom={0.6 + index * 0.08}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(255,255,255,0.14)',
        transition: { duration: 0.2 },
      }}
      className="glass-tag rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-2 cursor-default select-none"
    >
      <span className="text-[#4ECDC4] text-sm">{skill.icon}</span>
      <span className="text-white/85 text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
        {skill.label}
      </span>
    </motion.div>
  )
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden noise-bg flex flex-col">
      {/* ── gradient mesh background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #2B4C8C 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)',
            bottom: '-5%',
            right: '-5%',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-2xl"
          style={{
            background: 'radial-gradient(circle, #A8E063 0%, transparent 70%)',
            top: '40%',
            left: '45%',
          }}
        />
      </div>

      {/* ── nav placeholder ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-30 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8"
      >
        <span className="text-white/60 text-sm font-semibold tracking-[0.2em] uppercase">
          Aco Lin
        </span>
        <div className="flex gap-6 text-white/40 text-sm">
          <a href="#" className="hover:text-white/80 transition-colors">Works</a>
          <a href="#" className="hover:text-white/80 transition-colors">About</a>
          <a href="#" className="hover:text-white/80 transition-colors">Contact</a>
        </div>
      </motion.nav>

      {/* ── floating cards ── */}
      {CARDS.map((card) => (
        <FloatingCard key={card.id} card={card} />
      ))}

      {/* ── hero headline ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* eyebrow */}
        <motion.p
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#4ECDC4] text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-4"
        >
          Creative Portfolio · 2024
        </motion.p>

        {/* main title — split into rows for dramatic layout */}
        <div className="relative">
          <motion.h1
            className="font-black uppercase leading-[0.88] select-none"
            initial="hidden"
            animate="visible"
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

            {/* Row 3 — outlined stroke text for depth */}
            <motion.span
              custom={0.4}
              variants={fadeUp}
              className="block text-[10vw] md:text-[7.5vw] lg:text-[6rem] xl:text-[7rem] text-stroke"
              style={{ letterSpacing: '0.04em' }}
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
          className="mt-6 md:mt-8 text-white/50 text-sm md:text-base max-w-sm md:max-w-md leading-relaxed"
        >
          品牌策略 · 視覺設計 · IP 開發
          <br className="hidden md:block" />
          用設計說故事，讓品牌被記住。
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={0.62}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 md:mt-10 flex flex-wrap gap-3 justify-center"
        >
          <button
            className="px-6 py-3 rounded-full text-sm font-semibold text-[#1A365D] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(90deg, #4ECDC4, #A8E063)' }}
          >
            查看作品集
          </button>
          <button className="glass-tag px-6 py-3 rounded-full text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95">
            關於我 →
          </button>
        </motion.div>
      </div>

      {/* ── skill tags bar ── */}
      <div className="relative z-30 px-4 md:px-12 pb-8 md:pb-10">
        {/* divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-white/10 mb-6 origin-left"
        />

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
          {SKILLS.map((skill, i) => (
            <SkillTag key={skill.label} skill={skill} index={i} />
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
