import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, FileText } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-ink-border/70 dark:bg-ink/80'
        : 'border-b border-transparent bg-transparent'
        }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-extrabold text-white shadow-md shadow-brand-500/30">
            J
          </span>
          <span className="hidden text-lg font-bold text-slate-900 dark:text-white sm:block">
            {profile.firstName} <span className="gradient-text">{profile.lastName}</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.disabled ? (
              <li key={link.name}>
                <span
                  className="relative cursor-not-allowed rounded-lg px-3.5 py-2 text-sm font-medium text-slate-400 dark:text-slate-600"
                  title="Coming soon"
                >
                  {link.name}
                  <span className="ml-1 rounded bg-slate-200 px-1 py-0.5 text-[9px] font-semibold uppercase text-slate-500 dark:bg-ink-border dark:text-slate-400">
                    Soon
                  </span>
                </span>
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${isActive
                      ? 'text-brand-600 dark:text-brand-300'
                      : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} className="btn-primary hidden sm:inline-flex">
            <FileText size={16} />
            Resume
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-ink-border dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 dark:border-ink-border dark:text-slate-300 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-lg transition-[max-height] duration-300 dark:border-ink-border/70 dark:bg-ink/95 md:hidden ${open ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) =>
            link.disabled ? (
              <li key={link.name}>
                <span className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 dark:text-slate-600">
                  {link.name} · Soon
                </span>
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium ${isActive
                      ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300'
                      : 'text-slate-600 dark:text-slate-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ),
          )}
          <li className="pt-2">
            <a href={profile.resumeUrl} className="btn-primary w-full">
              <FileText size={16} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
