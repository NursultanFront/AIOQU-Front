import React from "react";
import "./MentorBox.scss";
import MentorCard from "../mentor-card/MentorCard";
import { Mentor } from "@/api/mentor-rest/types";

type Props = {
  mentor: Mentor;
};

export const MentorBox = ({ mentor }: Props) => {
  return (
    <div className="mentor-box">
      <h3>MentorCard</h3>
      <MentorCard mentor={mentor} />
    </div>
  );
};
