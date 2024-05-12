import LayoutMain from "@/layout/LayoutMain";
import { useCallback, useState } from "react";
import { View } from "@/interface/view";

const HomePage = () => {
  const [activeView, setActivePage] = useState<View>(View.Overview);

  const changeView = useCallback((view: View) => {
    setActivePage(view);
  }, []);

  return (
    <LayoutMain activeView={activeView} changeView={changeView}>
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae,
        provident ratione, officia temporibus placeat ab reiciendis repudiandae
        fuga corrupti nulla minus cum ea laboriosam totam porro hic? Quo, eos.
      </>
    </LayoutMain>
  );
};

export default HomePage;
