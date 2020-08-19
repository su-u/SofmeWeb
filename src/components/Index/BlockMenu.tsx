import React from 'react';
import { Block } from "./Block";
import styled from "styled-components";

export const BlockMenu = () => {
  return (
    <section className="probootstrap-section">
      <div className="container">
        <div className="col-md-12 wide">
          <div className="service left-icon" id="join">
            <div className="icon">
              <a href="/join.html" title="新入生のページ">
                <img src="/img/sofme_icon.svg" />
              </a>
            </div>
            <div className="text">
              <h3 className="heading">
                <a href="/join.html" title="新入生のページ">新入生向け</a>
              </h3>
              <p>ソフトメディア研究会の活動をまとめて紹介しちゃいます！！</p>
            </div>
          </div>
        </div>
        <GroupBlocks>
          <Block />
          <Block />
          <Block />
        </GroupBlocks>
      </div>
    </section>
  )
}


const GroupBlocks = styled.div`
  display: flex;
  > div {
    margin: 0 10px;
  }
`;