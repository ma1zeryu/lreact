import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// class WebContent extends Component {
//   state = {};
//   render() {
//     return <h1>Web -</h1>;
//   }
// }

// export default WebContent;

const WebContent = () => {
  const { chapter } = useParams();
  return (
    <React.Fragment>
      <h1>Web - {chapter}</h1>
      <hr />
      <Link to="/web">web</Link>
    </React.Fragment>
  );
};

export default WebContent;
