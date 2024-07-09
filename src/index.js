import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from 'react-query'; 
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
    </QueryClientProvider> 
    </React.StrictMode>
    </RecoilRoot>
); 

reportWebVitals();
