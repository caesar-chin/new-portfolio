import React from "react";

type PhotoDetailsType = {
  details: any;
  selectedList: any;
};

export default function PhotoDetails({
  details,
  selectedList,
}: PhotoDetailsType) {
  return (
    <div>
      <div className="w-80">
        <img
          src={details["webp_url"]}
          alt={details["caption"]}
          className="h-full w-full"
        />
      </div>
      <div>Caption: {details["caption"]}</div>
      <div>Date: {details["date"]}</div>
      {/* <div>{details["url"]}</div> */}
      {selectedList.type === "concert" ? (
        <div>
          <div>Artist: {details["artist"]}</div>
          <div>Venue: {details["venue"]}</div>
        </div>
      ) : (
        <div>Place: {details["venue"]}</div>
      )}
    </div>
  );
}
