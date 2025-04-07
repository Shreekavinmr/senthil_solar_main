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
      title: "On-Grid Inverter Systems",
      description:
        "Advanced inverter technology efficiently converts solar energy to usable electricity while maintaining connection to the utility grid, ensuring reliable power and allowing excess energy to be fed back into the grid for credits.",
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
                  description="Experience the freedom and independence of off-grid solar system solutions, providing reliable, sustainable power in remote locations where traditional grid access is unavailable. Perfect for homes, cabins, farms, and more, our off-grid systems offer a clean energy alternative that ensures you have power anytime, anywhere. These systems are designed to function without relying on the grid, giving you full control over your energy needs while reducing your environmental impact. With minimal maintenance and long-lasting performance, our off-grid solar solutions are an ideal choice for those seeking energy autonomy and a sustainable way to power their property. Explore our gallery to see how our off-grid solar systems can transform your energy landscape."
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