import { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CourseTab } from "./course";
import SearchInput from "@/components/ui/search-input/SearchInput";

// import styles from "./MyCoursesView.module.scss";

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
    <div className="my-courses">
      <div className="my-courses-header">
        <div className="my-courses__left-block">
          <div className="title">My courses</div>
          <SearchInput value={searchValue} onChange={onChange} />
        </div>
      </div>
      <div className="my-courses-content">
        <Box sx={{ width: "100%", typography: "body1" }}>
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
            <TabPanel value={CourseTab.Ongoing}>Item One</TabPanel>
            <TabPanel value={CourseTab.Completed}>Item Two</TabPanel>
            <TabPanel value={CourseTab.Favorite}>Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default MyCoursesView;
