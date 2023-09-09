import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaHackerrank,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { SiCodecademy } from "react-icons/si";
import { isMobile } from "../../hooks/Mobile";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li style={{ marginLeft: isMobile() ? '15px' : '0'}}>
            <a target="_blank" href={socialprofils.github}>
              <FaGithub size={22} title="Github"  />
            </a>
          </li>
        )}
        {socialprofils.hackerrank && (
          <li style={{ marginLeft: isMobile() ? '15px' : '0'}}>
            <a target="_blank" href={socialprofils.hackerrank}>
              <FaHackerrank size={22} title="Hackerrank" />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li style={{ marginLeft: isMobile() ? '15px' : '0'}}>
            <a target="_blank" href={socialprofils.linkedin}>
              <FaLinkedin size={22} title="LinkedIn"  />
            </a>
          </li>
        )}
        {socialprofils.codecademy && (
          <li style={{ marginLeft: isMobile() ? '15px' : '0'}}>
            <a target="_blank" href={socialprofils.codecademy}>
              <SiCodecademy size={22} title="CodeCademy"  />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
