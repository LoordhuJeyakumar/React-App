import React, { useEffect, useState } from "react";

function PaginationButtons({ mockData, pageLength, start, end }) {
  const [data, setData] = useState();
   
  useEffect(() => {
    let newDataArr = [];
    for (let i = 0; i < mockData.length; i = i + pageLength) {
      let j = i + pageLength;

      newDataArr.push(mockData.slice(i, j));
      setData(newDataArr);
    }
    console.log(document.querySelector('pageBtn'));
  }, [pageLength]);
  console.log(data!=undefined);
  const genratePageButton = () => {
    
    let pageIndexLength = 10;


        let pageBtnsArray = [];
        for (let i = start; i < end; i++) {
          pageBtnsArray.push(
            <button
              className="btn pageBtn"
              key={i}
              value={i}
              id={i}
              onClick={(event) => {
                let pageBtns = document.querySelectorAll(".pageBtn");
                pageBtns.forEach((btn) => btn.classList.remove("active"));
                event.target.classList.add("active");
              }}
            >
              {i + 1}
            </button>
          );
        }
        
        return pageBtnsArray;
      
  };

  return <div>{data ? genratePageButton() : "Loading...."}</div>;
}

export default PaginationButtons;
