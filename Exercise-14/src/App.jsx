import React from "react";
import ImageDisplay from "./components/ImageDisplay";
import UserForm from "./components/UserForm";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  return (
    <div>
      <h1>React Exercises</h1>
      <ImageDisplay />
      <UserForm />
      <ProfilePage />
    </div>
  );
}
