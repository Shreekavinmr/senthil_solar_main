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
import awardImage from "assets/images/awards_2025_1.jpg"; // Add your award image

function AwardsRecognition() {
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
              Awards & Recognition
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
        <MKBox component="section" py={6}>
          <Container>
            <Grid container item xs={12} justifyContent="center" mx="auto">
              <MKTypography variant="h2" mb={4} textAlign="center">
                Our Achievements
              </MKTypography>
            </Grid>
            
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={10} lg={8}>
                <Card
                  sx={{
                    p: 3,
                    boxShadow: ({ boxShadows: { lg } }) => lg,
                    overflow: "hidden",
                  }}
                >
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6} lg={5}>
                      <MKBox
                        component="img"
                        src={awardImage}
                        alt="Tamil Nadu Annual Solar Awards 2025 - Gold Award"
                        width="100%"
                        borderRadius="lg"
                        shadow="md"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7}>
                      <MKBox px={1}>
                        <MKTypography variant="h4" color="primary" mb={1} display="flex" alignItems="center">
                          <EmojiEventsIcon fontSize="large" sx={{ mr: 1 }} />
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
                      </MKBox>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            
            <Grid container item xs={12} md={10} lg={8} justifyContent="center" mx="auto" mt={6}>
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
            </Grid>
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