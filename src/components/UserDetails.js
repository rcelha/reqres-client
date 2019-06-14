import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress
} from "@material-ui/core";

export default ({ loading = false, email, first_name, last_name, avatar }) => (
  <Card>
    <CardActionArea>
      {loading ? (
        <CircularProgress />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt={`${last_name}'s avatar`}
          title={`${last_name}'s avatar`}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {last_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {first_name} {last_name} ({email})
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);
