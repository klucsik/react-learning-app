import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function HulladekCard(props) {
  const classes = useStyles();
  //console.log(props);

  return (
    <Card
      className={classes.card}
      onClick={() => props.HullChange(props.hullinfo)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={props.hullinfo.picurl}
          title={props.hullinfo.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.hullinfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.hullinfo.alias_list.map(alias => {
              return alias + ", ";
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Kukába!
        </Button>
      </CardActions>
    </Card>
  );
}
