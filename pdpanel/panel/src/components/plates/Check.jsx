
import React from "react";

const Check = ({ checked, onClick }) => {
  if (checked === true) {
    return (
      <span
        className="material-icons text-success"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
       
        <button type="submit" className="btn btn-success">
           <i class="fas fa-check-circle"></i>
            
          </button>
      </span>
    );
  } else {
    return (
      <span
        className="material-icons text-muted"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
       <button type="submit" className="btn btn-danger">

<i class="fas fa-ban"></i>
</button>
      </span>
    );
  }
};

export default Check;