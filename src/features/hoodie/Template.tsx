import { MouseEvent } from "react";
import * as React from "react";
import { useSpringCarousel } from "react-spring-carousel-js";

import Diagonal from "../../assets/Units/Diagonal";
import Rectangle from "../../assets/Units/Rectangle";
import Triangle from "../../assets/Units/Triangle";
import { TColorState } from "../types";

import styles from "./Template.module.scss";

interface IProps {
  className?: string;
  onClick: (e: MouseEvent<SVGGElement>) => void;
  colors?: TColorState;
}

// TODO: Backend
//  - email/telegram/viber message to admin account

// TODO: Client
//  - DONE! Animated Slider
//  - DONE! color options
//  - orders saving

// TODO: Admin
//  - colors in DB
//  - basic authorization
//  - orders list
//  - ??? messages settings

const Template = ({ onClick, colors }: IProps) => {
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      withLoop: true,
      items: [
        {
          id: "diagonal",
          renderItem: (
            <div className={styles.slide}>
              <Diagonal
                colors={colors}
                onClick={onClick}
                className={styles.hoodie}
              />
            </div>
          ),
        },
        {
          id: "rectangle",
          renderItem: (
            <div className={styles.slide}>
              <Rectangle
                colors={colors}
                onClick={onClick}
                className={styles.hoodie}
              />
            </div>
          ),
        },
        {
          id: "triangle",
          renderItem: (
            <div className={styles.slide}>
              <Triangle
                colors={colors}
                onClick={onClick}
                className={styles.hoodie}
              />
            </div>
          ),
        },
      ],
    });

  return (
    <div className={styles.container}>
      <div className={styles.animation}>{carouselFragment}</div>
      <div className={styles.controls}>
        <button key="prev" onClick={slideToNextItem} className={styles.nav}>
          {"<"}
        </button>
        <button key="next" onClick={slideToPrevItem} className={styles.nav}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Template;
