
import React, { useEffect, useState } from "react";
import { ListItem } from '@material-ui/core';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CartData = ({ cartData, openCartModal, controlModal, removePost }) => {
    let showContent = false;
    if (cartData != null) showContent = true;
    return (
        <div className="dropdown-menu">
            <Modal isOpen={openCartModal}>
                <ModalHeader class="modal-title">Cart Content</ModalHeader>
                <ModalBody class="modal-body">
                    <tbody>
                        
                        {showContent ?
                            cartData.map(post => (
                                <tr>
                                    <td><ListItem button component="a" {...post.text} >{post.text}</ListItem></td>
                                    <td></td>
                                    <td> </td>
                                    <td>
                                        <i className="tim-icons icon-simple-remove" onChange={removePost} />
                                    </td>
                                </tr>
                            )) : ""}
                    </tbody>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={controlModal} >Close</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CartData;