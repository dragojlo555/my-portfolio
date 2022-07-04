import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Projects" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Technologies and skills" />
        {/*<ProjectsSection sectionId="features" heading="Built-in Features" />*/}
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
