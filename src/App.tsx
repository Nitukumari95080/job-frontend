import React from 'react';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './App.css';
import { Divider } from "@mantine/core";
import HomePage from './Pages/HomePage';
import FindeJobs from './Pages/FindJobs';
import Footer from './Components/Footer/Footer';
import FindTalents from './Pages/FindTalents';
import Header from './Components/Header/Header';
import TalentProfile from './Pages/TalentProfile';

const theme: MantineThemeOverride = {
  colors: {
    'mine-shaft': [
      '#f6f6f6',
      '#e7e7e7',
      '#d1d1d1',
      '#b0b0b0',
      '#888888',
      '#6d6d6d',
      '#5d5d5d',
      '#4f4f4f',
      '#454545',
      '#3d3d3d',
      
    ] as const,
    cinnamon: [
      '#feffe4',
      '#fcffb8',
      '#f9ff75',
      '#ffff27',
      '#ffef00',
      '#ffd300',
      '#eda000',
      '#bc6f00',
      '#9a5500',
      '#793f01',
    ] as const,
  },

  fontFamily:`poppinns,sens-serif`,
  primaryColor: 'cinnamon',
};

function App() {
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      
      
      <BrowserRouter>
      <Header/>
      <Divider size="sm" mx="md"/>
        <Routes>
          {/* Correct syntax for Route's element prop */}
          <Route path='/find-jobs' element={<FindeJobs/>}/>
          <Route path='/find-Talent' element={< FindTalents/>}/>
          <Route path='/talent-profile' element={<TalentProfile/>}/>
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
