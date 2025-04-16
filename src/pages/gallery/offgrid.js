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
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerIcon from '@mui/icons-material/Power';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';

// Animation
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";

function OffGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set components visible after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const offGridFeatures = [
    {
      icon: <BatteryChargingFullIcon />,
      title: "Energy Independence",
      description:
        "Break free from grid limitations with our complete off-grid solar solutions, providing reliable power anywhere, anytime.",
    },
    {
      icon: <SettingsIcon />,
      title: "Customized Power Solutions",
      description:
        "Our off-grid systems are tailored to your specific energy needs, from small cabins to large rural properties and remote facilities.",
    },
    {
      icon: <PowerIcon />,
      title: "On-Grid Inverter Systems",
      description:
        "Advanced inverter technology efficiently converts solar energy to usable electricity while maintaining connection to the utility grid, ensuring reliable power and allowing excess energy to be fed back into the grid for credits.",
    },
    {
      icon: <PhoneAndroidIcon />,
      title: "Remote Monitoring",
      description:
        "Monitor your system's performance from anywhere with our smart technology integration and remote monitoring capabilities.",
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: "Scalable Solutions",
      description:
        "Start with what you need now and easily expand your system as your energy requirements grow over time.",
    },
    {
      icon: <EngineeringIcon />,
      title: "Professional Design & Installation",
      description:
        "From site assessment to final installation, our expert team ensures your off-grid system is optimized for maximum efficiency and reliability.",
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
                Off-Grid Solar Systems
                <br />
                Power Anywhere, Anytime
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
            title="Off-Grid Solar System Solutions"
            installationsCount="20+ INSTALLATIONS"
            description="Experience the freedom and independence of off-grid solar system solutions, providing reliable, sustainable power in remote locations where traditional grid access is unavailable. Perfect for homes, cabins, farms, and more, our off-grid systems offer a clean energy alternative that ensures you have power anytime, anywhere. These systems are designed to function without relying on the grid, giving you full control over your energy needs while reducing your environmental impact. With minimal maintenance and long-lasting performance, our off-grid solar solutions are an ideal choice for those seeking energy autonomy and a sustainable way to power their property. Explore our gallery to see how our off-grid solar systems can transform your energy landscape."
            features={offGridFeatures}
            category="Off-Grid"
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

  // Animation variants for features with an electrical "pulse" effect
  const featureAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.12 * i
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
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

export default OffGrid;