import React from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";

const StyledNode = styled.div`
  padding: 5px 10px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #151422;
  background-color: #8f92b5;
  color: white;
  font-weight: bold;
`;

const LockedNode = styled(StyledNode)`
  background-color: #a9a9a9;
  cursor: not-allowed;
`;

export const StyledTreeExample = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"#8f92b5"}
    lineBorderRadius={"10px"}
    label={<StyledNode>Korem</StyledNode>}
  >
    <TreeNode label={<StyledNode>Korem</StyledNode>} />
    <TreeNode label={<StyledNode>Korem</StyledNode>}>
      <TreeNode label={<LockedNode>Borem</LockedNode>} />
    </TreeNode>
    <TreeNode label={<StyledNode>Korem</StyledNode>}>
      <TreeNode label={<StyledNode>Korem</StyledNode>} />
    </TreeNode>
  </Tree>
);

export default StyledTreeExample;
