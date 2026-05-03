import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
  '品牌識別設計 × 10+ 個品牌',
  '原創 IP 角色授權合作 × 3 件',
  '社群視覺設計累積觸及 100 萬+',
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  return (
    <section id="about" className="bg-black py-24 md:py-32">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-start md:items-center">

          {/* ── Left: photo + floating contact card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full md:w-[42%] flex-shrink-0"
          >
            {/* Photo placeholder */}
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden glass-card"
              style={{ aspectRatio: '4/5' }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{
                  background:
                    'linear-gradient(160deg, #0d2020 0%, #050d0d 60%, #0a0808 100%)',
                }}
              >
                <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-4xl">
                  🦊
                </div>
                <span className="text-white/12 text-[10px] tracking-widest uppercase">
                  照片待置入
                </span>
              </div>
            </div>

            {/* Floating contact card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 right-4 md:-right-6 glass-card rounded-2xl p-4 md:p-5"
              style={{ minWidth: '208px', zIndex: 10 }}
            >
              <p
                className="text-[10px] font-bold tracking-[0.32em] uppercase mb-3"
                style={{ color: '#24FFEF' }}
              >
                Contact Me
              </p>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">📍</span>
                  <span className="text-white/70 text-sm">Taiwan, 台北</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">✉</span>
                  <span className="text-white/70 text-xs md:text-sm">
                    acoa59@gmail.com
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: text content ── */}
          <div className="flex-1 mt-6 md:mt-0">

            {/* Eyebrow */}
            <motion.p
              {...inView(0)}
              className="text-[11px] font-semibold tracking-[0.35em] uppercase mb-4"
              style={{ color: '#24FFEF99' }}
            >
              About Me
            </motion.p>

            {/* Heading */}
            <motion.h2
              {...inView(0.08)}
              className="text-white font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tight mb-5"
            >
              設計師<br />品牌<br />創作者
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              {...inView(0.15)}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-8"
            >
              用設計述說品牌故事，以創意打造有溫度的視覺體驗。
            </motion.p>

            <div className="h-px bg-white/10 mb-8" />

            {/* Section A: About */}
            <motion.div {...inView(0.22)} className="mb-8">
              <p className="text-white/55 text-sm md:text-[15px] leading-relaxed">
                我是 Aco Lin，一位專注於品牌設計與 IP 開發的設計師。擅長整合視覺美學與品牌策略，從 Logo
                設計、插畫創作到 UI/UX 與社群視覺，提供一致且有感染力的設計解決方案。相信好的設計不只是好看，更是品牌與受眾之間情感溝通的橋樑。
              </p>
            </motion.div>

            {/* Section B: Achievements */}
            <motion.div {...inView(0.30)}>
              <p
                className="text-[10px] font-bold tracking-[0.32em] uppercase mb-3"
                style={{ color: '#24FFEF' }}
              >
                個人成就
              </p>
              <ul className="space-y-2.5">
                {ACHIEVEMENTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm md:text-[15px] text-white/55"
                  >
                    <span style={{ color: '#24FFEF' }} className="mt-0.5 flex-shrink-0">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
