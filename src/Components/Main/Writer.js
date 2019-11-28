import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Writer = (props) => {
    return (
        <tr>
            작가이름:{props.writerName}
        </tr>
    );
};

export default Writer;