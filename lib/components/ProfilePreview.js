import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";

const ProfilePreview = ({ profile }) => {
  return (
    <div
      style={{
        flexDirection: "row",
        justifyContent: "center",
        // position: "relative"
      }}
    >
      <div className="profile-row" style={{ width: "fit-content", flexDirection: "row", borderRadius: "25px" }}>
      {PROFIILE_PARAMS.map(({ key }, i) => (
        <div style={{
        }}>
        <span className="user" key={i} style={{ width: 300, justifyContent: "space-between", fontFamily: "sans-serif", margin: "auto" }}>
          {key === "thumb" ? (
            <img classname="pic" src={profile[key]} alt="Thumb" style={{borderRadius: "25%", marginTop: "2px"}} />
          ) : (
            profile[key]
          )}
        </span>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default ProfilePreview;

