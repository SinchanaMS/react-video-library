import { useVideo } from "contexts/contexts";
import { ToggleSwitch } from "./ToggleSwitch";
import "styles/videolisting.css";

export default function CategoryList() {
  const { videoData, videoDispatch, loading } = useVideo();
  const { categoryList } = videoData;

  return (
    <div className="filters">
      <div className="category-list">
        <p>Sort By:</p> <ToggleSwitch />
      </div>
      <div>
        <ul className="category-list">
          <p>Filter By:</p>
          {!loading && (
            <li
              className={
                "All" === videoData.category ? "category active" : "category"
              }
              onClick={() =>
                videoDispatch({ type: "SET_CATEGORY", payload: "All" })
              }
            >
              All
            </li>
          )}
          {categoryList?.map(({ _id, categoryName }) => (
            <li
              key={_id}
              className={
                categoryName === videoData.category
                  ? "category active"
                  : "category"
              }
              onClick={() =>
                videoDispatch({ type: "SET_CATEGORY", payload: categoryName })
              }
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
