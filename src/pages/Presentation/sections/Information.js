/*
=========================================================
* Material Kit 2 React - v2.1.0
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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/card_front.jpg";
import bgBack from "assets/images/card_back.jpg";
import ContactUs from "layouts/pages/landing-pages/contact-us";

function Information() {
  return (
    <MKBox component="section" py={3} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="energy_savings_leaf"
                title={
                  <>
                    Senthil Solar
                  </>
                }
                description="5/244 MILK DIARY STREET Villarasampatti 4 Road Nasiyanoor Main Road, Post, Thindal, Tamil Nadu 638012."
              />
              <RotatingCardBack
                image={bgBack}
                title="Energy Independence"
                description="Take control of your energy costs and reduce your carbon footprint with our complete solar solutions"
                action={{
                  type: "internal",
                  label: "Get a Free Quote",
                  route: "/pages/landing-pages/contact-us",
                  component: <ContactUs />,
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="solar_power"
                  title="Expert Consultation"
                  description="Built by solar experts for homeowners. Schedule a free assessment and discover the perfect solar solution for your property."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="eco"
                  title="Advanced Technology"
                  description="We use the industry's most efficient solar panels and battery systems for maximum energy production and savings."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="savings"
                  title="Maximize Incentives"
                  description="Our team helps you navigate federal tax credits, state rebates, and local incentives to minimize your investment costs."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="monitoring"
                  title="Smart Monitoring"
                  description="Track your system's performance in real-time with our mobile app, regardless of your location or device."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
