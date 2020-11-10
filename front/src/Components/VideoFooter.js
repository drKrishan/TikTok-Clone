import { MusicNote } from "@material-ui/icons";
import React from "react";
import Ticker from "react-ticker";
import "../StyleSheets/VideoFooter.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <p>{song}</p>
            </>
          )}
        </Ticker>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
      />
    </div>
  );
}

export default VideoFooter;
