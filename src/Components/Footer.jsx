import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#222831",
        color: "white",
        mt: 8,
        pt:5,
        pb:3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>

          {/* Company */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                color: "#ff6600",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              🧸 Kaviya's Toy Shop
            </Typography>

            <Typography variant="body2">
             Making childhood happier with
quality toys, educational
games and exciting collections.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff6600",
                mb: 2,
              }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  <Link href="/" underline="hover" color="inherit">
    Home
  </Link>

  <Link href="/products" underline="hover" color="inherit">
    Products
  </Link>

  <Link href="/about" underline="hover" color="inherit">
    About
  </Link>

  <Link href="/contact" underline="hover" color="inherit">
    Contact
  </Link>
</Box>
          </Grid>

          {/* Customer Support */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff6600",
                mb: 2,
              }}
            >
              Customer Support
            </Typography>

            <Typography>FAQ</Typography>

            <Typography>Privacy Policy</Typography>

            <Typography>Terms & Conditions</Typography>

            <Typography>Return Policy</Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff6600",
                mb: 2,
              }}
            >
              Contact Us
            </Typography>

            <Typography>📍 Madurai, Tamil Nadu</Typography>

            <Typography>📞 +91 9876543210</Typography>

            <Typography>
              ✉ kaviya@toyshop.com
            </Typography>

            <Box sx={{ mt: 2 }}>
              <FacebookIcon sx={{ mr: 2, cursor: "pointer" }} />

              <InstagramIcon sx={{ mr: 2, cursor: "pointer" }} />

              <WhatsAppIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid gray",
            mt: 5,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 Kaviya's Toy Shop. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;