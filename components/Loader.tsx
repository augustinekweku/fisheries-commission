import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "400px" }}
    >
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
