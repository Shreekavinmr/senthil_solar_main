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
import WaterIcon from '@mui/icons-material/Water';
import SavingsIcon from '@mui/icons-material/Savings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';

// Animation
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";

function SolarHeater() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set components visible after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const solarHeaterFeatures = [
    {
      icon: <WaterIcon />,
      title: "Hot Water Year-Round",
      description:
        "Enjoy reliable hot water supply throughout the year with our efficient solar water heating systems that work even on cloudy days.",
    },
    {
      icon: <SavingsIcon />,
      title: "Reduced Utility Bills",
      description:
        "Cut your energy costs by up to 80% by harnessing free solar energy for water heating instead of relying on electricity or gas.",
    },
    {
      icon: <WbSunnyIcon />,
      title: "Clean Energy Solution",
      description:
        "Minimize your carbon footprint with our zero-emission solar water heaters that use renewable energy from the sun.",
    },
    {
      icon: <EngineeringIcon />,
      title: "Low Maintenance Design",
      description:
        "Our solar water heaters are built to last with minimal maintenance requirements and durable components that withstand harsh weather.",
    },
    {
      icon: <HomeIcon />,
      title: "Suitable for All Homes",
      description:
        "Whether you have a small apartment or large residence, our scalable solar water heating solutions can be customized to your needs.",
    },
    {
      icon: <SpaIcon />,
      title: "Comfortable Living",
      description:
        "Experience the comfort of consistent hot water for bathing, cooking, and cleaning while contributing to environmental sustainability.",
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
                Solar Water Heaters
                <br />
                Sustainable Hot Water Solutions
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
            title="Solar Water Heating Solutions"
            installationsCount="120+ INSTALLATIONS"
            description="Transform your home's water heating system with our premium solar water heaters, designed to provide abundant hot water while significantly reducing energy costs. Our solar thermal systems efficiently capture and convert sunlight into heat, providing your household with hot water for bathing, cooking, and cleaning. These environmentally friendly systems decrease your dependency on conventional energy sources, lowering both your utility bills and carbon footprint. Featuring advanced technology and durable construction, our solar water heaters deliver reliable performance in various climate conditions. Whether you're building a new home or upgrading your existing water heating system, our solar solutions offer a smart investment that combines economic benefits with environmental responsibility."
            features={solarHeaterFeatures}
            category="Solar Heaters"
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

export default SolarHeater;