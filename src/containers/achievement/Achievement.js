import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { Fade } from "react-reveal";

export const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}15`;


export default function Achievement({ eachSection, sectionId }) {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id={sectionId} style={{ backgroundColor: getRandomColor() }} >
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">{eachSection.title}</h1>
            <p className="subTitle achievement-subtitle">{eachSection.subtitle}</p>
          </div>
          <div className="achievement-cards-div">
            {eachSection.cards.map(card => {
              return (
                <AchivementCard
                  key={card.footerLink}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
