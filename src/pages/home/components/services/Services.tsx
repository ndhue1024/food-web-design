import React from "react";
import "./style.css";
import { Heading } from "../../../../atoms/heading";
import { Card } from "../../../../atoms/card";

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <Heading title="We also offer unique services for your events" />
        <div className="service-options">
          <Card
            src="./assets/kebab-set-table-1.png"
            content1="Caterings"
            content2="In the new era of technology we look in the future with certainty for life."
            isService={true}
          />

          <Card
            src="./assets/charming-female-1.png"
            content1="Birthdays"
            content2="In the new era of technology we look in the future with certainty for life."
            isService={true}
          />

          <Card
            src="./assets/happy-sunny-1.png"
            content1="Weddings"
            content2="In the new era of technology we look in the future with certainty for life."
            isService={true}
          />

          <Card
            src="./assets/group-friend-1.png"
            content1="Events"
            content2="In the new era of technology we look in the future with certainty for life."
            isService={true}
          />
        </div>
      </div>
    </section>
  );
};
