import { GraduationCap, Download } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Services from '../components/sections/Services.jsx'
import Skills from '../components/sections/Skills.jsx'
import Experience from '../components/sections/Experience.jsx'
import CTA from '../components/sections/CTA.jsx'
import { profile, about, education } from '../data.js'

function Intro() {
  return (
    <section className="pb-4">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-3">Who I Am</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {profile.role} based in <span className="gradient-text">{profile.location}</span>
            </h2>
            <p className="mt-5 leading-relaxed text-slate-500 dark:text-slate-400">{about.intro}</p>
            {about.body.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
                {p}
              </p>
            ))}
            <a href={profile.resumeUrl} className="btn-primary mt-7">
              <Download size={16} /> Download Resume
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-500/30 to-indigo-500/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 dark:ring-ink-border">
                <img src={profile.avatar} alt={profile.name} className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="card p-6 text-center">
                <div className="gradient-text text-3xl font-black sm:text-4xl">{stat.value}</div>
                <div className="mt-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section bg-slate-50 dark:bg-ink-soft zksamail">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title="Education & Certifications"
          subtitle="My academic background and professional qualifications."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 80}>
              <div className="card card-hover h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-500/5 text-brand-600 ring-1 ring-brand-500/20 dark:text-brand-300">
                  <GraduationCap size={24} />
                </div>
                <span className="chip mt-5 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                  {edu.period}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                  {edu.school}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {edu.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Get to know the person behind the code — my story, skills and experience."
      />
      <Intro />
      <Services />
      <Experience />
      <Education />
      <Skills />
      <CTA />
    </>
  )
}
