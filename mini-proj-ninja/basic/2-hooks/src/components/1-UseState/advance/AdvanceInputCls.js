import React from "react";

export default class AdvanceInputCls extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null,
    };

  }
  submit() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1> Advance Input in class based -</h1>
        <form>
        <input className="formIN"
          type="text"
          name="user"
          placeholder="username"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <br />
        <input className="formIN"
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <button onClick={() => this.submit()}>Submit</button>
        </form>
      </div>
    );
  }
}
