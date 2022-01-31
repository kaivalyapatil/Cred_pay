import { Carousel } from "react-bootstrap";
import thirdimage from "../offer.jpg";
import firstimage from "../credit-card.jpg";
import secondimage from "../psecurity.jpg";

export default function Bodyright() {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center  text-center mt-3  ">
          <Carousel>
            <Carousel.Item>
              <img src={firstimage} alt="img" style={{ height: "400px" }} />
              <Carousel.Caption>
                <h3> Payment Gateway</h3>
                <p>cred-pay is end to end solution for all your payments.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={secondimage} alt="img" style={{ height: "400px" }} />

              <Carousel.Caption>
                <h1>Payment Security and Compliance</h1>
                <p>
                  Each transaction is tokenized to protect customers and
                  merchants.
                </p>
                <p>
                  Leverage industry-leading fraud prevention and digital
                  identity verification tools. Reduce merchant PCI scope through
                  PayU's PCI Level1-certified token vault
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <img src={thirdimage} alt="img" style={{ height: "400px" }} />
              </div>

              <Carousel.Caption>
                <h3>Rewards for paying credit card bills</h3>
                <p>join 7.5M+ members who win rewards and cashbacks everyday</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
