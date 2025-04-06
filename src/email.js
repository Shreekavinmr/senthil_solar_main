import emailjs from "emailjs-com";

// Inside your handleSubmit function:
const handleSubmit = (e) => {
  e.preventDefault();

  // Validate form data
  if (!formData.fullName || !formData.email || !formData.message) {
    setFormStatus({
      submitted: true,
      success: false,
      message: "Please fill in all required fields."
    });
    return;
  }

  // Send form data to email using EmailJS
  emailjs
  .sendForm("service_izc87nt", "template_nm0wsmu", e.target, "J3BCQ1f-uZPRRMTVn")
  .then(
    (result) => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message. We'll get back to you shortly!"
      });
    },
    (error) => {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again later."
      });
    }
  );
}