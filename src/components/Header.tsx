import React from 'react';
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer role="banner">
      <div className="container">
        <div>
          {/*<a href="/index.html"><img className="header-icon" src="/img/sofme_icon.svg"/></a>*/}
          <a href="/index.html" className="logo">ソフトメディア研究会</a>
        </div>
        {/*<a href="#" className="probootstrap-burger-menu visible-xs"> <i></i> </a>*/}
        {/*<div className="mobile-menu-overlay"></div>*/}
        <nav role="navigation" className="main-nav">
          <ul>
            <li>
              <a href="/index.html" title="ホーム">ホーム</a>
            </li>
            <li>
              <a href="/join.html" title="新入生ページ">新入生ページ</a>
            </li>
            <li>
              <a href="/program/index.html" title="プログラム班のページ">プログラム班</a>
            </li>
            <li>
              <a href="/multi/index.html" title="マルチメディア班のページ">マルチ班</a>
            </li>
            <li>
              <a href="/dtm/index.html" title="DTM班のページ">DTM班</a>
            </li>
          </ul>
          {/*<div className="extra-text visible-xs">*/}
          {/*  <a href="#" className="probootstrap-burger-menu"> <i>Menu</i> </a>*/}
          {/*</div>*/}
        </nav>
      </div>
    </HeaderContainer>
  )
};

const HeaderContainer = styled.header`
  padding: 5px;
  background: #0000006b;
  width: 100%;
  
  .container {
    width: 1200px;
    margin: 0 auto;
    
    .logo {
      color: #fff;
      padding-left: 0;
      font-size: 30px;
      display: block;
      font-weight: 100;
      text-decoration: none;
    }
  }
  
  .main-nav {
    ul {
      display: flex;
      justify-content: flex-start;
      margin: 5px 0;
      
      li {
        margin: 0;
        padding: 0 10px;
        list-style: none;
        font-size: 18px;
        
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;