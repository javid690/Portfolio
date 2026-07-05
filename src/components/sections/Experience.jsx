import { Briefcase, MapPin } from 'lucide-react'
import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import { experience } from '../../data.js'

export default function Experience() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="A track record of building and shipping products that matter."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-slate-200 dark:bg-ink-border sm:left-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 80}>
                <div
                  className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}
                >
                  {/* dot */}
                  <span
                    className={`absolute left-2.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-brand-500 ring-4 ring-brand-500/20 sm:left-auto ${
                      i % 2 === 0 ? 'sm:-right-2' : 'sm:-left-2'
                    }`}
                  />
                  <div className="card card-hover p-6 text-left">
                    <span className="chip mb-3 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                      {job.period}
                    </span>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                      <Briefcase size={18} className="text-brand-500" />
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                      {job.company}
                      <span className="ml-2 inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
