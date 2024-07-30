import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/layout/page-container';
import OverviewPage from './components/pages/overview';
import AnalyticsPage from './components/pages/analytics';
import SellersPage from './components/pages/sellers';
import ClientsPage from './components/pages/clients';
import AdministrationPage from './components/pages/administration';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            SrPetisco 
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Account</Button>
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