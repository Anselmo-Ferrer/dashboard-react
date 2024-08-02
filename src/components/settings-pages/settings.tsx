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
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings."
            x-chunk-container="chunk-container after:right-0"
          >
            <a href="#" className="font-semibold text-primary">
              General
            </a>
            <a href="#">Security</a>
            <a href="#">Integrations</a>
            <a href="#">Support</a>
            <a href="#">Organizations</a>
            <a href="#">Advanced</a>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="A form to update the store name." className="rounded-xl">
              <CardHeader>
                <CardTitle>Store Name</CardTitle>
                <CardDescription>
                  Used to identify your store in the marketplace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Store Name" className="rounded-xl"/>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button className="rounded-xl">Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory." className="rounded-xl">
              <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription>
                  The directory within your project, in which your plugins are
                  located.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    placeholder="Project Name"
                    defaultValue="/content/plugins"
                    className="rounded-xl"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button className="rounded-xl">Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

    </PageContainer>
  )
}

export default SettingsPage