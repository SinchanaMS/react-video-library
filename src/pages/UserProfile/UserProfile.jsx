import UserProfileCard from "components/UserProfileCard";
import wave from "assets/wave.svg";
import React from "react";
import "styles/profile.css";

export default function UserProfile() {
  return (
    <div className="video-list profile-page">
      <img src={wave} alt="user-profile" className="profile-bg" />
      <img src={wave} alt="user-profile" className="profile-bg" />
      <img src={wave} alt="user-profile" className="profile-bg" />
      <UserProfileCard />
    </div>
  );
}
