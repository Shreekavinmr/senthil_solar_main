/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.
  ...
*/

// @mui material components

// @mui icons
import InfoIcon from "@mui/icons-material/Info"; // For About
import CalculateIcon from "@mui/icons-material/Calculate"; // For Solar Calculator
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary"; // For Gallery
import ContactMailIcon from "@mui/icons-material/ContactMail"; // For Reach Us
import PhoneIcon from "@mui/icons-material/Phone"; // For phone number

// Pages
import ContactUs from "layouts/pages/landing-pages/contact-us";

import AboutUsOverview from "layouts/pages/landing-pages/about-us/overview";
import AboutUsValues from "layouts/pages/landing-pages/about-us/values";
import AboutUsPeople from "layouts/pages/landing-pages/about-us/people";

// Sections
import Presentation from "pages/gallery/residential";
import Awards from "pages/gallery/awards";
import Presentation1 from "pages/gallery/commercial";
import SolarPump from "pages/gallery/solarpump";
import StreetLight from "pages/gallery/streetlight";
import OffGrid from "pages/gallery/offgrid";
import Presentation2 from "pages/solarcalculator";

const routes = [
  {
    name: "About",
    icon: <InfoIcon />, // Represents information about the company
    collapse: [
      {
        name: "Overview",
        route: "/about/overview",
        component: <AboutUsOverview />,
      },
      {
        name: "Our Values",
        route: "/about/our-values",
        component: <AboutUsValues />,
      },
      {
        name: "Our People",
        route: "/about/people",
        component: <AboutUsPeople />,
      },
    ],
  },
  {
    name: "Calculator",
    icon: <CalculateIcon />, // Represents information about the company
    collapse: [
      {
        name: "Solar Calculator",
        route: "/solarcalculator",
        component: <Presentation2 />,
      },
      {
        name: "EB Bill Calculator",
        route: "https://www.tnebnet.org/awp/tariffMaster?execution=e2s1",
      },
    ],
  },
  {
    name: "Gallery",
    icon: <PhotoLibraryIcon />, // Represents a collection of images
    collapse: [
      {
        name: "Awards",
        route: "/gallery/awards",
        component: <Awards />,
      },
      {
        name: "Residential",
        route: "/gallery/residential",
        component: <Presentation />,
      },
      {
        name: "Commercial",
        route: "/gallery/commercial",
        component: <Presentation1 />,
      },
      {
        name: "Street Lights",
        route: "/gallery/streetlights",
        component: <StreetLight />,
      },
      {
        name: "Solar Pumps",
        route: "/gallery/solarpumps",
        component: <SolarPump />,
      },
      {
        name: "Off Grid Systems",
        route: "/gallery/offgridsystem",
        component: <OffGrid />,
      },
    ],
  },
  {
    name: "Reach us",
    icon: <ContactMailIcon />, // Represents contact or communication
    collapse: [
      {
        name: "Contact us",
        route: "/contact-us",
        component: <ContactUs />,
      },
    ],
  },
  {
    name: "9655079555", // Assuming this is a phone number
    icon: <PhoneIcon />, // Represents a phone contact
  },
];

export default routes;