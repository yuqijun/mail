<template>
  <el-container>
    <el-header>
      <appHeader>
      </appHeader>
    </el-header>
      <el-container style="float: left;margin-left:8%;margin-top: 4%;display: block">
        <el-main>
          <div v-for="product in productList" :key="product.id  ">
            <appBusinessGoods :producte="[product,productList]" v-on:sendPordoctList="pushProductList"></appBusinessGoods>
          </div>
        </el-main>
        <el-footer style="display: block">
          <el-button v-model="direction" @click="drawer = true" type="primary" style="float: right;margin-right:13%">
            购物车列表
          </el-button>
          <el-drawer
            size="100"
            id="gouwuchekuang"
            title="结算"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">
            <appShoppingCart :toProductList="[orderProductList,cardTotalPrice]" v-on:toTotalPrice="getTotalPrice"></appShoppingCart>
            <div style="width:200px;height: 40px;float: right;margin-bottom: 1%;text-align: left;margin-right: 4.5%">
              <span style="display: inline">
                订单金额：
              </span>
              <span style="display: inline">
                {{orderPrice}}
              </span>
            </div>
            <el-button @click="pushDeal" style="float: right;display: block;margin-top: 2%;margin-bottom:1%;margin-right: -5%" type="primary" plain>
              提交订单
            </el-button>
          </el-drawer>
        </el-footer>
      </el-container>
  </el-container>
</template>

<script>
  import $ from 'jquery'
  import appHeader from '../header/header.vue'
  import appBusinessSlider from '../business/businessSlider.vue'
  import appBusinessGoods from '../business/businessGoods.vue'
  import  appShoppingCart from '../business/businessShoppingCart.vue'

  export default {
      components:{
          appHeader:appHeader,
          appBusinessSlider:appBusinessSlider,
          // 产品显示区域
          appBusinessGoods:appBusinessGoods,
          // 购物车显示区域
          appShoppingCart:appShoppingCart
      },
      data () {
          return {
              fullscreenLoading: false,
              cardTotalPrice:'',
              drawer: false,
              direction: 'btt',
              productList:'',
              orderProductList:'',
              orderPrice:''
          }
      },
      methods:{
          handleClose(done) {
              this.$confirm('确认关闭？')
                  .then(_ => {
                      done();
                  })
                  .catch(_ => {});
          },
          pushProductList (data,totalPrice) {


              // console.log("business 从 businessGoods 接收到的 订单 产品列表---"+JSON.stringify(data));


              //订单总价金额
              this.orderPrice=totalPrice

              this.cardTotalPrice = totalPrice;

              var array = [];

              data.forEach(function(obj){
                  if(obj.number>0){
                      array.push(obj);
                  }
              });

              this.orderProductList = array;

              // console.log("business 从 businessGoods 接收到的 订单 产品列表---"+JSON.stringify(this.orderProductList));
          },
          getTotalPrice (data) {
              this.orderPrice = data;
          },
          pushDeal () {

              //后端接口需要的数据{
              //  店铺id，product集合对象，用户对象
              // }
              // console.log("传递给后端的交易数据 ---- "+JSON.stringify(this.orderProductList));

              const loading = this.$loading({
                  lock: true,
                  text: 'Loading',
                  spinner: 'el-icon-loading',
                  background: 'rgba(0, 0, 0, 0.7)'
              });

              //向后端发送数据，后端有返回信息的话立马调用  loading.close()方法  关闭加载漫画，并返回下单结账

              const paramer = {
                  productList:this.orderProductList,
                  userId:localStorage.getItem("userId"),
                  shopId:"0001"
              };

              console.log("发送至后端的结账数据---"+paramer);

              this.axios
                  .post("/order/submit",paramer)
                  .then((res=>{
                      const {data} = res;
                      console.log("得到的信息------"+data.info);


                      if(data.info==='success'){
                          loading.close();
                          this.$message({
                              message:"付款成功....",
                              type:'success'
                          })
                      }else{
                          this.$message.error("付款失败...");
                          loading.close();
                      }
                  }));
          }
      },
      mounted(){
          var shopId = this.$route.query.shopId;
          // alert("从 进店 按钮获取的 shopId--"+shopId);
          //发送 axios请求后端获取 店铺产品集合 然后赋值 给 data 中的  productList
          // 参数是店铺 id

          this.$message({
              message:"business 加载数据....",
              type:"success"
          });
          this.axios
              .post("product/allofshopid",{"shopId":shopId})
              .then((res=>{
                  const {data} = res;
                  if(data.respCode==="000000"){
                      this.productList = data.info;
                  }else{
                      this.$message.error("该店铺目前没有上架产品...")
                  }
              }))
      }
  }

</script>

<style>

</style>
