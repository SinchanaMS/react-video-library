import { useAuth, useVideo } from "contexts/contexts";

export default function UserProfileCard() {
  const { videoData } = useVideo();
  const { watchList, likedList, playlists } = videoData;
  const { testUser } = useAuth();
  const { firstName, email } = testUser;

  return (
    <div className="profile-card shadow">
      <header className="profile-card-header">
        <h1>Hello, {firstName}!</h1>
        <p>{email}</p>
      </header>

      <div className="profile-card-body">
        <h2>Your Stats</h2>

        <ul className="stats-list">
          <li className="stats-list-item">
            <h2>Likes: </h2>
            <h4>{likedList.length} videos</h4>
          </li>
          <li className="stats-list-item">
            <h2>Watchlist: </h2>
            <h4>{watchList.length} videos</h4>
          </li>
          <li className="stats-list-item">
            <h2>Playlists: </h2>
            <h4>{playlists.length} playlists</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
