import React, { useEffect, useState } from "react";
import uuid from 'uuid/v1';
// reactstrap components
import {
    FormGroup,
    Label,
    Input,
    CardTitle,
} from "reactstrap";

import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
import TextTruncate from 'react-text-truncate';
import DetailsForm from "../data/DetailsForm";


const Posts = ({ result, loading, resetCart, setResetCart, cartSize, checkAll, handleCheckMark, cartContent, deletePostFromShoppingCart, rowsPerPage, page }) => {
    let preSet = false;
    const [showDetailsPopUp, setShowDetailsPopUp] = useState(false);
    const [postToShow, setPostToShow] = useState([]);

    if (loading) {
        return (
            <tbody>
                <tr key={uuid()}>
                    <td>
                        <div className="text-center" tag="h4">
                            <CardTitle tag="h4">Loading Available Positions ...</CardTitle>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    }
    
    const showDetails = (post) => {
        setShowDetailsPopUp(true);
        setPostToShow(post);
    };

    const hideDetails = () => {
        setShowDetailsPopUp(false);
        setPostToShow([]);
    };

    return (
        <>
            <div className="fixed-plugin">
                <FixedPlugin cartSize={cartSize} cartContent={cartContent} removePostFromCart={deletePostFromShoppingCart} />
            </div>
            {showDetails? 
            <DetailsForm modalShow = {showDetailsPopUp} post = {postToShow} hideDetails = {hideDetails} />
            :null}
            <thead className="text-primary">
                <tr>
                    {/* <th><FormGroup check>
                        <Label check>
                            <Input type="checkbox"
                                defaultChecked={false}
                                onChange={checkAll}
                            />
                            <span className="form-check-sign">
                                <span className="check" />
                            </span>
                        </Label>
                    </FormGroup>
                    </th> */}
                    <th></th>
                    <th>title</th>
                    <th>company</th>
                    <th>location</th>
                    <th>commitment</th>
                    <th>description</th>
                    <th className="text-center">team</th>
                </tr>
            </thead>
            {!preSet ? <tbody>
                {(rowsPerPage > 0
                        ? result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : result
                    ).map(post => (
                    <tr key={uuid()}>
                        <td>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        defaultChecked={post.isChecked}
                                        onChange={(event) => handleCheckMark(post)}
                                    />
                                    <span className="form-check-sign">
                                        <span className="check" />
                                    </span>
                                </Label>
                            </FormGroup>
                        </td>
                        <td>{post.text}</td>
                        <td>{post.company}</td>
                        {/* <td>{post.content.slice(0, 80)}...</td> */}
                        <td>{post.location}</td>
                        <td>{post.commitment}</td>
                        <td>
                            <TextTruncate
                                element="span"
                                truncateText="…"
                                text={post.descriptionOfPosition}
                                textTruncateChild={<a href="#" onClick={(event) => showDetails(post)}>more</a>}
                            /></td>
                        <td className="text-center">{post.team}</td>
                    </tr>
                ))}
            </tbody>
                : null
            }
        </>

    );
};

export default Posts;