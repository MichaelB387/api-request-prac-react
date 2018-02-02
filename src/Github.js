/* What this is meant to do is wait until we knoe this component is placed into the DOM
and then we want to make a request to fetch some data from the github api */


import React, { Component } from 'react';

const urlForUsername = username => 
  `https://api.github.com/users/${username}`

  class Github extends Component {
      constructor(props) {
          super(props)
          this.state = {}
      }

      componentDidMount(){
          fetch(urlForUsername(this.props.username))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    githubData: d
                })
            })
            
      }
      render () {
          if (!this.state.githubData) return <p>Loading....</p>
          return (
              <div>
                  <h2>{this.state.githubData.name}</h2>
              </div>
          )
      }
  }

  export default Github
