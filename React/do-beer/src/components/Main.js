import React from 'react';
// StatefullComponent StatelessComponent
import Search from './Search';
import Results from './Results';

class Main extends React.Component {
    // 集列表、搜索一体化
    constructor() {
        super();
        this.state = {
            beers: [],
            loading: true // 正在加载中
        }
    }

    componentDidMount() {
        console.log(this.props.match.params);
        const params = this.props.match.params || {};
        const searchTerm = params.searchTerm || undefined;
        this.loadBeers(searchTerm);
    }
    // = "hops"
    // es6 赋默认值
    loadBeers(searchTerm = "hops") {
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) //api 地址
            .then(data => data.json())
            .then(data => {
                const beers = data.data || [];
                this.setState({
                    loading: false,
                    beers
                });
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <Search />
                <Results beers={this.state.beers} loading={this.state.loading} />
            </div>
        )
    }
}

export default Main;
