import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/layout/page-container';
import OverviewPage from './components/overview-pages/dashboard';
import AnalyticsPage from './components/overview-pages/analytics';
import SellersPage from './components/overview-pages/sellers';
import ClientsPage from './components/overview-pages/clients';
import AdministrationPage from './components/overview-pages/administration';
import { UserNav } from './components/overview-pages/overview-ele/user-nav';
import { Search } from './components/overview-pages/overview-ele/search';
import { MainNav } from './components/overview-pages/overview-ele/main-nav';
import { CalendarDateRangePicker } from './components/overview-pages/overview-ele/date-range-picker';
import TeamSwitcher from './components/overview-pages/overview-ele/team-switcher';

export default function page() {
  return (
    <PageContainer scrollable={true}>

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

      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Dashboard 
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button className='rounded-lg'>Account</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="sellers">Sellers</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="administration">Administration</TabsTrigger>
          </TabsList>
            <OverviewPage />
            <AnalyticsPage />
            <SellersPage />
            <ClientsPage />
            <AdministrationPage />

        </Tabs>
      </div>
    </PageContainer>
  );
}