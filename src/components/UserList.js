import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

export default ({ users, loadMoreDisabled = false, onLoadMoreClick }) => (
  <Box display="flex" flexDirection="column">
    <Box>
      <List>
        {users.map(user => (
          <ListItem
            button
            key={user.id}
            component={Link}
            to={`/users/${user.id}/`}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText>{user.email}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
    <Box>
      <Button
        fullWidth
        color="secondary"
        disabled={loadMoreDisabled}
        onClick={onLoadMoreClick}
      >
        Load more...
      </Button>
    </Box>
  </Box>
);
