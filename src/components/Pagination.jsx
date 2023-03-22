import React from "react";

export const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="grid grid-cols-3">
      <button onClick={onLeftClick}>
        <img
          src="https://www.svgrepo.com/show/510811/arrow-left-sm.svg"
          alt=""
        />
      </button>
      <div className="text-sm text-center">
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <img
          src="https://www.svgrepo.com/show/510816/arrow-right-sm.svg"
          alt=""
        />
      </button>
    </div>
  );
};
