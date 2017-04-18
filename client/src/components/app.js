import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#navbar"
                aria-expanded="false" aria-controls="navbar">

                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>

            </button>
              <a className="navbar-brand" href="/">Academic Cloud Manager</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div classNameName='container'>
          {this.props.children}
        </div>

        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
