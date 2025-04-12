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
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";
import { keyframes } from "@mui/system";

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Senthil Solar React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";
import senthilsolartext from "assets/images/senthil_solar_logo_text.png";

// Define animations
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

function Presentation() {
  // Animation state for the entire page
  const [showPage, setShowPage] = useState(false);

  // Trigger the fly-in animation when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 300); // Slight delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <Slide direction="up" in={showPage} timeout={1000}>
      <div>
        <DefaultNavbar routes={routes} transparent light />
        <MKBox
          minHeight="120vh"
          width="100%"
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Bottom Corner Elements - Benefits */}
          <Fade in={showPage} timeout={1800}>
            <MKBox
              sx={{
                position: "absolute",
                bottom: "15%",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "space-around",
                px: { xs: 2, md: 10 },
                zIndex: 2,
              }}
            >
              {["Savings", "Clean Energy", "Reliability"].map((benefit, index) => (
                <MKBox
                  key={index}
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(5px)",
                    borderRadius: "50px",
                    px: 2,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: `${floatAnimation} ${4 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <MKTypography
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    fontSize="0.75rem"
                  >
                    {benefit}
                  </MKTypography>
                </MKBox>
              ))}
            </MKBox>
          </Fade>

          <Container>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <Zoom in={showPage} timeout={1000}>
                <MKBox
                  component="img"
                  src={senthilsolartext}
                  alt="Senthil Solar"
                  sx={{
                    width: { xs: "70%", md: "70%" },
                    mx: "auto",
                    display: "block",
                    animation: `${pulseAnimation} 3s ease-in-out infinite`,
                  }}
                />
              </Zoom>

              <Fade in={showPage} timeout={1000}>
                <MKTypography
                  variant="h3"
                  color="white"
                  textAlign="center"
                  mb={2}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  Join the solar energy revolution
                </MKTypography>
              </Fade>

              <Fade in={showPage} timeout={1000}>
                <MKTypography
                  variant="body1"
                  color="white"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                  sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                    animation: `${floatAnimation} 4s ease-in-out infinite`,
                  }}
                >
                  Shaping a greener tomorrow with reliable solar energy solutions for every need
                </MKTypography>
              </Fade>

              <Zoom in={showPage} timeout={1500}>
                <MKBox textAlign="center" mt={4} width="100%">
                  <MKButton
                    variant="contained"
                    color="warning"
                    size="large"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 600,
                      borderRadius: "50px",
                      px: 4,
                      py: 1.5,
                      boxShadow: "0 8px 20px rgba(255, 193, 7, 0.4)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 25px rgba(255, 193, 7, 0.5)",
                      },
                      transition: "all 0.3s",
                    }}
                  >
                    Get Started
                  </MKButton>
                </MKBox>
              </Zoom>
            </Grid>
          </Container>
        </MKBox>

        <Fade in={showPage} timeout={1000}>
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Counters />
            <Information />
            <Pages />
            <Testimonials />
            <Download />
          </Card>
        </Fade>

        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </div>
    </Slide>
  );
}

export default Presentation;