import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/sections/Hero.jsx'
import Services from '../components/sections/Services.jsx'
import Skills from '../components/sections/Skills.jsx'
import Experience from '../components/sections/Experience.jsx'
import BlogPreview from '../components/sections/BlogPreview.jsx'
import CTA from '../components/sections/CTA.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { about, projects } from '../data.js'

function AboutPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">About Me</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Turning ideas into <span className="gradient-text">elegant software</span>
            </h2>
            <p className="mt-5 leading-relaxed text-slate-500 dark:text-slate-400">{about.intro}</p>
            <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
              {about.body[0]}
            </p>
            <Link to="/about" className="btn-primary mt-7">
              More About Me <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              {about.stats.map((stat) => (
                <div key={stat.label} className="card p-7 text-center">
                  <div className="gradient-text text-4xl font-black">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  const featured = projects.slice(0, 6)
  return (
    <section className="section bg-slate-50 dark:bg-ink-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of work that showcases my skills in building modern, scalable applications."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-outline">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <BlogPreview />
      <CTA />
    </>
  )
}
