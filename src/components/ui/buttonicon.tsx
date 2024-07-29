import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" className="w-8 h-8 bg-neutral-800 border-none">
      <Settings className="h-4 w-4 text-white"/>
    </Button>
  )
}
