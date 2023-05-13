import Home from '../components/home/home.jsx';
import About from '../components/about/about.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import React from 'react';
import Footer from '../components/footer/footer.jsx';
import Contact from '../components/contact/contact.jsx';
import NavigationMenu from '../components/menu/menu.jsx';

export default function App() {
  return (
    <>
      <NavigationMenu></NavigationMenu>
      <Home></Home>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
