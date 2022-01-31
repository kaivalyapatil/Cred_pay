import React from "react";
import Head from "./Header";
import Bodyright from "./Bodyright";
import Bodyleft from "./Bodyleft";
import Bodynext from "./Bodynext";
import Foot from "./Footer";

export default function Mainpage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Head />
        </div>

        <div className="row">
          <div className="col-3">
            <Bodyleft />
          </div>
          <div className="col-9">
            <Bodyright />
          </div>
        </div>
        <div className="mt-3">
          <Bodynext />
        </div>
        <Foot />
      </div>
    </>
  );
}
