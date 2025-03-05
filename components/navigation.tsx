"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Box, BarChart3, Truck, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/packers",
      label: "Packers App",
      icon: Box,
    },
    {
      href: "/dashboard",
      label: "Manager's Dashboard",
      icon: BarChart3,
    },
    {
      href: "/inventory",
      label: "Logistics & Inventory",
      icon: Truck,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">QuickWare</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.slice(1).map((route) => {
              const Icon = route.icon
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center transition-colors hover:text-foreground/80 ${
                    pathname === route.href ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  {route.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <span className="font-bold">QuickWare</span>
            </Link>
            <nav className="mt-8 flex flex-col space-y-3">
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center rounded-md px-2 py-1.5 text-sm font-medium ${
                      pathname === route.href
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {Icon && <Icon className="mr-2 h-4 w-4" />}
                    {route.label}
                  </Link>
                )
              })}
            </nav>
            <X
              className="absolute right-4 top-4 h-4 w-4 cursor-pointer text-muted-foreground"
              onClick={() => setIsOpen(false)}
            />
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && <>{theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</>}
          </Button>
        </div>
      </div>
    </header>
  )
}

