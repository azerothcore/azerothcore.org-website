import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

function DiscordWidget() {
  const [height, setHeight] = useState(0);

  const toggleHeight = () => {
    setHeight(height === 0 ? 505 : 0);
  };
  return (
    <div className="chat_box">
      <button type="button" className="chat_head" onClick={toggleHeight}>
        Open Chat
      </button>
      <AnimateHeight duration={500} height={height}>
        <div className="chat_body">
          <iframe
            title="discord chat widget"
            src="https://discordapp.com/widget?id=217589275766685707&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
          />
        </div>
      </AnimateHeight>
      <style jsx>
        {`
          .chat_box {
            position: fixed;
            right: 20px;
            bottom: 0px;
            width: 350px;
          }
          .chat_body {
            padding-top: 5px;
          }
          .chat_head {
            background: #738bd7;
            color: white;
            padding: 15px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px 5px 0px 0px;
            text-align: center;
            font-size: 0.75em;
            width: 100%;
            border: none;
          }
          .chat_head:focus {
            outline: 5px auto -webkit-focus-ring-color;
          }
          .hidden {
            visibility: hidden;
          }
          .visible {
            visibility: visible;
          }
          @media (max-width: 767px) {
            .chat_box {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}

export default DiscordWidget;
