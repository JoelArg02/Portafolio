import React from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import HomePagdData from "../data/HomePagdData.json";

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      {/* <Testimonial data={testimonial} /> */}
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
