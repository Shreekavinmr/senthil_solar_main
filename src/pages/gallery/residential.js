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
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import NatureIcon from '@mui/icons-material/Nature';
import BoltIcon from '@mui/icons-material/Bolt';
import SecurityIcon from '@mui/icons-material/Security';
import CalculateIcon from '@mui/icons-material/Calculate';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";

function Presentation() {
  // Define features data to pass to DesignBlocks component
  const residentialFeatures = [
    {
      icon: <SavingsIcon />,
      title: "Lower Energy Bills",
      description:
        "Reduce your monthly energy costs with a customized solar system that generates clean, renewable energy right at home. Most homeowners see savings of 50-90% on their electricity bills, with many systems paying for themselves within 5-7 years."
    },
    {
      icon: <HomeIcon />,
      title: "Increase Home Value",
      description:
        "Investing in solar panels can increase the value of your property by 3-4%, making it more attractive to potential buyers. Homes with solar installations typically sell faster and at premium prices compared to non-solar homes in the same area."
    },
    {
      icon: <NatureIcon />,
      title: "Environmental Benefits",
      description:
        "Help reduce your carbon footprint and contribute to a cleaner, more sustainable environment by switching to solar energy. A typical residential solar system can eliminate 3-4 tons of carbon emissions annually—equivalent to planting over 100 trees each year."
    },
    {
      icon: <BoltIcon />,
      title: "Energy Independence",
      description:
        "Gain freedom from rising utility rates and unpredictable energy costs. Solar power provides stability and protection against future electricity price increases, giving you more control over your household expenses for decades to come."
    },
    {
      icon: <SecurityIcon />,
      title: "Reliable Power Supply",
      description:
        "Modern solar systems with backup capabilities ensure your home has power even during grid outages. Experience peace of mind knowing essential appliances and systems can continue operating when conventional power fails."
    },
    {
      icon: <CalculateIcon />,
      title: "Attractive Financial Returns",
      description:
        "Beyond immediate bill savings, solar energy provides excellent long-term financial benefits including government incentives, tax rebates, and feed-in tariffs. Many homeowners achieve returns exceeding traditional investment options while enjoying energy security."
    }
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
          title="Residential Custom Solar Solutions"
          installationsCount="100+ INSTALLATIONS"
          description="Discover our custom residential solar solutions designed to fit your home's unique energy needs. Our expertly tailored solar systems provide sustainable, efficient, and cost-effective energy, helping homeowners reduce their carbon footprint and energy bills. Browse our gallery to explore how our solar solutions can transform your home into an eco-friendly powerhouse. We offer a variety of packages that suit homes of all sizes. Whether you're looking for a small system to offset part of your energy needs or a fully integrated solution to power your entire household, we have the expertise to help. Let our team of solar experts guide you every step of the way, from design to installation and maintenance"
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