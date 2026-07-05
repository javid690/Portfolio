import { useState } from 'react'
import { Mail, Phone, MapPin, Send, RefreshCw, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { profile } from '../data.js'

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

// Simple static "math captcha" — purely client-side for this static phase.
function makeCaptcha() {
  // Fixed seed values so the build stays deterministic; refresh cycles a list.
  return { a: 7, b: 1, answer: 8 }
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', captcha: '' })
  const [captcha] = useState(makeCaptcha)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (Number(form.captcha) !== captcha.answer) {
      setError('Incorrect answer to the security check. Please try again.')
      return
    }
    // Static phase: no backend. Show a success state.
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '', captcha: '' })
  }

  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <section className="section pt-4">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="card p-7 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h2>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              {sent && (
                <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300">
                  <CheckCircle2 size={18} />
                  Thanks! Your message has been received (demo — no backend yet).
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Field label="Full Name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    placeholder="Your full name"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    placeholder="you@email.com"
                    className={inputCls}
                  />
                </Field>
                <Field label="Subject">
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    required
                    placeholder="What is this about?"
                    className={inputCls}
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {/* Captcha */}
                <Field label="Security Check">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-slate-100 px-4 py-2.5 font-mono text-sm font-semibold text-slate-700 dark:bg-ink-soft dark:text-slate-200">
                      {captcha.a} + {captcha.b} = ?
                    </span>
                    <input
                      name="captcha"
                      value={form.captcha}
                      onChange={update}
                      required
                      inputMode="numeric"
                      placeholder="Answer"
                      className={`${inputCls} flex-1`}
                    />
                    <button
                      type="button"
                      aria-label="Refresh"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-500 dark:border-ink-border dark:text-slate-400"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </Field>

                {error && <p className="text-sm font-medium text-red-500">{error}</p>}

                <button type="submit" className="btn-primary w-full">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Info column */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="card p-7">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="mt-3 leading-relaxed text-slate-500 dark:text-slate-400">
                  I&apos;m always open to discussing new projects, creative ideas or opportunities
                  to be part of your vision. Whether you need a full-stack web application, a
                  frontend redesign or technical consultation, I&apos;m here to help.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="space-y-4">
                {contactInfo.map(({ icon: I, label, value, href }) => (
                  <div key={label} className="card flex items-center gap-4 p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-500/5 text-brand-600 ring-1 ring-brand-500/20 dark:text-brand-300">
                      <I size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-medium text-slate-800 hover:text-brand-600 dark:text-slate-100 dark:hover:text-brand-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-slate-800 dark:text-slate-100">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="card p-7">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Follow Me</h3>
                <div className="mt-4 flex gap-3">
                  {profile.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500 hover:text-white dark:border-ink-border dark:text-slate-400 dark:hover:border-brand-500"
                    >
                      <Icon name={s.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={280}>
              <div className="card relative grid h-48 place-items-center overflow-hidden bg-gradient-to-br from-brand-500/10 to-indigo-500/10">
                <div className="absolute inset-0 [background-image:linear-gradient(rgba(124,58,237,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative text-center">
                  <MapPin size={28} className="mx-auto text-brand-500" />
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {profile.location}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

const inputCls =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 dark:border-ink-border dark:bg-ink-soft dark:text-slate-100 dark:placeholder-slate-500'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </span>
      {children}
    </label>
  )
}
