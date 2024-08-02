import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home-pages/home';
import ClientsPage from './components/clients-pages/clients';
import SellersPage from './components/sellers-page/sellers';
import NotFoundPage from './components/not-found-page/notfound-page';
import SettingsPage from './components/settings-pages/settings';
import AdministrationPage from './components/admins-pages/administration';

export default function page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clientes" element={<ClientsPage/>}/>
        <Route path="/vendas" element={<SellersPage/>}/>
        <Route path="/gerenciamento" element={<AdministrationPage/>}/>
        <Route path="/ajustes" element={<SettingsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
