
import React, { useEffect, useState } from "react";
import TableList from "../views/TableList"

// reactstrap components
import {
  Modal,
  Dropdown,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
// onClick={() => setCount(count + 1)}


const Filter = ({ modalShow, setFilterCity, setFilterCommitment, setFilterCompany,
  setFilterTitle, setFilterCountry, setFilterDescription, handleSubmit, hideModal }) => {

  return (
    <>
      <Modal
        isOpen={modalShow}
      >
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Filter Positions</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company</label>
                          <Input
                            // disabled
                            placeholder="Company"
                            type="text"
                            onChange={e => setFilterCompany(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Title</label>
                          <Input
                            placeholder="title"
                            type="text"
                            onChange={e => setFilterTitle(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            placeholder="City"
                            type="text"
                            onChange={e => setFilterCity(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            placeholder="Country"
                            type="text"
                            onChange={e => setFilterCountry(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Commitment</label>
                          <Input placeholder="Full-Time" type="text" onChange={e => setFilterCommitment(e.target.value)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Job Description Key Words</label>
                          <Input
                            cols="80"
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                            onChange={e => setFilterDescription(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit" onClick={handleSubmit}>
                    Save
                  </Button>
                  <Button type="button" className="btn btn-default" onClick={hideModal}>Close</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}

export default Filter;
