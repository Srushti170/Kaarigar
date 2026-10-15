import { motion } from 'motion/react'
import { Code2, Palette, Rocket, Route } from 'lucide-react'
import { cn } from '@/lib/utils'

const checks = [
  { icon: Palette, label: 'Tailwind CSS v4 with design tokens in src/index.css' },
  { icon: Code2, label: 'lucide-react icons and motion animations' },
  { icon: Route, label: 'react-router-dom installed, ready to wire up' },
]

export default function App() {
  return (
    <main className="grid min-h-dvh place-items-center bg-slate-50 px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-lg rounded-card border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-brand text-brand-fg">
            <Rocket className="size-5" aria-hidden />
          </span>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">ARTEMIS starter</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">React + Vite + Tailwind is ready</p>
          </div>
        </div>
        <ul className="mt-6 grid gap-3 text-sm">
          {checks.map(({ icon: Icon, label }, i) => (
            <li key={label} className={cn('flex items-center gap-3', i === 0 && 'font-medium')}>
              <Icon className="size-4 shrink-0 text-brand" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
        <button className="mt-8 w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover">
          Replace this page with your build
        </button>
      </motion.section>
    </main>
  )
}
