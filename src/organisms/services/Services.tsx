import React from "react";
import "./style.css";
import { Title } from "../../atoms/title";
import { ServiceBox } from "../../atoms/service-box";

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <Title title="We also offer unique services for your events" />
        <div className="service-options">
          <ServiceBox
            src="./kebab-set-table-1.png"
            title="Caterings"
            detail="In the new era of technology we look in the future with certainty for life."
          />

          <ServiceBox
            src="./charming-female-1.png"
            title="Birthdays"
            detail="In the new era of technology we look in the future with certainty for life."
          />

          <ServiceBox
            src="./happy-sunny-1.png"
            title="Weddings"
            detail="In the new era of technology we look in the future with certainty for life."
          />

          <ServiceBox
            src="./group-friend-1.png"
            title="Caterings"
            detail="In the new era of technology we look in the future with certainty for life."
          />
        </div>
      </div>
    </section>
  );
};
