import * as React from "react"
import "semantic-ui-css/semantic.min.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Grid,
  Header,
  Icon,
  Container,
  Segment,
  Button,
  Image,
} from "semantic-ui-react"

import NavLinks from "./navLinks"

const Navbar = ({setVisible, visible}) => {
  return (
    <>
      <Segment inverted color="blue" size="large" as="nav" attached>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width="6" verticalAlign="middle" as={Link} to="/">
                <Header as="h1" size="small" inverted>
                    <Image circular src='https://imgur.com/dYwvbDV.png'/>
                </Header>
              </Grid.Column>
              <Grid.Column width="10" only="mobile">
                <Header size="tiny" textAlign="right">
                  <Icon
                    name="bars"
                    link="../images/BAMIcon.png"
                    size="big"
                    inverted
                    onClick={() => setVisible(!visible)}
                  />
                </Header>
              </Grid.Column>
              <Grid.Column
                widescreen="10"
                only="computer tablet"
                textAlign="right"
              >
                <Button.Group as="ul">
                  <NavLinks />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  )
}

export default Navbar