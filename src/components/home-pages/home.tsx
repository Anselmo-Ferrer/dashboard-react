import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import PageContainer from '../layout/page-container';
import Header from '../header/header';
import { CalendarDateRangePicker } from './overview-ele/date-range-picker';
import DashboardPage from './dashboard';
import AnalyticsPage from './analytics';

export default function Home() {
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
            <Button className='rounded-xl'>Importar</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="rounded-xl">
            <TabsTrigger value="overview" className="rounded-xl">Geral</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl">Análise</TabsTrigger>
          </TabsList>
            <DashboardPage />
            <AnalyticsPage />

        </Tabs>
      </div>
    </PageContainer>
  );
}