import React from "react";
import {
  // AboutSection,
  // ArticlesSection,
  // ContactSection, HeroSection,
  // InterestsSection,
  // Page,
  ProjectsSection,
  // Seo,
} from "gatsby-theme-portfolio-minimal";
import {ArticlesSection} from "../sections/Articles";
import {AboutSection} from "../sections/About";
import {Page} from "../components/Page";
import {HeroSection} from "../sections/Hero";
import {InterestsSection} from "../sections/Interests";
import {ContactSection} from "../sections/Contact";
import {Seo} from "../components/Seo";

export default function IndexPage() {
  return (
    <>
      <Seo title="Drago Vrban" />
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="projects" heading="Projects" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="skills" heading="Technologies and skills" />
        {/*<ProjectsSection sectionId="features" heading="Built-in Features" />*/}
        <ContactSection sectionId="contact" heading="Contact Section" />
      </Page>
    </>
  );
}
