"use client";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Cup = ({ isMobileSize }) => {
  gsap.registerPlugin(ScrollTrigger);
  let scene = useThree((state) => state.scene);
  let camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em`,
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "top top",
            markers: false,
            endTrigger: "#ready",
            scrub: 1,
          },
        });
        if (isDesktop) {
          t1.to(camera.position, { x: 2.5 }, "key1")
            .to(scene.rotation, { y: 2.2 }, "key1")
            .to(scene.rotation, { y: 2.6 })
            .to(scene.rotation, { y: 3.8 }, "key2")
            .to(camera.position, { x: -2.5 }, "key2")
            .to(scene.rotation, { y: -2.2 }, "key2")
            .to(scene.rotation, { y: -3.2 })
            .to(camera.position, { x: 2.5 }, "key3")
            .to(scene.rotation, { y: -2.2 }, "key3")
            .to(scene.rotation, { y: -2.8 })
            .to(camera.position, { x: 0 }, "key4")
            .to(scene.rotation, { y: 2.2 }, "key4")
            .to(scene.rotation, { y: 2.4 })
            .to(camera.position, { x: -2.5 }, "key5")
            .to(scene.rotation, { y: -2.2 }, "key5")
            .to(camera.position, { x: 2.5 }, "key6")
            .to(scene.rotation, { y: 2.2 }, "key6")
            .to(scene.rotation, { y: 3.2 }, "key7")
            .to(scene.rotation, { y: -2.2 }, "key7")
            .to(camera.position, { x: -2.5 }, "key11")
            .to(scene.rotation, { y: -3.2 }, "key8")
            .to(scene.rotation, { y: 2.2 }, "key8")
            .to(camera.position, { x: 2.5 }, "key8")
            .to(camera.position, { x: 0}, "key9")
            .to(scene.rotation, { y: -2.2 }, "key9")
        } else {
          t1.to(scene.rotation, { y: 3.2 })
            .to(scene.rotation, { y: 6.2 })
            .to(scene.rotation, { y: 9.2 })
            .to(scene.rotation, { y: 12.2 });
        }

        t1.from(".opacity", {
          opacity: 1,
          // yoyo: true,
          // ease: "none",
        });
        t1.to(
          ".opacity",
          {
            opacity: 0,
            // ease: "none",
          },
          "<"
        );
      }
    );
  }, []);

  const cup = useGLTF("./gltf/bitledv2.glb");
  return (
    <mesh>
      <hemisphereLight intensity={0.5} />
      <pointLight intensity={1} />
      <spotLight position={[-20, 60, 10]} intensity={1} />
      <primitive
        object={cup.scene}
        scale={isMobileSize ? 0.3 : 0.5}
        position={[0, isMobileSize ? -1 : -1.5, 0]}
      />
    </mesh>
  );
};

const Model = () => {
  // states
  const [isMobileSize, setIsMobileSize] = useState(false);
  //side effects
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobileSize(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobileSize(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div
      className="w-[100%] h-full z-[1] fixed top-0 bg-transparent opacity"
      id="new"
    >
      <Canvas camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Cup isMobileSize={isMobileSize} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Model;
