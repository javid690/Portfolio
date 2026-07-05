import { ArrowUpRight } from 'lucide-react'

// Deterministic gradient per card so thumbnails look varied without images.
const GRADIENTS = [
  'from-violet-600 via-indigo-600 to-purple-800',
  'from-fuchsia-600 via-purple-600 to-indigo-800',
  'from-blue-600 via-indigo-600 to-violet-800',
  'from-purple-600 via-violet-700 to-slate-900',
  'from-indigo-500 via-purple-700 to-fuchsia-800',
]

export default function ProjectCard({ project, index = 0 }) {
  const gradient = GRADIENTS[index % GRADIENTS.length]
  return (
    <a
      href={project.url}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      {/* Thumbnail */}
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_45%)]" />
        <span className="absolute right-3 top-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {project.badge}
        </span>
        <span className="absolute bottom-3 left-4 text-2xl font-black uppercase tracking-tight text-white/30">
          {project.title.split(' ')[0]}
        </span>
        <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <ArrowUpRight size={22} />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
