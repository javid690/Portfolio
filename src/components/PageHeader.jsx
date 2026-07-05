import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-600/15" />
      </div>
      <div className="container-x text-center">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          <span className="gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        )}
        <nav className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
          <Link to="/" className="hover:text-brand-600 dark:hover:text-white">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-600 dark:text-brand-300">{crumb || title}</span>
        </nav>
      </div>
    </section>
  )
}
