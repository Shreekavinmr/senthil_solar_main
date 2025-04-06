/*
=========================================================
* Senthil Solar React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Senthil Solar React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";

// Presentation page components

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/senthil_solar_bg3.png";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; // You might need a different icon for businesses
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import NatureIcon from '@mui/icons-material/Nature';
import BusinessIcon from '@mui/icons-material/Business'; // Example commercial icon
import PriceChangeIcon from '@mui/icons-material/PriceChange'; // Example icon for cost savings
import AssessmentIcon from '@mui/icons-material/Assessment'; 

function Presentation() {
    const commercialFeatures = [
        {
          icon: <PriceChangeIcon />,
          title: "Significant Cost Savings",
          description:
            "Dramatically lower your operating expenses with a commercial solar system that significantly reduces or eliminates your monthly electricity bills.",
        },
        {
          icon: <AssessmentIcon />,
          title: "Improved Return on Investment",
          description:
            "Solar energy is a long-term asset that provides a strong return on investment through reduced energy costs and potential incentives.",
        },
        {
          icon: <BusinessIcon />,
          title: "Enhanced Business Reputation",
          description:
            "Demonstrate your commitment to sustainability and environmental responsibility, enhancing your brand image and attracting environmentally conscious customers.",
        },
        {
          icon: <SolarPowerIcon />,
          title: "Energy Independence",
          description:
            "Reduce your reliance on the traditional power grid and volatile energy prices, gaining greater control over your energy future.",
        },
        {
          icon: <NatureIcon />,
          title: "Environmental Stewardship",
          description:
            "Contribute to a cleaner environment by reducing your business's carbon footprint and promoting sustainable practices.",
        },
        {
          icon: <HomeOutlinedIcon />, // You might want a different icon representing property value
          title: "Increased Property Value",
          description:
            "Commercial properties with solar installations often see an increase in their market value and are more attractive to potential buyers or tenants.",
        },
      ];

  return (
    <>
      <DefaultNavbar
              routes={routes}
              transparent
              light
            />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                textAlign: "center",
              })}
            >
              Senthil Solar
              <br />
              Join the solar energy revolution
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
         <DesignBlocks 
                  title="Commercial Solar Solutions"
                  installationsCount="40+ INSTALLATIONS"
                  description="Our commercial solar solutions are designed to meet the energy demands of businesses. By integrating custom solar systems, we help reduce operational costs, increase energy efficiency, and provide a sustainable energy source that enhances your company's green footprint. Discover how our solar solutions can elevate your business with clean, renewable energy."
                  features={commercialFeatures}
                  category="Commercial"
                />
        </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
