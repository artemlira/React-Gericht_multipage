import React, { useContext } from 'react';
import { GerichtContext } from './../components/Context';
import Hero from './../components/Page_Contacts/Hero/Hero';

export default function BlogDetail () {
  const { openBlogDetail } = useContext(GerichtContext);
  return (
    <article>
      <Hero title="Our Blogs" page="Our Blogs- grid" page2="Cooking Tips" page3={openBlogDetail?.title} />
    </article>
  );
}
