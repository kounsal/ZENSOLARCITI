import { Component } from "react";
import "./main.css";

class InvestmentCards extends Component {
   
  render() {
    const data = [
        { id: 1, name: "Johnny", gender: "male", age: 30 },
        { id: 2, name: "Jenny", gender: "female", age: 28 },
        { id: 3, name: "Sam", gender: "male", age: 13 },
        { id: 4, name: "Dean", gender: "male", age: 8 }
      ];
    return (
      <>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="row">
              <div className="col-md-6">
                <div className="ag-courses_item ">
                  <div className="row">
                    <div className="col-md-6 " style={{ paddingRight: "0px" }}>
                      <img
                        src={require("../assets/investSolar1.jpg")}
                        className="imagein"
                      />
                    </div>
                    <div className="col-md-6" style={{ paddingLeft: "0px" }}>
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg" />
                        <div className="ag-courses-item_title">
                          Text over here
                          
                        </div>
                        <div className="ag-courses-item_date-box">
                          Last updated:
                          <span className="ag-courses-item_date">
                            04.11.2022
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ag-courses_item ">
                  <div className="row">
                    <div className="col-md-6 " style={{ paddingRight: "0px" }}>
                      <img
                        src={require("../assets/investSolar1.jpg")}
                        className="imagein"
                      />
                    </div>
                    <div className="col-md-6" style={{ paddingLeft: "0px" }}>
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg" />
                        <div className="ag-courses-item_title">
                          Text over here
                        </div>
                        <div className="ag-courses-item_date-box">
                          Last updated:
                          <span className="ag-courses-item_date">
                            04.11.2022
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ag-courses_item ">
                  <div className="row">
                    <div className="col-md-6 " style={{ paddingRight: "0px" }}>
                      <img
                        src={require("../assets/investSolar1.jpg")}
                        className="imagein"
                      />
                    </div>
                    <div className="col-md-6" style={{ paddingLeft: "0px" }}>
                      <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg" />
                        <div className="ag-courses-item_title">
                          Text over here
                        </div>
                        <div className="ag-courses-item_date-box">
                          Last updated:
                          <span className="ag-courses-item_date">
                            04.11.2022
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ag-courses_item ">
                  <div className="row">
                    <div className="col-md-6 " style={{ paddingRight: "0px" }}>
                      <img
                        src={require("../assets/investSolar1.jpg")}
                        className="imagein"
                      />
                    </div>
                    <div className="col-md-6" style={{ paddingLeft: "0px" }}>
                      <a href="/" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg" />
                        <div className="ag-courses-item_title">
                          Text over here
                        </div>
                        <div className="ag-courses-item_date-box">
                          Last updated:
                          <span className="ag-courses-item_date">
                            04.11.2022
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { InvestmentCards };
