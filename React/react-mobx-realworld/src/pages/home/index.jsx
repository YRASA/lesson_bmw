import React, { Component } from 'react';
import { Tabs, Row, Col, Tag, Spin } from 'antd';
import { inject, observer } from 'mobx-react';
import { Pagination } from 'antd';
import Articleitem from './ArticleItem';

const { TabPane } = Tabs;
// 想要哪个页面的数据 注入流
@inject('articleStore')  // 不需要再写 connect mapStateProps mapDispatch
@observer
class Home extends Component {
  componentDidMount () {
    this.props.articleStore.getArticle('all');
    this.props.articleStore.getTags();
  }
  handleChange = (page) => {
    // 1 offset 0
    // 2 offset 1
    // 3 offset 2
    this.props.articleStore.getArticle('all', page - 1);
    this.props.articleStore.handlePageChange(page);
  }
  render() {
    const { total, LIMIT, articles, handleTabChange, tags, isLoading,
      handleAddTab, activityKey, pageCurrent
    } = this.props.articleStore
    console.log(total, LIMIT)
    return (
      <div>
        <Row>
          <Col span={19}>
            <Tabs defaultActiveKey={'all'} onChange={handleTabChange} activeKey={activityKey}>
            {/* 点击 tab 请求内容 */}
            {Object.keys(articles).map((tag, i) => {
              return (
                <Spin tip="正在加载中..." spinning={isLoading}>
                  <TabPane key={tag} tab={tag}>
                    {
                      articles[tag].map((article, i) => {
                        return (
                          <Articleitem article={article}/>
                        )
                      })
                    }
                  </TabPane>
                </Spin>
              )
            })}
            </Tabs>
            <Pagination
            onChange={this.handlePeginationChange}
            total={total}
            pageSize={LIMIT}
            current={pageCurrent}
            defaultCurrent={1}/>
          </Col>
          <Col span={5}>
            {tags.map((tag, i) => {
              return <Tag key={i} onClick={() => {
                handleAddTab(tag)
              }}>{tag}</Tag>
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

// export default inject('articleStore')(observer(Home));
export default Home;