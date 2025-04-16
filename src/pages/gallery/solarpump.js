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

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Senthil Solar React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";

// Icons for features
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import BuildIcon from '@mui/icons-material/Build';
import AgricultureIcon from '@mui/icons-material/Agriculture';

// Animation
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";

function SolarPump() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set components visible after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const solarPumpFeatures = [
    {
      icon: <OpacityIcon />,
      title: "Reliable Water Supply",
      description:
        "Ensure a consistent and dependable water source for agriculture, livestock, or domestic use with our robust solar pumping systems.",
    },
    {
      icon: <WbSunnyIcon />,
      title: "Sustainable Irrigation",
      description:
        "Power your irrigation needs with clean, renewable solar energy, reducing your reliance on fossil fuels and lowering operational costs.",
    },
    {
      icon: <AttachMoneyIcon />,
      title: "Reduced Operating Costs",
      description:
        "Eliminate fuel expenses and minimize maintenance with our solar pumps, leading to significant long-term cost savings.",
    },
    {
      icon: <AgricultureIcon />,
      title: "Increased Agricultural Productivity",
      description:
        "Provide consistent water for your crops and livestock, leading to improved yields and overall productivity.",
    },
    {
      icon: <PowerOffIcon />,
      title: "Off-Grid Water Solutions",
      description:
        "Ideal for remote locations, our solar pumps offer a reliable water source independent of the electricity grid.",
    },
    {
      icon: <BuildIcon />,
      title: "Low Maintenance & Durable",
      description:
        "Our solar pumping systems are designed for durability and require minimal maintenance, ensuring long-lasting performance.",
    },
  ];

  // Animation variants
  const headerAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -100,
      transition: { 
        duration: 0.5 
      }
    }
  };

  const heroTextAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const footerAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 1.2,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerAnimation}
      >
        <DefaultNavbar
          routes={routes}
          transparent
          light
        />
      </motion.div>

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
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={heroTextAnimation}
          >
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
                Solar Pumping Solutions
                <br />
                Powering Water Solutions with Solar Energy
              </MKTypography>
            </Grid>
          </motion.div>
        </Container>
      </MKBox>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={cardAnimation}
      >
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
          <AnimatedDesignBlocks 
            title="Solar Pump Solutions"
            installationsCount="35+ INSTALLATIONS"
            description="Harness the power of the sun with our solar pump solutions, designed to provide efficient, sustainable, and cost-effective water pumping for a wide range of applications, including irrigation, water supply, and more. Our solar pumps deliver reliable performance with minimal maintenance, ensuring that your water pumping needs are met while reducing energy consumption and operational costs. Whether you're powering a small irrigation system or a large-scale water supply setup, our solar pumps offer a green alternative that saves money, reduces your carbon footprint, and ensures a continuous, eco-friendly water supply."
            features={solarPumpFeatures}
            category="Solar Pump"
            isVisible={isVisible}
          />
        </Card>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={footerAnimation}
      >
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </motion.div>
    </>
  );
}

// Wrap DesignBlocks with animations
function AnimatedDesignBlocks({ ...props }) {
  // Animation variants for title and description
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for features with water-inspired animation
  const featureAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: 0.15 * i
      }
    }),
    hover: {
      scale: 1.05,
      y: -8,
      boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.12)",
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={textAnimation}
      >
        {/* This will be our animated header section */}
        <div className="design-blocks-header">
          {/* The original DesignBlocks component will render its title and description here */}
        </div>
      </motion.div>

      {/* Render the original DesignBlocks component with feature animations */}
      <DesignBlocks 
        {...props}
        renderFeature={(feature, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            animate={"visible"}
            whileHover="hover"
            variants={featureAnimation}
            custom={index}
          >
            {/* Render the feature content here */}
            <div className="feature-content">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        )}
      />
    </div>
  );
}

export default SolarPump;