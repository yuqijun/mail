<template>
  <el-row :gutter="20"   >
    <el-col :span="4" v-for="product in productList" :key="product.id" style="margin-top:20px;margin-bottom: 2%">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>{{product.name}}</span>
          <span>$:{{product.price}}</span>
          </br>
          <span style="display: block; color: deepskyblue">店铺：{{product.shopName}}</span>
          <div class="bottom clearfix">
            <el-button @click="byIt(product.shopId)">进店</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        data() {
            return {
                productList:''
            }
        },
        methods : {
            //进店
            byIt (Id) {
                this.$router.push({path:"/business",query:{shopId:Id}});
            },
            //根据名称模糊搜索产品
            searchByProductName(){}
        },
        mounted(){
            this.axios
                .post("product/byClassId",{classId:"4"})
                .then((res=>{
                    const  {data} = res;
                    if(data.respCode==="000000"){
                        this.productList=data.info;
                    }else{
                        this.$message.error("请求失败......")
                    }
                }))
        },
        watch: {
            //监听侧边栏产品分类选择
            $route: function () {

                console.log("  foodList 路由发生变化............ ")

                this.axios
                    .post("product/byClassId", {classId: this.$route.params.num})
                    .then((res => {
                        const {data} = res;
                        if (data.respCode === "000000") {
                            this.productList = data.info;
                        } else {
                            this.$message.error("请求失败......")
                        }
                    }))
            }
        }
    }
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>

