"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Mood from "../mood/page";
import { getExpressionValue } from "../utils/expression";

export default function Home() {
  const expressionValue = getExpressionValue();
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [banner, setBanner] = useState("");
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
    let forBanner = "";

    if (mood === "happy") {
      forBanner = "Suasana hati kamu saat ini sedang senang saat ini";
      recommendationsMusic = ["Happy Song"];
      recommendationsPlaylist = ["Happy playlist"];
    } else if (mood === "sad") {
      forBanner = "Suasana hati kamu saat ini sedang sedih saat ini";
      recommendationsMusic = ["Sad Song"];
      recommendationsPlaylist = ["Sad playlist"];
    } else if (mood === "calm") {
      forBanner = "Suasana hati kamu saat ini sedang tenang saat ini";
      recommendationsMusic = ["Calm Song"];
      recommendationsPlaylist = ["Calm playlist"];
    } else if (mood === "angry") {
      forBanner = "Suasana hati kamu saat ini sedang marah saat ini";
      recommendationsMusic = ["Angry Song"];
      recommendationsPlaylist = ["Angry playlist"];
    }
    // console.log("Rekomendasi Musik:", recommendations);
    setMusic(recommendationsMusic);
    setPlaylist(recommendationsPlaylist);
    setBanner(forBanner);
  };

  return (
    <main className="min-h-screen max-w-full p-8 pt-11 md:flex bg-[#F4F5FC] border shadow-sm rounded-l-3xl">
      {/* flex kiri */}
      <div className="md:basis-full md:mr-10">
        {/* home */}
        <div className="md:mb-10">
          <h1 className="text-4xl text-gray-700 font-bold mb-4">Rekomendasi</h1>
          {/* <MusicRecommendation /> */}
          <div className="flex md:justify-between w-full h-32 md:h-52 mb-5 p-4 md:p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
            <div className="mr-2 flex flex-col justify-between items-start">
              {/* Perlihatkan ekspresi wajahmu. Ungkapkan moodmu dengan satu klik. */}
              {banner ? (
                <>
                  <p className="text-lg font-normal text-slate-100">
                    {banner} <br />
                    berikut rekomendasi musik dan playlist yang sesuai dengan
                    suasana hati kamu
                  </p>
                </>
              ) : (
                <p className="text-lg font-normal text-slate-100">
                  Perlihatkan ekspresi wajahmu. Ungkapkan moodmu dengan satu
                  klik.
                </p>
              )}
              <button
                type="button"
                onClick={() => router.push("/mood")}
                className="flex-shrink-0 text-white bg-indigo-700 border-0 py-1.5 px-4 focus:outline-none transition ease-in-out hover:bg-indigo-800 hover:-translate-y-1 duration-300 rounded-lg text-base mt-10 sm:mt-0 shadow-lg"
              >
                Identifikasi
              </button>
            </div>
            <div className="w-24 md:w-32 h-24 md:h-32 flex justify-center items-center">
              <Image
                src="/forUI/face-recognition.png"
                width={512}
                height={512}
                alt="face-recognition"
              />
            </div>
          </div>
        </div>
        {/* tranding saat ini */}
        <div className="mb-10">
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
                <span className="font-bold text-opacity-50 text-gray-600">
                  01
                </span>
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
          ) : (
            <>
              <div className="p-5 flex justify-center items-center w-full h-20 border text-center bg-slate-100 shadow-lg rounded-lg">
                Identifikasi moodmu terlebih dahulu seblum mendapatkan
                rekomendasi musik
              </div>
            </>
          )}
        </div>
      </div>
      {/* flex kanan */}
      <div className="md:basis-1/2">
        {/* playlist */}
        <div className="mt-12">
          <h2 className="text-lg text-gray-700 font-bold mb-4">
            Rekomendasi Playlist
          </h2>
          {/* card playlist */}
          {playlist ? (
            <div className="flex flex-wrap gap-2">
              <div className="w-36 h-44">
                <div className="w-full h-24 mb-1 bg-gray-700 flex justify-center items-center rounded-lg">
                  img
                </div>
                <h3 className="text-base font-semibold truncate">{playlist}</h3>
                <p className="text-sm font-normal text-gray-600 text-opacity-50 truncate">
                  Pemilih playlist
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="p-5 flex justify-center items-center w-full h-20 border text-center bg-slate-100 shadow-lg rounded-lg">
                Identifikasi moodmu terlebih dahulu sebelum mendapatkan
                rekomendasi playlist
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
