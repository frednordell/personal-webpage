import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "./Link";

export default function Copyright() {
  return (
    <Typography
      id="copyright"
      variant="body2"
      color="textSecondary"
      align="center"
    >
      This work is licensed under a{" "}
      <a
        rel="license"
        target="_blank"
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
        International License
      </a>
      <br />
      <a
        rel="license"
        target="_blank"
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        <img
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
        />
      </a>
    </Typography>
  );
}
