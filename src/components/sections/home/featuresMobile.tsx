import React from "react";
import {
  Feature,
  FeatureOutline,
  Book,
  Boy,
  Star,
  Calendar,
  Rocket,
} from "../../../util/resources";

const Features = () => {
  return (
    <div>
      <div       
        className="overflow-y-hidden  relative border-3 border-red-50"
      >
        <h1 className="text-4xl font-black text-center">Features of Smartle</h1>      
        <div className="mt-10 rounded-3xl shadow-2xl bg-accent-200 w-10/12 mx-auto">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Book} alt="" />
          <div className="text-2xl text-center font-bold">
            Hybrid
            <br />
            Learning
          </div>
          <p className="p-4 text-center">
            Choose courses as Hybrid ( Self-paced and Coach Led) or Completely
            Self-paced
          </p>
        </div>
        <div className="mt-10 rounded-3xl shadow-2xl bg-accent-200 w-10/12 mx-auto">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Boy} alt="" />
          <div className="text-2xl text-center font-bold">
            International
            <br />
            Cocahes
          </div>
          <p className="p-4 text-center">
            Instructors and Coaches from around the world to share a global
            perspective
          </p>
        </div>
        <div className="mt-10 rounded-3xl shadow-2xl bg-accent-200 w-10/12 mx-auto">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Star} alt="" />
          <div className="text-2xl text-center font-bold">
            Earn Completion Credits
          </div>
          <p className="p-4 text-center">
            Earn credits for specific courses which can be combined to earn a
            Micro-Masters Certificate
          </p>
        </div>
        <div className="mt-10 rounded-3xl shadow-2xl bg-accent-200 w-10/12 mx-auto">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Calendar} alt="" />
          <div className="text-2xl text-center font-bold">
            Digital
            <br />
            Certification
          </div>
          <p className="p-4 text-center">
            Earn a digital course competition certificate for successful
            completion of each course
          </p>
        </div>
        <div className="mt-10  mb-20 rounded-3xl shadow-2xl bg-accent-200 w-10/12 mx-auto">
          <img className="pt-5 w-16 pb-2 mx-auto" src={Rocket} alt="" />
          <div className="text-2xl text-center font-bold">
            Immersive
            <br />
            Content
          </div>
          <p className="p-4 text-center">
            Story based learning delivered through a play and learn platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
