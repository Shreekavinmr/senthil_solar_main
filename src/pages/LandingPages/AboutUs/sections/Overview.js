import React from "react";
import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Overview() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mb={5}>
              <MKTypography variant="h3" mb={2}>
                Our Company
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Established in 2017, Senthil Solar has rapidly grown to become a trusted name in the solar energy industry. With over 6 years of experience, we specialize in designing and installing high-quality solar solutions for residential, commercial, and industrial clients.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mb={5}>
              <MKTypography variant="h3" mb={2}>
                Our Services
              </MKTypography>
              <MKTypography variant="body2" color="text">
                We offer a comprehensive range of solar solutions including:
                <br /><br />
                • Residential rooftop solar systems<br />
                • Commercial solar installations<br />
                • Solar water pumps<br />
                • Solar street lights<br />
                • Off-grid solar systems<br />
                • Solar maintenance and support
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mb={5}>
              <MKTypography variant="h3" mb={2}>
                Our Commitment
              </MKTypography>
              <MKTypography variant="body2" color="text">
                We are committed to providing clean, renewable energy solutions that reduce carbon footprints and energy costs. Our team of experienced professionals ensures that each installation meets the highest standards of quality and efficiency. We take pride in our work and stand behind every system we install.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12}>
            <MKBox mb={5}>
              <MKTypography variant="h3" mb={2}>
                Our Journey
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Since our inception in 2017, we have successfully completed over 500 installations across residential and commercial sectors. Our journey began with a simple mission: to make solar energy accessible and affordable for everyone. Today, we have expanded our services to include a wide range of solar solutions tailored to meet diverse energy needs.
                <br /><br />
                We have built a reputation for reliability, quality workmanship, and exceptional customer service. Our team of certified technicians has the expertise to handle projects of any scale, from small residential installations to large commercial systems.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Overview;