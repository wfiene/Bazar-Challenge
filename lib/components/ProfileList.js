
import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";

const ProfileList = ({ profiles }) => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {PROFIILE_PARAMS.map(({ columnTitle }, i) => (
          <h3 key={i} style={{ width: 300, marginBottom: 30 }}>
            {columnTitle}
          </h3>
        ))}
      </div>
      {profiles.length > 0 ? (
        profiles.map((profile, index) => (
          <ProfilePreview key={index} profile={profile} />
        ))
      ) : (
        <p>No matching profiles found.</p>
      )}
    </div>
  );
};

export default ProfileList;
