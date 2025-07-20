import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/HomePage/about-us-section";
import BlogPosts from "@/components/HomePage/blog-posts";
import CallToAction from "@/components/HomePage/call-to-action";
import Faculties from "@/components/HomePage/faculties";
import Features from "@/components/HomePage/features-section";
import Projects from "@/components/HomePage/projects";
import VideoPost from "@/components/HomePage/video-post";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fisheries Commission</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons */}
        <link href="/assets/img/favicon.png" rel="icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="index-page">
        <div className="main">
          {/* Hero Section */}
          <section id="hero" className="hero section dark-background">
            {/* Add Hero Section Content */}
            <HeroSection />
          </section>
          <AboutUs />
          {/* Add other sections like About, Features, Services, Portfolio, etc. */}
          <Faculties /> <BlogPosts />
          <CallToAction />
          <Projects />
          <VideoPost />
        </div>

        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </main>
    </>
  );
}
