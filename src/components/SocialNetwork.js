import React from "react";

const anim = () => {
  const icons = document.querySelectorAll(".social-network a");
  icons.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      link.style.transform = `translate(${e.offsetX - 10}px, ${
        e.offsetY - 10
      }px)`;
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });
  });
};

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <div className="content">
        <ul>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="hover"
            rel="noreferrer noopener"
            onMouseOver={anim}
          >
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            className="hover"
            rel="noreferrer noopener"
            onMouseOver={anim}
          >
            <li>
              <i className="fab fa-twitter"></i>
            </li>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover"
            rel="noreferrer noopener"
            onMouseOver={anim}
          >
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SocialNetwork;
