import React, { Component } from "react";
import { InfoConsumer } from "../context";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;
          return (
            <>
              <div className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>
                {/* social Icons */}
                <div className="container mt-5">
                  <div className="row justify-contenet-center">
                    <div className="col-2">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-google-plus-g" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-reddit" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-facebook-messenger" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Nav-Links */}
              <div className="container">
                <ul className="nav nav-tabs">
                  {/* About Place Link  */}
                  <li className="nav-item">
                    <a
                      href="#aboutPlace"
                      className="nav-link active"
                      role="tab"
                      data-toggle="tab"
                    > About Place</a>
                  </li>
                  {/* Reviews Place Link  */}
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link "
                      role="tab"
                      data-toggle="tab"
                    >Reviews</a>
                  </li>
                  {/* Map Place Link  */}
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nav-link "
                      role="tab"
                      data-toggle="tab"
                    >Map</a>
                  </li>
                </ul>
              </div>
            </>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;
