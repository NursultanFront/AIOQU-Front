import { useCallback, useEffect, useState } from "react";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { CardCourse } from "@/components/ui/card-course/CardCourse";
import "../index.scss";
import { api } from "@/api";
import { CourseList } from "@/api/course-rest/types";

// import styles from "./CoursesView.module.scss";

const CoursesView = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [courseList, setCourseList] = useState<CourseList>([]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    api.courses.courses().then((response) => {
      setCourseList(response);
    });
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
      <div style={{ padding: "24px" }} className="universal-content">
        <div className="universal-content__list">
          {courseList.map((course) => (
            <CardCourse
              title={course.title}
              img=""
              viewPage="Courses"
              isFavorite={course.is_favorite}
              descr={course.description}
            />
          ))}
          {/* <CardCourse title="lolka" img="" viewPage="Courses" isFavorite />
          <CardCourse title="lolka" img="" viewPage="Courses" isFavorite /> */}
        </div>
      </div>
    </div>
  );
};

export default CoursesView;
