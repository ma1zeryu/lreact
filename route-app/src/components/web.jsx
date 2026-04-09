import React, { Component } from "react";
import { Link } from "react-router-dom";

class Web extends Component {
  state = {
    webs: [
      { id: 1, title: "HTML" },
      { id: 2, title: "CSS" },
      { id: 3, title: "SASS" },
      { id: 4, title: "JS" },
      { id: 5, title: "拳皇" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h1>Web</h1>
        <hr />
        <div className="container">
          {this.state.webs.map((web) => {
            return (
              <div key={web.id}>
                <Link to={`/web/content/${web.id}`}>
                  {web.id + ". " + web.title}
                </Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Web;
