import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import Icon from './Icon.jsx'
import { profile, navLinks } from '../data.js'

export default function Footer() {
  const year = 2026
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-ink-border dark:bg-ink-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-extrabold text-white">
                M
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {profile.firstName} {profile.lastName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.role} crafting scalable web applications with modern technologies.
            </p>
            <div className="mt-5 flex gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:border-brand-400 hover:bg-brand-500 hover:text-white dark:border-ink-border dark:text-slate-400 dark:hover:border-brand-500"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.disabled ? (
                    <span className="text-sm text-slate-400 dark:text-slate-600">
                      {link.name} · Soon
                    </span>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-500" /> {profile.location}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-500" />
                <a href={`mailto:${profile.email}`} className="hover:text-brand-600 dark:hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-500" /> {profile.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-ink-border dark:text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
