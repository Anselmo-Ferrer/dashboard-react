import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Command } from "lucide-react"
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import PageContainer from "../layout/page-container"
import { Tabs } from "../ui/tabs"
import Header from "../header/header"
import AdminsPerson from "./admins-ele/admins-person"

function AdministrationPage() {
  return (
    <PageContainer>

      <Header/>

      <Tabs>
          <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Funcionarios</CardTitle>
            <CardDescription>
              Invite your team members to collaborate.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
            <AdminsPerson />
          </CardContent>
        </Card>
      </Tabs>
    </PageContainer>
  )
}

export default AdministrationPage