import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import List from './List';
import Chart from './Chart';
// <>组件: React.fragment
class Index extends React.Component {
    render() {
        return (
            <>
                <HomeHeader />
                // / + /list
                // / + /chart
                <Route path="/list" component={} />
                <Route path="/chart" component={} />
            </>
        )
    }
}

export default Index;