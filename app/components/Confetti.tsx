"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function Confetti() {
  useEffect(() => {
    // Ensure the confetti canvas is always on top
    const setCanvasZIndex = () => {
        const canvas = document.querySelector("canvas.confetti-canvas") as HTMLCanvasElement | null;
      if (canvas) {
        canvas.style.zIndex = "9999";
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";
      }
    };

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    // Run confetti and set z-index
    const interval = window.setInterval(() => {
      setCanvasZIndex();

      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return null;
}