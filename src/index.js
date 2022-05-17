import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import { makeServer } from "server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  ThemeProvider,
  VideoProvider,
  PlaylistProvider,
} from "contexts/contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <PlaylistProvider>
          <VideoProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </VideoProvider>
        </PlaylistProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
