import {
  Code2,
  Server,
  Database,
  Smartphone,
  Gauge,
  Layers,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react'

const MAP = {
  code: Code2,
  server: Server,
  database: Database,
  smartphone: Smartphone,
  gauge: Gauge,
  layers: Layers,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
}

export default function Icon({ name, ...props }) {
  const Cmp = MAP[name] || Code2
  return <Cmp {...props} />
}
