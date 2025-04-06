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

// Icons for features
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import NatureIcon from '@mui/icons-material/Nature';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/senthil_solar_bg3.png";

function Presentation() {
  // Define features data to pass to DesignBlocks component
  const residentialFeatures = [
    {
      icon: <HomeOutlinedIcon />,
      title: "Lower Energy Bills",
      description:
        "Reduce your monthly energy costs with a customized solar system that generates clean, renewable energy right at home.",
    },
    {
      icon: <SolarPowerIcon />,
      title: "Increase Home Value",
      description:
        "Investing in solar panels can increase the value of your property, making it more attractive to potential buyers.",
    },
    {
      icon: <NatureIcon />,
      title: "Environmental Benefits",
      description:
        "Help reduce your carbon footprint and contribute to a cleaner, more sustainable environment by switching to solar energy.",
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
          title="Residential Custom Solar Solutions"
          installationsCount="100+ INSTALLATIONS"
          description="Discover our custom residential solar solutions designed to fit your home's unique energy needs. Our expertly tailored solar systems provide sustainable, efficient, and cost-effective energy, helping homeowners reduce their carbon footprint and energy bills. Browse our gallery to explore how our solar solutions can transform your home into an eco-friendly powerhouse."
          features={residentialFeatures}
          category="Residential"
        />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;