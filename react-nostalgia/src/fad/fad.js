import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './fad.css'

const backendURL = ""

export default class updateFad extends Component {
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
              <StyledHeader>Update Fad</StyledHeader>
              <StyledInput
                name="name"
                type="text"
                placeholder="name"
                value={this.state.url}
                onChange={this.handleValueChange}
              />
              <StyledInput
                name="image_url"
                type="text"
                placeholder="Image"
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
              <StyledInput
                name="decade"
                type="text"
                placeholder="decade"
                value={this.state.description}
                onChange={this.handleValueChange}
              />
            </StyledForm>
          </StyledEditArticle>
        </div>
      )
    }
  }