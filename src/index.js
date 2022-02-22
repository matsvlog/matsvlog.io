/** @format */

import React from 'react';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import '@fontsource/noto-sans/700.css';
import '@fontsource/zilla-slab';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import App from './App';
import Home from './routes/home';
import Live from './routes/live';
import Companies from './routes/companies';
import Metaverse from './routes/metaverse';
import Videos from './routes/videos';
import Tools from './routes/tools';
import About from './routes/about';
import Books from './routes/books';
import Startups from './routes/startups';

const theme = extendTheme({
  fonts: {
    heading: 'Raleway',
    Heading: 'Raleway',
    body: 'Raleway',
  },
  config: {
    initialColorMode: 'dark',
  },
});

const rootElement = document.getElementById('root');
/*


*/
render(
  <ChakraProvider theme={theme}>
    <HashRouter basename={''}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="live" element={<Live />} />
          <Route path="companies" element={<Companies />} />
          <Route path="startups" element={<Startups />} />
          <Route path="metaverse" element={<Metaverse />} />
          <Route path="videos" element={<Videos />} />
          <Route path="tools" element={<Tools />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </HashRouter>
  </ChakraProvider>,
  rootElement
);
