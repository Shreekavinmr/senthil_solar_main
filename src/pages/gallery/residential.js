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
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import NatureIcon from '@mui/icons-material/Nature';
import BoltIcon from '@mui/icons-material/Bolt';
import SecurityIcon from '@mui/icons-material/Security';
import CalculateIcon from '@mui/icons-material/Calculate';

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

  // Define features data to pass to DesignBlocks component
  const residentialFeatures = [
    {
      icon: <SavingsIcon />,
      title: "Lower Energy Bills",
      description:
        "Reduce your monthly energy costs with a customized solar system that generates clean, renewable energy right at home. Most homeowners see savings of 50-90% on their electricity bills, with many systems paying for themselves within 5-7 years."
    },
    {
      icon: <HomeIcon />,
      title: "Increase Home Value",
      description:
        "Investing in solar panels can increase the value of your property by 3-4%, making it more attractive to potential buyers. Homes with solar installations typically sell faster and at premium prices compared to non-solar homes in the same area."
    },
    {
      icon: <NatureIcon />,
      title: "Environmental Benefits",
      description:
        "Help reduce your carbon footprint and contribute to a cleaner, more sustainable environment by switching to solar energy. A typical residential solar system can eliminate 3-4 tons of carbon emissions annually—equivalent to planting over 100 trees each year."
    },
    {
      icon: <BoltIcon />,
      title: "Energy Independence",
      description:
        "Gain freedom from rising utility rates and unpredictable energy costs. Solar power provides stability and protection against future electricity price increases, giving you more control over your household expenses for decades to come."
    },
    {
      icon: <SecurityIcon />,
      title: "Reliable Power Supply",
      description:
        "Modern solar systems with backup capabilities ensure your home has power even during grid outages. Experience peace of mind knowing essential appliances and systems can continue operating when conventional power fails."
    },
    {
      icon: <CalculateIcon />,
      title: "Attractive Financial Returns",
      description:
        "Beyond immediate bill savings, solar energy provides excellent long-term financial benefits including government incentives, tax rebates, and feed-in tariffs. Many homeowners achieve returns exceeding traditional investment options while enjoying energy security."
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
            title="Residential Custom Solar Solutions"
            installationsCount="100+ INSTALLATIONS"
            description="Discover our custom residential solar solutions designed to fit your home's unique energy needs. Our expertly tailored solar systems provide sustainable, efficient, and cost-effective energy, helping homeowners reduce their carbon footprint and energy bills. Browse our gallery to explore how our solar solutions can transform your home into an eco-friendly powerhouse. We offer a variety of packages that suit homes of all sizes. Whether you're looking for a small system to offset part of your energy needs or a fully integrated solution to power your entire household, we have the expertise to help. Let our team of solar experts guide you every step of the way, from design to installation and maintenance"
            features={residentialFeatures}
            category="Residential"
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