import { Routes, Route } from 'react-router-dom'
import { Explore, History, Liked, Login, MockApi, PageNotFound, Playlist, SignUp, WatchLater } from '../pages/pages'

export default function Router() {
  return (
        <Routes>
            <Route path="/" element={<Explore/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/liked" element={<Liked/>}/>
            <Route path="/playlist" element={<Playlist/>}/>
            <Route path="/watchlater" element={<WatchLater/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/api" element={<MockApi/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
  )
}