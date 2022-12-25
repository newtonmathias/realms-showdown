"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|About RSD" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to{" "}
        <span className="font-extrabold text-white">Realms Showdown</span>, a
        thrilling fantasy game where players can conquer and rule rival realms.
        In this game, you will enter a world filled with magic and adventure,
        where you can create your own character and embark on quests to defeat
        powerful enemies and expand your realm. As you progress through the
        game, you will have the opportunity to build and customize your own
        kingdom, recruit and train powerful heroes, and form alliances with
        other players. You will also have the chance to engage in epic battles
        against rival realms, vying for control over valuable resources and
        territory.. Let's So why wait?
        <span className="font-extrabold text-white">
          Join Realms Showdown
        </span>{" "}
        today and start your journey to become the ultimate ruler of the realms!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
