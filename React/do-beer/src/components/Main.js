import React from 'react';
// StatefullComponent StatelessComponent
import Search from './Search';
import Header from './Header';
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
    componentDidUpdate(prevProps) {
        // console.log(prevProps);
        const currentSearchTerm = this.props.match.params.searchTerm; // 新参数
        const oldSearchTerm = prevProps.match.params.searchTerm;
        // console.log(oldSearchTerm, currentSearchTerm);
        if (currentSearchTerm !== oldSearchTerm) {
            this.loadBeers(currentSearchTerm)
        }
    }
    // = "hops"
    // es6 赋默认值
    loadBeers(searchTerm = "hops") {
        const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
        if (localStorageBeers) {
            const localBeers = JSON.parse(localStorageBeers);
            this.setState({
                beers: localBeers,
                loading: false
            })
            return;
        }
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) //api 地址
            .then(data => data.json())
            .then(data => {
                const beers = data.data || [];
                this.setState({
                    loading: false,
                    beers
                });
                // 业务
                // 列表记录相关 searchTerm 变化
                localStorage.setItem(
                    `search-${searchTerm}`,
                    JSON.stringify(this.state.beers)
                )
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <Header siteName="Beer me!" />
                <Search />
                <Results beers={this.state.beers} loading={this.state.loading} />
            </div>
        )
    }
}

export default Main;
