import * as React from 'react';
// import { Affix } from 'antd';

import './footer.css';

class Footer extends React.Component {
    public render() {
        return (
            <div className="footer-wrapper">
                账号：
                <a href="javascript:;" className="count">GitHub</a>
                <a href="javascript:;" className="count">微博</a>
                <a href="javascript:;" className="count">微信</a>
            </div>
        )
    }
};

export default Footer;