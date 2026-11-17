"use client";

import Image from "next/image";
import { motion, MotionConfig, useScroll, useSpring } from "motion/react";
import type { CSSProperties } from "react";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import { endingImage, heroImage, letterMoments } from "./birthday-data";

const petalStyles = [
  { left: "8%", delay: "-8s", duration: "17s", drift: "68px" },
  { left: "21%", delay: "-2s", duration: "15s", drift: "-46px" },
  { left: "39%", delay: "-12s", duration: "19s", drift: "92px" },
  { left: "57%", delay: "-5s", duration: "16s", drift: "-72px" },
  { left: "73%", delay: "-10s", duration: "18s", drift: "56px" },
  { left: "88%", delay: "-4s", duration: "20s", drift: "-90px" },
  { left: "31%", delay: "-14s", duration: "22s", drift: "44px" },
  { left: "66%", delay: "-1s", duration: "21s", drift: "-64px" },
];

const endingStars = [
  { left: "13%", top: "21%", delay: "-0.4s" },
  { left: "22%", top: "70%", delay: "-2s" },
  { left: "81%", top: "25%", delay: "-1.2s" },
  { left: "89%", top: "62%", delay: "-2.7s" },
  { left: "72%", top: "79%", delay: "-0.8s" },
  { left: "7%", top: "47%", delay: "-1.8s" },
];

function FloatingPetals() {
  return (
    <div className="petal-field" aria-hidden="true">
      {petalStyles.map((petal, index) => (
        <span
          className="petal"
          key={index}
          style={
            {
              left: petal.left,
              "--petal-delay": petal.delay,
              "--petal-duration": petal.duration,
              "--petal-drift-x": petal.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function BirthdayHero() {
  return (
    <section className="hero" aria-labelledby="birthday-title">
      <div className="hero-photo">
        <Image src={heroImage} alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero-shade" />
      <div className="hero-glow" />
      <FloatingPetals />

      <div className="hero-content">
        <p className="hero-kicker">A little love letter, just for you</p>
        <h1 className="hero-title" id="birthday-title">
          <span>Happy Birthday,</span>
          <span className="hero-title-second">My Fiancée <span aria-hidden="true">♥</span></span>
        </h1>
        <p className="hero-copy">
          Every love story has a beautiful beginning, and I am grateful that ours is mine to cherish.
        </p>
      </div>

      <a className="hero-scroll" href="#letter" aria-label="Scroll to the love letter">
        <span>Read my letter</span>
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 3.5v12m0 0 4.5-4.5M10 15.5l-4.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}

function LetterIntro() {
  return (
    <section className="letter-intro" id="letter" aria-labelledby="letter-title">
      <div className="intro-content">
        <p className="intro-caption">From my heart to yours</p>
        <h2 className="intro-title" id="letter-title" lang="ar" dir="rtl">
          إلى من تسكن قلبي
        </h2>
        <span className="intro-flourish" aria-hidden="true" />
      </div>
    </section>
  );
}

function LetterCard({ moment }: { moment: (typeof letterMoments)[number] }) {
  return (
    <ScrollStackItem itemClassName={`love-card love-card--${moment.layout}`}>
      <article className="love-card-content" lang="ar" dir="rtl">
        <div className="love-card-media">
          <Image src={moment.image} alt={moment.imageAlt} fill sizes="(max-width: 760px) 100vw, 52vw" />
        </div>
        <div className="love-card-copy">
          <span className="story-rule" aria-hidden="true" />
          <p className="story-paragraph">{moment.text}</p>
        </div>
      </article>
    </ScrollStackItem>
  );
}

function LoveLetterStack() {
  return (
    <section className="letter-story" aria-label="The love letter">
      <ScrollStack
        className="love-stack"
        useWindowScroll
        itemDistance={190}
        itemStackDistance={20}
        stackPosition="8%"
        itemScale={0.035}
        baseScale={0.9}
        dimAmount={0.2}
        blurAmount={0.65}
        tiltAmount={1.2}
        rotationAmount={0.3}
        holdDistance={180}
        smoothScroll
      >
        {letterMoments.map((moment) => (
          <LetterCard moment={moment} key={moment.id} />
        ))}
      </ScrollStack>
    </section>
  );
}

function BirthdayEnding() {
  return (
    <section className="ending" aria-labelledby="ending-title">
      <div className="ending-photo">
        <Image src={endingImage} alt="" fill sizes="100vw" />
      </div>
      <div className="ending-shade" />
      <div className="ending-stars" aria-hidden="true">
        {endingStars.map((star, index) => (
          <span
            className="ending-star"
            key={index}
            style={{ left: star.left, top: star.top, animationDelay: star.delay }}
          />
        ))}
      </div>

      <div className="ending-content">
        <p className="ending-kicker">With all the love in my heart</p>
        <h2 className="ending-title" id="ending-title">
          To My Forever Love <span className="ending-heart" aria-hidden="true">♥</span>
        </h2>
        <p className="ending-copy">Some stories are written in words. Ours is written in my heart.</p>
        <span className="ending-flourish" aria-hidden="true" />
        <p className="ending-signoff">Happy birthday, my love.</p>
      </div>
    </section>
  );
}

export default function BirthdayExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <main className="page-shell">
        <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
        <BirthdayHero />
        <LetterIntro />
        <LoveLetterStack />
        <BirthdayEnding />
      </main>
    </MotionConfig>
  );
}
