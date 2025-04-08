

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Senthil Solar",
    image: logoCT,
    route: "/",
  },
  socials: [
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "Overview", href: "about/overview" },
        { name: "Our Values", href: "about/our-values" },
        { name: "People", href: "about/people" },
      ],
    },
    {
      name: "Gallery",
      items: [
        { name: "Awards and Recognition", href: "gallery/awards" },
        { name: "Residential", href: "gallery/residential" },
        { name: "Commercial", href: "gallery/commercial" },
        { name: "Street Lights", href: "gallery/streetlights" },
        { name: "Solar Pumps", href: "gallery/solarpumps" },
        { name: "Off Grid Systems", href: "gallery/offgridsystem" },
      ],
    },
    {
      name: "Reach Us",
      items: [
        { name: "contact us", href: "/contact-us" },
      ],
    },
    {
      name: "Calculator",
      items: [
        { name: "Solar Calculator", href: "/solarcalculator" },
        { name: "EB Calculator", href: "https://www.tnebnet.org/awp/tariffMaster?execution=e1s1" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      5/244 MILK DIARY STREET Villarasampatti 4 Road Nasiyanoor Main Road, Post, Thindal, Tamil Nadu 638012
      <br/>Phone: 096550 79555<br/>
      Email: km.senthilsolar@gmail.com<br/>
      All rights reserved. Copyright &copy; {date} Senthi Solar
    </MKTypography>
  ),
};
