import React, { useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";

function ConcaveBackground({ x, y }) {
  const texture = useLoader(
    THREE.TextureLoader,
    "https://c0.wallpaperflare.com/path/345/432/905/astronomy-constellation-dark-galaxy-87776294cff6d261858860c9a59a1cbb.jpg"
  );
  const rotation = { x: y / 100, y: x / 100 };

  return (
    <mesh rotation={[rotation.x, rotation.y, 1]}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

function Animation() {
  const { x, y } = useMousePosition();

  function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: -20 });

    useEffect(() => {
      const handleMove = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;

        setMousePosition({
          x: clientX / 60,
          y: -clientY / 35,
        });
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);

      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("touchmove", handleMove);
      };
    }, []);

    return mousePosition;
  }

  const getTransformStyle = () => ({
    transform: `rotateX(${y / 2}deg) rotateY(${x / 2}deg) perspective(100px)`,
  });

  const getTransformStyleCounterImage = () => ({
    transform: `rotateX(${y}deg) rotateY(${x}deg)`,
    transformStyle: "preserve-3d",
  });

  return (
    <div className="relative h-[110vh] w-[100vw]">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ConcaveBackground x={x} y={y} />
      </Canvas>

      <div className="relative h-screen flex items-center justify-center z-10 ml-[1rem] -mt-[100vh] overflow-clip">

        <div
          className="absolute w-[90vw] h-[90vw] max-w-[92vh] max-h-[92vh] rounded-full border-slate-600 flex items-center justify-center"
          style={{ ...getTransformStyle(), borderWidth: "0.5px" }}
        >
          <div className="absolute h-full w-full animate-spin-slow1">

  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img
      src={cards[0].src}
      alt={cards[0].title}
      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full p-[0.05rem] bg-white shadow-md"
      style={getTransformStyleCounterImage()}
    />
  </div>


  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
    <img
      src={cards[4].src} 
      alt={cards[4].title}
      className="h-20 w-20 sm:h-20 sm:w-20 rounded-full scale-95 p-[0.05rem] bg-white shadow-md"
      style={getTransformStyleCounterImage()}
    />
  </div>
</div>
        </div>


        <div
          className="absolute w-[65vw] h-[65vw] max-w-[70vh] max-h-[70vh] rounded-full border-slate-600 flex items-center justify-center"
          style={{ ...getTransformStyle(), borderWidth: "0.5px" }}
        >
          <div className="absolute h-full w-full animate-spin-reverse2">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={cards[1].src}
                alt={cards[1].title}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full  p-[0.05rem] bg-white shadow-md"
                style={getTransformStyleCounterImage()}
              />
            </div>
          </div>
        </div>


        <div
          className="absolute w-[40vw] h-[40vw] max-w-[40vh] max-h-[40vh] rounded-full border-slate-600 flex items-center justify-center"
          style={{ ...getTransformStyle(), borderWidth: "0.5px" }}
        >
          <div className="absolute h-full w-full animate-spin-slow3">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={cards[2].src}
                alt={cards[2].title}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full  p-[0.05rem] bg-white shadow-md"
                style={getTransformStyleCounterImage()}
              />
           
            </div>
          </div>
        </div>

        <div className="absolute text-center w-[20vw] sm:w-[15vh] flex flex-col items-center z-10">
          <img
            src={cards[3].src}
            alt={cards[3].title}
            className="h-[10vh] sm:h-[15vh] rounded-full shadow-yellow-500 shadow-2xl bg-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    description: "DATA DETECTIVE",
    title: "DATA DETECTIVE",
    src: "https://res.cloudinary.com/dbbanqws0/image/upload/v1735914876/2024/utalhpuydctwq3ejldxq.jpg",
  },
  {
    description: "MIND WRAP",
    title: "",
    src: "https://res.cloudinary.com/dbbanqws0/image/upload/v1735914726/2023/hoj7jovngcxegeapzbwt.jpg",
  },
  {
    description: "Tech Event",
    title: "Some Tech Event",
    src: "https://res.cloudinary.com/dbbanqws0/image/upload/v1739694225/AI_FAP_img_waebrz.png",
  },
  {
    description: "SNP",
    title: "Club",
    src: "https://res.cloudinary.com/dbbanqws0/image/upload/v1739391300/logolog_tbht2c.png",
  },
  {
    description: "DATA ALCHEMY",
    title: "Some Tech Event",
    src: "https://res.cloudinary.com/dbbanqws0/image/upload/v1739556964/WhatsApp_Image_2025-02-14_at_23.45.12_f4509ea0_jj8hve.jpg",
  },
];

export default Animation;
