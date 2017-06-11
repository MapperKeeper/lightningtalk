// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  flooding: require("../assets/flood_tweet.png"),
  flooding2: require("../assets/flooding_2.png"),
  flooding3: require("../assets/flooding_4.png"),
  tweetmap: require("../assets/tweet_with_map.png"),
  floodmap: require("../assets/flood_map.png"),
  dashboard: require("../assets/dashboard.png"),
  editscreen: require("../assets/edit_screen.png"),
  sharescreen: require("../assets/share.png"),
  blast: require("../assets/share_small.gif"),
  import: require("../assets/import.png"),
  mentions: require("../assets/mentions.gif"),
  providers: require("../assets/providers.png"),
  mapbot: require("../assets/mapbot.png")
};

preloader(images);

const theme = createTheme({
  primary: "rgb(34,34,64)",
  secondary: "rgb(255,255,255)",
  tertiary: "rgb(43,173,187)",
  quartenary: "rgb(89,226,158)"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src="https://s3.amazonaws.com/mapper-logos/mapbot-msg.png"></Image>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            MapperKeeper
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Rapidly Build and Share Beautiful Maps
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Social Media
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            share ideas almost instantly
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.flooding2.replace("/", "")} target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.flooding3.replace("/", "")} target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Location Is Important
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.flooding.replace("/", "")} target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Maps
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.tweetmap.replace("/", "")} target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.floodmap.replace("/", "")} target='_blank' width="80%"></Image><br/>
          <Link textColor="secondary" href="https://www.mapperkeeper.com/maps/892bf830-afbc-4a06-b3cc-401339aabcab" target="_blank">View Map</Link>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Steps</Heading>
          <List>
            <ListItem>Create a map</ListItem>
            <ListItem>Add data to map</ListItem>
            <ListItem>Write content about map</ListItem>
            <ListItem>Link content to map?</ListItem>
            <ListItem>Take screenshot of map, resize</ListItem>
            <ListItem>Write tweet.  Write facebook post.</ListItem>
            <ListItem>Attach photo</ListItem>
            <ListItem>Tweet! Post!</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Build and Share Faster
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Challenge Accepted!
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.dashboard.replace("/", "")} width="90%" target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.editscreen.replace("/", "")} width="90%" target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.sharescreen.replace("/", "")} height="600px" target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.blast.replace("/", "")} width="80%" target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            What Else?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.import.replace("/", "")} width="80%" target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.mentions.replace("/", "")} width="80%" target='_blank'></Image>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>And More...</Heading>
          <List>
            <ListItem>Support for Mapbox simplestyle-spec</ListItem>
            <ListItem>Add Images and YouTube Videos</ListItem>
            <ListItem>Beautiful Esri Basemaps</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Free for Everybody
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            https://www.mapperkeeper.com
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            @MapperKeeper
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            follow us on twitter
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image src={images.mapbot.replace("/", "")} height="250px"></Image>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
