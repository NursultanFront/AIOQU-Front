import { useCallback, useState } from "react";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import "../index.scss";

// import styles from "./CoursesView.module.scss";

const CoursesView = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div className="title">Courses</div>
          <SearchInput value={searchValue} onChange={onChange} />
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div className="universal-content"></div>
    </div>
  );
};

export default CoursesView;
