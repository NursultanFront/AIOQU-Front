import { Tree, TreeNode } from "react-organizational-chart";
import { ModuleCard } from "@/components/ui/module-card/ModuleCard";

export const TreeModule = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"#1468FE"}
    lineBorderRadius={"10px"}
    label={<ModuleCard progress={100}>Korem</ModuleCard>}
  >
    <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>} />
    <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>}>
      <TreeNode label={<ModuleCard progress={40}>Borem</ModuleCard>} />
    </TreeNode>
    <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>}>
      <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>} />
    </TreeNode>
  </Tree>
);
