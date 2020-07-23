/*
 * @Author: Zzceaon
 * @Date: 2020-07-22 10:34:09
 * @LastEditTime: 2020-07-23 11:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\layouts\HomeLayout.style.js
 */ 
import styled from "styled-components"

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px 0px;
  background: #2b90ab;
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;
export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #2b90ab;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        border-bottom: 2px solid #f1f1f1;
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
      }
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
`