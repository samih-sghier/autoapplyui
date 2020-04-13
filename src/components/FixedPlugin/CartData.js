
import React, { useEffect, useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CartData = ({ cartData, openCartModal, controlModal }) => {
    let showContent = false;
    if (cartData !=  null) showContent = true;
    return (
        <div>
            <Modal isOpen={openCartModal}>
                <ModalHeader class="modal-title">Cart Content</ModalHeader>
                <ModalBody class="modal-body">
                    <tbody>
                        {showContent?
                        cartData.map(post => (
                            <tr>
                                <td>{post.text}</td>
                            </tr>
                        )): ""}
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