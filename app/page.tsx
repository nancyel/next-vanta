"use client";

import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 400.0,
          minWidth: 400.0,
          scale: 1,
          scaleMobile: 1.0,
          size: 1.0,
          color: 0xc5c5c5,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="flex items-center justify-center" ref={vantaRef}></div>
  );
}
