import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import Icon from '../Icon.jsx'
import { services } from '../../data.js'

export default function Services() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I Do"
          title="Services & Expertise"
          subtitle="End-to-end product development — from concept and architecture to deployment and beyond."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card card-hover h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-500/5 text-brand-600 ring-1 ring-brand-500/20 dark:text-brand-300">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
