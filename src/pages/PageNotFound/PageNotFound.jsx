import error from "assets/error.svg";

export default function PageNotFound() {
  return (
    <div className="error video-list">
      <div className="error-page">
        <img src={error} alt="notFound" />
      </div>
    </div>
  );
}
