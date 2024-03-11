import React from "react";
interface BlockProps {
  value?: string | null;
  onClick?: () => void;
  disable?: boolean;
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <button disabled={props.disable ? true : false} className="block" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
export default Block;
