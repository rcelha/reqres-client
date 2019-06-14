import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import UserList from "./containers/UserList";
import UserDetails from "./containers/UserDetails";
import EditUser from "./components/EditUser";
// import UserList from "./containers/UserQuery";

export default () => {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Box display="flex">
          <Box display="flex" flexDirection="column">
            <Box>
              <Button fullWidth color="primary" component={Link} to="/users/">
                Add user
              </Button>
            </Box>
            <Box flexGrow={1}>
              <UserList />
            </Box>
          </Box>
          <Box flexGrow={1}>
            <Route path="/" exact component={() => <div />} />
            <Route path="/users/" exact component={EditUser} />
            <Route path="/users/:id" component={UserDetails} />
          </Box>
        </Box>
      </div>
    </Router>
  );
};
