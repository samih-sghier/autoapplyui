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

let positionsToApply = [];

const Posts = ({ result, loading, resetCart, setResetCart }) => {

    if (resetCart) {
        while (positionsToApply.length > 0) {
            positionsToApply.pop();
        }
        result.map(val => {
            val.isChecked = false;
        });
        setResetCart(false);
        console.log("empty " + positionsToApply);
    }
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
    const handleCheckMark = (post) => {
        if (!post.isChecked) {
            post.isChecked = true;
            positionsToApply.push(post);
        } else if (post.isChecked) {
            post.isChecked = false;
            positionsToApply.pop(post)
        }
        console.log("cart content " + positionsToApply.length);
    };

    return (
        <>
            <FixedPlugin cartContent={"samih"} />
            <thead className="text-primary">
                <tr>
                    <th></th>
                    <th>title</th>
                    <th>company</th>
                    <th>location</th>
                    <th>commitment</th>
                    <th className="text-center">team</th>
                </tr>
            </thead>
            <tbody>
                {result.map(post => (
                    <tr key={uuid()}>
                        <td>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" 
                                        defaultChecked = {post.isChecked}
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
                        <td className="text-center">{post.team}</td>
                    </tr>
                ))}
            </tbody>
        </>

    );
};

export default Posts;