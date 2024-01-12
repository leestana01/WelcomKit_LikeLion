import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import router from "./router"
import { RouterProvider } from 'react-router-dom';
import Globalfonts from './Globalfonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Reset/>
<Globalfonts/>
<RouterProvider router={router}/>
</>);