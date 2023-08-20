import Home from '../sections/home/home.jsx';
import About from '../sections/about/about.jsx';
import Gallery from '../sections/gallery/gallery.jsx';
import React from 'react';
import Footer from '../components/footer/footer.jsx';
import Contact from '../sections/contact/contact.jsx';
import NavigationMenu from '../components/menu/menu.jsx';
import TechStack from '../sections/techstack/techstack.jsx';

export default function App() {
  return (
    <>
      <NavigationMenu></NavigationMenu>
      <Home></Home>
      <About></About>
      <TechStack></TechStack>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
