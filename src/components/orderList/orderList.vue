<template>
  <el-container>
    <el-header style="margin-top: -80px">
      <appHeader></appHeader>
    </el-header>
    <el-main >
      <!--        订单div-->
      <el-row  v-for="order in orderList" :key="order.id" style="margin-top: 3%;overflow:hidden;margin-bottom: -1%"  id="productcart">


        <div style="border:1px solid lavender;height:30px;display:flex;align-items:center;justify-content:center">
          <span @click="byIt(order.shopId)">
            {{order.shopName}}
          </span>

          <span>{{order.shopId}}</span>

        </div>
        <div :span="20" style="border: #e5e9f2 1px solid;margin-top: 1%;overflow:hidden;margin: 0px 0px;padding: 0px 0px;" id="productDiv">
          <!--        产品的div-->
          <el-col v-for="product in order.productList" :key="product.id" :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%">




          <div style="width: 100%;height: 100%">

            <div class="productImg" style="margin: 0px 0px;padding:0px 0px">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">
            </div>

            <div style="width: 200px;height: 30px;display: inline;float: left;">
              <span style="display: block;">
                名称
              </span>
              <span>
                {{product.name}}
              </span>
            </div>

            <div style="width: 200px;height: 30px;display: inline;float: left;"  id="num">
              <span style="display: block;">
                数量
              </span>
              <span>
                {{product.number}}
              </span>
            </div>



            <div style="width: 200px;height: 30px;display: inline;float: left;" id="price">
              <span style="display: block">
                  价格
              </span>
              <span>
                {{product.price}}
              </span>
            </div>

            <div style="width: 200px;height: 30px;display: inline;float: left;" >
              <span style="display: block">
                  单品总价
              </span>
              <span>
                {{product.totalPrice}}
              </span>
            </div>

          </div>
          </el-col>
          <div style="width: 380px;float: right;text-align: left;margin-top: -1%">
            <span class="price">
              应付金额：{{order.amountDue}}
            </span>
            <span class="price">
              抵扣金额：{{order.dPayment}}
            </span>
            <span class="price">
              实付金额：{{order.aPayment}}
            </span>
            <span class="price">
              订单编号：{{order.orderNo}}
            </span>
          </div>
        </div>




      </el-row>




    </el-main>
  </el-container>
</template>

<script>
    import appHeader from "../header/header.vue"
    export default {
        components:{
            appHeader:appHeader
        },
        data() {
            return {
                currentDate: new Date(),
                orderList:''
            }
        },
        mounted(){
            var userId = localStorage.getItem("userId");
            const param = {userId:userId};
            this.axios
                .post("/order/list",param)
                .then((res=>{
                    const  {data} = res;
                    if(data.respCode==="000000"){
                        console.log("从后端获取到的 数据 "+JSON.stringify(data.info));
                        this.orderList = data.info;
                    }else{
                        this.$message.error("后端请求接口失败.....")
                    }
                }))
        },
        methods:{
            byIt (shopId){
                 this.$router.push({path:"/business",query:{shopId:shopId}});
            },
        }
    }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    /*border: 1px solid black;*/
    margin-left: 2%;
    border-radius: 4px;
    height: 340px;
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }



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
    /*width: 255.16px;*/
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
  .tabText{
    display:block;
    /*border:1px solid red;*/
    text-align: left;
    width:230px;
    margin-bottom: 4px;
  }
  .aTag{
    text-decoration:none;
  }
  html{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  .price{
    display: block;
    margin-bottom: 6px
  }

  a {
    text-decoration: none;
  }
</style>
