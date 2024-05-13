import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RoutePath } from "./router/routes";
import LayoutMain from "./layout/LayoutMain";
import OverviewView from "./components/HomePage/OverviewView/OverviewView";
import MyCoursesView from "./components/HomePage/MyCoursesView/MyCoursesView";
import CoursesView from "./components/HomePage/CoursesView/CoursesView";
import MentorsView from "./components/HomePage/MentorsView/MentorsView";
import SettingsView from "./components/HomePage/SettingsView/SettingsView";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME} element={<LayoutMain />}>
          <Route index element={<>Главная</>} />
          <Route path={RoutePath.Overview} element={<OverviewView />} />
          <Route path={RoutePath.MyCourses} element={<MyCoursesView />} />
          <Route path={RoutePath.Courses} element={<CoursesView />} />
          <Route path={RoutePath.Mentors} element={<MentorsView />} />
          <Route path={RoutePath.Settings} element={<SettingsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
