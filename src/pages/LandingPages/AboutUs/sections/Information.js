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

// Senthil Solar React components
import MKBox from "components/MKBox";

// Senthil Solar React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="solar_power"
                    title="End-to-End Solar Solutions"
                    description="We offer complete solar installations, ensuring seamless integration with your existing home or business electrical systems for a hassle-free experience from start to finish."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="credit_card"
                    title="Flexible Financing Options"
                    description="We provide various financing plans, including easy payment options and assistance with solar rebates, making clean energy more affordable for everyone."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5}}>
                  <DefaultInfoCard
                    icon="build"
                    title="Top-Quality Solar Equipment"
                    description="Our systems feature industry-leading solar panels and inverters from trusted manufacturers, all backed by extensive warranties to ensure long-term reliability and performance."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5}}>
                  <DefaultInfoCard
                    icon="bar_chart"
                    title="Real-Time Performance Monitoring"
                    description="Our advanced monitoring tools allow you to track your solar production, energy savings, and system performance in real time, ensuring maximum efficiency and peace of mind."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5}}>
                  <DefaultInfoCard
                    icon="engineering"
                    title="Expert Installation Team"
                    description="Our experienced team of certified solar professionals ensures quick and efficient installations, adhering to the highest industry standards to guarantee a perfect fit for your needs."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5}}>
                  <DefaultInfoCard
                    icon="support"
                    title="Maintenance & Support"
                    description="We offer ongoing maintenance services to keep your solar system performing at its best. Our customer support team is always available to assist with any questions or issues you may have."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="electric_car"
                    title="Energy Independence"
                    description="Solar power provides an opportunity to reduce reliance on the grid and take control of your energy consumption, leading to long-term savings and energy security."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get Insights On Solar"
              description="Website visitors today demand clear information about renewable energy solutions — especially when considering solar installation. Because of the environmental and economic benefits."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
