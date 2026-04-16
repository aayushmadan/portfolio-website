import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowUpRight,
  Cloud,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  X,
  GitBranch
} from 'lucide-react'
import {
  SiDocker,
  SiFlask,
  SiGnubash,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiOllama,
  SiSpringboot,
} from 'react-icons/si'

const profile = {
  name: 'Aayush Madan',
  role: 'DevOps Engineer',
  intro:
    'Building scalable, reliable systems through automation and continuous delivery.',
  summary:
    'DevOps Engineer with hands-on experience in Docker, Kubernetes, AWS, and scalable CI/CD pipelines. Focused on cloud deployment, automation, and secure application delivery.',
  phone: '+91-9555504611',
  email: 'aayush.madan4611@gmail.com',
  location: 'Noida, Uttar Pradesh, India',
  github: 'https://github.com/aayushmadan',
  linkedin: 'http://www.linkedin.com/in/aayush-madan-878a68226',
}

const navigation = [
  { label: 'Profile', href: '#profile' },
  { label: 'Education', href: '#education' },
  { label: 'Technical Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.github,
    icon: Github,
    className: 'social-button-github',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: Linkedin,
    className: 'social-button-linkedin',
  },
]

const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Birla Institute of Technology, Mesra',
    location: 'Noida, Uttar Pradesh',
    years: '2023 - 2025',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Birla Institute of Technology, Mesra',
    location: 'Noida, Uttar Pradesh',
    years: '2020 - 2023',
  },
]

const skillGroups = [
  {
    title: 'Operating Systems',
    skills: [{ name: 'Linux', icon: SiLinux }],
  },
  {
    title: 'Scripting',
    skills: [{ name: 'Bash (Shell Scripting)', icon: SiGnubash }],
  },
  {
    title: 'Containerization & Orchestration',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
    ],
  },
  {
    title: 'CI/CD',
    skills: [{ name: 'GitHub Actions', icon: SiGithubactions }],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'Amazon Web Services (AWS)', icon: Cloud },
    ],
  },
]

const experience = [
  {
    company: 'NXT Interactive',
    role: 'Software Developer Intern',
    location: 'Remote',
    duration: 'December 2024 - May 2025',
    points: [
      'Containerized and deployed 4+ web applications using Docker on cloud platforms, reducing environment setup time by 40% and making releases more consistent.',
      'Standardized runtime environments across development and production to improve reliability, onboarding, and deployment confidence.',
      'Strengthened security for 2-tier web applications by moving sensitive configuration into Google Secret Manager and securing 5+ API keys, removing hardcoded credentials completely.',
    ],
  },
]

const projects = [
  {
    title: 'End-to-End DevSecOps CI/CD Pipeline',
    duration: 'February 2026 - March 2026',
    stack: [
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS EC2', icon: Cloud },
      { name: 'Bash', icon: SiGnubash },
      { name: 'Flask', icon: SiFlask },
    ],
    points: [
      'Engineered an end-to-end CI/CD pipeline for a Flask application with GitHub Actions, Docker, and AWS to automate build, test, and deployment workflows.',
      'Integrated DevSecOps checks including SAST, secret scanning, software composition analysis, and container image scanning for a secure release flow.',
      'Automated deployment to an AWS EC2 instance through shell scripting, making delivery repeatable and production-ready.',
    ],
  },
  {
    title: 'Multi-Tier Web Application Deployment',
    duration: 'March 2026 - April 2026',
    stack: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Ollama', icon: SiOllama },
    
    ],
    points: [
      'Containerized and deployed a multi-tier application on Kubernetes, combining Spring Boot, MySQL, and Ollama into a scalable platform.',
      'Added health probes and self-healing behavior to improve runtime stability and reduce operational friction.',
      'Used Horizontal Pod Autoscaling to dynamically scale workloads and maintain stable performance under changing traffic demands.',
    ],
  },
]

