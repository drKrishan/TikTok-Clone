import React, { useRef, useState } from "react";
import "../StyleSheets/Video.css";
import Logo from "./Logo";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src={url}
      ></video>

      {/* src="https://instagram.fcmb4-1.fna.fbcdn.net/v/t50.2886-16/118419768_311386010085883_7045659031491518430_n.mp4?_nc_ht=instagram.fcmb4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=KeSJ_k9ra3EAX9gXya5&oe=5F7FF008&oh=31769384d277211a199ea933773b5cba" */}

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      <Logo />
    </div>
  );
}

export default Video;
