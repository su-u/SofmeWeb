import React from 'react';
import { Header } from '../components/Header';
import { BlockMenu } from "../components/Index/BlockMenu";

const Index: React.FC<any> = () => {

  return (
    <>
      <Header />
      <BlockMenu />
    </>
  )
  // return (
  //   <>
  //     <section className="probootstrap-section">
  //       <div className="container">
  //         <div className="col-md-12 wide">
  //           <div className="service left-icon" id="join">
  //             <div className="icon">
  //               <a href="/join.html" title="新入生のページ">
  //                 <img src="/img/sofme_icon.svg"/>
  //               </a>
  //             </div>
  //             <div className="text">
  //               <h3 className="heading">
  //                 <a href="/join.html" title="新入生のページ">新入生向け</a>
  //               </h3>
  //               <p>ソフトメディア研究会の活動をまとめて紹介しちゃいます！！</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row overlap">
  //           <div className="col-md-4">
  //             <div className="service left-icon" id="program">
  //               <div className="icon">
  //                 <a href="/program/index.html" title="プログラム班のページ">
  //                   <i className="icon-desktop"></i>
  //                 </a>
  //               </div>
  //               <div className="text">
  //                 <h3 className="heading">
  //                   <a href="/program/index.html" title="プログラム班のページ">プログラム班</a>
  //                 </h3>
  //                 <p>プログラミング言語を使用し、ゲームやアプリを開発する。<br/>
  //                   娯楽モノから、日常に使えるものまで様々。</p>
  //               </div>
  //             </div>
  //           </div>
  //
  //           <div className="col-md-4">
  //             <div className="service left-icon" id="multi">
  //               <div className="icon">
  //                 <a href="/multi/index.html" title="マルチメディア班のページ">
  //                   <i className="icon-images"></i>
  //                 </a>
  //               </div>
  //               <div className="text">
  //                 <h3 className="heading">
  //                   <a href="/multi/index.html" title="マルチメディア班のページ">マルチ班</a>
  //                 </h3>
  //                 <p>CG等の制作、イラスト・壁紙等を始め、ゲームのデザインや、アニメーションを作成。最近は3DCGや3Dモデルも。</p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="col-md-4">
  //             <div className="service left-icon" id="dtm">
  //               <div className="icon">
  //                 <a href="/dtm/index.html" title="DTM班のページ">
  //                   <i className="icon-headphones"></i>
  //                 </a>
  //               </div>
  //               <div className="text">
  //                 <h3 className="heading">
  //                   <a href="/dtm/index.html" title="DTM班のページ">DTM班</a>
  //                 </h3>
  //                 <p>PCでDAWという作曲ソフトを使って作曲を行う。楽器では奏でられないような曲も作っている。DJ活動も行っている。</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //
  //     <div className="probootstrap-section">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-md-12 text-center section-heading">
  //             <h2>Event</h2>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12">
  //             <h2 className="border">M3 2019秋出展</h2>
  //             <p>ソフトメディア研究会は10月27日(日)に東京流通センターにて行われる、「M3 2019秋」に参加します。
  //               場所は「j-03b」です。よろしくお願いします。
  //             </p>
  //             <p>
  //               <a href="/dtm/m3/AM0_00/" role="button" className="btn btn-primary btn-sm" title="M3特設ページへ">M3特設ページへ</a>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12">
  //             <h2 className="border">津田沼祭</h2>
  //             <p>
  //               ソフトメディア研究会は、2019年11月22日から24日に開催される第70回千葉工業大学津田沼祭に参加します。
  //               本ブースの他に、VR体験ブースを出します。
  //             </p>
  //             <p>
  //               <a href="http://cit-gakuyu.com/daisai/70th/toppage/index.html" role="button"
  //                  className="btn btn-primary btn-sm" title="津田沼祭公式HPへ">津田沼祭公式HPへ</a>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12">
  //             <h2 className="border">ソフメアドベントカレンダー</h2>
  //             <p>ソフトメディア研究会で開催されるアドベントカレンダー企画の2018年版です。12月1日から毎日記事を公開していきます。<br/>
  //               部員が今までの活動や好きなことについて書きます。
  //             </p>
  //             <p>
  //               <a href="/advent-calendar/2018/index.html" role="button" className="btn btn-primary btn-sm"
  //                  title="アドベントカレンダー">アドベントカレンダーページへ</a>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //
  //     <div className="probootstrap-section">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-md-12 text-center section-heading">
  //             <h2>About</h2>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12">
  //             <h2 className="border">ソフトメディア研究会とは？</h2>
  //             <p>
  //               パソコンを中心に使って創作活動を行うサークルです。
  //               <strong id="program-strong">プログラム班</strong>、
  //               <strong id="multi-strong">マルチメディア班</strong>、
  //               <strong id="dtm-strong">DTM班</strong>の３つがあります。
  //               <br/>
  //               <ul>
  //                 <li>プログラム班は、様々なプログラミング言語を駆使してゲーム開発やアプリケーション開発を行っています。</li>
  //                 <li>マルチメディア班は、イラストや3DCGの制作を行っています。</li>
  //                 <li>DTM班は、音楽作成ソフトで音楽を作ります。DJ始めました。</li>
  //               </ul>
  //             </p>
  //             <h2 className="border">活動内容について</h2>
  //             <p>平常時の主な活動日は指定しておりません。
  //               空いている時間に部室に来て作業をしたり、役職の仕事をしたり、談話したりしています。</p>
  //             <p><strong>毎週水曜日午後6:45</strong>から部会を開いており、会員は参加が義務付けられています。（授業等がある場合はそちらを優先します。）
  //               部会では文化会での行事の人員を選出したり、設備購入等の議決を取ったりなどといった、重要な事を話し合います。</p>
  //             <p>また、年に２回ある大きなイベント、
  //               <strong>文化の祭典</strong>と
  //               <strong>津田沼祭</strong>では、サークルとして各自が作品を出品します。
  //               発表する作品は、基本的に日々の活動の中で制作したものとなります。
  //               主なものとしてはゲーム、音楽、CG等があり、それぞれの班がコラボして一つの作品を作ります。</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //
  //     <section className="probootstrap-section">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-md-12 text-center section-heading">
  //             <h2>トピック</h2>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-4">
  //             <div className="probootstrap-card">
  //               <div className="probootstrap-card-media">
  //                 <img src="/img/DSC00418.JPG" className="img-responsive img-border" alt="2019文化の祭典"/>
  //               </div>
  //               <div className="probootstrap-card-text">
  //                 <h2 className="probootstrap-card-heading mb0">2019文化の祭典</h2>
  //                 <p className="category">2019年5月26日</p>
  //               </div>
  //             </div>
  //           </div>
  //
  //           <div className="col-md-4">
  //             <div className="probootstrap-card">
  //               <div className="probootstrap-card-media">
  //                 <img src="/img/topic_kwkn18.jpg" className="img-responsive img-border" alt="夏合宿"/>
  //               </div>
  //               <div className="probootstrap-card-text">
  //                 <h2 className="probootstrap-card-heading mb0">夏合宿</h2>
  //                 <p className="category">2018年8月20日</p>
  //               </div>
  //             </div>
  //           </div>
  //
  //           <div className="col-md-4">
  //             <div className="probootstrap-card">
  //               <div className="probootstrap-card-media">
  //                 <img src="/img/topic_bunsai18.jpg" className="img-responsive img-border" alt="文化の祭典"/>
  //               </div>
  //               <div className="probootstrap-card-text">
  //                 <h2 className="probootstrap-card-heading mb0">文化の祭典</h2>
  //                 <p className="category">2018年5月27日</p>
  //               </div>
  //             </div>
  //           </div>
  //
  //           <div className="col-md-4">
  //             <div className="probootstrap-card">
  //               <div className="probootstrap-card-media">
  //                 <img src="/img/topic_sinkan18.jpg" className="img-responsive img-border" alt="新入生歓迎会"/>
  //               </div>
  //               <div className="probootstrap-card-text">
  //                 <h2 className="probootstrap-card-heading mb0">新入生歓迎会</h2>
  //                 <p className="category">2018年4月21日</p>
  //               </div>
  //             </div>
  //           </div>
  //
  //           <div className="col-md-4">
  //             <div className="probootstrap-card">
  //               <div className="probootstrap-card-media">
  //                 <img src="/img/topic_1.jpg" className="img-responsive img-border" alt="春合宿"/>
  //               </div>
  //               <div className="probootstrap-card-text">
  //                 <h2 className="probootstrap-card-heading mb0">春合宿</h2>
  //                 <p className="category">2018年3月16日</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // )
};

export default Index;