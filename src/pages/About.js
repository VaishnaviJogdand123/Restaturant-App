import React from "react";
import Layout from "../component/layout/layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <Typography variant="h6">
          Every great meal has a story. Ours begins with a passion for
          perfection
        </Typography>

        <p style={{ marginTop: "2%" }}>
          At Epicurean Bliss, our mission is to create memorable dining
          experiences that delight all the senses. Founded by a team of
          passionate food enthusiasts, we believe that great food is more than
          just a meal; it’s an experience that connects people and cultures. Our
          chefs bring years of expertise and a deep appreciation for diverse
          culinary traditions to every dish they prepare
        </p>
        <br />
        <p>
          Our restaurant is designed to offer not just a place to eat, but a
          place where you can feel at home. From our warm and inviting
          atmosphere to our attentive service, we strive to make every visit
          special. We take pride in our commitment to sustainability and source
          our ingredients from local farms and trusted suppliers, ensuring that
          each dish is fresh, flavorful, and ethically produced. We invite you
          to explore our menu, celebrate special occasions with us, and share in
          our love for great food. Whether you’re here for a casual meal or a
          fine dining experience, we’re dedicated to making each visit to
          Epicurean Bliss a delightful and unforgettable journey
        </p>
      </Box>
    </Layout>
  );
};

export default About;
