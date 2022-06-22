import "../styles/toggleswitch.css";
import { useState, useEffect } from "react";
import { useVideo } from "contexts/contexts";

function ToggleSwitch() {
  const { videoData, videoDispatch } = useVideo();
  const [toggleSort, setToggleSort] = useState(videoData.sortBy === "Latest");

  const toggleHandler = () => {
    toggleSort
      ? videoDispatch({ type: "SORT_BY", payload: "Latest" })
      : videoDispatch({ type: "SORT_BY", payload: "Oldest" });
  };

  console.log(videoData.sortBy);
  useEffect(
    () => {
      toggleHandler();
    },
    // eslint-disable-next-line
    [toggleSort]
  );

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          checked={videoData.sortBy === "Latest"}
          onChange={() => {
            setToggleSort((prev) => !prev);
          }}
        />
        <span className="slider round"></span>
      </label>
      <label className="font-medium">Latest</label>
    </div>
  );
}

export { ToggleSwitch };
