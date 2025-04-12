import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import OurValues from "pages/LandingPages/AboutUs/sections/OurValues";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger each child animation
    },
  },
};

// Variants for individual elements
const popInVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.6,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      duration: 0.8,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      duration: 0.8,
    },
  },
};

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
  },
};

function AboutUsValues() {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navbar Animation */}
        <motion.div variants={navbarVariants}>
          <DefaultNavbar routes={routes} transparent light />
        </motion.div>

        {/* Hero Section Animation */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MKBox
            minHeight="75vh"
            width="100%"
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.6),
                  rgba(gradients.dark.state, 0.6)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Container>
              <Grid
                container
                item
                xs={12}
                lg={8}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ mx: "auto", textAlign: "center" }}
              >
                {/* Title Animation */}
                <motion.div variants={slideInLeft}>
                  <MKTypography
                    variant="h1"
                    color="white"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                    })}
                  >
                    Our Core Values
                  </MKTypography>
                </motion.div>

                {/* Description Animation */}
                <motion.div variants={slideInRight}>
                  <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                    The principles that guide our mission to make solar energy accessible to all
                  </MKTypography>
                </motion.div>
              </Grid>
            </Container>
          </MKBox>
        </motion.div>

        {/* Card Animation */}
        <motion.div variants={popInVariants}>
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <OurValues />
          </Card>
        </motion.div>

        {/* Footer Animation */}
        <motion.div variants={footerVariants}>
          <MKBox pt={6} px={1} mt={6}>
            <DefaultFooter content={footerRoutes} />
          </MKBox>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutUsValues;