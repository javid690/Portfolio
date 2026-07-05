import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base text-slate-500 dark:text-slate-400 ${
            center ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  )
}
