import React from "react";

const EventsPage = () => {
  return (
    <section className="page-section" id="events">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Events & Announcements
          </h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/img/events/ahays.jpg"
                alt="..."
              />
            <h4 className="my-3">CEPEC NEW MEMBER INDUCTION</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="col-md-4">
              <img
                  className="img-fluid"
                  src="assets/img/events/national_id.jpg"
                  alt="..."
              />
            <h4 className="my-3">National ID</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="col-md-4">
              <img
                  className="img-fluid"
                  src="assets/img/events/rybaxs_id.jpg"
                  alt="..."
              />
            <h4 className="my-3">New ID System</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
