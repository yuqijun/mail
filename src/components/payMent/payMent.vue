<template>
  <el-container>
    <el-header>
      <appHeader></appHeader>
    </el-header>
      <el-main >
<!--        <el-row v style="margin-top: 3%;overflow:hidden;margin-bottom: -1%"  id="productcart">-->

<!--          <div :span="20" style="border: #e5e9f2 1px solid;margin-top: 1%;overflow:hidden;margin: 0px 0px;padding: 0px 0px;" id="productDiv">-->
<!--            &lt;!&ndash;        产品的div&ndash;&gt;-->
<!--            <el-col v-for="product in order.productList"  :key="product.id" :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%">-->
<!--              <div class="productImg" style="margin: 0px 0px;padding:0px 0px">-->
<!--                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">-->
<!--              </div>-->


<!--              <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:10%;"  id="num">-->
<!--            <span style="display: inline;margin-bottom: 50%">-->
<!--              数量：-->
<!--              <count :date="product.price"  @refreshProductTotalPrice="refreshProductTotalPrice" style="float: left;margin-left: 80%;margin-top: -14%">-->

<!--              </count>-->
<!--            </span>-->
<!--              </div>-->


<!--              <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:15%;" id="price">-->
<!--              <span style="display: inline">-->
<!--                价格:-->
<!--              </span>-->
<!--                <span style="display: inline">-->
<!--                {{product.price}}-->
<!--              </span>-->
<!--              </div>-->

<!--              <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:5%;" id="price2">-->
<!--            <span style="display: block" >-->
<!--                商品总价:{{iTotalPrice}}-->
<!--            </span>-->
<!--              </div>-->

<!--            </el-col>-->
<!--            <div style="width: 260px;float: right;text-align: left;margin-top: -1%">-->
<!--            <span class="price">-->
<!--              应付金额：{{order.amountDue}}-->
<!--            </span>-->
<!--              <span class="price">-->
<!--              抵扣金额：{{order.deductionAmount}}-->
<!--            </span>-->
<!--              <span class="price">-->
<!--              实付金额：{{order.actualPayment}}-->
<!--            </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-row>-->




        <el-row v style="margin-top: 3%;overflow:hidden;margin-bottom: -1%"  id="productcart">

          <div :span="20" style="border: #e5e9f2 1px solid;margin-top: 1%;overflow:hidden;margin: 0px 0px;padding: 0px 0px;" id="productDiv">
            <div v-for="product in order.productList">
            <productOrder @returnTotalPrice="returnTotalPrice" :date="product"></productOrder>
            </div>
            <div style="width: 260px;float: right;text-align: left;margin-top: -1%">
            <span class="price">
              应付金额：{{order.amountDue}}
            </span>
              <span class="price">
              抵扣金额：{{order.deductionAmount}}
            </span>
              <span class="price">
              实付金额：{{order.amountDue-order.deductionAmount}}
            </span>
            </div>
            <el-button type="primary" plain style="display: block;float: right;margin-top: 4%;margin-right: -4%;margin-bottom: 1%">付款</el-button>

          </div>
        </el-row>


    </el-main>
  </el-container>
</template>

<script>
    import count from '../common/count.vue'
    import appHeader from "../header/header.vue"
    import productOrder from "../common/productOrder.vue"
    export default {
        components:{
            appHeader:appHeader,
            count:count,
            productOrder:productOrder
        },
        data() {
            return {
                      order:{
                          id:'',
                          productList:[{
                              id: '0000001',
                              name: "好吃的汉堡",
                              price: "88",
                              url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                              shopName: "麻辣汉堡",
                              number:'1',
                              productTotalPrice:'99'
                          },
                          {
                              id: '0000002',
                              name: "好吃的汉堡",
                              price: "150",
                              url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                              shopName: "麻辣汉堡",
                              number:'1',
                              productTotalPrice:'99'
                          }],
                          amountDue:99,
                          deductionAmount:100
                      }
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            refreshProductTotalPrice (data) {
                console.log("父组件收到的子组件传来的 产品总价=="+data);
                return data;
            },
            returnTotalPrice (toTalPrice) {
                this.order.amountDue = toTalPrice;
                console.log("应付金额 一刷新");
            }
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
</style>
