/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

import { Badge } from '@material-ui/core/';

const UserProfile = () => {
  const [url, setUrl] = useState('http://127.0.0.1:8080/user?userId=');
  const [uploadedFileName, setUploadFileName] = useState('');
  const [file, setFile] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [currentJobDescription, setCurrentJobDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [userId, setUserId] = useState('P8GhoDN052d2fIqpNGPAZ9nVDeu1');
  const [showCheckMark, setShowCheckMark] = useState(false);
  const [isLegal, setIsLegal] = useState(true);
  const [visa, setVisa] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://127.0.0.1:8080/user?userId=${userId}`);
      setFirstName(response.data.firstName);
      setUploadFileName(response.data.fileName);
      setLastName(response.data.lastName);
      setGithubUrl(response.data.githubUrl);
      setLinkedinUrl(response.data.linkedinUrl);
      setCity(response.data.city);
      setAddress(response.data.address);
      setCountry(response.data.country);
      setPostalCode(response.data.postalCode);
      setCurrentCompany(response.data.company);
      setCurrentJobTitle(response.data.jobTitle);
      setCurrentJobDescription(response.data.jobDescription);
      setEmail(response.data.email);
      setPhoneNumber(response.data.phoneNumber);
      setIsLegal(response.data.isLegal);
      setVisa(response.data.visa);
    };
    fetchPosts();
  }, [url]);

  const handleUploadFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUploadFileName(event.target.files[0].name);
    }
  };


  const handleChange = (prop) => (event) => {
    if (prop === 'linkedinUrl') setLinkedinUrl(event.target.value);
    if (prop === 'githubUrl') setGithubUrl(event.target.value);
    if (prop === 'firstName') setFirstName(event.target.value);
    if (prop === 'lastName') setLastName(event.target.value);
    if (prop === 'city') setCity(event.target.value);
    if (prop === 'address') setAddress(event.target.value);
    if (prop === 'country') setCountry(event.target.value);
    if (prop === 'postalCode') setPostalCode(event.target.value);
    if (prop === 'company') setCurrentCompany(event.target.value);
    if (prop === 'jobTitle') setCurrentJobTitle(event.target.value);
    if (prop === 'jobDescription') setCurrentJobDescription(event.target.value);
    if (prop === 'email') setEmail(event.target.value);
    if (prop === 'phone') setPhoneNumber(event.target.value);
    if (prop === 'isLegal') setIsLegal(event.target.value);
    if (prop === 'visa') setVisa(event.target.value);
  };

  const handleSaveButton = (event) => {
    //put to api
    event.preventDefault();
    axios({
      method: 'put',     //put
      url: `http://127.0.0.1:8080/update/user?userId=${userId}`,
      // headers: {'Authorization': 'Bearer'}, 
      data: {
        firstName: firstName, // This is the body part
        lastName: lastName,
        fileName: uploadedFileName,
        githubUrl: githubUrl,
        linkedinUrl: linkedinUrl,
        city: city,
        address: address,
        country: country,
        postalCode: postalCode,
        company: currentCompany,
        jobTitle: currentJobTitle,
        jobDescription: currentJobDescription,
        email: email,
        phoneNumber: phoneNumber,
        isLegal: isLegal,
        visa: visa
      }
    }).then(response => {
      if (response.status === 200) setShowCheckMark(true);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSaveButton}>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <label>Upload Resume</label>
                      <FormGroup>
                        <i className="tim-icons icon-cloud-upload-94" type="file" />
                        <Input
                          type="file"
                          onChange={handleUploadFile}
                        />
                        <span><a style={{ marginLeft: '.5rem' }} ></a></span>
                        <label>{uploadedFileName}</label>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue={username}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                          </label>
                        <Input
                          onChange={handleChange('email')}
                          defaultValue={email}
                          placeholder="Email"
                          type="email"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          onChange={handleChange('firstName')}
                          defaultValue={firstName}
                          placeholder="Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup required>
                        <label>Last Name</label>
                        <Input
                          onChange={handleChange('lastName')}
                          defaultValue={lastName}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          onChange={handleChange('address')}
                          defaultValue={address}
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          onChange={handleChange('city')}
                          defaultValue={city}
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          onChange={handleChange('country')}
                          defaultValue={country}
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          onChange={handleChange('postalCode')}
                          defaultValue={postalCode}
                          placeholder="ZIP Code"
                          type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          onChange={handleChange('phone')}
                          defaultValue={phoneNumber}
                          placeholder="e.g: 3033333333"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                      <label>Are you legally allowed to work in the U.S</label>
                        <Input
                          onChange={handleChange('isLegal')}
                          value={isLegal}
                          type="select">
                          <option value = {"yes"} onChange={handleChange('visa')}> Yes</option>
                          <option value = {"no"} onChange={handleChange('visa')}>No</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                      <label>Visa Status</label>
                        <Input
                          onChange={handleChange('visa')}
                          value={visa}
                          type="select">
                          <option value = {"US CITIZEN"} onChange={handleChange('visa')}>U.S citizen</option>
                          <option value = {"GREENCARD"} onChange={handleChange('visa')}>Permanent Resident (GREENCARD)</option>
                          <option value = {"F1OPT"} onChange={handleChange('visa')}>F-1 Student OPT</option>
                          <option value = {"F1CPT"} onChange={handleChange('visa')}>F-1 Student CPT</option>
                          <option value = {"H1B"} onChange={handleChange('visa')}>H1B</option>
                          <option value = {"other"} onChange={handleChange('visa')}>Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Github</label>
                        <Input
                          onChange={handleChange('githubUrl')}
                          defaultValue={githubUrl}
                          placeholder="https://github.com/bowtie"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="6">
                      <FormGroup>
                        <label>Linkedin</label>
                        <Input
                          onChange={handleChange('linkedinUrl')}
                          defaultValue={linkedinUrl}
                          placeholder="https://linkedin.com/bowtie"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Job Title</label>
                        <Input
                          onChange={handleChange('jobTitle')}
                          defaultValue={currentJobTitle}
                          placeholder="Last position held"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Company</label>
                        <Input
                          onChange={handleChange('company')}
                          defaultValue={currentCompany}
                          placeholder="Company"
                          type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Job description</label>
                        <Input
                          cols="80"
                          onChange={handleChange('jobDescription')}
                          defaultValue={currentJobDescription}
                          placeholder="Responsabilities"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </CardBody>
              <CardFooter>
                {showCheckMark ?
                  <p className="description">
                    Profile Updated&nbsp;<i className="tim-icons icon-check-2" />
                  </p>
                  : null}
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/anime3.png")}
                    />
                    <h5 className="title">{firstName}&nbsp;{lastName}</h5>
                  </a>
                  <p className="description">{currentJobTitle}</p>
                </div>
                <div className="card-description">
                  I am looking for an internship for Fall 2020/2021 as a software developer.
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;