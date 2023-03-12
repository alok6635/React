import React from "react";
import './UserCls.css'

export default class UserCls extends React.Component {
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
        <h2> User Input in class based -</h2>
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
