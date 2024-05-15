import React from "react";
import "./MentorBox.scss";
import MentorCard from "../mentor-card/MentorCard";

type Props = {};

export const MentorBox = (props: Props) => {
  return (
    <div className="mentor-box">
      <h3>MentorCard</h3>
      <MentorCard />
    </div>
  );
};
