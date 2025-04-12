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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import NatureIcon from '@mui/icons-material/Nature';
import BusinessIcon from '@mui/icons-material/Business';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Animation
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/canva_banner.png";

function Presentation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set components visible after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Define features data for commercial solutions
  const commercialFeatures = [
    {
      icon: <PriceChangeIcon />,
      title: "Significant Cost Savings",
      description:
        "Dramatically lower your operating expenses with a commercial solar system that significantly reduces or eliminates your monthly electricity bills."
    },
    {
      icon: <AssessmentIcon />,
      title: "Improved Return on Investment",
      description:
        "Solar energy is a long-term asset that provides a strong return on investment through reduced energy costs and potential incentives."
    },
    {
      icon: <BusinessIcon />,
      title: "Enhanced Business Reputation",
      description:
        "Demonstrate your commitment to sustainability and environmental responsibility, enhancing your brand image and attracting environmentally conscious customers."
    },
    {
      icon: <SolarPowerIcon />,
      title: "Energy Independence",
      description:
        "Reduce your reliance on the traditional power grid and volatile energy prices, gaining greater control over your energy future."
    },
    {
      icon: <NatureIcon />,
      title: "Environmental Stewardship",
      description:
        "Contribute to a cleaner environment by reducing your business's carbon footprint and promoting sustainable practices."
    },
    {
      icon: <HomeOutlinedIcon />,
      title: "Increased Property Value",
      description:
        "Commercial properties with solar installations often see an increase in their market value and are more attractive to potential buyers or tenants."
    }
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
                Senthil Solar
                <br />
                Join the solar energy revolution
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
            title="Commercial Solar Solutions"
            installationsCount="40+ INSTALLATIONS"
            description="Our commercial solar solutions are designed to meet the unique energy demands of businesses, offering a sustainable, cost-effective way to reduce operational costs and increase energy efficiency. By integrating custom solar systems, we help businesses lower electricity bills, gain energy independence, and reduce their carbon footprint, all while benefiting from available government incentives and tax benefits. Solar power not only enhances your company's green footprint but also improves resilience against rising energy prices and power outages. With long-term savings, minimal maintenance, and the ability to scale as your business grows, our solutions provide an excellent return on investment. Discover how our tailored solar systems can help your business thrive with clean, renewable energy."
            features={commercialFeatures}
            category="Commercial"
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
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  // We're creating a wrapped version of DesignBlocks
  // that adds animations to the child components
  return (
    <div>
      <motion.div
        initial="hidden"
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
            variants={featureAnimation}
            whileHover="hover"
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

export default Presentation;