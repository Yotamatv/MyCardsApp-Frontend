import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can know all about this site"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Typography variant="body1" sx={{ color: "orange" }}>
            Welcome to our React Card Application! This innovative platform is
            designed to cater to the needs of both businesses and consumers,
            providing a seamless and efficient way to create and browse business
            cards. Whether you're a business owner looking to showcase your
            brand or a consumer searching for new contacts, our application has
            got you covered. For Businesses: Our application empowers businesses
            to create and customize their own unique business cards. With a
            user-friendly interface and a wide range of design options, you can
            effortlessly represent your brand identity and make a lasting
            impression. Showcase your logo, contact information, and any other
            relevant details that will help you stand out from the crowd. For
            Consumers: As a consumer, you can easily browse through a diverse
            collection of business cards created by various businesses. Discover
            new opportunities, connect with potential partners, and explore the
            world of entrepreneurship right at your fingertips. Our application
            provides you with a user-friendly browsing experience, ensuring that
            you find the cards that match your interests and needs. Enhance Your
            Experience: To expand your interaction with the application, we
            offer the option to create a user account. By becoming a registered
            user, you gain access to additional features that enhance your
            overall experience. You can like your favorite business cards, edit
            your user profile, delete any unwanted information, and view further
            details on each card. This level of interactivity ensures that you
            have full control over your preferences and can personalize your
            browsing experience. Donate Page: We believe in continuously
            improving our application and providing the best possible user
            experience. To support our ongoing development efforts, we offer a
            donate page that allows you to contribute to our platform. With easy
            and secure credit card payment options, you can choose to make a
            donation and help us maintain and enhance our services. At our React
            Card Application, we are committed to delivering a seamless and
            enjoyable experience for both businesses and consumers. We strive to
            foster connections, promote networking, and facilitate growth
            opportunities. Join us today and be a part of our vibrant community
            of entrepreneurs, innovators, and business enthusiasts. Start
            creating and browsing captivating business cards that leave a
            lasting impression!
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
