import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Icon from '../Icon.jsx'
import { profile } from '../../data.js'

// Lightweight typewriter for the rotating titles.
function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          )
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.titles)

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-700/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.06),transparent_55%)]" />
      </div>

      <div className="container-x flex min-h-[88vh] items-center pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="animate-fade-up text-center lg:text-left">
            <p className="eyebrow">Hi, I&apos;m</p>
            <h1 className="mt-3 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              {profile.firstName}
              <br />
              <span className="gradient-text">{profile.lastName}</span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
              {typed || ' '}
              <span className="ml-0.5 inline-block w-0.5 animate-blink bg-brand-500">&nbsp;</span>
            </p>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-500 dark:text-slate-400 lg:mx-0">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link to="/projects" className="btn-primary">
                <ArrowRight size={16} /> View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                <MessageCircle size={16} /> Contact Me
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              {profile.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-ink-border dark:text-slate-400 dark:hover:border-brand-500 dark:hover:text-white"
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-4 animate-pulse-glow rounded-full bg-gradient-to-tr from-brand-500 via-indigo-500 to-fuchsia-500 opacity-70 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-brand-500/40 sm:h-80 sm:w-80">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
