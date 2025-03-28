import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <div
        style={{
          background: "#666",
          color: "white",
          fontWeight: "bold",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {title}
      </div>
      {isOpened && (
        <div
          style={{
            border: "1px solid #999",
            padding: 20,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Accordion;
