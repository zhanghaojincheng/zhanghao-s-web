import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './level.css';

const Level = () => {
    return (
        <div className="level-wrapper">
            <div>
                <Button className="button" type="primary" ghost={true}>
                    <Link to="/home/text/old">大牛</Link>
                </Button>
                <Button className="button" type="primary" ghost={true}>
                    <Link to="/home/text/new">新手</Link>
                </Button>
            </div>
        </div>
    )
};

export default Level;