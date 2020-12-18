<template>
  <div class="indexDetails">
    <!-- 首页 -->
    <div class="carousel">
      <el-carousel height="400px" :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 6" :key="item">
          <!-- <h3 class="medium">{{ item }}</h3> -->
          <div class="carouseContainer">
            <div class="carouselImg">
              <img src="../../assets/img/carousel1.jpg" />
            </div>
            <div class="carouselText">文字描述</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style>
.carousel {
  background-color: #18171d;
  height: 400px;
  padding: 0 320px;
}
.carouseContainer{
	display: flex;
	padding: 0 50px;
	height: 100%;
}
.carouselImg {
  /* height: 350px; */
  width: 650px;
  /* padding: 20px 0; */
}
.carouselImg img {
  width: 100%;
  height: 100%;
}
.carouselText{
	color: #fff;
	padding: 50px 0;
}
</style>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>
