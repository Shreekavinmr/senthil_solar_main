import React from "react";
import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";

// Images - Replace with actual team member images
import team1 from "assets/images/senthil.jpg";

function OurPeople() {
  return (
    <MKBox component="section" py={6} display="flex" justifyContent="center">
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} mb={5}>
            <MKTypography variant="h2" mb={2} textAlign="center">
              Our Team
            </MKTypography>
            <MKTypography variant="body1" color="text" textAlign="center">
              Meet the dedicated professionals who make Senthil Solar a trusted name in the solar industry.
            </MKTypography>
          </Grid>
          
          <Grid item xs={12} md={8} lg={6} display="flex" justifyContent="center">
            <MKBox mb={5} textAlign="center">
              <MKBox display="flex" justifyContent="center">
                <MKAvatar src={team1} alt="Senthil Kumar" size="xxl" shadow="xl" />
              </MKBox>
              <MKBox mt={2}>
                <MKTypography variant="h4">Senthil</MKTypography>
                <MKTypography variant="body2" color="text" mb={1}>
                  Founder & CEO
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  With over 15 years of experience in the energy sector, Senthil founded Senthil Solar in 2017 with a vision to make solar energy accessible to all. His expertise in solar technology and business management has been instrumental in the companys growth and success.
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
          
          <Grid item xs={12}>
            <MKBox textAlign="center">
              <MKTypography variant="h4" mb={3}>
                Our Installation Team
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Our highly trained installation team consists of certified solar technicians with extensive experience in the field. They are skilled in handling diverse installation requirements and are committed to delivering quality workmanship. Each team member undergoes regular training to stay updated with the latest solar technologies and installation techniques.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OurPeople;