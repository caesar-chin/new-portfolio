import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import SortIcon from "@mui/icons-material/Sort";
import Stack from "@mui/material/Stack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

type GalleryProps = {
  darkMode: any;
  title: string;
};

// "dark-grayish-red": "#b24a43",
// "sea-foam-green": "#A5DEC8",

export default function Gallery({ darkMode, title }: GalleryProps) {
  const ResizeSlider = styled(Slider)({
    color: darkMode ? "#A5DEC8" : "#b24a43",
  });

  const [resizeValue, setResizeValue] = React.useState(30);

  const handleResizeChange = (event: any, newValue: number | number[]) => {
    setResizeValue(newValue as number);
  };

  return (
    <div className="flex flex-row justify-between">
      <SortIcon />
      <div className="flex flex-row justify-between items-center">
        <PhotoSizeSelectActualIcon
          style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
        />
        <ResizeSlider
          style={{ width: "10rem", marginLeft: "1rem", marginRight: "1rem" }}
          value={resizeValue}
          onChange={handleResizeChange}
          aria-label="resize"
        />
        <PhotoSizeSelectActualIcon
          style={{ fontSize: "1.875rem", lineHeight: "2.5rem" }}
        />
      </div>
    </div>
  );
}
