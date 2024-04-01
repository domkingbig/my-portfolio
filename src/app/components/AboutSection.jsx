"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>Redux</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>HoChiMinh University of Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IELTS 6.0</li>
        <li>TOEIC 830</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <li className='font-bold italic'>
            {`Omnichannel Base Team (DXC Technology Vietnam) : API Dev Lead`}
          </li>
          <ol >

          <li>
            {`+ Team size: 10 - 15 ( 4 - 6 BE Devs)`}
          </li>
          <li>
            {`+ Develop web applications using Java, AWS, Angular, MongoDB, VPMS, HTML, etc. and Amazon Alexa `}
          </li>
          <li>
            {`+ Handling Guaranteed Cashback Saver (GCS), Regular Unit Link (RUL), Traditional Whole Life (TWL) products`}
          </li>
          </ol>
          </li>
          <br></br>
        <li>
          <li className='font-bold italic'>
            {`DooTech:  IT Technician`}
          </li>
          <ol >
          <li>
            {`+ Maintain website and MT4 system for VietNam market, manage API and UI code..`}
          </li>
          
          </ol>
          </li>
          <br></br>
          <li>
          <li className='font-bold italic'>
            {`Razer Synapse 4 (S3 Corporation): Senior Frontend Developer`}
          </li>
          <ol >

          <li>
            {`+ Addressing all mouse-related and installation issues.`}
          </li>
          <li>
            {`+ Resolve UI issues, integrate a new UI design, manage business logic code, and introduce additional features.`}
          </li>
          <li>
            {`+ Engaging directly with clients to execute their strategic objectives, incorporating feedback to enhance project quality.`}
          </li>
          </ol>
          </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={550} height={550} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. My expertise spans a wide array of technologies, including JavaScript, React, Redux, Node.js, MongoDB, Java, HTML, CSS, and Git. Known for my rapid learning abilities, I am constantly driven to broaden my knowledge and skill set. As a collaborative team player, I thrive on the excitement of working alongside others to create exceptional applications that leave a lasting impact. Let's build something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;