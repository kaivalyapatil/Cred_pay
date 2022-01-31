import React from "react";
import Head from "./Header";
import Bodyright from "./Bodyright";
import Bodyleft1 from "./Bodyleft1";
import Bodynext from "./Bodynext";
import Foot from "./Footer";

export default function Admin() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Head />
        </div>

        <div className="row">
          <div className="col-3">
            <Bodyleft1 />
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