const contactCards = [
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'aayush-madan-878a68226', href: profile.linkedin, icon: Linkedin },
]

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus({
        type: 'error',
        message:
          // 'Add your EmailJS keys in the environment variables to activate the contact form.',
          'Something went wrong while sending the message. Please try again.',

      })
      return
    }

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: profile.email,
        },
        emailJsConfig.publicKey,
      )

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully.',
      })
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending the message. Please try again.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-site text-neutral-950">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

      <a className="resume-link" href="https://docs.google.com/document/d/e/2PACX-1vQBRfsMSTgTkvb5StanqA9wM0GEF_YBEAaYIknTeAcglLxt_h4vDbOzoP0BZ6emyY76LHtNnwDXA-5F/pub" target="_blank" rel="noreferrer">
        View Resume
        <ArrowUpRight size={16} />
      </a>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen((current) => !current)}
        aria-label="Toggle navigation"
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'mobile-backdrop-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-screen max-w-[1460px] gap-5 px-4 pb-10 pt-[0rem] sm:px-5 lg:px-6">
        <aside className={`sidebar-shell ${mobileMenuOpen ? 'sidebar-shell-open' : ''}`}>
          <div className="glass-panel sidebar-panel !gap-6 ">
            <div className="sidebar-identity">
              <img
                src="./profile-avatar.png"
                alt="Aayush Madan profile avatar"
                className="sidebar-avatar"
              />
              <div>
                <h1 className="text-[1.62rem] font-semibold tracking-tight">{profile.name}</h1>
                <p className="mt-2 text-[13.2px] text-neutral-600 tracking-tight">DevOps · Automation · Cloud</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ label, href, icon: Icon, className }) => (
                <a
                  key={label}
                  className={`social-button ${className}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>

            <nav className="space-y-4 sm:space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  className="nav-button"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 pt-[4.7rem] sm:pt-[3rem] flex-1 space-y-5">
          <section id="profile" className="glass-panel hero-panel">
            <div className="hero-grid">
              <div className="space-y-6">
                <div className="space-y-5 sm:space-y-7">
                  <h2 className="text-[2rem] font-semibold leading-[1.14] sm:text-[3rem]">
                    Hi, I&apos;m <span className="text-red-600">{profile.name}</span>
                  </h2>
                  <p className="role-accent">A DevOps Engineer</p>
                  <p className="max-w-3xl text-[0.94rem] sm:text-[0.98rem] leading-[1.75] text-neutral-700">
                    {profile.intro}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="glass-panel section-panel">
            <SectionHeading title="Education" />
            <div className="grid gap-4 md:grid-cols-2">
              {education.map((item) => (
                <article key={item.degree} className="content-card">
                  <span className="card-tag !text-[0.78rem]">{item.years}</span>
                  <h3 className="mt-3 text-[1rem] font-semibold">{item.degree}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{item.institution}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.location}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="glass-panel section-panel">
            <SectionHeading title="Technical Skills" />
            <div className="grid gap-4 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="content-card">
                  <h3 className="text-[0.94rem] font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.skills.map(({ name, icon: Icon }) => (
                      <div key={name} className="skill-pill !gap-3">
                        <Icon className="text-red-600 mb-0.5" size={24} />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="glass-panel section-panel">
            <SectionHeading title="Experience" />
            <div className="space-y-4">
              {experience.map((item) => (
                <article key={item.company} className="content-card">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-[1.22rem] font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm text-neutral-700">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="card-tag">{item.duration}</span>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="timeline-point">
                        <span className="timeline-dot" />
                        <p className="text-[0.88rem] leading-[1.7] text-neutral-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="glass-panel section-panel">
            <SectionHeading title="Projects" />
            <div className="grid gap-4 xl:grid-cols-2">
              {projects.map((project, index) => (
                <article key={project.title} className="content-card project-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="project-index-tag">Project {index + 1}</span>
                      <h3 className="text-[1.2rem] font-semibold">{project.title}</h3>
                      <p className="mt-2 text-sm text-neutral-500">{project.duration}</p>
                    </div>
                  </div>

                  <div className="mt-5 !text-xs flex flex-wrap gap-3">
                    {project.stack.map(({ name }) => (
                      <div key={name} className="project-tag">
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <div key={point} className="timeline-point">
                        <span className="timeline-dot" />
                        <p className="text-[0.88rem] leading-[1.7] text-neutral-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="glass-panel section-panel">
            <SectionHeading title="Contact" />

            <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                {contactCards.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    className="content-card flex items-center gap-4 transition duration-300 hover:-translate-y-0.5"
                    href={href}
                    target={label === 'LinkedIn' ? '_blank' : undefined}
                    rel={label === 'LinkedIn' ? 'noreferrer' : undefined}
                  >
                    <div className="icon-shell">
                      <Icon className="text-red-600" size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">{label}</p>
                      <p className="mt-1 text-sm text-neutral-700">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <form className="content-card space-y-4" onSubmit={handleSubmit}>
                {/* <div className="grid gap-4 md:grid-cols-2"> */}
                  <Field
                    label="Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                {/* </div> */}

                <Field
                  label="Subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                />

                <label className="block space-y-2">
                  <span className="field-label">Message</span>
                  <textarea
                    className="field-input min-h-36 resize-none"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Enter the message"
                    required
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-col sm:items-start sm:justify-between">
                  <button type="submit" className="submit-button">
                    Send Message
                    <Send size={16} />
                  </button>

                  <div>
                    {status.message ? (
                      <p
                      className={`text-sm ${
                        status.type === 'success' ? 'text-emerald-600' : 'text-red-600'
                      }`}
                      >
                        
                        {status.message}
                      </p>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function SectionHeading({ title }) {
  return (
    <div className="mb-6">
      <h2 className="text-[1.5rem] font-semibold tracking-tight sm:text-[1.65rem]">{title}</h2>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="block space-y-2">
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  )
}

export default App
