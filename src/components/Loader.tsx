import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <svg className="loader__icon">
        <use xlinkHref="/img/symbol-defs.svg#icon-github"></use>
      </svg>
      <span className="loader__text">Loading...</span>
    </div>
  );
};

export default Loader;
