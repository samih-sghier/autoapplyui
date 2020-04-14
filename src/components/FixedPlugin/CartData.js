
import React, { useEffect, useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Badge } from '@material-ui/core';

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
                                    <td>{post.text}</td>
                                    <td></td>
                                    <td></td>
                                    <td>           
                                    <Button color="secondary">x</Button>
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