"use client";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "bg-[#1DB954] text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`fixed bottom-28 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg z-50 font-semibold text-sm fade-in ${colors[type]}`}
    >
      {message}
    </div>
  );
}
