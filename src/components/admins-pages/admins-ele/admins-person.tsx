import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDownIcon } from "lucide-react"

function AdminsPerson() {
  return (
    <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/03.png" alt="Image" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">i@example.com</p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Editar{" "}
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="end">
                  <Command>
                    <CommandInput placeholder="Pesquisar..." />
                    <CommandList>
                      <CommandEmpty>Nada encontrado.</CommandEmpty>
                      <CommandGroup className="p-1.5">
                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                          <p>Visualizador</p>
                          <p className="text-sm text-muted-foreground">
                            Pode ver e comentar.
                          </p>
                        </CommandItem>
                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                          <p>Desenvolvedor</p>
                          <p className="text-sm text-muted-foreground">
                          Pode ver, comentar e editar.
                          </p>
                        </CommandItem>
                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                          <p>Gerente</p>
                          <p className="text-sm text-muted-foreground">
                            Pode ver, comentar e editar.
                          </p>
                        </CommandItem>
                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                          <p>Owner</p>
                          <p className="text-sm text-muted-foreground">
                            Acesso a todas a funções
                          </p>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
  )
}

export default AdminsPerson