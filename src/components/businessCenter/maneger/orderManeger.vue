<template>
  <el-main>
    <el-input placeholder="请输入内容" style="width:410px;float: left;" v-model="input1" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="商品名称" value="1"></el-option>
        <el-option label="客户名称" value="2"></el-option>
        <el-option label="客户手机号" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchRoute">搜索</el-button>
    </el-input>
    <template   style="display: inline">
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="0">未接订单</el-radio>
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="1">已接单</el-radio>
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="2">准备中</el-radio>
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="3">开始配送</el-radio>
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="4">商家送达</el-radio>
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="5">用户确认收到</el-radio>
      <el-radio v-model="orderStatus" @change="getOrderByStatus" label="6">交易完成</el-radio>
    </template>
    <!--        订单div-->
    <el-row  v-for="order in orderList" :key="order.id" style="margin-top: 2%;overflow:hidden;margin-bottom: -1%"  id="productcart">



      <div :span="20" style="border: #e5e9f2 1px solid;margin-top: 1%;overflow:hidden;margin: 0px 0px;padding: 0px 0px;" id="productDiv">
        <!--        产品的div-->
        <el-col v-for="product in order.productList" :key="product.id" :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%;display: block">
          <div class="productImg" style="margin: 0px 0px;padding:0px 0px">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">
          </div>

          <div style="width:100%;height: 100%;">

            <div style="width: 200px;height: 20px;display: inline;float: left;margin-left: 3%" >
              <span style="display: block;">
                名称
              </span>
              <span style="display: block;margin-bottom: 5%">
                {{product.name}}
              </span>
            </div>

            <div style="width: 200px;height: 20px;display: inline;float: left;margin-left: 3%"  id="num">
              <span style="display: block;">
                数量
              </span>
              <span style="display: block;">
                {{product.number}}
              </span>
            </div>

            <div style="width: 200px;height: 20px;display: inline;float: left;margin-left: 3%" id="price">
              <span style="display: block;">
                  价格
              </span>
              <span style="display: block;">
                {{product.price}}
              </span>
            </div>


            <div style="width: 200px;height: 20px;display: inline;float: left;margin-left: 3%" >
              <span style="display: block;">
                  单品总价
              </span>
              <span style="display: block;">
                {{product.totalPrice}}
              </span>
            </div>


          </div>









        </el-col>
        <div style="width: 370px;float: right;text-align: left;margin-top: 1%;display: block;margin-right: 3%;margin-bottom: 1%;">
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
            订单编号：<a href="#" @click="toDetail(order.orderNo)">{{order.orderNo}}</a>
          </span>

          <el-row v-show="orderStatus ==0 || orderStatus ==1 ||orderStatus ==2 || orderStatus ==3">
            <el-button  @click="changeOrderStatus(order.orderNo,order.orderStatus)"  type="primary" plain>{{chooseOrderStatus}}</el-button>
          </el-row>
        </div>



      </div>
    </el-row>






  </el-main>
</template>

<script>
    export default {
        data(){
            return{
                count:"0",
                messageInfo:"",
                input1:'',
                select:"",
                select2:"",
                orderStatus:"0",
                orderList:[
                    // {
                    //     orderNo:"15156151516",
                    //     amountDue:"1561",
                    //     aPayment:"100",
                    //     dPayment:"156",
                    //     productList:[
                    //         {
                    //             name:"汉堡王",
                    //             url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    //             number:"2",
                    //             price:"3",
                    //             totalPrice:"23"
                    //         },
                    //         {
                    //             name:"汉堡王2",
                    //             url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    //             number:"2",
                    //             price:"3",
                    //             totalPrice:"23"
                    //         }
                    //
                    //     ]
                    //
                    // }
                ]

            }
        },
        methods:{
            filterOrderByStatus () {

            },
            searchRoute () {},
            //根据订单状态查询店铺订单
            getOrderByStatus(){
                const params = {
                  shopId:localStorage.getItem("shopId"),
                  status:this.orderStatus
                };
                this.axios.post("order/getOrderByStatus",params
                ).
                then((res)=>{
                   const  {data} = res;
                   if(data.respCode=="000000"){
                       this.orderList = data.info;
                       console.log("根据状态选择 订单时 后端返回的结果："+JSON.stringify(data));
                   }else{
                       this.$message.error("接口请求失败。。")
                   }
                });

            },
            changeOrderStatus(orderId,orderStatus){
                var statusInt = parseInt(orderStatus);
                var statusCount = statusInt+1;
                this.count = statusCount.toString();
                const params ={
                    orderNo:orderId,
                    status:statusCount
                };
                 this.axios
                     .post("order/changeStatus",params)
                     .then((res)=>{
                         const {data} = res;
                        if(data.respCode == "000000"){
                            this.$message({
                                type:"success",
                                message:this.messageInfo
                            });
                        }else{
                            this.$message.error("系统异常")
                        }
                     });
            }},
        mounted () {
            const params = {
                // shopId: "000000000001"
                shopId:localStorage.getItem("shopId")
            };
            // var shopId =  this.$route.query.id;
            //根据店铺商铺id 查询出所有的店铺产品
            this.axios.post("/order/getProductByShopId",params)
                .then((res)=>{
                    const {data} = res;
                    // console.log("根据店铺编号返回的 店铺订单"+JSON.stringify(data.info));
                    this.orderList = data.info;
                });
        },
        computed:{
          chooseOrderStatus:function(){
              switch (this.orderStatus) {
                  case "0":
                      this.messageInfo = "接单成功";
                      return "接单";
                  case "1":
                      this.messageInfo= "请开始准备订单";
                    return "准备订单";
                  case "2":
                      this.messageInfo = "请尽快将订单送达客户指定地址";
                      return "配送";
                  case "3":
                      this.messageInfo = "订单已送达";
                      return "已送达";
                  default:
                      break;
              }
          }
        }
    }
</script>

<style>
  .price{
    display: block;
    margin-bottom: 6px
  }
</style>
