import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

import { bigProjectSection, toolsSection, achievementSection } from "../portfolio";


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Projects />
        <Achievement eachSection={bigProjectSection} sectionId="project"/>
        <Achievement eachSection={toolsSection}  sectionId="tools"/>
        <Achievement eachSection={achievementSection}  sectionId="achievements"/>
        <Blogs />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
