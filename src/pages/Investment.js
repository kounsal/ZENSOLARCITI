import React from "react";
import { Navbar } from "../components/navbar";
import "./page.css";
import { InvestmentCards } from "../components/Investmentcard";
// class Investment extends React.Component{
//     render(){
function Investment() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <InvestmentCards />
        <div className="container-fluid text-center invest">
          <div className="row investhead ">
            <div className="col">Investment</div>
          </div>
          <div className="row investdata">
            <div className="col">Investment</div>
          </div>
        </div>
      </section>
    </>
  );
}
// }
// export { Investment };
export default Investment;
