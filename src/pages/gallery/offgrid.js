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

// Using only Star icon to avoid import errors
import StarIcon from '@mui/icons-material/Star';

function OffGrid() {
  const offGridFeatures = [
    {
      icon: <StarIcon />,
      title: "Energy Independence",
      description:
        "Break free from grid limitations with our complete off-grid solar solutions, providing reliable power anywhere, anytime.",
    },
    {
      icon: <StarIcon />,
      title: "Customized Power Solutions",
      description:
        "Our off-grid systems are tailored to your specific energy needs, from small cabins to large rural properties and remote facilities.",
    },
    {
      icon: <StarIcon />,
      title: "Battery Storage Systems",
      description:
        "Advanced battery technology ensures continuous power supply even during cloudy days and nighttime, delivering around-the-clock reliability.",
    },
    {
      icon: <StarIcon />,
      title: "Remote Monitoring",
      description:
        "Monitor your system's performance from anywhere with our smart technology integration and remote monitoring capabilities.",
    },
    {
      icon: <StarIcon />,
      title: "Scalable Solutions",
      description:
        "Start with what you need now and easily expand your system as your energy requirements grow over time.",
    },
    {
      icon: <StarIcon />,
      title: "Professional Design & Installation",
      description:
        "From site assessment to final installation, our expert team ensures your off-grid system is optimized for maximum efficiency and reliability.",
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
              Off-Grid Solar Systems
              <br />
              Power Anywhere, Anytime
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
                  title="Off-Grid Solar System Solutions"
                  installationsCount="20+ INSTALLATIONS"
                  description="Experience the freedom and independence of off-grid solar systems. Our off-grid solutions provide reliable, sustainable power, even in remote locations. Designed for homes, cabins, farms, and more, our systems offer a clean energy alternative that doesn't rely on the grid, ensuring you have power anywhere, anytime. Explore our gallery to see how an off-grid solar system can meet your energy needs."
                  features={offGridFeatures}
                  category="Off-Grid"
                />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default OffGrid;