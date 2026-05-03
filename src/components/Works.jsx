import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── data ─────────────────────────────────────────────────────────────────────
const WORKS = [
  {
    id: 1,
    title: '焙可狐品牌識別',
    subtitle: 'IP 插畫 · 品牌識別',
    description:
      '為焙可狐品牌建立完整視覺識別系統。從核心 logo 到品牌色彩規範，打造兼具辨識度與延展性的視覺語言，完整應用於包裝設計、社群媒體與周邊商品。',
    year: '2024',
    tags: ['品牌設計', 'IP 開發', '視覺識別'],
    accent: '#4ECDC4',
  },
  {
    id: 2,
    title: '社群行銷視覺',
    subtitle: '行銷圖 · 社群視覺',
    description:
      '規劃多平台社群視覺策略，統一品牌傳播語調，設計系列貼文模板與活動主視覺，協助品牌在各平台建立清晰一致的視覺存在感。',
    year: '2024',
    tags: ['行銷設計', '社群視覺', '內容策略'],
    accent: '#A8E063',
  },
  {
    id: 3,
    title: 'App UI/UX 設計',
    subtitle: 'UI/UX · 介面設計',
    description:
      '以使用者研究為基礎，完成 wireframe 到高保真 prototype 的完整流程，建立設計系統並交付開發規格文件。',
    year: '2023',
    tags: ['UI 設計', 'UX 研究', 'Prototype'],
    accent: '#F6AD55',
  },
  {
    id: 4,
    title: 'IP 視覺開發',
    subtitle: '視覺設計 · IP 角色開發',
    description:
      '從零建立原創 IP 角色世界觀，完成角色設定集、場景插畫與周邊商品視覺，並規劃品牌授權與聯名合作方向。',
    year: '2023',
    tags: ['插畫設計', 'IP 開發', '角色設定'],
    accent: '#FC8181',
  },
]

// ─── placeholder artwork ───────────────────────────────────────────────────────
function WorkArt({ accent }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#060606' }}>
      <div
        className="absolute blur-3xl rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}38 0%, transparent 60%)`,
          top: '-25%', left: '-25%', right: '-25%', bottom: '-25%',
        }}
      />
      <div
        className="absolute blur-xl rounded-full"
        style={{
          background: accent,
          opacity: 0.16,
          width: '52%',
          height: '52%',
          top: '24%',
          left: '24%',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/[0.05] text-xs tracking-widest uppercase select-none">
          圖片待置入
        </span>
      </div>
    </div>
  )
}

// ─── progress dots ─────────────────────────────────────────────────────────────
function Dots({ activeIndex, accent }) {
  return (
    <div className="flex items-center gap-1.5">
      {WORKS.map((_, i) => (
        <span
          key={i}
          className="h-[3px] rounded-full transition-all duration-300"
          style={{
            background: i === activeIndex ? accent : 'rgba(255,255,255,0.28)',
            width: i === activeIndex ? '18px' : '6px',
          }}
        />
      ))}
    </div>
  )
}

// ─── single work card ──────────────────────────────────────────────────────────
function WorkCard({ work, workIndex, isSelected, isOther, onClick }) {
  const ref = useRef(null)

  useEffect(() => {
    if (isSelected && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [isSelected])

  return (
    <motion.article
      ref={ref}
      layout
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={[
        'relative overflow-hidden cursor-pointer select-none',
        'rounded-2xl md:rounded-3xl border border-white/10',
        'shadow-[0_4px_28px_rgba(0,0,0,0.55)]',
        // width
        isSelected
          ? 'flex-none w-[85vw] md:flex-1'
          : isOther
          ? 'flex-none w-[56px] md:w-[68px]'
          : 'flex-none w-[68vw] md:flex-1 md:min-w-0',
        isSelected ? 'h-[500px] md:h-[390px]' : 'h-[300px] md:h-[390px]',
      ].join(' ')}
    >
      {/* artwork layer — always visible through */}
      <WorkArt accent={work.accent} />

      {/* ── sliver: other cards pushed aside ── */}
      <AnimatePresence>
        {isOther && (
          <motion.div
            key="sliver"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            <span
              className="text-white/30 text-[9px] tracking-widest whitespace-nowrap select-none"
              style={{ writingMode: 'vertical-rl' }}
            >
              {work.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── thumbnail: normal browse state ── */}
      <AnimatePresence>
        {!isSelected && !isOther && (
          <motion.div
            key="thumb"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 inset-x-0 p-4 md:p-5"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)',
            }}
          >
            <Dots activeIndex={workIndex} accent={work.accent} />
            <p className="mt-2.5 text-white font-bold text-sm md:text-[15px] leading-tight truncate">
              {work.title}
            </p>
            <p className="text-white/50 text-xs mt-0.5 truncate">{work.subtitle}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── expanded: detail view ── */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Left / Top: art panel (art fills via absolute WorkArt behind this) */}
            <div className="relative flex-none h-[190px] md:h-auto md:w-[42%]">
              {/* subtle vignette at bottom of art area */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)',
                }}
              />
              <div className="absolute bottom-3 left-4">
                <Dots activeIndex={workIndex} accent={work.accent} />
              </div>
            </div>

            {/* Right / Bottom: text panel */}
            <div
              className="flex-1 flex flex-col justify-start md:justify-center p-5 md:p-8 overflow-y-auto"
              style={{
                background: 'rgba(4,4,4,0.82)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* year + close */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold tracking-[0.3em] uppercase"
                  style={{ color: work.accent }}
                >
                  {work.year}
                </span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onClick() }}
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/45 hover:text-white/80 text-xs"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-1">
                {work.title}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: work.accent }}>
                {work.subtitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs border"
                    style={{ color: work.accent, borderColor: `${work.accent}48` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

// ─── section ───────────────────────────────────────────────────────────────────
export default function Works() {
  const [selectedId, setSelectedId] = useState(null)

  const toggle = (id) => setSelectedId((prev) => (prev === id ? null : id))

  return (
    <section id="works" className="relative bg-black py-20 md:py-28">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 md:px-16 mb-10 md:mb-14"
      >
        <p className="text-[#24FFEF]/55 text-xs font-semibold tracking-[0.35em] uppercase mb-3">
          Selected Works
        </p>
        <h2 className="text-white font-black text-4xl md:text-5xl uppercase leading-none tracking-tight">
          作品集
        </h2>
      </motion.div>

      {/* section divider */}
      <div className="h-px bg-white/8 mx-6 md:mx-16 mb-10 md:mb-14" />

      {/* cards scroll row */}
      <div className="overflow-x-auto md:overflow-visible scrollbar-none">
        <motion.div
          layout
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 px-6 md:px-16 w-max md:w-full"
        >
          {WORKS.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              workIndex={i}
              isSelected={selectedId === work.id}
              isOther={selectedId !== null && selectedId !== work.id}
              onClick={() => toggle(work.id)}
            />
          ))}
        </motion.div>
      </div>

      {/* mobile hint */}
      <AnimatePresence>
        {selectedId === null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden text-center text-white/22 text-[10px] tracking-widest uppercase mt-5 px-6"
          >
            點擊作品卡片查看詳情
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  )
}
