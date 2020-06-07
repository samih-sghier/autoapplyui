
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Labe,
  Row,
  Col
} from "reactstrap";
// onClick={() => setCount(count + 1)}

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  dialog: {
    fullWidth: true,
    maxWidth: 'md'
  }
}));

const DetailsForm = ({ modalShow, hideDetails, post}) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Dialog
          open={modalShow}
          maxWidth="md"
          // onClose={handleClose}
          // className={classes.dialog}>
          >
        <DialogContent className="popup-content"
          >
            <main className={classes.layout}>
              <Row>
                <Col md="8">
                  <Card>
                    <DialogTitle>
                      <CardHeader>
                        <h5><b>Position Details</b></h5>
                      </CardHeader>
                    </DialogTitle>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label><b>Company</b></label>
                              <br></br>
                              <p>{post.company}</p>
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="6">
                            <FormGroup>
                              <label><b>Title</b></label>
                              <br></br>
                              <p>{post.text}</p>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="4">
                            <FormGroup>
                              <label><b>Team</b></label>
                              <br></br>
                              <p>{post.team}</p>
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="4">
                            <FormGroup>
                              <label><b>Location</b></label>
                              <br></br>
                              <p>{post.location}</p>
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="4">
                            <FormGroup>
                              <label><b>Commitment</b></label>
                              <br></br>
                              <p>{post.commitment}</p>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                        <Col className="pr-md-1" md="12">
                            <FormGroup>
                              <label><b>Description</b></label>
                              <br></br>
                              <p>{post.descriptionOfPosition}</p>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                    <CardFooter>
                    <Button className="btn-fill" color="primary" onClick={hideDetails}>
                        Close
                  </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </main>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default DetailsForm;