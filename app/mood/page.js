"use client";
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { setExpressionValue } from "../utils/expression";

export default function Mood() {
  const [faceExpressions, setFaceExpressions] = useState(null);
  const videoRef = useRef();
  const canvasRef = useRef();
  setExpressionValue(faceExpressions);
  // console.log(faceExpressions);

  // load useeffect
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // membuka webcam
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // load models dari face api
  const loadModels = () => {
    Promise.all([
      // face detect dan load dari public/models dir
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };
  // faceapi.nets.faceLandmark68Net.loadFromUri("/models"),

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      // .withFaceLandmarks()

      if (detections.length > 0) {
        setFaceExpressions(detections[0].expressions);
      }
      // const jsonResult = JSON.stringify(detections);
      // console.log(jsonResult);

      // deteksi wajah, ekspresi, dan landmark
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 940,
        height: 650,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });

      faceapi.draw.drawDetections(canvasRef.current, resized);
      // faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }, 5000);
  };

  return (
    <main className="min-h-screen max-w-full p-8 pt-11 bg-[#F4F5FC] shadow-sm rounded-l-3xl">
      <h1 className="text-4xl text-gray-700 font-bold mb-10">
        Identifikasi Suasana Hati
      </h1>
      <div className="flex flex-row p-10">
        {/* flex kiri */}
        <div className="relative">
          <video crossOrigin="anonymous" ref={videoRef} autoPlay />
          <canvas
            ref={canvasRef}
            width="940"
            height="650"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        {/* flex kanan */}
        <div className="basis-1/2 flex items-center justify-center">
          <h2 className="w-2/3 font-normal text-lg">
            Arahkan wajahmu ke kamera dan biarkan ekspresimu berbicara. Tunggu
            sesaat dan temukan keajaiban di balik lensa!
          </h2>
        </div>
      </div>
    </main>
  );
}
