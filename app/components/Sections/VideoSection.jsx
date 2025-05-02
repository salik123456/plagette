"use client";
import React, { useState } from "react";
import VideoModal from "../Modal/VideoModal";
import Image from "next/image";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState("dQw4w9WgXcQ");

  const modalBg = "/modal-bg.png";
  const playIcon = "/play.png";
  return (
    <div
      className="relative lg:h-screen bg-cover bg-center bg-no-repeat py-32 flex items-center justify-center cursor-pointer"
      style={{ backgroundImage: `url(${modalBg})` }}
      onClick={() => setIsModalOpen(true)}
    >
      <Image
        width={100}
        height={100}
        src={playIcon}
        alt="Play Video"
        className="w-20 h-20 md:w-32 md:h-32"
      />

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        youtubeVideoId={youtubeVideoId}
      />
    </div>
  );
};

export default VideoSection;
