import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function Story() {
  return (
    <section id="story" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="text-center mb-20">
            <BookOpenIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              My Story
            </h1>
          </div>
          <p className="mb-8 leading-relaxed">
            I am a Seattle native, a determined software engineer, an avid urban farmer, and a prolific indoor horticulturalist (a stay-at-home plant dad, with a grand total of 99 potted children). I have a deep love for technology, music, delicious food, the outdoors, and all things SciFi and fantasy. I grew up in a technology-driven household, with both parents working in the industry. My first foray into programming was in creating macros to make my WOW raiding more manageable, and concise.
          </p>
          <p>
            My background as a Chef in the fine dining industry has given me a unique perspective and novel comprehension of big picture ideas, and small-scale problems. My customer-first mentality has led to a thoughtful and respectful sense of urgency. That, aligned with my understanding that the team’s success relies on the success of the individual, has given me the ability to balance expectations.
          </p>
          <br />
          <p>
            I want to learn, push my own abilities and skills, and be judged on the merit of my work through tangible results. I want to join your team!
          </p>
        </div>
      </div>
    </section>
  );
}