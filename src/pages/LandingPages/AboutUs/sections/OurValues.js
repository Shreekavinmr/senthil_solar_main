import React from "react";
import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";

function OurValues() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} mb={5}>
            <MKTypography variant="h2" mb={2} textAlign="center">
              Our Core Values
            </MKTypography>
            <MKTypography variant="body1" color="text" textAlign="center">
              At Senthil Solar, our values guide everything we do. They are the foundation of our company culture and our approach to business.
            </MKTypography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MKBox textAlign="center" p={3}>
              <MKBox color="info" mb={3}>
                <Icon fontSize="large">eco</Icon>
              </MKBox>
              <MKTypography variant="h4" mb={2}>
                Sustainability
              </MKTypography>
              <MKTypography variant="body2" color="text">
                We are committed to promoting sustainable energy solutions that minimize environmental impact. By harnessing the power of the sun, we help reduce carbon emissions and preserve natural resources for future generations. Every solar installation we complete contributes to a cleaner, greener planet.
              </MKTypography>
            </MKBox>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MKBox textAlign="center" p={3}>
              <MKBox color="info" mb={3}>
                <Icon fontSize="large">verified</Icon>
              </MKBox>
              <MKTypography variant="h4" mb={2}>
                Quality & Reliability
              </MKTypography>
              <MKTypography variant="body2" color="text">
                We believe in delivering the highest quality workmanship and using premium components in all our installations. Our systems are built to last, offering reliable performance year after year. We stand behind our work with robust warranties and ongoing support, ensuring peace of mind for our customers.
              </MKTypography>
            </MKBox>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <MKBox textAlign="center" p={3}>
              <MKBox color="info" mb={3}>
                <Icon fontSize="large">groups</Icon>
              </MKBox>
              <MKTypography variant="h4" mb={2}>
                Customer-Centric
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Our customers are at the heart of everything we do. We prioritize their needs, preferences, and satisfaction throughout the entire process. We listen carefully, provide transparent information, and work collaboratively to design solar solutions that meet their specific requirements and budget constraints.
              </MKTypography>
            </MKBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MKBox textAlign="center" p={3}>
              <MKBox color="info" mb={3}>
                <Icon fontSize="large">engineering</Icon>
              </MKBox>
              <MKTypography variant="h4" mb={2}>
                Innovation
              </MKTypography>
              <MKTypography variant="body2" color="text">
                We continuously seek innovative solutions to improve efficiency, reduce costs, and enhance performance. We stay updated with the latest advancements in solar technology to offer our customers cutting-edge products and services. Our commitment to innovation drives us to find better ways to capture and utilize solar energy.
              </MKTypography>
            </MKBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MKBox textAlign="center" p={3}>
              <MKBox color="info" mb={3}>
                <Icon fontSize="large">handshake</Icon>
              </MKBox>
              <MKTypography variant="h4" mb={2}>
                Integrity & Transparency
              </MKTypography>
              <MKTypography variant="body2" color="text">
                We operate with honesty and integrity in all our business dealings. We provide clear, transparent information about our products, services, and pricing. Our customers can trust us to deliver on our promises and to maintain the highest ethical standards in everything we do.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OurValues;