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
  Modal,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import Posts from "../data/Posts";
import Filter from "../data/Filter";
import Pagination from "../data/Pagination";

const Tables = () => {

  const [url, setUrl] = useState('http://127.0.0.1:8080/api/indexed/?endIndex=100&src=lever&startIndex=98');
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(url);
      setResult(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, [url, currentPage]);

  const reRender = () => {
    setUrl('http://127.0.0.1:8080/api/indexed/?endIndex=1000&src=lever&startIndex=1');
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // const togglePopup = () => {
  //   setShowFilterPopUp(false);
  // }

  const showModal = () => {
    setModalShow(true);
  }

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            {!loading ?
              <CardHeader>
                <Button className="btn btn-primary pull-left" color="danger" onClick={reRender}>Submit</Button>
                <Modal
                  class="modal-dialog"
                  isOpen={modalShow}
                >
                  <Filter className="popup-content"></Filter>
                </Modal>

                <Button className="pull-left" color="info" onClick={showModal}>Filter</Button>
                <CardTitle className="text-success pull-right" tag="h4">{result.length} Available Positions</CardTitle>
                {/* <p className="category">Here is a subtitle for this table</p> */}
              </CardHeader> : null
            }
            <CardBody>
              <Table className="tablesorter" responsive>
                <Posts result={currentPosts} loading={loading} />
              </Table>
            </CardBody>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={result.length}
              paginate={paginate}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Tables;
