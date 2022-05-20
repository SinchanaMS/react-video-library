import { useTheme, useVideo } from "contexts/contexts";
import "styles/videolisting.css";

export default function CategoryList() {
  const { videoData, videoDispatch } = useVideo();
  const { theme } = useTheme();
  const { categoryList } = videoData;

  return (
    <ul className={theme === "light" ? "category-list" : "category-list dark"}>
      <li
        className={
          "All" === videoData.category ? "category active" : "category"
        }
        onClick={() => videoDispatch({ type: "SET_CATEGORY", payload: "All" })}
      >
        All
      </li>
      {categoryList?.map(({ _id, categoryName }) => (
        <li
          key={_id}
          className={
            categoryName === videoData.category ? "category active" : "category"
          }
          onClick={() =>
            videoDispatch({ type: "SET_CATEGORY", payload: categoryName })
          }
        >
          {categoryName}
        </li>
      ))}
      <li
        className={
          "Latest" === videoData.sortBy ? "category active" : "category"
        }
        onClick={() =>
          videoData.sortBy === "Latest"
            ? videoDispatch({ type: "SORT_BY", payload: "" })
            : videoDispatch({ type: "SORT_BY", payload: "Latest" })
        }
      >
        Latest
      </li>
    </ul>
  );
}
