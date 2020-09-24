function ContactNoti() {
  return (
    <>
      <div className="noti-container">
        <div className="noti-content-box">
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{`
            * {
                    font-family: sans-serif;
                }
      `}</style>
      <style jsx>{`
        .noti-container {
          width: 100vw;
          height: 100vh;
          position: absolute;
          background-color: rgba(0, 136, 75, 0.53);
        }

        .checkmark {
          position: absolute;
          top: calc(50% - 100px);
          left:calc(50% - 100px);
          width: 200px;
          height: 200px;
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: rgb(0, 177, 81);
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #4bb71b;
          animation: fill 0.4s ease-in-out 0.4s forwards,
            scale 0.3s ease-in-out 0.9s both;
          margin: 0 auto;
        }
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #444;
          fill: whitesmoke;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale {
          0%,
          100% {
            transform: none;
          }

          50% {
            transform: scale3d(1.5, 1.5, 2);
          }
        }

        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 30px #4bb71b;
          }
        }
      `}</style>
    </>
  );
}
export default ContactNoti;
