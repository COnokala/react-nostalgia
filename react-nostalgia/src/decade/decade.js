import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './decade.css'

const backendURL = ""

export default class updateDecade extends Component {
    constructor(props) {
      super(props)
      this.state = {
        url: '',
        author: '',
        description: ''
      }
      this.handleValueChange = this.handleValueChange.bind(this)
      this.updateDecade = this.updateDecade.bind(this)
    }
  
    componentDidMount() {
      fetch(backendURL + this.props.match.params.title)
        .then(response => response.json()
          .then((parsedJson) => {
            this.setState({
              ...parsedJson
            })
          }))
    }
  
    handleValueChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    }
  
    updateImage() {
      fetch(backendURL + this.props.match.params.title, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          "Host": "https://great-beyond-photos.herokuapp.com/amateur",
          "Connection": "keep-alive"
        },
        body: JSON.stringify(this.state)
      }).then(res => console.log(res))
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <div className="container">
          <StyledEditArticle>
            <StyledForm>
              <StyledHeader>Update Decade</StyledHeader>
              <StyledInput
                name="year"
                type="text"
                placeholder="decade"
                value={this.state.url}
                onChange={this.handleValueChange}
              />
              <StyledInput
                name="author"
                type="text"
                placeholder="Author Name"
                value={this.state.author}
                onChange={this.handleValueChange}
              />
              <StyledInput
                name="description"
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleValueChange}
              />
              <Link to={`/amateur/${this.state.title}`}>
                <StyledUpdateClick onClick={this.updateImage}>
                  Submit
              </StyledUpdateClick>
              </Link>
            </StyledForm>
          </StyledEditArticle>
        </div>
      )
    }
  }