import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'

export default function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center shadow-xl shadow-brand-500/20 sm:px-16 sm:py-16">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" />
            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-brand-100">
              Have a project in mind or just want to say hello? I&apos;m always open to discussing
              new ideas and opportunities.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="btn bg-white text-brand-700 hover:bg-brand-50"
              >
                Get In Touch <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="btn border border-white/40 text-white hover:bg-white/10"
              >
                View My Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
