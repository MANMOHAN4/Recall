import { Link, useLocation } from '@tanstack/react-router'
import { Button, buttonVariants } from '../ui/button'
import { ThemeToggle } from './theme-toggle'
import { authClient } from '@/lib/auth-client'
import { useSignOut } from '../../hooks/use-sign-out'
import {
  Sparkles,
  LayoutDashboard,
  LogOut,
  User,
  ChevronRight,
} from 'lucide-react'

export function Navbar() {
  const { data: session, isPending } = authClient.useSession()
  const signOut = useSignOut()
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-gradient-to-b from-background/95 via-background/80 to-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-lg shadow-primary/5">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-50" />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo Section */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-all duration-300 hover:opacity-80"
        >
          <div className="relative">
            {/* Glow effect behind logo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Logo container */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
              <img
                src="https://tanstack.com/images/logos/logo-color-banner-600.png"
                alt="TanStack Start Logo"
                className="size-7 object-contain"
              />
            </div>
          </div>

          {/* Title with gradient */}
          <div className="flex flex-col">
            <h1 className="text-lg font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              TanStack Start
            </h1>
            <span className="text-[10px] text-muted-foreground -mt-0.5">
              Premium Edition
            </span>
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle with enhanced styling */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ThemeToggle />
          </div>

          {/* Auth Buttons */}
          {isPending ? (
            // Loading skeleton
            <div className="flex items-center gap-3">
              <div className="h-9 w-20 rounded-lg bg-muted animate-pulse" />
              <div className="h-9 w-24 rounded-lg bg-muted animate-pulse" />
            </div>
          ) : session ? (
            // Logged in state
            <>
              {/* User info pill */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <User className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary-light">
                  {session.user?.name || 'User'}
                </span>
              </div>

              {/* Logout Button */}
              <Button
                onClick={signOut}
                variant="outline"
                className="group relative overflow-hidden gap-2 px-4 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <LogOut className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative">Logout</span>
              </Button>

              {/* Dashboard Button - Primary CTA */}
              <Link
                to="/dashboard"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <LayoutDashboard className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">Dashboard</span>
                <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </>
          ) : (
            // Logged out state
            <>
              {/* Login Button */}
              <Link
                to="/login"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Login</span>
              </Link>

              {/* Get Started Button - Primary CTA */}
              <Link
                to="/signup"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <Sparkles className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative">Get Started</span>
                <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-50" />
    </nav>
  )
}