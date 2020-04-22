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
import React, { useState } from "react";
import { Badge } from '@material-ui/core';
import CartData from "components/FixedPlugin/CartData";

const FixedPlugin = ({ cartSize, cartContent, classes, removePostFromCart }) => {
  const [cartModalState, setCarModalState] = useState(false);

  const openCartPopup = () => {
    setCarModalState(!cartModalState);
  }

  return (
    <>
      <div className={classes}>
        <div onClick={openCartPopup}>
          <div className="font-icon-detail">
            <Badge color="secondary" badgeContent={cartSize}>
              <i className="tim-icons icon-cart" />
            </Badge>
          </div>
            <CartData cartData={cartContent.slice(0, 30)} openCartModal={cartModalState} controlModal={openCartPopup} removePost={removePostFromCart} />
        </div>
      </div>
    </>
  );
}

export default FixedPlugin;
