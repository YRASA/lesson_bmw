import React from 'react';
import './ranking.styl'; // webpack
// @ = src 路径短连接 相对路径 路径别名 @
import Loading from '@/common/loading/Loading';
import { getRankingList } from '@/api/ranking';  // 把请求数据的业务, 分离到api目录下
import Lazyload, { forceCheck } from 'react-lazyload';
import Scroll from '@/common/scroll/Scroll';
// 组件的复用
// react 高级就业练习生
// consoloe.log(RankAPI)
//排行榜 路由级别页面

class Ranking extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            refreshScroll: false,
            rankingList: []
        }
    }
    componentDidMount() {
        getRankingList()
        .then((res) => {
            console.log('获取排行榜...', res);
            this.setState({
                loading: false,
                rankingList: res.data.topList
                // state -> new State -> dom 响应式 -> 页面更新
                // this.state.rangkingList -> dom 到页面上 -> scroll
                // refreshScroll: true
                // setState callback, 状态更新并已经在界面同步后再执行callback
            }), () => {  // then
                // setState 新的方法 异步
                this.setState({
                    // 为什么? 考点
                    // 获取数据完全后再刷新
                    refreshScroll: true
                })
            }
        })
    }
    render() {
        return (
            <div className="music-ranking ">
                <Scroll refresh={ this.state.refreshScroll }
                onScroll={() => { forceCheck() }}>
                    <div className="ranking-list">
                        {
                            this.state.rankingList.map(ranking => {
                                return (
                                    <div className="ranking-wrapper" key={ ranking.id }>
                                        <div className="left">
                                            <lazyload height={ 100 }>
                                                <img src={ ranking.picUrl } alt={ ranking.title } />
                                            </lazyload>
                                        </div>
                                        <div className="right">
                                            <h1 className="ranking-title">
                                                { ranking.title }
                                            </h1>
                                            {
                                                ranking.songList.map((song, index) => {
                                                    return (
                                                        <div className="top-song" key={ index }>
                                                            <span className="index">{ index + 1 }</span>
                                                            <span>{ song.songname }</span>
                                                            &nbsp;-&nbsp;
                                                            <span className="song">{ song.singername }</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Scroll>
                <Loading show={ this.state.loading } title="Loading..." />
            </div>
        )
    }
}

export default Ranking;