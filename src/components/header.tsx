import { MainNav } from "./overview-pages/overview-ele/main-nav";
import { Search } from "./overview-pages/overview-ele/search";
import TeamSwitcher from "./overview-pages/overview-ele/team-switcher";
import { UserNav } from "./overview-pages/overview-ele/user-nav";

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