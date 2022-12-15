import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { DiscoverItem } from "./DiscoverItem";
import "../styles/_discover-block.scss";
import { Category, FeaturedPlaylists } from "../../../../../models";

type Id = "released" | "featured" | "browse";
type ImagesKey = "images" | "icons";

const scrollContainer = (
  id: Id,
  { isNegative }: { isNegative: boolean } = { isNegative: false }
) => {
  return () => {
    const scrollableContainer: HTMLElement | null = document.getElementById(id);
    const amount = isNegative
      ? (scrollableContainer?.offsetWidth || 0) * -1
      : scrollableContainer?.offsetWidth || 0;

    scrollableContainer &&
      (scrollableContainer.scrollLeft =
        scrollableContainer.scrollLeft + amount);
  };
};

interface IDiscoverBlockProps {
  text: string;
  id: Id;
  data: FeaturedPlaylists[] | Category[];
  imagesKey?: ImagesKey;
}

export const DiscoverBlock: FC<IDiscoverBlockProps> = ({
  data,
  id,
  imagesKey = "images",
  text,
}) => {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className="discover-block__row" id={id}>
        {data.map(({ [imagesKey]: images, name }: any) => (
          <DiscoverItem key={name} images={images} name={name} />
        ))}
      </div>
    </div>
  );
};
