<template>
  <div class="foot">
    <div class="footer1">
      <div class="container_index">
        <img src="../assets/img/pandaImg2.jpg" alt="" />
        <span class="connectImg">
          <img src="../assets/img/connect1.jpg" alt="" />
          <img src="../assets/img/connect2.jpg" alt="" />
          <img src="../assets/img/connect3.jpg" alt="" />
        </span>
      </div>
    </div>

    <div class="footer2">
      <div class="con_footer">
        <ul>
          <li class="title"><a href="#">解决方案</a></li>
          <li><a href="#">咨询服务</a></li>
          <li><a href="#">客户支持</a></li>
          <li><a href="#">集成服务</a></li>
          <li><a href="#">管理服务</a></li>
        </ul>
        <ul>
          <li class="title"><a href="#">产品</a></li>
          <li><a href="#">电子市民中心</a></li>
          <li><a href="#">经济脉动</a></li>
          <li><a href="#">统一身份认证</a></li>
          <li><a href="#">移动办公平台</a></li>
          <li><a href="#">OA协同办公系统</a></li>
        </ul>

        <ul>
          <li class="title"><a href="#">服务</a></li>
          <li><a href="#">产品安全</a></li>
          <li><a href="#">合法合规</a></li>
        </ul>

        <ul>
          <li class="title"><a href="#">新闻资源</a></li>
          <li><a href="#">新闻动态</a></li>
          <li><a href="#">媒体转载</a></li>
          <li><a href="#">精彩视频</a></li>
          <li><a href="#">行业分析</a></li>
        </ul>

        <ul>
          <li class="title"><a href="#">关于我们</a></li>
          <li><a href="#">公司介绍</a></li>
          <li><a href="#">产品领域</a></li>
          <li><a href="#">使命和愿景</a></li>
          <li><a href="#">品牌标识</a></li>
        </ul>

        <ul>
          <li class="title"><a href="#">联系我们</a></li>
          <li><a href="#">校园招聘</a></li>
          <li><a href="#">社会招聘</a></li>
          <li><a href="#">实习生招聘</a></li>
        </ul>
      </div>
    </div>
    <div class="footer3">
        <span class="text">
            <span>加入我们</span><span class="shu">|</span>
            <span>免责声明</span><span class="shu">|</span>
            <span>隐私政策</span><span class="shu">|</span>
            <span>版权公告©1999-2016天津磐达科技有限公司及/或其关联公司及特许人。版权所有</span>
        </span>
    </div>
  </div>
</template>


<style lang='less'>
.container_index {
  margin: 0 326px;
}
.foot {
  width: 100%;

  .footer1 {
    height: 50px;
    background-color: #758595;
    .connectImg {
      float: right;
      padding-top: 5px;
      img:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
  .footer2 {
    height: 240px;
    background-color: #eff3f6;
    border-bottom: 1px solid #a2a9b5;
    .con_footer {
      margin: 0 25%;
      padding: 50px 0;
      display: flex;
      .title {
        a {
          color: #424242 !important;
          font-size: 14px !important;
        }
      }
      ul{
        a{
            color: #757575;
            font-size: 12px;
            letter-spacing: 1px;
        }
      }
      ul:not(:last-child) {
        margin-right: 110px;
      }
      ul > li:not(:last-child) {
        margin-bottom: 8px;
        // margin-right: 85px;
      }
    }
  }

  .footer3 {
    background-color: #eff3f6;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: #757575
    };

    .text{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shu{
        font-size: 10px;
        padding: 0px 3px;
        
    }
  }
}
</style>