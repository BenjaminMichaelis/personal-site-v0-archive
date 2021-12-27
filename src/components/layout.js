import * as React from "react"
import PropTypes from "prop-types"
import { Sidebar, Menu, Container, Button, Segment } from "semantic-ui-react"
import Navbar from "./navbar"
import NavLinks from "./navLinks"
import { Emojione } from "react-emoji-render";

const Layout = ({ children }) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="push"
        color="blue"
        inverted
        vertical
        onHide={() => setVisible(false)}
        visible={visible}
        width="thin"
      >
        <Button.Group vertical style={{ marginTop: "3rem" }}>
          <NavLinks />
        </Button.Group>
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>
        <Navbar
          setVisible={setVisible}
          visible={visible}
        />
        <Container as="main">{children}</Container>
        <Segment attached color="blue" inverted textAlign="center" as="footer">
        &copy; {new Date().getFullYear()}, Made with <Emojione text="❤️" className="text-base mx-1 mt-1" /> by Benjamin Michaelis
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout