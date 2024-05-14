// import styles from "./Overview.module.scss";
import { useState } from "react";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { Chart } from "react-google-charts";
import DatePicker from "react-datepicker";

import "./Overview.scss";
// import "react-datepicker/dist/react-datepicker.css";

export const data = [
  ["Discipline", "Percentage"],
  ["STEM", 85],
  ["UX/UI Design", 90],
  ["Probability", 75],
  ["Physics", 80],
  ["English", 95],
  ["Programming", 88],
];

export const options = {
  chart: {
    title: "Student Performance",
    subtitle: "Percentage of Completion by Discipline",
  },
  hAxis: {
    title: "Percentage",
    minValue: 0,
    maxValue: 100,
  },
  vAxis: {
    title: "Discipline",
  },
  bar: { groupWidth: "100px" },
};

const OverviewView = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const changeDate = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <div className="overview">
      <div className="universal-layout overview__left-block">
        <div className="unversal-header">
          <div className="unversal-header__left-block">
            <div className="title">My courses</div>
            <div className="subtitle">Let’s continue learning!</div>
          </div>
          <div className="unversal-header__right-block">
            <ProfileBar />
          </div>
        </div>
        <div className="overview__content">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
      <div className="overview__right-block">
        <DatePicker selected={startDate} onChange={changeDate} inline />
      </div>
    </div>
  );
};

export default OverviewView;
