// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import { useState, useRef, useEffect } from "react";

function Information() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  
  // Calculate how many cards to show based on screen size
  const cardsToShow = isLgUp ? 3 : isMdUp ? 2 : 1;
  
  // Our review cards data - All cards now have "info" color for blue styling
  const reviewCards = [
    {
      name: "Raj Pal",
      date: "3 months ago",
      review: "8 kw on grid solar power plant subsidy scheme comission by senthil solar team.... Very thank full to his team... I hope next project will meet you sir soon.....",
      rating: 5,
      color: "info", // Changed to "info" for blue styling
    },
    {
      name: "Viji THomas",
      date: "3 months ago",
      review: "Excellent behavior, very good dealing. Everything perfectly done.",
      rating: 4,
      color: "info",
    },
    {
      name: "Muruganandhan Sengadon",
      date: "2 years ago",
      review: "He is very experienced in installation of solar roof top. Discusses pros and cons openly and suggests different products and the good one. Not demanding any amount more than the Govt approved rate. Installation was quick.",
      rating: 5,
      color: "info", // Changed to "info" for blue styling
    },
    {
      name: "Mc Gokul",
      date: "2 years ago",
      review: "Very professional and experienced Solar service provider. Very prompt in response and keeps us updated properly. He is a genuine business man.",
      rating: 5,
      color: "info",
    },
    {
      name: "Ashu Chandramohan",
      date: "2 years ago",
      review: "Good experience. We learn more information about solar. Good explanation...thank you sir and overall companies",
      rating: 4,
      color: "info", // Changed to "info" for blue styling
    },
    {
      name: "Kathis S",
      date: "3 years ago",
      review: "Good Knowledge and experience with Good quality products 👌",
      rating: 5,
      color: "info",
    },
    {
      name: "dhamu",
      date: "1 years ago",
      review: "Nice and quick response good quality products. Up to 30 years warranty . I am satisfied with senthil solar",
      rating: 5,
      color: "info",
    },
    {
      name: "Akilesh Sv",
      date: "4 months ago",
      review: "A WELL EXPERIENCED WORKERS WITH A GREAT LEADER, PUTS GREAT EFFORT TO GIVE THE BEST TO THEIR COUSTOMERS, AND WITH GOOD COMMUNICATION",
      rating: 5,
      color: "info",
    },
  ];

  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = reviewCards.length - cardsToShow;
  
  // Reference to the container for measuring
  const containerRef = useRef(null);
  
  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };
  
  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  // Calculate the fixed height based on your design needs
  const cardHeight = 300; // Set a fixed height in pixels

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            100+ customers from various cities
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many companies, houses, and government institutions love Senthil Solar&apos;s products.
          </MKTypography>
        </Grid>
        
        <MKBox mt={8} position="relative" ref={containerRef}>
          {/* Carousel Navigation */}
          <MKBox 
            position="absolute" 
            top="50%" 
            left="-20px"
            zIndex={2}
            sx={{ transform: "translateY(-50%)" }}
          >
            <IconButton 
              onClick={handlePrev}
              sx={{ 
                bgcolor: "background.paper", 
                boxShadow: 2,
                "&:hover": { bgcolor: "background.paper" }
              }}
            >
              <Icon>chevron_left</Icon>
            </IconButton>
          </MKBox>
          
          <MKBox 
            position="absolute" 
            top="50%" 
            right="-20px"
            zIndex={2}
            sx={{ transform: "translateY(-50%)" }}
          >
            <IconButton 
              onClick={handleNext}
              sx={{ 
                bgcolor: "background.paper", 
                boxShadow: 2,
                "&:hover": { bgcolor: "background.paper" }
              }}
            >
              <Icon>chevron_right</Icon>
            </IconButton>
          </MKBox>
          
          {/* Carousel Content */}
          <Box 
            sx={{ 
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              mx: -1.5, // Compensate for the padding in Grid items
            }}
          >
            {reviewCards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: `${100 / cardsToShow}%`,
                  flex: `0 0 ${100 / cardsToShow}%`,
                  px: 1.5, // Padding for spacing between cards
                  height: `${cardHeight}px`, // Fixed height for the container
                }}
              >
                {/* Wrap DefaultReviewCard to ensure constant height */}
                <Box 
                  sx={{ 
                    height: '100%', // Full height of parent
                    '& > div': {  // Target the root div of DefaultReviewCard
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    '& .MKBox-root': { // Target MKBox components inside DefaultReviewCard
                      flex: '1',
                    },
                    '& .review-content': { // You may need to add this class to your DefaultReviewCard
                      overflow: 'auto', // Allow scrolling if content is too large
                      flex: '1',
                    }
                  }}
                >
                  <DefaultReviewCard
                    color={card.color}
                    name={card.name}
                    date={card.date}
                    review={card.review}
                    rating={card.rating}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          
          {/* Carousel Indicators */}
          <MKBox 
            display="flex" 
            justifyContent="center" 
            mt={4}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <Box
                key={index}
                component="button"
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  mx: 0.5,
                  p: 0,
                  border: "none",
                  backgroundColor: currentIndex === index ? "info.main" : "grey.300",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: currentIndex === index ? "info.main" : "grey.400",
                  }
                }}
              />
            ))}
          </MKBox>
        </MKBox>
        
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;