import React from 'react';
import { cn } from "@/lib/utils";

// Definindo as props para o componente MainNav
interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string; // classe opcional do tipo string
}

export function MainNav({
  className,
  ...props
}: MainNavProps) {
  // Definindo o tipo do parâmetro 'url' como 'string'
  const handleNavigation = (url: string) => {
    window.location.href = url; // Muda o URL do navegador
  };

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <button
        onClick={() => handleNavigation("/examples/dashboard")}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Início
      </button>
      <button
        onClick={() => handleNavigation("https://www.google.com")}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Clientes
      </button>
      <button
        onClick={() => handleNavigation("/sellers-page/sellers")}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Vendas
      </button>
      <button
        onClick={() => handleNavigation("/examples/dashboard")}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Gerenciamento
      </button>
      <button
        onClick={() => handleNavigation("/examples/dashboard")}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Ajustes
      </button>
    </nav>
  );
}
