import { MainNav } from "./main-nav";
import { Search } from "./search";
import TeamSwitcher from "./team-switcher";
import { UserNav } from "./user-nav";

function Header() {
  return (
    <div className="border-b mb-4 pb-4">
          <div className="flex h-16 items-center">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
  )
}

export default Header