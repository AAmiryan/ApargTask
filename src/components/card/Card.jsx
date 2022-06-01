import { BookOutlined, DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./Card.scss";

const CityCard = ({ item }) => {
  const [isOpen, seIsOpen] = useState(false);

  const handleClick = () => {
    seIsOpen(!isOpen);
  };
  return (
    <div className="cardWrapper" onClick={handleClick}>
      <div className="cardmain">
        <div className="cardImg">
          <img
            src={item.imageUrls}
            alt={item.author_screen_name}
            width="70px"
          />
        </div>
        <div className="textWrap">
          <div className="cardTitle">{item.title}</div>
          {isOpen && <div> {item.description} </div>}
        </div>
        <div className="cardScore">{`${item.score}%`} </div>
      </div>
      <div>
        {isOpen && (
          <div className="outlineds">
            <LikeOutlined style={{ fontSize: 20, marginRight: 10 }} />
            <div>Like</div>
            <DislikeOutlined style={{ fontSize: 20, marginRight: 10 }} />
            <div>Dislike</div>
            <BookOutlined style={{ fontSize: 20, marginRight: 10 }} />
            <div>Bookmark</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityCard;
