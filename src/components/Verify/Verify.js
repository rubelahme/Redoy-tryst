import React from "react";
import "./Verify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Verify = () => {
  return (
    <>
      <div className="verify">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div>
                <div className="verify1">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="verify2">Email Verified</span>
                  <div>
                    <a
                      className="btn btn-warning w-100"
                      href="https://app.tryst.link/log_in"
                      rel="noopener noreferrer"
                    >
                      <p className=" fw-bold fs-5 mt-2 mb-2 pt-2 pb-1">
                        Go to Home
                        <span className="icon2">
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
