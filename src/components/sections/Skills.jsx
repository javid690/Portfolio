import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading.jsx'
import { skills } from '../../data.js'

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setWidth(level), delay)
          observer.unobserve(el)
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-sm font-semibold text-brand-600 dark:text-brand-300">{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-ink-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section bg-slate-50 dark:bg-ink-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life."
        />
        <div className="mx-auto grid max-w-4xl gap-x-12 gap-y-7 sm:grid-cols-2">
          {skills.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
