import React from "react";

export default function PhotoNavbar() {
  return (
    <header className="flex justify-between flex-row mb-4">
      <div className="flex flex-col">
        <a href="/photography" className="text-3xl hover:text-sea-foam-green ">
          Caesar Chin
        </a>
        <div className="">
          <a href="/" className="hover:text-sea-foam-green ">
            full-stack developer
          </a>{" "}
          &{" "}
          <a href="/photography" className="hover:text-sea-foam-green ">
            photographer
          </a>
        </div>
      </div>
    </header>
  );
}
