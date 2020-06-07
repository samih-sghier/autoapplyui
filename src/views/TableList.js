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
  CardTitle,
  Table,
  Row,
  Col,
  Alert
} from "reactstrap";
import Posts from "../data/Posts";
import Filter from "../data/Filter";
import TablePagination from '@material-ui/core/TablePagination';
import PaginationActions from "../components/Pagination/PaginationActions";
import { selectFirebaseToken } from 'redux/reducers';
import { useSelector, useDispatch } from "react-redux";

let positionsToApply = [];

const Tables = () => {
  const userId = useSelector(selectFirebaseToken);
  const [url, setUrl] = useState(`http://automicroservice-278614.uc.r.appspot.com/api/all/positions/user?src=lever&userId=${userId}`);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [commitment, setCommitment] = useState("");
  const [description, setDescription] = useState("");
  const [cartContent, setCartContent] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [resetCart, setResetCart] = useState(false);
  const [checkAllPositions, setCheckAllPositioons] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyFail, setApplyFail] = useState(false);
  const [applying, setApplying] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(url);
      response.data.map(val => {
        val.isChecked = false;
      });
      setResult(response.data);
      setLoading(false);
      setApplySuccess(false);
    };
    fetchPosts();
  }, [url, applySuccess]);

  const handleApply = (event) => {
    //  setUrl('http://127.0.0.1:8090/api/indexed/?endIndex=1000&src=lever&startIndex=1');
    event.preventDefault();
    if (cartSize > 0) {
    setApplying(true);
    let temp = [];
    cartContent.map(positions => {
      var innerData = [];
      innerData.push(positions.text);
      innerData.push(positions.applyUrl);
      innerData.push(positions.company);
      innerData.push(positions.commitment);
      innerData.push(positions.location);
      innerData.push(positions.team);
      innerData.push(positions.id);
      temp.push(positions);
    });
    
    axios({
      method: 'post',     //post
      url: `https://userservice20.herokuapp.com/apply/user`,
      // headers: {'Authorization': 'Bearer'}, 
      data: {
        userId: userId,
        positions: temp,
      }
    }).then(response => {
      if (response.status === 200) {
        setApplying(false);
        setApplySuccess(true);
        setCart([]);
        positionsToApply = [];
        axios({
          method: 'post',     //post
          url: `https://userservice20.herokuapp.com/submited/user`,
          // headers: {'Authorization': 'Bearer'}, 
          data: { 
            userId: userId,
            positions: temp,
          }
        })
      } 
    }).catch(error => {
      console.log(error);
    });
  }
  };

  const setFilterCity = (theCity) => {
    setCity(theCity);
  }

  const setFilterTitle = (theTitle) => {
    setTitle(theTitle);
  }

  const setFilterCommitment = (theCommitment) => {
    setCommitment(theCommitment);
  }

  const setFilterCompany = (theCompany) => {
    setCompany(theCompany);
  }

  const setFilterCountry = (theCountry) => {
    setCountry(theCountry);
  }

  const setFilterDescription = (theDescription) => {
    setDescription(theDescription);
  }

  const handleSubmitFilter = () => {
    setUrl(`http://automicroservice-278614.uc.r.appspot.com/api/bigfilter/?city=${city}&comm=${commitment}&comp=${company}&country=${country}&desc=${description}&job=${title}&src=lever`);
    //reset data
    setCity("");
    setCommitment("");
    setCompany("");
    setDescription("");
    setTitle("");
    setCountry("");
    setModalShow(false);
    setResetCart(true);
  }

  const showModal = () => {
    setModalShow(true);
  }

  const hideModal = () => {
    setModalShow(false);
  }

  const setCart = (cart) => {
    setCartContent(cart);
    setCartSize(cart.length);
  }

  const checkAll = () => {
    result.map(val => {
      val.isChecked = !checkAllPositions;
    })
    if (!checkAllPositions) {
      setCart(result);
    } else {
      setCart([]);
    }
    setCheckAllPositioons(!checkAllPositions);
  }

  const handleCheckMark = (post) => {
    if (!post.isChecked) {
      addPostToShoppingCart(post);
    } else if (post.isChecked) {
      deletePostFromShoppingCart(post);
    }
    setCart(positionsToApply);
  };


  const addPostToShoppingCart = (post) => {
    post.isChecked = true;
    var isFound = false;
    cartContent.map(val => {
      if (JSON.stringify(val.id) === JSON.stringify(post.id)) isFound = true;
    })
    if (!isFound) {
      positionsToApply.push(post);
    }
  }

  const deletePostFromShoppingCart = (post) => {
    post.isChecked = false;
    positionsToApply.splice(positionsToApply.indexOf(post), 1);
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="content">
       {applying && cartSize > 0?
        <Alert color="success">
          Applying in progress, it might take a few minutes (you may navigate away) ... 
        </Alert>:null}
        {applySuccess?
        <Alert color="success">
          You have successfully applied to selected positions
        </Alert> :null}
        {applyFail?
        <Alert color= "danger">
          Some of the positions you have applied to are no longer available
        </Alert> :null}
        <Row>
          <Col md="12">
            <Card>
              {!loading ?
                <CardHeader>
                  <Button className="btn btn-primary pull-left" color="danger" onClick={handleApply}>
                    Apply to Jobs in Cart</Button>
                  <Filter
                    modalShow={modalShow}
                    hideModal={hideModal}
                    setFilterCity={setFilterCity}
                    setFilterTitle={setFilterTitle}
                    setFilterCommitment={setFilterCommitment}
                    setFilterCompany={setFilterCompany}
                    setFilterCountry={setFilterCountry}
                    setFilterDescription={setFilterDescription}
                    handleSubmit={handleSubmitFilter}
                  ></Filter>
                  <Button className="pull-left" color="info" onClick={showModal}>Filter</Button>
                  <CardTitle className="text-success pull-right" tag="h4">{result.length} Available Positions</CardTitle>
                </CardHeader> : null
              }
              <CardBody>
                <Table className="tablesorter" responsive>
                  <Posts
                    result={result}
                    loading={loading}
                    resetCart={resetCart}
                    setResetCart={setResetCart}
                    cartSize={cartSize}
                    cartContent={cartContent}
                    checkAll={checkAll}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleCheckMark={handleCheckMark}
                    deletePostFromShoppingCart={deletePostFromShoppingCart}
                  />
                </Table>
                <TablePagination
                  rowsPerPageOptions={[10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={result.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={PaginationActions}
                />
              </CardBody>

              {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={result.length}
                paginate={paginate}
              /> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
