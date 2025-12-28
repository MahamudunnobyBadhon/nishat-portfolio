"use client";
import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [trails, setTrails] = useState([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create smoke trail effect - only create trail every 30ms
      const currentTime = Date.now();
      if (currentTime - lastTime > 30) {
        lastTime = currentTime;

        const newTrail = {
          id: trailIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 20 + 15,
          opacity: 0.6,
        };

        setTrails((prev) => [...prev, newTrail]);

        // Remove trail after animation completes
        setTimeout(() => {
          setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
        }, 800);
      }
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Smoke trail particles */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-smoke"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <div
        className={`custom-cursor-dot ${isHidden ? "hidden" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Cursor ring/follower */}
      <div
        className={`custom-cursor-ring ${isPointer ? "pointer" : ""} ${
          isHidden ? "hidden" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
