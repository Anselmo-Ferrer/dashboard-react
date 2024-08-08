import Header from "../header/header";
import PageContainer from "../layout/page-container";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

function SettingsPage() {
  return (
    <PageContainer>
      <Header />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Ajustes</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings."
            x-chunk-container="chunk-container after:right-0"
          >
            <a href="#" className="font-semibold text-primary">
              Geral
            </a>
            <a href="#">Segurança</a>
            <a href="#">Integrações</a>
            <a href="#">Suporte</a>
            <a href="#">Avançado</a>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="A form to update the store name." className="rounded-xl">
              <CardHeader>
                <CardTitle>Nome da empresa</CardTitle>
                <CardDescription>
                  Digite o nome da sua empresa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Nome da empresa" className="rounded-xl"/>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button className="rounded-xl">Salvar</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory." className="rounded-xl">
              <CardHeader>
                <CardTitle>Projetos </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    placeholder="Nome do projeto"
                    defaultValue=""
                    className="rounded-xl"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Permitir todos modificarem o projeto?
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button className="rounded-xl">Salvar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

    </PageContainer>
  )
}

export default SettingsPage