// React imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// MUI components and styled components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import NatureIcon from '@mui/icons-material/Nature';

// PropTypes
import PropTypes from "prop-types";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function SolutionCard({ image, name, pro }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        transition: "transform 0.4s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered 
          ? "rgba(0, 0, 0, 0.1) 0px 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
          : "rgba(0, 0, 0, 0.06) 0px 2px 8px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Upper part with image */}
      <Box
        sx={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {pro && (
          <Box
            sx={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#1e40af",
              borderRadius: "20px",
              py: 0.5,
              px: 2,
              fontSize: "0.75rem",
              fontWeight: "600",
              backdropFilter: "blur(4px)",
            }}
          >
            Premium
          </Box>
        )}
      </Box>
      
      {/* Content part */}
    </Box>
  );
}

// PropTypes for SolutionCard
SolutionCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
  route: PropTypes.string,
  pro: PropTypes.bool,
};

// Default props for SolutionCard
SolutionCard.defaultProps = {
  pro: false,
  name: "",
  count: 0,
  route: "",
};

function FeatureItem({ icon, title, description }) {
  return (
    <Box sx={{ display: "flex", mb: 4 }}>
      <Avatar
        sx={{
          backgroundColor: "rgba(219, 234, 254, 0.8)",
          color: "#3b82f6",
          width: 56,
          height: 56,
          mr: 2.5,
          backdropFilter: "blur(4px)",
        }}
      >
        {icon}
      </Avatar>
      <Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "600", mb: 0.5, color: "#1e293b" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

// PropTypes for FeatureItem
FeatureItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function SolarSolutions({ title, installationsCount, description, features, category }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const defaultFeatures = [
    {
      icon: <HomeOutlinedIcon />,
      title: "Lower Energy Bills",
      description:
        "Reduce your monthly energy costs with a customized solar system that generates clean, renewable energy right at home.",
    },
    {
      icon: <SolarPowerIcon />,
      title: "Increase Home Value",
      description:
        "Investing in solar panels can increase the value of your property, making it more attractive to potential buyers.",
    },
    {
      icon: <NatureIcon />,
      title: "Environmental Benefits",
      description:
        "Help reduce your carbon footprint and contribute to a cleaner, more sustainable environment by switching to solar energy.",
    },
  ];

  const featuresData = features || defaultFeatures;

  // Ensure we only show Residential data
  const filteredData = data.filter((item) => item.category === category);

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#fff",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left text section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out",
              }}
            >
              <Box sx={{ pr: { md: 6 } }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: "rgba(219, 234, 254, 0.6)",
                    color: "#3b82f6",
                    borderRadius: "20px",
                    py: 0.75,
                    px: 2,
                    mb: 3,
                    fontWeight: "600",
                    fontSize: "0.875rem",
                  }}
                >
                  <LightModeOutlinedIcon sx={{ mr: 1, fontSize: "1rem" }} />
                  {installationsCount}
                </Box>

                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: "800",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    color: "#0f172a",
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#64748b",
                    mb: 4,
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                  }}
                >
                  {description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Button
                    component={Link}
                    to="/contact-us"
                    variant="outlined"
                    sx={{
                      borderColor: "#cbd5e1",
                      borderRadius: "8px",
                      color: "#475569",
                      textTransform: "none",
                      py: 1.5,
                      px: 4,
                      fontWeight: "600",
                      "&:hover": {
                        borderColor: "#94a3b8",
                        bgcolor: "rgba(241, 245, 249, 0.6)",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right image/features section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 30px",
                  p: { xs: 3, sm: 4 },
                }}
              >
                {featuresData.map((feature) => (
                  <FeatureItem
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">

          {/* Solutions grid */}
          <Grid container spacing={3}>
            {filteredData[0]?.items?.map((item, itemIndex) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={itemIndex}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s ease-out ${0.4 + itemIndex * 0.1}s`,
                }}
              >
                <SolutionCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}



// PropTypes
SolarSolutions.propTypes = {
  title: PropTypes.string,
  installationsCount: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

// Default Props
SolarSolutions.defaultProps = {
  title: "Clean Energy Solutions for a Sustainable Future",
  installationsCount: "500+ INSTALLATIONS",
  description: "Harness the power of the sun with our innovative solar technology, designed to reduce your carbon footprint and energy costs while powering your life sustainably.",
  features: null,
};

export default SolarSolutions;