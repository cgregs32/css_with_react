import React from 'react';
import { Header, Button, Segment, Card, Icon, Grid } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';
import HeaderText from './styled/HeaderText';
import axios from 'axios';

const repos = [
  { id: 1, stargazers_count: 0, full_name: 'wdjungst/create-repack-app', description: 'foo' },
  { id: 2, stargazers_count: 1, full_name: 'wdjungst/create-react-app', description: 'foo' },
  { id: 3, stargazers_count: 0, full_name: 'wdjungst/somesuperlongnameyayfoo', description: 'foo' },
  { id: 4, stargazers_count: 1, full_name: 'wdjungst/yahtzee', description: 'foo' },
  { id: 5, stargazers_count: 0, full_name: 'wdjungst/words_with_friends', description: 'foo', open_issues: 5 },
  { id: 6, stargazers_count: 0, full_name: 'wdjungst/hello', description: 'foo' },
  { id: 7, stargazers_count: 1, full_name: 'wdjungst/cat-tinder', description: 'foo' },
  { id: 8, stargazers_count: 0, full_name: 'wdjungst/devpointlabs', description: 'foo' },
]

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 1px 1px black;
  animation: ${rotate360} 2s linear infinite;
`

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 10px;
  color: ${ props => props.theme.fg } !important;
  background-color: ${ props => props.theme.bg }
`

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`

const Transparent = styled.div`
  background: transparent !important;
`

const StyledCard = styled(Card)`
  height: 200px;
`

const IssueCard = StyledCard.extend`
  border: solid 3px red !important;
`

const Truncated = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

class App extends React.Component{
  state = { repos: [] }

  componentDidMount(){
    this.setState({ repos })
    // axios.get('https://api.github.com/users/cgregs32/repos?sort=create')
    //   .then(res => this.setState({ repos: res.data }))
  }

  mapRepos = () => {
    return this.state.repos.map(r => {
      const CardType = r.open_issues > 0 ? IssueCard: StyledCard
      return (
        <Grid.Column key={r.id} width={4}>
          <CardType>
            <Card.Content>
              <Card.Header>
                <Truncated>{ r.full_name }</Truncated>
              </Card.Header>
              <Card.Meta>{ r.description }</Card.Meta>
              { r.stargazers_count > 0 &&
                <Star>
                  <Icon name="star" />
                </Star>
              }
            </Card.Content>
            <Card.Content extra>
              <ButtonLink
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </ButtonLink>
            </Card.Content>
          </CardType>
        </Grid.Column>
      )
    })
  }

  render(){
    return  (
      <AppContainer>
        <Header fSize='large' as={HeaderText}>
          My Portfolio
        </Header>
        <Segment as={Transparent}>
          <Header as={HeaderText}>Projects</Header>
          <Grid>
            <Grid.Row>
              {this.mapRepos()}
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment as={Transparent}>
          <Header as={HeaderText}>Contact</Header>
        </Segment>
      </AppContainer>
    )
  }
}

export default App;
