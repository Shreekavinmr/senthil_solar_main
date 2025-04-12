import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import OurPeople from "pages/LandingPages/AboutUs/sections/OurPeople";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger for a snappier feel
    },
  },
};

// Variants for individual elements
const pulseCardVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for pulse (overshoot)
    },
  },
};

const popUpTwist = {
  hidden: { opacity: 0, y: 50, rotate: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 22,
      duration: 0.6,
    },
  },
};

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }, // Softer easing
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.4 }, // Softer and faster
  },
};

function AboutUsPeople() {
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
          transition={{ duration: 0.8, ease: "easeInOut" }} // Softer easing
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
                {/* Description Animation */}
                <motion.div variants={popUpTwist}>
                  <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                    Powering the solar revolution with expert installation and engineering. We
                    deliver reliable, high-quality solutions focused on sustainability and customer
                    satisfaction.
                  </MKTypography>
                </motion.div>
              </Grid>
            </Container>
          </MKBox>
        </motion.div>

        {/* Card Animation */}
        <motion.div variants={pulseCardVariants}>
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <OurPeople />
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

export default AboutUsPeople;