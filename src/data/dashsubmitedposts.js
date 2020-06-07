import React, { useEffect, useState } from "react";
import uuid from 'uuid/v1';
// reactstrap components
import {
    FormGroup,
    Label,
    Input,
    CardTitle,
} from "reactstrap";




const Posts = ({ result, loading, rowsPerPage, page }) => {
    let preSet = false;

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
    } else if (result.length === 0) {
        return (<tbody>
            <tr key={uuid()}>
                <td>
                    <div className="text-center" tag="h4">
                        <CardTitle tag="h4">You have applied to 0 positions</CardTitle>
                    </div>
                </td>
            </tr>
        </tbody>)

    }

    return (
        <>
            <thead className="text-primary">
                <tr>
                    <th>title</th>
                    <th>company</th>
                    <th>location</th>
                    <th>commitment</th>
                    <th className="text-center">team</th>
                    <th className="text-center">applied on</th>
                </tr>
            </thead>
            {!preSet ? <tbody>
                {(rowsPerPage > 0
                    ? result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : result
                ).map(post => (
                    <tr key={uuid()}>
                        <td>{post.text}</td>
                        <td>{post.company}</td>
                        {/* <td>{post.content.slice(0, 80)}...</td> */}
                        <td>{post.location}</td>
                        <td>{post.commitment}</td>
                        <td className="text-center">{post.team}</td>
                        <td>{post.createdAt}</td>
                    </tr>
                ))}
            </tbody>
                : null
            }
        </>

    );
};

export default Posts;