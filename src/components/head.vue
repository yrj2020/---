<template>
  <div class="header">
    <span class="img animated bounceInLeft">
        <img src="../assets/img/pandaImg.jpg" alt="">
    </span>
    <ul>
      <li :class="$route.name==='首页'?'on':'no'" class="indexDetails">
        <router-link to="/indexDetails">
          <span>首页</span>
        </router-link>
      </li>
      <li :class="$route.name==='关于我们'?'on':'no'" class="aboutUs">
        <router-link to="/aboutUs">
          <span>关于我们</span>
        </router-link>
      </li>
      <li :class="$route.name==='产品'?'on':'no'" class="produce">
        <router-link to="/produce">
          <span>产品</span>
        </router-link>
      </li>
      <li :class="$route.name==='案例'?'on':'no'" class="case">
        <router-link to="/case">
          <span>案例</span>
        </router-link>
      </li>
      <li :class="$route.name==='服务'?'on':'no'" class="serve">
        <router-link to="/serve">
          <span>服务</span>
        </router-link>
      </li>
      <li :class="$route.name==='联系我们'?'on':'no'" class="connectUs">
        <router-link to="/connectUs">
          <span>联系我们</span>
        </router-link>
      </li>
    </ul>
    <span class="login">
        <router-link to="/login">
          <span>登录</span>
        </router-link>
    </span>
  </div>
</template>


<style lang="less">
.header {
  height: 65px;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #2299D5;
  position: relative;
}
.header .img{
    position: absolute;
    left: 322px;
}
.header .login{
    color: #fff;
    background-color: #24A9F4;
    position: absolute;
    right: 326px;
    top: 25%;
    padding: 5px 12px;
    border-radius: 15px;
}

.header .on span{
    color: #24A9F4;
}
.header ul {
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header ul li {
  display: inline;
  line-height: 40px;
  float: left;
 
  span {
    color: #fff;
  }
}

.header ul li:not(:last-child){
 margin-right: 60px;
}
</style>


<script>
export default {};
</script>