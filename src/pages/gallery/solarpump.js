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

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/senthil_solar_bg3.png";

import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import BuildIcon from '@mui/icons-material/Build';

import StarIcon from '@mui/icons-material/Star';

function SolarPump() {
  const solarPumpFeatures = [
    {
      icon: <OpacityIcon />,
      title: "Reliable Water Supply",
      description:
        "Ensure a consistent and dependable water source for agriculture, livestock, or domestic use with our robust solar pumping systems.",
    },
    {
      icon: <WbSunnyIcon />,
      title: "Sustainable Irrigation",
      description:
        "Power your irrigation needs with clean, renewable solar energy, reducing your reliance on fossil fuels and lowering operational costs.",
    },
    {
      icon: <AttachMoneyIcon />,
      title: "Reduced Operating Costs",
      description:
        "Eliminate fuel expenses and minimize maintenance with our solar pumps, leading to significant long-term cost savings.",
    },
    {
      icon: <StarIcon />,
      title: "Increased Agricultural Productivity",
      description:
        "Provide consistent water for your crops and livestock, leading to improved yields and overall productivity.",
    },
    {
      icon: <PowerOffIcon />,
      title: "Off-Grid Water Solutions",
      description:
        "Ideal for remote locations, our solar pumps offer a reliable water source independent of the electricity grid.",
    },
    {
      icon: <BuildIcon />,
      title: "Low Maintenance & Durable",
      description:
        "Our solar pumping systems are designed for durability and require minimal maintenance, ensuring long-lasting performance.",
    },
  ];

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
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
              Solar Pumping Solutions
              <br />
              Powering Water Solutions with Solar Energy
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
                  title="Solar Pump Solutions"
                  installationsCount="35+ INSTALLATIONS"
                  description="Harness the power of the sun with our solar pump solutions. Whether it's for irrigation, water supply, or other applications, our solar pumps offer efficient, sustainable, and cost-effective solutions. With reliable performance and minimal maintenance, our solar pumps are designed to meet your specific water pumping needs while helping you save energy and reduce operational costs."
                  features={solarPumpFeatures}
                  category="Solar Pump"
                />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SolarPump;