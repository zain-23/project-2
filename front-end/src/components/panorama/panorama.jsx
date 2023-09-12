// "use client";

// import { Pannellum } from "pannellum-react";
// import { useState } from "react";

// export default function File() {
//   const Scenes = {
//     image1: {
//       title: "Coffee Field View",
//       image: "/panorama.avif",
//       pitch: -11,
//       yaw: -3,
//     },
//   };

//   const [scene, setScene] = useState(Scenes.image1);

//   return (
//     <div>
//       <Pannellum
//         width={"100%"}
//         height={"100vh"}
//         title={scene.title}
//         image={scene.image}
//         pitch={0.28}
//         yaw={0}
//         hfov={130}
//         autoLoad
//         showControls={false}
//         showFullscreenCtrl={false}
//         showZoomCtrl={false}
//         orientationOnByDefault={true}
//       ></Pannellum>
//     </div>
//   );
// }

"use client";

import { useMemo, useRef, useState, useEffect } from "react";

// import VideoPopup from "./VideoPopup";

// import ReactPlayer from "react-player";

export const Panorama = ({}) => {
  const Canvas = useRef(null);

  const [hide, sethide] = useState(true);

  const initializePANOLENS = async () => {
    const THREE = await import("three");
    const PANOLENS = await import("panolens");

    const viewer = new PANOLENS.Viewer({
      container: Canvas.current,
      autoRotate: false,
      // autoRotateSpeed: 0.2,
      // autoRotateActivationDuration: 5000,
      // dwellTime: 1000,
      autoHideInfospot: false,
      controlBar: false,
    });

    if (window.innerWidth <= 768) {
      viewer.control = viewer.DeviceOrientationControls;
      viewer.controls[0].enabled = false;
      viewer.controls[1].enabled = true;
    } else {
      viewer.control = viewer.OrbitControls;
      viewer.controls[0].enabled = true;
      viewer.controls[1].enabled = false;
    }

    const panorama1 = new PANOLENS.ImagePanorama("/pano3.png");

    viewer.add(panorama1);

    panorama1.addEventListener("enter-fade-start", () => {
      viewer.getCamera().fov = 40;
      viewer.getCamera().updateProjectionMatrix();
      viewer.tweenControlCenter(new THREE.Vector3(5000.0, 50.0, 3000.9));
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") initializePANOLENS();
  }, [Canvas]);

  const handleDME = () => {
    if (typeof DeviceMotionEvent?.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            console.log("granted");
          }
        })
        .catch(console.error);
    }
    sethide(false);
  };

  return (
    <>
      {hide && (
        <div
          onClick={handleDME}
          className="cursor-pointer h-screen absolute bg-black z-10 w-full flex justify-center items-center lg:hidden text-white"
        >
          <h1>Click to View</h1>
        </div>
      )}
      <div
        ref={Canvas}
        className="w-full h-screen overflow-y-hidden opacity-100 bg-transparent"
      ></div>
    </>
  );
};
export default Panorama;
