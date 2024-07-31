import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/layout/page-container';
import DashboardPage from './components/overview-pages/dashboard';
import AnalyticsPage from './components/overview-pages/analytics';
import { CalendarDateRangePicker } from './components/overview-pages/overview-ele/date-range-picker';
import Header from './components/header';

export default function page() {
  return (
    <PageContainer scrollable={true}>

      <Header/>

      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Dashboard 
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button className='rounded-xl'>Import</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="rounded-xl">
            <TabsTrigger value="overview" className="rounded-xl">Overview</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl">Analytics</TabsTrigger>
          </TabsList>
            <DashboardPage />
            <AnalyticsPage />

        </Tabs>
      </div>
    </PageContainer>
  );
}