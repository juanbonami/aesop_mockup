import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div data-component-id="comp" data-component-type="aesop">
        <section>
          <div className="wrapper">
            <div>
              <h1 className="title">Clensing, nourishing hand care </h1>
              <div>
                <p>
                  Washing hands with vigour and rigour is an essential act. It
                  is best followed by restorative, aromatic hydration: just like
                  the uneasy mind, hard-working hands deserve attentive
                  nurturing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
