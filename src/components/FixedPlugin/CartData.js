
import React, { useEffect, useState } from "react";
import { ListItem } from '@material-ui/core';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import TablePagination from '@material-ui/core/TablePagination';
import PaginationActions from "../Pagination/PaginationActions";


const CartData = ({ cartData, openCartModal, controlModal, removePost }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    let showContent = false;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    if (cartData != null) showContent = true;
    return (
        <div className="dropdown-menu">
            <Modal isOpen={openCartModal}>
                <ModalHeader class="modal-title">Cart Content</ModalHeader>
                <ModalBody class="modal-body">
                    <tbody>
                        {(rowsPerPage > 0
                            ? cartData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : cartData
                        ).map(post => (
                            <tr>
                                <td><ListItem button component="a" >{post.text}</ListItem></td>
                                <td></td>
                                <td> </td>
                                <td>
                                    <i className="tim-icons icon-simple-remove" onChange={removePost} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ModalBody>
                <TablePagination md="12"
                      rowsPerPageOptions={[10, 25, 50]}
                      colSpan={3}
                      count={cartData.length}
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
                <ModalFooter>
                    <Button color="info" onClick={controlModal} >Close</Button>{' '}
                </ModalFooter>

            </Modal>
        </div>
    );
}

export default CartData;