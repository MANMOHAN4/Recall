import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Button, buttonVariants } from '../components/ui/button'
import {
  Sparkles,
  Zap,
  Brain,
  Globe,
  ArrowRight,
  Github,
  Star,
  Users,
  Rocket,
  Library,
  Search,
  Tags,
  RefreshCw,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Web Scraping',
      description:
        'Import content from any URL with AI-powered extraction and cleaning',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI Summaries',
      description:
        'Get instant AI-generated summaries and insights from any content',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: <Tags className="h-6 w-6" />,
      title: 'Smart Tagging',
      description:
        'Automatic tag generation to organize and categorize your content',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Full-Text Search',
      description:
        'Powerful search across all your saved content with type-safe params',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: 'Personal Library',
      description:
        'Build your knowledge base with organized, searchable content',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Real-time Updates',
      description: 'Live streaming status updates during import and processing',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-lg shadow-primary/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                <Brain className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Recall
              </h1>
              <span className="text-[10px] text-muted-foreground -mt-0.5">
                AI-Powered Knowledge Base
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Login
            </Link>
            <Link to="/signup" className={buttonVariants()}>
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-light">
                Your AI-Powered Content Curation Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Save, Summarize &</span>
              <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Search Any Content
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Recall helps you build a personal knowledge base by scraping web
              content, generating AI summaries, and organizing everything with
              smart tags. Search instantly across your entire library.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/signup"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Rocket className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">Start Building Your Library</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span>Instant Summaries</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Library className="h-5 w-5 text-secondary" />
                <span>Unlimited Library</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need to Build Knowledge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recall combines web scraping, AI, and powerful search to help you
              curate and organize content effortlessly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-glass/50 to-glass/30 border border-glass backdrop-blur-xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-transparent to-primary/5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How Recall Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to build your personal knowledge base
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Import Content',
                description:
                  'Paste any URL or bulk import multiple pages. Recall scrapes and extracts clean, structured content.',
                icon: <Globe className="h-6 w-6" />,
              },
              {
                step: '02',
                title: 'AI Processing',
                description:
                  'Our AI generates concise summaries, extracts key insights, and automatically tags your content.',
                icon: <Brain className="h-6 w-6" />,
              },
              {
                step: '03',
                title: 'Search & Discover',
                description:
                  'Full-text search across your entire library. Find anything instantly with type-safe search params.',
                icon: <Search className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
                )}

                <div className="relative flex flex-col items-center text-center space-y-4">
                  {/* Step number */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl shadow-primary/30 group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>

                  {/* Step label */}
                  <div className="text-sm font-bold text-primary tracking-wider">
                    STEP {item.step}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Perfect For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recall helps developers, researchers, and knowledge workers stay
              organized
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Developers',
                description: 'Save documentation, tutorials, and code snippets',
                gradient: 'from-blue-500/20 to-cyan-500/20',
              },
              {
                title: 'Researchers',
                description: 'Organize papers, articles, and research findings',
                gradient: 'from-purple-500/20 to-pink-500/20',
              },
              {
                title: 'Students',
                description: 'Build a personal knowledge base for studying',
                gradient: 'from-orange-500/20 to-red-500/20',
              },
              {
                title: 'Writers',
                description: 'Collect inspiration and reference materials',
                gradient: 'from-green-500/20 to-emerald-500/20',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-glass/50 to-glass/30 border border-glass backdrop-blur-xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-xl overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

            <div className="relative text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ready to Build Your Knowledge Base?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Join thousands of developers and researchers using Recall to
                organize and search their content with AI-powered summaries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Rocket className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Start Building Your Library
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <p>© 2026 Recall. Built with TanStack Start.</p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="hover:text-primary transition-colors">
                <a
                  href="https://github.com/MANMOHAN4/Recall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
