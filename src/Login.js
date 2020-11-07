import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Button,
  CardBody,
  Col,
  Input,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Login = () => {
  return (
    <div className="log">
      <h2 style={{ textAlign: "center" }}>To-Do App</h2>
      <Container className="text-center">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Form>
              <CardBody>
                <FormGroup row>
                  {/* <Label for="email" sm={3}>
                      Email
                    </Label> */}
                  <Col lg={12} className="inp">
                    <InputGroup>
                      <InputGroupAddon>
                        <InputGroupText>
                          <MailOutlineIcon />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email ID"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col lg={12}>
                    <InputGroup>
                      <InputGroupAddon>
                        <InputGroupText>
                          <LockOutlinedIcon />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <Col lg={12}>
                <Button type="submit" block color="success">
                  Sign In
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
