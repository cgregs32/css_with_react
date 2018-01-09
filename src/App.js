import React from 'react';
import { Header, Button, Segment, Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import HeaderText from './styled/HeaderText'


const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`
const Transparent = styled.div`
  background: transparent !important;
  color: white;
`
class App extends React.Component{
  state = { repos: [] }

  componentDidMount(){
    axios.get('https://api.github.com/users/cgregs32/repos?sort=create')
      .then(res => this.setState({ repos: res.data }))
  }

  render(){
    return  (
      <AppContainer>
        <Header fSize='large' as={HeaderText}>
          My Portfolio
        </Header>
        <Segment as={Transparent}>
          <Header as={HeaderText}>Projects</Header>
        </Segment>
        <Segment as={Transparent}>
          <Header as={HeaderText}>Contact</Header>
        </Segment>
      </AppContainer>
    )
  }
}

export default App;
