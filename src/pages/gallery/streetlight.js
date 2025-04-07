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
import bgImage from "assets/images/canva_banner.png";

// Using only Star icon to avoid import errors
import StarIcon from '@mui/icons-material/Star';

function StreetLight() {
  const streetLightFeatures = [
    {
      icon: <StarIcon />,
      title: "Reliable Illumination",
      description:
        "Ensure well-lit streets and public spaces with our advanced solar street lighting systems that operate reliably through the night.",
    },
    {
      icon: <StarIcon />,
      title: "Energy Independence",
      description:
        "Free from grid dependencies, our solar street lights harness renewable energy, reducing electricity costs and carbon footprint.",
    },
    {
      icon: <StarIcon />,
      title: "Reduced Infrastructure Costs",
      description:
        "Eliminate expensive trenching, wiring, and grid connection costs with our standalone solar street lighting solutions.",
    },
    {
      icon: <StarIcon />,
      title: "Enhanced Public Safety",
      description:
        "Improve security and safety in communities with consistent, bright illumination of streets, parks, and public spaces.",
    },
    {
      icon: <StarIcon />,
      title: "Intelligent Lighting Controls",
      description:
        "Our smart solar street lights feature motion sensors and programmable dimming to maximize efficiency.",
    },
    {
      icon: <StarIcon />,
      title: "Durable & Weather Resistant",
      description:
        "Built to withstand harsh environmental conditions, our solar street lights ensure long-lasting performance with minimal maintenance.",
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
              Solar Street Lighting
              <br />
              Illuminating Communities with Clean Energy
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
                  title="Solar Lighting Solutions"
                  installationsCount="60+ INSTALLATIONS"
                  description="Illuminate your property with our high-quality solar lighting solutions, designed to provide reliable, energy-efficient, and eco-friendly illumination for homes, gardens, and businesses. Our solar lights harness the power of the sun to deliver sustainable lighting that reduces energy consumption and lowers electricity costs. Easy to install and maintain, these lights are perfect for enhancing outdoor spaces with minimal environmental impact. Whether you’re looking to light up your garden, pathway, or commercial property, our solar lights offer a cost-effective, low-maintenance solution that adds both beauty and functionality to any outdoor area, all while reducing your carbon footprint."
                  features={streetLightFeatures}
                  category="Solar Lights"
                />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default StreetLight;