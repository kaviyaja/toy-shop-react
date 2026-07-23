import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>No products added.</Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                  }}
                />

                <CardContent>
                  <Typography variant="h6">
                    {item.name}
                  </Typography>

                  <Typography>
                    ₹{item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default CartPage;