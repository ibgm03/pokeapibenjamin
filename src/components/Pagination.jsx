import React from "react";

export const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="grid grid-cols-3">
      <button onClick={onLeftClick}>ᐅ</button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onLeftClick}>ᐅ</button>
    </div>
  );
};
