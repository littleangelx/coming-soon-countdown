import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div className="container">
      <Card
        bgColor="#fff"
        topColor="#333950"
        btmColor="#747B95"
        planType="Basic"
        planCost="Free"
        bodyText={[
          "Up to 5 users for free",
          "Basic document collaboration",
          "2 GB storage",
          "Great security and support",
        ]}
        btnClass="buttonTypeOne"
      />
      <Card
        bgColor="#5175ff"
        topColor="#fff"
        btmColor="#fff"
        planType="Pro"
        planCost="$9.99"
        bodyText={[
          "Per user, billed monthly",
          "All essential integrations",
          "50 GB storage",
          "More control and insights",
        ]}
        btnClass="buttonTypeTwo"
      />
      <Card
        bgColor="#fff"
        topColor="#333950"
        btmColor="#747B95"
        planType="Ultimate"
        planCost="$19.99"
        bodyText={[
          "Per user, billed monthly",
          "Robust work management",
          "100 GB storage",
          "VIP support",
        ]}
        btnClass="buttonTypeOne"
      />
    </div>
  );
}
