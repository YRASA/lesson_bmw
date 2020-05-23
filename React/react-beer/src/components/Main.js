import React from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
class Main extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(this.props, this.props.match, '++++++++++');
        const params = this.props.match.params; // / /search/:searchTerm
        const searchTerm = params.searchTerm || undefined;
        console.log(searchTerm, '++++++++++');
        this.loadBeers(searchTerm);
    }
    loadBeers() {
        
    }
    render() {
        return (
            // 每个页面由组件构成
            <div className="wrapper">
                <Header siteName="Beer me!" />
                <Search />
                {/* <Link to="/about">About</Link> */}
            </div>
        )
    }
}

export default Main;