import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/sections/CTA.jsx'
import { projects, projectCategories } from '../data.js'

const PER_PAGE = 6

export default function Projects() {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const current = Math.min(page, totalPages)
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE)

  const selectCategory = (cat) => {
    setActive(cat)
    setPage(1)
  }

  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="A curated selection of projects that showcase my skills in building modern, scalable applications."
      />

      <section className="section pt-4">
        <div className="container-x">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-500/30'
                    : 'border border-slate-200 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-ink-border dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {visible.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 70}>
                  <ProjectCard project={p} index={(current - 1) * PER_PAGE + i} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-slate-500 dark:text-slate-400">
              No projects in this category yet.
            </p>
          )}

          {/* Footer row: count + pagination */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing {visible.length ? (current - 1) * PER_PAGE + 1 : 0}–
              {(current - 1) * PER_PAGE + visible.length} of {filtered.length} results
            </p>

            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={current === 1}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-600 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-500 dark:border-ink-border dark:text-slate-300"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-9 w-9 rounded-lg text-sm font-semibold transition-colors ${
                      n === current
                        ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white'
                        : 'border border-slate-200 text-slate-600 hover:border-brand-400 dark:border-ink-border dark:text-slate-300'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={current === totalPages}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-600 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-500 dark:border-ink-border dark:text-slate-300"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
