/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=43.334284,17.806298&ll=43.334284,17.806298&z=3&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
