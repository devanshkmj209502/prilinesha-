import anpr from "../assets/anpr.png";
import boom from "../assets/boom.png";
import rfid from "../assets/rfid.png";
import "./Services.css";
function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-card">
        <img src={anpr} alt="ANPR" />
        <h3>ANPR Solution</h3>
        <p>Automatic Number Plate Recognition system for vehicle tracking.</p>
      </div>

      <div className="service-card">
        <img src={boom} alt="Boom Barrier" />
        <h3>Boom Barrier</h3>
        <p>Automated boom barrier for secure entry and exit management.</p>
      </div>

      <div className="service-card">
        <img src={rfid} alt="RFID" />
        <h3>RFD Solution</h3>
        <p>RFID based smart access control and parking solutions.</p>
      </div>
    </section>
  );
}

export default Services;
