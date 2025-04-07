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

// react-router-dom components

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Presentation page components

// Rotating Card components
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Assets
import modi_scheme from "assets/images/image.png";
import bgFront from "assets/images/card_front.jpg";
import bgBack from "assets/images/card_back.jpg";

// Icons
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import SaveIcon from "@mui/icons-material/Save";
import InfoIcon from "@mui/icons-material/Info";

function Pages() {
  return (
    <MKBox component="section" py={8} sx={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Fade in={true} timeout={1000}>
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
          >
            <MKBadge
              variant="contained"
              color="success"
              badgeContent="Government Schemes"
              container
              circular
              sx={{ mb: 3, p: 2 }}
            />
            <MKTypography variant="h1" fontWeight="bold" mb={2}>
              Harness Solar Power with Government Schemes
            </MKTypography>
            <MKTypography variant="body1" color="text" fontSize="1.2rem" mb={4}>
              Leverage government incentives to make solar energy affordable and accessible.
              <br /> Discover schemes designed to power your home or business sustainably.
            </MKTypography>
            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
              <MKButton 
                variant="gradient" 
                color="info" 
                startIcon={<InfoIcon />}
              >
                Learn More
              </MKButton>
              <MKButton 
                variant="outlined" 
                color="info" 
                startIcon={<SolarPowerIcon />}
                href="/solarcalculator"
              >
                Calculate Savings
              </MKButton>
            </Box>
          </Grid>
        </Fade>

        {/* Modi Scheme Image with enhanced styling */}
        <Grid container justifyContent="center" sx={{ mb: 8 }}>
          <MKBox
            component="img"
            src={modi_scheme}
            alt="Modi Solar Scheme"
            width="85%"
            sx={{ 
              maxWidth: "100%", 
              borderRadius: "xl", 
              boxShadow: "0 20px 27px 0 rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              }
            }}
          />
        </Grid>

        <Divider sx={{ my: 6, opacity: 0.3 }} />
        
        {/* Section Title */}
        <MKTypography variant="h3" textAlign="center" mb={6} fontWeight="bold">
          Popular Solar Schemes <SolarPowerIcon fontSize="large" />
        </MKTypography>

        {/* Rotating Cards for Schemes with enhanced styling */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={800}>
              <Box>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="solar_power"
                    title="Pradhan Mantri Surya Ghar Muft Bijli Yojana"
                    description="To provide one crore households with rooftop solar systems, delivering 300 units of free electricity per month, promoting renewable energy access in underserved areas."
                    color="info"
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Key Features"
                    description="Eligible households receive rooftop solar systems and 300 free units of electricity monthly, reducing energy costs. The scheme prioritizes economically weaker sections and rural households, ensuring equitable energy access."
                    action={{
                      type: "internal",
                      label: "Apply Now",
                      color: "info"
                    }}
                  />
                </RotatingCard>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={1200}>
              <Box>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="agriculture"
                    title="Chief Minister's Solar Powered Pumpset Scheme"
                    description="To empower farmers with off-grid standalone solar-powered pumping systems for irrigation, ensuring sustainable and cost-effective water management for agriculture."
                    color="success"
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Key Features"
                    description="Farmers receive a 70% subsidy for the solar-powered pumping systems, making it affordable to implement. The scheme promotes eco-friendly, off-grid solar solutions, reducing dependency on conventional electricity for irrigation."
                    action={{
                      type: "internal",
                      label: "Apply Now",
                      color: "success"
                    }}
                  />
                </RotatingCard>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4}>
            <Fade in={true} timeout={1600}>
              <Box>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="roofing"
                    title="Rooftop Solar Subsidy Scheme"
                    description="To promote the adoption of renewable energy through rooftop solar systems by providing financial support to households and businesses for installing grid-connected solar panels."
                    color="warning"
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Key Features"
                    description="Tamil Nadu offers subsidies for the installation of grid-connected rooftop solar systems, reducing the financial burden on individuals and organizations. The portal allows users to easily apply for both subsidized and non-subsidized solar installations, streamlining the process for applicants."
                    action={{
                      type: "internal",
                      label: "Apply Now",
                      color: "warning"
                    }}
                  />
                </RotatingCard>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Additional CTA Section */}
        <Grid container sx={{ mt: 10, mb: 4, backgroundColor: "#e3f2fd", borderRadius: "xl", p: 4, boxShadow: "lg" }}>
          <Grid item xs={12} md={8}>
            <MKTypography variant="h4" fontWeight="bold" color="info" mb={2}>
              Ready to Save with Solar Power?
            </MKTypography>
            <MKTypography variant="body1" color="text">
              Our experts can help you identify the best government scheme for your specific needs and location.
              Start your solar journey today and contribute to a sustainable future!
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MKButton variant="gradient" color="info" size="large" startIcon={<SaveIcon />} href="/contact-us">
              Get Free Consultation
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;