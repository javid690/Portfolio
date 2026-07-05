import { Calendar, Clock } from 'lucide-react'
import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import { posts } from '../../data.js'

export default function BlogPreview() {
  return (
    <section className="section bg-slate-50 dark:bg-ink-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="Blog"
          title="Latest Articles"
          subtitle="Thoughts on engineering, architecture and the craft of building software."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 70}>
              <article className="card card-hover group h-full overflow-hidden">
                <div className="relative aspect-[16/9] bg-gradient-to-br from-brand-500 via-indigo-600 to-purple-800">
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {post.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
