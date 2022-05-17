import { useTheme, useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import { useState } from "react";

export default function CategoryList() {
  const { videoData, allVideos, filterByCategory } = useVideo();
  const { theme } = useTheme();
  const { categoryList } = videoData;
  const [activeCategory, setActiveCategory] = useState("");

  const categoryHandler = (categoryName) => {
    setActiveCategory(categoryName);
    filterByCategory(categoryName, allVideos);
  };

  return (
    <ul className={theme === "light" ? "category-list" : "category-list dark"}>
      {categoryList?.map(({ _id, categoryName }) => (
        <li
          key={_id}
          className={
            categoryName === activeCategory ? "category active" : "category"
          }
          onClick={() => categoryHandler(categoryName)}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
}
