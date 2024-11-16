"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { OrbitingCirclesDemo } from "./OrbitingCircle";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Business & Management Skills:</b> Business Strategy, Project Management, Leadership, Organizational Behavior, Operations Management, Business Development, Decision-Making</li>
  <li><b>Finance & Accounting:</b> Financial Analysis, Budgeting, Cost Management, Investment Analysis, Financial Reporting, Accounting Principles, Financial Modeling</li>
  <li><b>Marketing & Sales:</b> Marketing Strategy, Market Research, Digital Marketing, Sales Techniques, Customer Relationship Management (CRM), Brand Management, Consumer Behavior</li>
  <li><b>Economics & Data Analysis:</b> Economic Analysis, Microeconomics, Macroeconomics, Data Analysis, Quantitative Methods, Business Analytics, Statistical Analysis</li>
  <li><b>Technology:</b> Microsoft Office Suite (Excel, Word, PowerPoint), Google Workspace, Financial Software (e.g., QuickBooks, SAP), CRM Tools, Basic SQL, Data Visualization (e.g., Tableau, Power BI)</li>
  <li><b>Additional Skills:</b> Critical Thinking, Problem-solving, Communication Skills, Teamwork, Adaptability, Time Management, Public Speaking, Networking Skills</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p>
            <b>Delhi Skill And Entrepreneurhip University</b>
          </p>
          <p>
            <i>BBA in retail Management</i>
          </p>
          <i>Dec 2022 - July 2025(Expected)</i>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Green Bhumi-</b> Completed internship at Green Bhumi for a period of 3 Months as <b className="font-semibold">HR Intern</b></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image alt="" src="/images/about-image.png" width={500} height={500} /> */}
        <OrbitingCirclesDemo />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello! I'm Mohd Zaid a driven and ambitious individual pursuing my degree in BBA Retail Management. With a passion for the retail industry and a thirst for knowledge, I'm dedicated to making a meaningful impact.

          Currently, I'm honing my skills in retail management, exploring innovative strategies to enhance customer experiences and drive business growth. My academic journey has provided a solid foundation in business principles, marketing, and operations.
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
          </div>
          <div className="mt-8">
            {TAB_DATA.find(t => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;