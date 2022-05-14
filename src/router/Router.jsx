import { Routes, Route } from "react-router-dom";
import {
  Explore,
  History,
  Liked,
  Login,
  MockApi,
  PageNotFound,
  Playlist,
  SignUp,
  WatchLater,
  VideoPage,
} from "pages/pages";
import RequiresAuth from "./utils/RequiresAuth";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route element={<RequiresAuth />}>
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Route>
      <Route path="/video/:videoId" element={<VideoPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/api" element={<MockApi />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
