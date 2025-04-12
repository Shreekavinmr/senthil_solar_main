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
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BoltIcon from '@mui/icons-material/Bolt';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EngineeringIcon from '@mui/icons-material/Engineering';

// Animation
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";

function StreetLight() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set components visible after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const streetLightFeatures = [
    {
      icon: <WbSunnyIcon />,
      title: "Reliable Illumination",
      description:
        "Ensure well-lit streets and public spaces with our advanced solar street lighting systems that operate reliably through the night.",
    },
    {
      icon: <BoltIcon />,
      title: "Energy Independence",
      description:
        "Free from grid dependencies, our solar street lights harness renewable energy, reducing electricity costs and carbon footprint.",
    },
    {
      icon: <SavingsIcon />,
      title: "Reduced Infrastructure Costs",
      description:
        "Eliminate expensive trenching, wiring, and grid connection costs with our standalone solar street lighting solutions.",
    },
    {
      icon: <SecurityIcon />,
      title: "Enhanced Public Safety",
      description:
        "Improve security and safety in communities with consistent, bright illumination of streets, parks, and public spaces.",
    },
    {
      icon: <SmartphoneIcon />,
      title: "Intelligent Lighting Controls",
      description:
        "Our smart solar street lights feature motion sensors and programmable dimming to maximize efficiency.",
    },
    {
      icon: <EngineeringIcon />,
      title: "Durable & Weather Resistant",
      description:
        "Built to withstand harsh environmental conditions, our solar street lights ensure long-lasting performance with minimal maintenance.",
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
                Solar Street Lighting
                <br />
                Illuminating Communities with Clean Energy
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
            title="Solar Lighting Solutions"
            installationsCount="60+ INSTALLATIONS"
            description="Illuminate your property with our high-quality solar lighting solutions, designed to provide reliable, energy-efficient, and eco-friendly illumination for homes, gardens, and businesses. Our solar lights harness the power of the sun to deliver sustainable lighting that reduces energy consumption and lowers electricity costs. Easy to install and maintain, these lights are perfect for enhancing outdoor spaces with minimal environmental impact. Whether you're looking to light up your garden, pathway, or commercial property, our solar lights offer a cost-effective, low-maintenance solution that adds both beauty and functionality to any outdoor area, all while reducing your carbon footprint."
            features={streetLightFeatures}
            category="Solar Lights"
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

  // Animation variants for features
  const featureAnimation = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1 * i
      }
    }),
    hover: {
      scale: 1.03,
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
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
        // We can use this custom render prop to animate each feature in the DesignBlocks component
        // if DesignBlocks supports render props; if not, you may need to modify DesignBlocks directly
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

export default StreetLight;