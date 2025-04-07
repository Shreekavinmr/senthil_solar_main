/*
=========================================================
* Senthil Solar React - v2.1.0
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert";

// Senthil Solar React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// React hooks
import { useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import emailjs from "emailjs-com";

// Images
import bgImage from "assets/images/senthilsolar_logo.png";
import contactBanner from "assets/images/canva_banner.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }
    const currentTime = new Date().toLocaleString();

  // Set the form data with custom variables to be passed to EmailJS template
  const templateParams = {
    from_name: formData.fullName,
    from_contactno: formData.phone,
    from_mail: formData.email,
    message: formData.message,
    time: currentTime, // Add the timestamp for {{time}}
  };

    // Send form data to email using EmailJS
    emailjs
    .send("service_izc87nt", "template_5r9rp5y", templateParams, "J3BCQ1f-uZPRRMTVn")
      .then(
        () => {
          setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you for your message. We'll get back to you shortly!",
          });

          // Reset form after successful submission
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          setFormStatus({
            submitted: true,
            success: false,
            message: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <>
       <DefaultNavbar
                          routes={routes}
                          transparent
                          light
                        />
      
      {/* Hero Section with Banner */}
      <MKBox
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8} textAlign="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Get In Touch
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} px={6}>
              Have questions about solar solutions? We are here to help you harness the power of the sun.
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox component="section" py={12}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKBox px={{ xs: 3, lg: 10 }}>
              <Grid container spacing={3} mb={3}>
                <Grid item xs={12}>
                  <MKTypography variant="h3" mb={1}>
                    Contact Information
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={3}>
                    Reach out to us for any inquiries about solar installations, maintenance, or free quotes.
                  </MKTypography>
                </Grid>
                
                {/* Contact Info Cards */}
                <Grid item xs={12} md={6}>
                  <MKBox display="flex" alignItems="center" p={2} borderRadius="lg" shadow="md" bgcolor="grey.100">
                    <MKBox
                      width="3rem"
                      height="3rem"
                      borderRadius="lg"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bgColor="info"
                      variant="gradient"
                      mr={2}
                    >
                      <PhoneIcon fontSize="medium" />
                    </MKBox>
                    <MKBox>
                      <MKTypography variant="h6">Call Us</MKTypography>
                      <MKTypography variant="button" color="text">
                        +91 9655079555
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <MKBox display="flex" alignItems="center" p={2} borderRadius="lg" shadow="md" bgcolor="grey.100">
                    <MKBox
                      width="3rem"
                      height="3rem"
                      borderRadius="lg"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bgColor="info"
                      variant="gradient"
                      mr={2}
                    >
                      <EmailIcon fontSize="medium" />
                    </MKBox>
                    <MKBox>
                      <MKTypography variant="h6">Email</MKTypography>
                      <MKTypography variant="button" color="text">
                        km.senthilsolar@gmail.com
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <MKBox display="flex" alignItems="center" p={2} borderRadius="lg" shadow="md" bgcolor="grey.100">
                    <MKBox
                      width="3rem"
                      height="3rem"
                      borderRadius="lg"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bgColor="info"
                      variant="gradient"
                      mr={2}
                    >
                      <LocationOnIcon fontSize="medium" />
                    </MKBox>
                    <MKBox>
                      <MKTypography variant="h6">Our Office</MKTypography>
                      <MKTypography variant="button" color="text">
                        Erode, Tamil Nadu
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <MKBox display="flex" alignItems="center" p={2} borderRadius="lg" shadow="md" bgcolor="grey.100">
                    <MKBox
                      width="3rem"
                      height="3rem"
                      borderRadius="lg"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bgColor="info"
                      variant="gradient"
                      mr={2}
                    >
                      <AccessTimeIcon fontSize="medium" />
                    </MKBox>
                    <MKBox>
                      <MKTypography variant="h6">Working Hours</MKTypography>
                      <MKTypography variant="button" color="text">
                        Mon - Sat: 8:00 AM - 6:00 PM
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
              
              {/* Company Logo */}
              <MKBox
                display="flex"
                justifyContent="center"
                mt={6}
                height="200px"
                width="100%"
                sx={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </MKBox>
          </Grid>
          
          {/* Contact Form */}
          <Grid item xs={12} lg={6}>
            <MKBox px={{ xs: 3, lg: 10 }}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                p={4}
              >
                <MKTypography variant="h3" mb={1}>
                  Send us a message
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={3}>
                  Fill out the form below, and we wll get back to you within 24 hours.
                </MKTypography>
                
                {formStatus.submitted && (
                  <MKAlert 
                    color={formStatus.success ? "success" : "error"} 
                    dismissible 
                    mb={3}
                  >
                    {formStatus.message}
                  </MKAlert>
                )}
                
                <MKBox component="form" method="post" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        variant="outlined"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        type="tel"
                        variant="outlined"
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="outlined"
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        fullWidth
                        rows={6}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
  {formStatus.submitted && !formStatus.success && (
    <MKTypography variant="body2" color="textSecondary">
      Submitting...
    </MKTypography>
  )}
  <MKButton type="submit" variant="gradient" color="info" size="large" disabled={formStatus.submitted}>
    Send Message
  </MKButton>
</Grid>

                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
      
      {/* Google Maps Embed */}
      <MKBox component="section" py={6}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={10}>
            <MKTypography variant="h4" textAlign="center" mb={4}>
              Visit Our Location
            </MKTypography>
            <MKBox
              height="400px"
              width="100%"
              shadow="lg"
              borderRadius="xl"
              overflow="hidden"
            >
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7823.898028828813!2d77.6600354!3d11.3384348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fbb7ae322e3%3A0x37db2351a81b729e!2sSENTHIL%20SOLAR!5e0!3m2!1sen!2sin!4v1743945112315!5m2!1sen!2sin" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade" 
/>

            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
      
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;