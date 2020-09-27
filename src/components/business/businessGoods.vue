<template>
  <div>
    <el-col :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%">
      <div class="productImg" style="margin: 0px 0px;padding:0px 0px;margin-left: -10%">
        <img :src="producte[0].url" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">
      </div>
<!--      产品描述信息-->
      <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 200px">
        <span class="productName">
          {{producte[0].name}}
        </span>
      </div>


      <div style="width: 75px;height: 20px;display: inline;float: left;text-align: left;margin-left: 10%;"  id="num">
      <span style="display: inline;margin-bottom: 50%; text-align: left">
        数量：
      </span>
        <el-input-number  v-model="producte[0].number" style="float: left;margin-left: 75%;margin-top: -40% " :min="0" @change="handleChange($event,producte[1])"   label="描述文字">
        </el-input-number>
      </div>



      <div style="width: 200px;height: 20px;display: inline;float: left;margin-left:25%;text-align: left" id="price">
      <span style="display: inline">
        价格:
      </span>
        <span style="display: inline"  class="productPrice">
        {{producte[0].price}}
      </span>
      </div>

     <div  style="width: 200px;height: 20px;display: inline;float: right;text-align: left;margin-left: 100px;" id="price2">
      <span style="display: inline" >
          商品总价:
      </span>
      <span style="display: inline"  class="tagPrices">
        {{producte[0].price*producte[0].number}}
      </span>
    </div>

    </el-col>
  </div>

</template>

<script>

  export default {
      name:'businessGoods',
      data() {
          return {
              num: 0,
          };
      },
      methods: {
          handleChange(value,productList) {
              this.$nextTick(() => {
                  var arrayPrice = document.getElementsByClassName("tagPrices");
                  var totalPriceer = parseInt(0);
                  for(var i=0;i<arrayPrice.length;i++){
                      totalPriceer+=parseInt(arrayPrice[i].innerHTML);
                  }


                  this.totalPrice=totalPriceer;


                  // 获取数量的那个标签  获取产品id的那个标签
                  var numberArray = document.getElementsByClassName("productNumber");
                  var idArray = document.getElementsByClassName("productId");
                  var id = '';
                  var number='';


                  for(var i=0;i<numberArray.length;i++){
                      if(parseInt(numberArray[i].innerHTML)>0){
                          number = parseInt(numberArray[i].innerHTML);
                          id = parseInt(idArray[i].innerHTML);
                          productList.forEach(function(obj){
                             if(obj.id===id){
                                 obj.number=number;
                             }
                          });
                      }
                  }


                  //将数据传递给父组件
                  this.toShopCard(productList,totalPriceer);
              })
          },
          toShopCard(productList,totalPriceer){
              // 应该传的是个数组

              //总线传递
              // bus.$emit("sendPorductList",productList);

              //向父组件传递消息
              this.$emit("sendPordoctList",productList,totalPriceer);
          }
      },
      props:["producte"]
  };

</script>

<style>

</style>
