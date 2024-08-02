import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home-pages/home';
import ClientsPage from './components/clients-pages/clients';

export default function page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clientes" element={<ClientsPage/>}/>
        <Route path="*" element={<h1 className='text-3xl'>Pagina nao encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}
