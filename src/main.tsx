import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
const container = document.getElementById('root');
const root = createRoot(container!);
defineCustomElements(window);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);