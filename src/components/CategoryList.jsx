import { useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import { ToggleSwitch } from "./ToggleSwitch";

export default function CategoryList() {
  const { videoData, videoDispatch, loading } = useVideo();
  const { categoryList } = videoData;

  return (
    <div className="filters">
      <ul className="category-list">
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
        <li className="sort-options">
          <ToggleSwitch />
        </li>
      </ul>
    </div>
  );
}
