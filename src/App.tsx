import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RoutePath } from "./router/routes";
import LayoutMain from "./layout/LayoutMain";
import OverviewView from "./pages/OverviewView/OverviewView";
import MyCoursesView from "./pages/MyCoursesView/MyCoursesView";
import CoursesView from "./pages/CoursesView/CoursesView";
import MentorsView from "./pages/MentorsView/MentorsView";
import SettingsView from "./pages/SettingsView/SettingsView";

import "./App.css";
import CoursePage from "./pages/CoursePage/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME} element={<LayoutMain />}>
          <Route index element={<>Главная</>} />
          <Route path={RoutePath.Overview} element={<OverviewView />} />
          <Route path={RoutePath.MyCourses} element={<MyCoursesView />} />
          <Route
            path={`${RoutePath.MyCourses}${RoutePath.InsideCourse}`}
            element={<CoursePage />}
          />
          <Route path={RoutePath.Courses} element={<CoursesView />} />
          <Route
            path={`${RoutePath.Courses}${RoutePath.InsideCourse}`}
            element={<CoursePage />}
          />
          <Route path={RoutePath.Mentors} element={<MentorsView />} />
          <Route
            path={`${RoutePath.Mentors}${RoutePath.InsideCourse}`}
            element={<CoursePage />}
          />
          <Route path={RoutePath.Settings} element={<SettingsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
