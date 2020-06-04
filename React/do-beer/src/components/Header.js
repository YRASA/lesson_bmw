import React from 'react';
import { Link } from 'react-router-dom'
import PropType from 'prop-types'

class Header extends React.Component {
    static propType = {
        siteName: PropType.string
    }
    render() {
        return (
            <h1>
                <Link to="/">{ this.props.siteName }</Link>
            </h1>
        );
    }
};

export default Header;