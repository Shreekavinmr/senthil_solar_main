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

// Icons
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";
import awardImage from "assets/images/awards_2025_1.jpg";
// Add additional image imports for gallery
import galleryImage1 from "assets/images/recognition_1.jpeg";
import galleryImage2 from "assets/images/recognition_2.jpeg";
import galleryImage3 from "assets/images/recognition_3.jpeg";

// Animation imports
import { useSpring, animated, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Create animated versions of MUI components
const AnimatedCard = animated(Card);
const AnimatedGrid = animated(Grid);
const AnimatedMKBox = animated(MKBox);

function AwardsRecognition() {
  // For header animation
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0)' : 'translateY(-50px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // For award card animation
  const [awardRef, awardInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const cardAnimation = useSpring({
    opacity: awardInView ? 1 : 0,
    transform: awardInView ? 'translateY(0)' : 'translateY(100px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // For image animation
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const imageAnimation = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-5deg)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // For award text animation
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const textAnimation = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? 'translateX(0)' : 'translateX(50px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // For "Why This Recognition Matters" section
  const [whyRef, whyInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const whyAnimation = useSpring({
    opacity: whyInView ? 1 : 0,
    transform: whyInView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Floating animation for the award icon
  const [iconFloating, setIconFloating] = useState(true);
  
  const floatingAnimation = useSpring({
    to: async (next) => {
      while (iconFloating) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    from: { transform: 'translateY(0px)' },
    config: { mass: 1, tension: 180, friction: 12 }
  });

  // For gallery section animations
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const galleryHeaderAnimation = useSpring({
    opacity: galleryInView ? 1 : 0,
    transform: galleryInView ? 'translateY(0)' : 'translateY(30px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Gallery images animation with staggered effect
  const galleryImages = [
    { src: galleryImage1, alt: "Recognition" },
    { src: galleryImage2, alt: "Recognition" },
    { src: galleryImage3, alt: "Installation Recognition" },
  ];

  const [imagesRef, imagesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const trail = useTrail(galleryImages.length, {
    opacity: imagesInView ? 1 : 0,
    transform: imagesInView ? 'scale(1)' : 'scale(0.85)',
    config: { mass: 1, tension: 280, friction: 50 },
  });

  useEffect(() => {
    return () => {
      setIconFloating(false);
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
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <AnimatedGrid 
            ref={headerRef}
            style={headerAnimation}
            container 
            item 
            xs={12} 
            lg={7} 
            justifyContent="center" 
            mx="auto"
          >
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
              Awards & Recognition
            </MKTypography>
          </AnimatedGrid>
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
        <MKBox component="section" py={6}>
          <Container>
            <Grid container item xs={12} justifyContent="center" mx="auto">
              <MKTypography variant="h2" mb={4} textAlign="center">
                Our Achievements
              </MKTypography>
            </Grid>
            
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={10} lg={8} ref={awardRef}>
                <AnimatedCard
                  style={cardAnimation}
                  sx={{
                    p: 3,
                    boxShadow: ({ boxShadows: { lg } }) => lg,
                    overflow: "hidden",
                  }}
                >
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6} lg={5} ref={imageRef}>
                      <AnimatedMKBox
                        style={imageAnimation}
                        component="img"
                        src={awardImage}
                        alt="Tamil Nadu Annual Solar Awards 2025 - Gold Award"
                        width="100%"
                        borderRadius="lg"
                        shadow="md"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} ref={textRef}>
                      <AnimatedMKBox style={textAnimation} px={1}>
                        <MKTypography variant="h4" color="primary" mb={1} display="flex" alignItems="center">
                          <animated.div style={floatingAnimation}>
                            <EmojiEventsIcon fontSize="large" sx={{ mr: 1 }} />
                          </animated.div>
                          Gold Award Winner
                        </MKTypography>
                        <MKTypography variant="h5" fontWeight="bold" mb={1}>
                          EPC Company of the Year in Residential Rooftop Solar Projects
                        </MKTypography>
                        <MKTypography variant="body1" color="text" mb={1}>
                          Tamil Nadu Annual Solar Awards 2025
                        </MKTypography>
                        <MKTypography variant="body2" color="text" mb={1}>
                          Presented at SURYACON CHENNAI 2025
                        </MKTypography>
                        <MKTypography variant="body2" color="text" mb={1}>
                          January 30, 2025 • Hotel Trident Chennai
                        </MKTypography>
                        <MKTypography variant="body1" color="text" mt={2}>
                          This prestigious recognition highlights our commitment to excellence and innovation 
                          in the solar energy sector. We are honored to be acknowledged for our contributions 
                          to sustainable energy solutions in Tamil Nadu.
                        </MKTypography>
                      </AnimatedMKBox>
                    </Grid>
                  </Grid>
                </AnimatedCard>
              </Grid>
            </Grid>
            
            <AnimatedGrid 
              ref={whyRef}
              style={whyAnimation}
              container 
              item 
              xs={12} 
              md={10} 
              lg={8} 
              justifyContent="center" 
              mx="auto" 
              mt={6}
            >
              <MKTypography variant="h4" textAlign="center" mb={2}>
                Why This Recognition Matters
              </MKTypography>
              <MKTypography variant="body1" color="text" textAlign="center">
                At Senthil Solar, we strive for excellence in every project we undertake. 
                This award represents our dedication to providing high-quality solar solutions 
                that meet and exceed our customers expectations. It validates our commitment 
                to advancing renewable energy adoption across Tamil Nadu and motivates us to 
                continue delivering outstanding service to our valued customers.
              </MKTypography>
            </AnimatedGrid>

            {/* New Photo Gallery Section */}
            <MKBox component="section" py={6} mt={4}>
              <Container>
                <AnimatedGrid 
                  ref={galleryRef}
                  style={galleryHeaderAnimation}
                  container 
                  item 
                  xs={12} 
                  justifyContent="center" 
                  mx="auto" 
                  mb={4}
                >
                  <MKTypography variant="body1" color="text" textAlign="center" mt={2} px={2}>
                    Capturing the memorable moments of our recognition and achievements
                  </MKTypography>
                </AnimatedGrid>

                <Grid container spacing={2} ref={imagesRef}>
                  {trail.map((style, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <animated.div style={style}>
                        <MKBox
                          component="img"
                          src={galleryImages[index].src}
                          alt={galleryImages[index].alt}
                          borderRadius="lg"
                          shadow="md"
                          width="100%"
                          height="250px"
                          sx={{ 
                            objectFit: "cover",
                            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                            "&:hover": {
                              transform: "translateY(-10px)",
                              boxShadow: ({ boxShadows: { xxl } }) => xxl,
                            },
                          }}
                        />
                      </animated.div>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </MKBox>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AwardsRecognition;