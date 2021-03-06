// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import CardDeck from "react-bootstrap/CardDeck";

// const Noticias = makeStyles((theme) => ({
//   root: {
//     maxWidth: 300,
//     margin: "3%",
//     marginLeft: "7%",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = Noticias();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <React.Fragment>
//       <div className="SectionTitleNews">
//         <h1> Naza news</h1>
//         <hr className="linhaText" />
//       </div>
//       <div>
//         <CardDeck
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Card className={classes.root}>
//             <CardHeader
//               id="1"
//               className="text-center"
//               title=" Novidades "
//               subheader="Agosto 26, 2020"
//             />
//             <CardMedia
//               className={classes.media}
//               image="./muriloCard.png"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Conheça a discografia de Murilo Santiagoo
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph> Discografia</Typography>
//                 <Typography paragraph>
//                   Clique no Link e veja toda a discografia de nosso Artista!!
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>

//           <Card className={classes.root}>
//             <CardHeader
//               id="2"
//               className="text-center"
//               title=" Novidades "
//               subheader="Agosto 26, 2020"
//             />
//             <CardMedia
//               className={classes.media}
//               image="./muriloCard.png"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Conheça a discografia de Murilo Santiago
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph> Discografia:</Typography>
//                 <Typography paragraph>
//                   Clique no Link e veja toda a discografia de nosso Artista!!
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>

//           <Card className={classes.root}>
//             <CardHeader
//               id="3"
//               className="text-center"
//               title=" Novidades "
//               subheader="Agosto 26 ,2020"
//             />
//             <CardMedia
//               className={classes.media}
//               image="./muriloCard.png"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Conheça a discografia de Murilo Santiago
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph> Discografia:</Typography>
//                 <Typography paragraph>
//                   Clique no Link e veja toda a discografia de nosso Artista!!
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>
//         </CardDeck>
//         <CardDeck
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Card className={classes.root}>
//             <CardHeader
//               id="4"
//               className="text-center"
//               title=" Novidades "
//               subheader="Agosto 26, 2020"
//             />
//             <CardMedia
//               className={classes.media}
//               image="./muriloCard.png"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Conheça a discografia de Murilo Santiago
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph> Discografia:</Typography>
//                 <Typography paragraph>
//                   Clique no Link e veja toda a discografia de nosso Artista!!
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>

//           <Card className={classes.root}>
//             <CardHeader
//               id="5"
//               className="text-center"
//               title=" Novidades "
//               subheader="Agosto 26, 2020"
//             />
//             <CardMedia
//               className={classes.media}
//               image="./muriloCard.png"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Conheça a discografia de Murilo Santiago
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph> Discografia:</Typography>
//                 <Typography paragraph>
//                   Clique no Link e veja toda a discografia de nosso Artista!!
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>

//           <Card className={classes.root}>
//             <CardHeader
//               id="6"
//               className="text-center"
//               title=" Novidades "
//               subheader="Agosto 26 ,2020"
//             />
//             <CardMedia
//               className={classes.media}
//               image="./muriloCard.png"
//               title="Paella dish"
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Conheça a discografia de Murilo Santiago
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph> Discografia:</Typography>
//                 <Typography paragraph>
//                   Clique no Link e veja toda a discografia de nosso Artista!!
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card>
//         </CardDeck>
//       </div>
//     </React.Fragment>
//   );
// }
