import { useState } from "react";
import data from "./data/contents";

import "./styles/App.css";

function App() {
  const [currentFilm, setCurrentFilm] = useState<number>(0);

  return (
    <main>
      <section>
        <div className="texts">
          {data.map((item, i) => (
            <div
              className={`text ${
                currentFilm === i ? "active" : currentFilm > i ? "pre" : "post"
              }`}
              key={i}
            >
              <img src={item.logo} alt={`Logo pour le film ${item.title}`} />
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
          <div className="dates">
            <h2>
              <span>1</span>
              <span>9</span>
              <span className="undread">
                {/* {data.map(({ date }, i) => (
                  <span
                    className={
                      currentFilm === i
                        ? "active"
                        : currentFilm > i
                        ? "pre"
                        : "post"
                    }
                  >
                    {date.slice(2, 3)}
                  </span>
                ))} */}
                <span
                  className={
                    data[currentFilm].date.slice(2, 3) === "7"
                      ? "active"
                      : "pre"
                  }
                >
                  7
                </span>
                <span
                  className={
                    data[currentFilm].date.slice(2, 3) === "8"
                      ? "active"
                      : "post"
                  }
                >
                  8
                </span>
              </span>
              <span>
                {data.map(({ date }, i) => (
                  <span
                    className={
                      currentFilm === i
                        ? "active"
                        : currentFilm > i
                        ? "pre"
                        : "post"
                    }
                  >
                    {date.slice(3, 4)}
                  </span>
                ))}
              </span>
            </h2>
          </div>
        </div>
        <div className="images">
          {data.map((item, i) => (
            <img
              src={item.image}
              alt="Poster du film"
              key={i}
              className={
                currentFilm === i ? "active" : currentFilm > i ? "pre" : "post"
              }
            />
          ))}
        </div>
      </section>
      <aside>
        <div className="buttons">
          <button
            onClick={() =>
              setCurrentFilm((prev) => (prev === 0 ? 0 : prev - 1))
            }
          >
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.5 12.0001C35.5 12.3316 35.3683 12.6496 35.1339 12.884C34.8995 13.1184 34.5815 13.2501 34.25 13.2501L4.7675 13.2501L12.635 21.1151C12.8697 21.3498 13.0016 21.6682 13.0016 22.0001C13.0016 22.3321 12.8697 22.6504 12.635 22.8851C12.4003 23.1198 12.0819 23.2517 11.75 23.2517C11.4181 23.2517 11.0997 23.1198 10.865 22.8851L0.864997 12.8851C0.748592 12.769 0.656234 12.6311 0.593219 12.4792C0.530204 12.3273 0.497764 12.1645 0.497764 12.0001C0.497764 11.8357 0.530204 11.6729 0.593219 11.521C0.656234 11.3692 0.748592 11.2312 0.864997 11.1151L10.865 1.11511C11.0997 0.880396 11.4181 0.748534 11.75 0.748534C12.0819 0.748534 12.4003 0.880396 12.635 1.11511C12.8697 1.34983 13.0016 1.66817 13.0016 2.00011C13.0016 2.33205 12.8697 2.6504 12.635 2.88511L4.7675 10.7501L34.25 10.7501C34.5815 10.7501 34.8995 10.8818 35.1339 11.1162C35.3683 11.3507 35.5 11.6686 35.5 12.0001Z"
                fill={
                  currentFilm === 0 ? "var(--accent-darken)" : "var(--accent)"
                }
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentFilm((prev) =>
                prev === data.length - 1 ? data.length - 1 : prev + 1
              )
            }
          >
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 11.9999C0.5 11.6684 0.631696 11.3504 0.866117 11.116C1.10054 10.8816 1.41848 10.7499 1.75 10.7499L31.2325 10.7499L23.365 2.88488C23.1303 2.65017 22.9984 2.33182 22.9984 1.99988C22.9984 1.66795 23.1303 1.3496 23.365 1.11488C23.5997 0.880167 23.9181 0.748307 24.25 0.748307C24.5819 0.748307 24.9003 0.880167 25.135 1.11488L35.135 11.1149C35.2514 11.231 35.3438 11.3689 35.4068 11.5208C35.4698 11.6727 35.5022 11.8355 35.5022 11.9999C35.5022 12.1643 35.4698 12.3271 35.4068 12.479C35.3438 12.6308 35.2514 12.7688 35.135 12.8849L25.135 22.8849C24.9003 23.1196 24.5819 23.2515 24.25 23.2515C23.9181 23.2515 23.5997 23.1196 23.365 22.8849C23.1303 22.6502 22.9984 22.3318 22.9984 21.9999C22.9984 21.6679 23.1303 21.3496 23.365 21.1149L31.2325 13.2499L1.75 13.2499C1.41848 13.2499 1.10054 13.1182 0.866117 12.8838C0.631696 12.6493 0.5 12.3314 0.5 11.9999Z"
                fill={
                  currentFilm === data.length - 1
                    ? "var(--accent-darken)"
                    : "var(--accent)"
                }
              />
            </svg>
          </button>
        </div>
        <div className="steps">
          {data.map((item, i) => (
            <div
              key={i}
              className={
                currentFilm === i ? "active" : currentFilm > i ? "pre" : "post"
              }
            ></div>
          ))}
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </aside>
    </main>
  );
}

export default App;
