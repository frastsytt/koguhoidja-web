import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppShell, MantineProvider, Text } from '@mantine/core';
import NavbarSearch from './components/Navigation/Navigation';
import BookCarousel from './components/BookCarousel/BookCarousel';

function App() {
  return (
    <MantineProvider>
      <AppShell>
        <NavbarSearch></NavbarSearch>
        <BookCarousel></BookCarousel>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
