import { useTheme, useVideo } from "contexts/contexts";
import "styles/videolisting.css";

export default function CategoryList() {
  const { videoData, allVideos, filterByCategory } = useVideo();
  const { theme } = useTheme();
  const { categoryList } = videoData;

  return (
    <ul className={theme === "light" ? "category-list" : "category-list dark"}>
      {categoryList?.map(({ _id, categoryName }) => (
        <li
          key={_id}
          className="category"
          onClick={() => filterByCategory(categoryName, allVideos)}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
}
