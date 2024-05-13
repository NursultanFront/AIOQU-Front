import { useCallback, useState } from "react";

import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CourseTab } from "./course";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { CardCourse } from "@/components/ui/card-course/CardCourse";

// import styles from "./MyCoursesView.module.scss";
import "../index.scss";

const MyCoursesView = () => {
  const [value, setValue] = useState<CourseTab>(CourseTab.Ongoing);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: React.SyntheticEvent, newValue: CourseTab) => {
    setValue(newValue);
  };

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div className="title">My courses</div>
          <SearchInput value={searchValue} onChange={onChange} />
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div style={{ flexGrow: 1, overflow: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label={CourseTab.Ongoing} value={CourseTab.Ongoing} />
                <Tab label={CourseTab.Completed} value={CourseTab.Completed} />
                <Tab label={CourseTab.Favorite} value={CourseTab.Favorite} />
              </TabList>
            </Box>
            <div className="universal-content" style={{ flexGrow: 1 }}>
              <TabPanel value={CourseTab.Ongoing}>
                <div className="universal-content__list">
                  <CardCourse
                    title="lolka"
                    img=""
                    viewPage="My courses"
                    isFavorite
                  />
                </div>
              </TabPanel>
              <TabPanel value={CourseTab.Completed}>
                <div className="universal-content__list">
                  <CardCourse
                    title="lolka"
                    img=""
                    viewPage="Complete"
                    isFavorite
                  />
                </div>
              </TabPanel>
              <TabPanel value={CourseTab.Favorite}>
                <div className="universal-content__list">
                  <CardCourse
                    title="lolka"
                    img=""
                    viewPage="Favorite"
                    isFavorite
                  />
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default MyCoursesView;
