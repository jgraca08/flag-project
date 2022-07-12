import React from "react";

const Spiner = (props) => {
    return(
        <React.Fragment>
            <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger mt-5 mb-5 " role="status">
          <span className="sr-only"></span>
        </div>
      </div>
        </React.Fragment>
    )
}

export default Spiner;