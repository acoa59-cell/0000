import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-12 py-4 md:py-5"
      style={{
        background: 'rgba(0,0,0,0.60)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <span className="text-white/60 text-sm font-semibold tracking-[0.2em] uppercase">
        Aco Lin
      </span>
      <nav className="flex gap-6 text-white/40 text-sm">
        <a href="#works" className="hover:text-white/80 transition-colors">Works</a>
        <a href="#about" className="hover:text-white/80 transition-colors">About</a>
      </nav>
    </motion.header>
  )
}
