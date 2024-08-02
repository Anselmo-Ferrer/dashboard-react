import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <a
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Inicio
      </a>
      <a
        href="/clientes"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Clientes
      </a>
      <a
        href="/vendas"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Vendas
      </a>
      <a
        href="/gerenciamento"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Gerenciamento
      </a>
      <a
        href="/ajustes"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Ajustes
      </a>
    </nav>
  )
}