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
// import Box from "@mui/material/Box";

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

// const rotateAnimation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

function Presentation() {
  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSolar, setShowSolar] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showCornerElements, setShowCornerElements] = useState(false);
  const [showSections, setShowSections] = useState({
    counters: false,
    information: false,
    pages: false,
    testimonials: false,
    download: false,
  });

  // Key statistics data
  // Trigger animations sequentially when component mounts
  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 300);
    const solarTimer = setTimeout(() => setShowSolar(true), 600);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 900);
    const descriptionTimer = setTimeout(() => setShowDescription(true), 1300);
    const cornerElementsTimer = setTimeout(() => setShowCornerElements(true), 1500);
    const cardTimer = setTimeout(() => setShowCard(true), 1800);
    
    // Animated sections
    const countersTimer = setTimeout(() => 
      setShowSections(prev => ({ ...prev, counters: true })), 2300);
    const informationTimer = setTimeout(() => 
      setShowSections(prev => ({ ...prev, information: true })), 2500);
    const pagesTimer = setTimeout(() => 
      setShowSections(prev => ({ ...prev, pages: true })), 2700);
    const testimonialsTimer = setTimeout(() => 
      setShowSections(prev => ({ ...prev, testimonials: true })), 2900);
    const downloadTimer = setTimeout(() => 
      setShowSections(prev => ({ ...prev, download: true })), 3100);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(solarTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(descriptionTimer);
      clearTimeout(cornerElementsTimer);
      clearTimeout(cardTimer);
      clearTimeout(countersTimer);
      clearTimeout(informationTimer);
      clearTimeout(pagesTimer);
      clearTimeout(testimonialsTimer);
      clearTimeout(downloadTimer);
    };
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
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
          overflow: "hidden"
        }}
      >
        {/* Left Corner Element */}
        {/* <Fade in={showCornerElements} timeout={1200}>
  <MKBox
    sx={{
      position: "absolute",
      top: "25%",
      right: { xs: "5%", md: "8%" }, // Changed from left to right
      transform: "translateY(-50%)",
      zIndex: 2,
    }}
  >
    <Card
      sx={{
        p: 2,
        borderRadius: "10px",
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        maxWidth: { xs: "150px", md: "200px" },
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)"
        }
      }}
    >
      <MKTypography
        variant="button"
        color="warning"
        fontWeight="bold"
        mb={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="span"
          sx={{
            mr: 1,
            animation: `${rotateAnimation} 4s linear infinite`,
            display: "inline-block"
          }}
        >
          ☀️
        </Box>
        ECO-FRIENDLY
      </MKTypography>
      <MKTypography variant="caption" color="white">
        Reduce your carbon footprint with our sustainable solar solutions
      </MKTypography>
    </Card>
  </MKBox>
</Fade> */}


        {/* Bottom Corner Elements - Benefits */}
        <Fade in={showCornerElements} timeout={1800}>
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
            <Fade in={showTitle} timeout={1000}>
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
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "1px",
                })}
              >
                Senthil
              </MKTypography>
            </Fade>
            
            <Zoom in={showSolar} timeout={1000}>
              <MKTypography
                variant="h1"
                color="warning"
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                  textAlign: "center",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textShadow: "0 0 15px rgba(255, 193, 7, 0.6)",
                  animation: `${pulseAnimation} 2s infinite`,
                })}
              >
                SOLAR
              </MKTypography>
            </Zoom>
            
            <Fade in={showSubtitle} timeout={1000}>
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
            
            <Slide direction="up" in={showDescription} timeout={1000}>
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
            </Slide>
            
            <Zoom in={showDescription} timeout={1500}>
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
      
      <Slide direction="up" in={showCard} timeout={1000}>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <Fade in={showSections.counters} timeout={800}>
            <div>
              <Counters />
            </div>
          </Fade>
          
          <Fade in={showSections.information} timeout={800}>
            <div>
              <Information />
            </div>
          </Fade>
          
          <Fade in={showSections.pages} timeout={800}>
            <div>
              <Pages />
            </div>
          </Fade>
          
          <Fade in={showSections.testimonials} timeout={800}>
            <div>
              <Testimonials />
            </div>
          </Fade>
          
          <Fade in={showSections.download} timeout={800}>
            <div>
              <Download />
            </div>
          </Fade>
        </Card>
      </Slide>
      
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;