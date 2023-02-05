import React from 'react';
import Hero from '../components/Page_Contacts/Hero/Hero';
import PhotoGallery from './../components/Page_Home/PhotoGallery/PhotoGallery';
import Testimony from './../components/Page_Home/Testimony/Testimony';
import Chefs from './../components/Page_Home/Chefs/Chefs';
import History from './../components/Page_About/History/History';

export default function About () {
  return (
    <article>
      <Hero title="Welcome to Gerícht" page="About Us" />
      <History />
      <Chefs />
      <Testimony />
      <PhotoGallery />
    </article>
  );
}
