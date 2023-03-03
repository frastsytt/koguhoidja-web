import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppShell, MantineProvider, Text } from '@mantine/core';
import NavbarSearch from './components/Navigation/Navigation';
import BookCarousel from './components/BookCarousel/BookCarousel';
import LoopVideo from './components/LoopVideo/LoopVideo';
function App() {
  return (
      <AppShell>
        <NavbarSearch></NavbarSearch>
        <BookCarousel></BookCarousel>
        <LoopVideo {src:"output.mp4"}></LoopVideo>
      </AppShell>

  );
}

export default App;
