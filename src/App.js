import React from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import ContactPage from './Components/Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
      <Nav />
      <main className='container'>
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={ContactPage} />
      </main>
      <Footer />
    </HashRouter>
    
  );
}

export default App;
