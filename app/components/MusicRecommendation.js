"use client";
import React, { useState } from "react";

export default function MusicRecommendation() {
  const [mood, setMood] = useState("");
  const [music, setMusic] = useState("");
  const [playlist, setPlaylist] = useState("");

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleRecommendation = () => {
    // Lakukan logika untuk merekomendasikan musik berdasarkan suasana hati
    // Anda dapat menggunakan API musik seperti Spotify atau menggunakan data statis

    // Contoh sederhana:
    let recommendationsMusic = [];
    let recommendationsPlaylist = [];

    if (mood === "happy") {
      recommendationsMusic = ["Happy Song"];
      recommendationsPlaylist = ["Happy playlist"];
    } else if (mood === "sad") {
      recommendationsMusic = ["Sad Song"];
      recommendationsPlaylist = ["Sad playlist"];
    } else if (mood === "calm") {
      recommendationsMusic = ["Calm Song"];
      recommendationsPlaylist = ["Calm playlist"];
    } else if (mood === "angry") {
      recommendationsMusic = ["Angry Song"];
      recommendationsPlaylist = ["Angry playlist"];
    }
    // console.log("Rekomendasi Musik:", recommendations);
    setMusic(recommendationsMusic);
    setPlaylist(recommendationsPlaylist);
  };

  return (
    <>
      <label htmlFor="moodInput">Masukkan Suasana Hati:</label>
      <input
        className="border"
        type="text"
        id="moodInput"
        value={mood}
        onChange={handleMoodChange}
      />
      <button onClick={handleRecommendation}>Rekomendasikan</button>
      <h2 className="text-lg text-gray-700 font-bold mb-4">
        Rekomendasi Musik
      </h2>
      {music ? (
        <div className="w-full h-fit flex justify-between items-center px-2">
          <div className="flex items-center gap-7">
            <span className="font-bold text-opacity-50 text-gray-600">01</span>
            <div className="w-11 h-11 bg-gray-600 rounded-md flex justify-center items-center">
              img
            </div>
            <div className="w-28 md:w-52">
              <h3 className="text-base font-semibold truncate">{music}</h3>
              <p className="text-sm font-normal text-gray-600 text-opacity-50 truncate">
                Nama penyanyi
              </p>
            </div>
          </div>
          <span className="text-sm font-medium">03.23</span>
          <span className="hidden md:flex text-sm font-normal text-gray-600 text-opacity-50 truncate">
            1.000.000
          </span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
}
