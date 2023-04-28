import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollButton() {
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button>
      <ArrowUpwardIcon
        // onClick={scrollToTop}
        style={{ display: showTopBtn ? "inline" : "none" }}
      />
    </button>
  );
}
