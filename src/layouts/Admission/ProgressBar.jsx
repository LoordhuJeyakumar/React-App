import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 50) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 50);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <LinearProgress variant="determinate" value={50} />
    </>
  );
}

export default ProgressBar;
