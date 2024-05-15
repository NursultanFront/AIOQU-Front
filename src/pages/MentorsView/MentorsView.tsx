import { useCallback, useState } from "react";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import "../index.scss";
import MentorCard from "@/components/mentor/mentor-card/MentorCard";

const MentorsView = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div className="title">Mentors</div>
          <SearchInput value={searchValue} onChange={onChange} />
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div style={{ padding: "24px" }} className="universal-content">
        <div className="universal-content__list">
          <MentorCard />
        </div>
      </div>
    </div>
  );
};

export default MentorsView;
