import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

export default function ProfilePage() {
  return (
    <div>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
}
