// App.jsx
import Header from "./components/Header";
import HeaderSP from "./components/HeaderSP";

import HeroPC from "./components/HeroPC";
import HeroSP from "./components/HeroSP";

import Missions from "./components/Mission";
import MissionSP from "./components/MissionSP";

import ShadowCollection from "./components/ShadowCollection";
import ShadowCrossoverSP from "./components/ShadowCrossoverSP";

import BetweenSection from "./components/BetweenSection";
import BetweenSectionSP from "./components/BetweenSectionSP";

import Features from "./components/Features";
import FeaturesSP from "./components/FeaturesSP";

import Reviews from "./components/Reviews";
import ReviewsSP from "./components/ReviewsSP";

import HorizontalCollection from "./components/HorizontalCollection";
import HorizontalCollectionSP from "./components/HorizontalCollectionSP";

import SizeGuide from "./components/SizeGuide";
import SizeGuideSP from "./components/SizeGuideSP";

import FinalCTA from "./components/FinalCTA";
import FinalCTASP from "./components/FinalCTASP";

import Footer from "./components/Footer";
import FooterSP from "./components/FooterSP";

export default function App() {
  return (
    <main className="bg-neutral-950 text-white">

      {/* Header */}
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="block lg:hidden">
        <HeaderSP />
      </div>

      {/* ---------------- PC ---------------- */}
      <div className="hidden lg:block">

        <section id="hero">
          <HeroPC />
        </section>

        <section id="mission">
          <Missions />
        </section>

        <section id="collection">
          <ShadowCollection />
        </section>

        <section id="between">
          <BetweenSection />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="horizontal">
          <HorizontalCollection />
        </section>

        <section id="size">
          <SizeGuide />
        </section>

        <section id="cta">
          <FinalCTA />
        </section>

        <Footer />
      </div>

      {/* ---------------- SP ---------------- */}
      <div className="block lg:hidden">

        <section id="hero-sp">
          <HeroSP />
        </section>

        <section id="mission-sp">
          <MissionSP />
        </section>

        <section id="collection-sp">
          <ShadowCrossoverSP />
        </section>

        <section id="between-sp">
          <BetweenSectionSP />
        </section>

        <section id="features-sp">
          <FeaturesSP />
        </section>

        <section id="reviews-sp">
          <ReviewsSP />
        </section>

        <section id="horizontal-sp">
          <HorizontalCollectionSP />
        </section>

        <section id="size-sp">
          <SizeGuideSP />
        </section>

        <section id="cta-sp">
          <FinalCTASP />
        </section>

        <FooterSP />
      </div>

    </main>
  );
}
