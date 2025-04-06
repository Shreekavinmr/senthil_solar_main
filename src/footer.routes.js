

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
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Senthi Solar
      <MKTypography
        component="a"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
