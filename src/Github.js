/* What this is meant to do is wait until we knoe this component is placed into the DOM
and then we want to make a request to fetch some data from the github api */


import React, { Component } from 'react';

const urlForUsername = username => 
  `https://api.github.com/users/${username}`

  class Github extends Component {
      constructor(props) {
          super(props)
          this.state = {
              requestFailed: false
          }
      }

      componentDidMount(){
          fetch(urlForUsername(this.props.username))
          .then(response => {
              if (!response.ok) {
                  throw Error("Network request failed")
              }
              return response
          })


            .then(d => d.json())
            .then(d => {
                this.setState({
                    githubData: d
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
            
      }
      render () {
          if (this.state.requestFailed) return <p>Failed!</p>          
          if (!this.state.githubData) return <p>Loading....</p>
          return (
              <div>
                  <h2>{this.state.githubData.name}</h2>
              </div>
          )
      }
  }

  export default Github
