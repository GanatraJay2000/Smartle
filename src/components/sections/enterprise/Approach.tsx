import React from "react";
import {
  Approaches,
  ApproachesOutlined,
  Folder,
  Chat,
  Zoom,
  Flash,
  Camera,
} from "../../../util/resources";

const Approach = () => {
  return (
    <div>
      <h1 className="pt-10 text-5xl font-black text-center">Our approach</h1>
      <div   
        style={{ height: "40rem" }}
        className="overflow-y-hidden pt-5  relative border-3 border-red-50"
      >
      <p className="text-xl text-center">We use a collaborative agile approach to deliver outcomes ensuring quick efficient releases</p>
        <img className="absolute z-20" src={Approaches.default} alt="" />
        <img
          className="absolute z-0 -translate-y-14"
          src={ApproachesOutlined.default}
          alt=""
        />
        <div className="absolute rounded-3xl shadow-2xl bg-contrastAccent-200 z-20 left-8 top-20 h-72 w-52">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Chat} alt="" />
          <div className="text-2xl text-center font-bold">
            Need<br /> Analysis
          </div>
          <p className="p-4 text-center">
            Training, Assessment and Certification need analysis
          </p>
        </div>
        <div className="absolute rounded-3xl shadow-2xl bg-contrastAccent-200 z-20 left-1/4 top-48 -translate-x-10 h-72 w-52">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Zoom} alt="" />
          <div className="text-2xl text-center font-bold">
            Course<br /> Definition
          </div>
          <p className="p-4 text-center">
            Gather all relevant materials for the project
          </p>
        </div>
        <div className="absolute rounded-3xl shadow-2xl bg-contrastAccent-200 z-20 left-1/2 top-1/2 -translate-y-10 -translate-x-1/2 h-72 w-52">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Camera} alt="" />
          <div className="text-2xl text-center font-bold">
            Design and<br /> Development
          </div>
          <p className="p-4 text-center">
            Course structuring and media creation
          </p>
        </div>
        <div className="absolute rounded-3xl shadow-2xl bg-contrastAccent-200 z-20 right-1/4 top-48 translate-x-10 h-72 w-52">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Flash} alt="" />
          <div className="text-2xl text-center font-bold">
            Technology<br /> Integration
          </div>
          <p className="p-4 text-center">
            Deployment and integration with corporate systems
          </p>
        </div>
        <div className="absolute rounded-3xl shadow-2xl bg-contrastAccent-200 z-20 right-8 top-20 h-72 w-52">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Folder} alt="" />
          <div className="text-2xl text-center font-bold">
            Delivery
          </div>
          <p className="p-4 text-center">Learning, administration, change management and hosting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
