import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Tog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      <div className="div_card">
        <div className="textt">
          <h3>Abishek</h3>
          <h5>Python</h5>
        </div>

        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem", float: "right" }}
        >
          🔽
        </Button>
        <Button color="danger" style={{ float: "right" }}>
          ❌
        </Button>
        <Collapse isOpen={isOpen}>
          <Card className="cardd">
            <CardBody className="card_body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh hel
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  );
};

export default Tog;
