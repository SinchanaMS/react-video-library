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
} from "../pages/pages";
import RequiresAuth from "./utils/RequiresAuth";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />
      <Route
        path="/liked"
        element={
          <RequiresAuth>
            <Liked />
          </RequiresAuth>
        }
      />
      <Route
        path="/playlist"
        element={
          <RequiresAuth>
            <Playlist />
          </RequiresAuth>
        }
      />
      <Route
        path="/watchlater"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/api" element={<MockApi />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
