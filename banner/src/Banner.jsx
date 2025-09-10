import React from "react";

function Banner({ text = "Merhaba!", color = "turquoise", size = "medium" }) {
  const styles = {
    backgroundColor: color,
    padding: size === "large" ? "20px" : "10px",
    borderRadius: "8px",
    color: "#fff",
    textAlign: "center",
  };
  return <div style={styles}>{text}</div>;
}

export default Banner;
