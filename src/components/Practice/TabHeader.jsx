import React from "react";

const TabHeader = (props) => {
  return (
    <div class="border-b-3 border-purple-500 mb-2 mt-4 leading-4">
      <div class="flex text-center mx-2">{props.children}</div>
    </div>
  );
};

export default TabHeader;
