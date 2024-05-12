import { ReactNode, useState } from "react";

import classNames from "classnames";

import styles from "./LayoutMain.module.scss";
import { OverviewIcon } from "@/components/icons/aside/OverviewIcon";

type Props = {
  children: ReactNode;
};

// #8F92B5
const LayoutMain = ({ children }: Props) => {
  const [isAsideOpen, setAsideOpen] = useState(false);

  const toggleAside = () => setAsideOpen(!isAsideOpen);

  return (
    <section className={styles.layoutMain}>
      <aside
        className={classNames(styles.aside, { [styles.open]: isAsideOpen })}
      >
        <button onClick={toggleAside}>
          {isAsideOpen ? "Скрыть" : "Показать"}
        </button>

        <OverviewIcon color="#151422"></OverviewIcon>
      </aside>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default LayoutMain;
