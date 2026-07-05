import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-5">
      <div className="text-center">
        <p className="gradient-text text-8xl font-black sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-500 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </section>
  )
}
