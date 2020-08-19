import React from 'react';
import styled from "styled-components";

export const Block = () => {
  return (
    <Container>
      <div className="service left-icon" id="program">
        <div className="icon">
          <a href="/program/index.html" title="プログラム班のページ">
            <i className="icon-desktop"></i>
          </a>
        </div>
        <div className="text">
          <h3 className="heading">
            <a href="/program/index.html" title="プログラム班のページ">プログラム班</a>
          </h3>
          <p>プログラミング言語を使用し、ゲームやアプリを開発する。<br/>
            娯楽モノから、日常に使えるものまで様々。</p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  background: #22eaaa;
  border-radius: 10px;
  
`;