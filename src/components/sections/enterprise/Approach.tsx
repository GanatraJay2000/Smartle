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
import FeatureBox from "../../atom/FeatureBox";

const Approach = () => {
  return (
    <div>
      <h1 className="pt-10 text-5xl font-black text-center">Our approach</h1>
      <div   
        style={{ height: "40rem" }}
        className="overflow-y-hidden pt-5  relative border-3"
      >
      <p className="text-xl text-center">We use a collaborative agile approach to deliver outcomes ensuring quick efficient releases</p>
        <img className="absolute z-20" src={Approaches.default} alt="" />
        <img
          className="absolute z-0 -translate-y-14"
          src={ApproachesOutlined.default}
          alt=""
        />        
        <FeatureBox
          color="bg-contrastAccent-200"
          pos="left-8 top-20 pt-3"
          img={Chat}
          title={`Need<br /> Analysis`}
          desc={`Training, Assessment and Certification need analysis`}
        />
        <FeatureBox
          color="bg-contrastAccent-200"
          pos="left-1/4 top-48 -translate-x-10 pt-3"
          img={Zoom}
          title={`Course<br /> Definition`}
          desc={`Gather all relevant materials for the project`}
        />
        <FeatureBox
          color="bg-contrastAccent-200"
          pos="left-1/2 top-1/2 -translate-y-10 -translate-x-1/2 pt-3"
          img={Camera}
          title={`Design and<br /> Development`}
          desc={`Course structuring and media creation`}
        />
        <FeatureBox
          color="bg-contrastAccent-200"
          pos="right-1/4 top-48 translate-x-10 pt-3"
          img={Flash}
          title={`Technology<br /> Integration`}
          desc={`Deployment and integration with corporate systems`}
        />
        <FeatureBox
          color="bg-contrastAccent-200"
          pos="right-8 top-20 pt-3"
          img={Folder}
          title={`Delivery`}
          desc={`Learning, administration, change management and hosting`}
        />
      </div>
    </div>
  );
};

export default Approach;
