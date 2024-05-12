import { ReactNode, useState } from "react";

import cn from "classnames";

import styles from "./LayoutMain.module.scss";
import { View } from "@/interface/view";

import { OverviewIcon } from "@/components/icons/aside/OverviewIcon";
import LogoIcon from "@/assets/img/logo.png";
import LogoMiniIcon from "@/assets/img/logo-mini.png";
import ArrowAsideIcon from "@/assets/img/arrow-aside.png";
import AsideOpenIcon from "@/assets/img/aside-open.png";
import { MyCoursesIcon } from "@/components/icons/aside/MyCoursesIcon";
import CoursesIcon from "@/components/icons/aside/CoursesIcon";
import { MentorIcon } from "@/components/icons/aside/MentorIcon";
import { SettingIcon } from "@/components/icons/aside/SettingIcon";

type Props = {
  children: ReactNode;
  activeView: View;
  changeView: (view: View) => void;
};

// #8F92B5
const LayoutMain = ({ children, activeView, changeView }: Props) => {
  const [isAsideOpen, setAsideOpen] = useState(false);

  const toggleAside = () => setAsideOpen(!isAsideOpen);

  return (
    <section className={styles.layoutMain}>
      <aside className={cn(styles.aside, { [styles.open]: isAsideOpen })}>
        <div className={styles.aside__top}>
          <div className={cn(styles.aside__logo, styles.isJustifyCenter)}>
            {isAsideOpen ? (
              <img src={LogoIcon} alt="Лого" />
            ) : (
              <img src={LogoMiniIcon} alt="Лого маленькое" />
            )}
          </div>
          <div
            className={cn(styles.aside__toggle, {
              [styles.isJustifyCenter]: !isAsideOpen,
            })}
          >
            <button onClick={toggleAside}>
              {isAsideOpen ? (
                <img src={ArrowAsideIcon} alt="Стрелка" />
              ) : (
                <img src={AsideOpenIcon} alt="Три линий" />
              )}
            </button>
          </div>

          <nav>
            <ul
              className={cn(styles.aside__nav, {
                [styles.isAlignCenter]: !isAsideOpen,
              })}
            >
              <li
                className={cn(styles.aside__nav__item, {
                  [styles.aside__nav__item__active]:
                    activeView === View.Overview,
                })}
                onClick={() => changeView(View.Overview)}
              >
                <OverviewIcon color="#151422" />
                {isAsideOpen && <span>{View.Overview}</span>}
              </li>
              <li
                className={cn(styles.aside__nav__item, {
                  [styles.aside__nav__item__active]:
                    activeView === View.MyCourses,
                })}
                onClick={() => changeView(View.MyCourses)}
              >
                <MyCoursesIcon color="#151422" />
                {isAsideOpen && <span>{View.MyCourses}</span>}
              </li>
              <li
                className={cn(styles.aside__nav__item, {
                  [styles.aside__nav__item__active]:
                    activeView === View.Courses,
                })}
                onClick={() => changeView(View.Courses)}
              >
                <CoursesIcon color="#151422" />
                {isAsideOpen && <span>{View.Courses}</span>}
              </li>
              <li
                className={cn(styles.aside__nav__item, {
                  [styles.aside__nav__item__active]:
                    activeView === View.Mentors,
                })}
                onClick={() => changeView(View.Mentors)}
              >
                <MentorIcon color="#151422" />
                {isAsideOpen && <span>{View.Mentors}</span>}
              </li>
              <li
                className={cn(styles.aside__nav__item, {
                  [styles.aside__nav__item__active]:
                    activeView === View.Settings,
                })}
                onClick={() => changeView(View.Settings)}
              >
                <SettingIcon color="#151422" />
                {isAsideOpen && <span>{View.Settings}</span>}
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.aside__bottom}></div>
      </aside>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default LayoutMain;
