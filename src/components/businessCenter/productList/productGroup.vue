<template>
  <div>
    <el-col :span="20"    style="height:60px;float: left;margin-left: 9%;margin-top:2%">
      <div class="productImg" style="margin: 0px 0px;padding:0px 0px;margin-left: -10%">
        <img :src="producte[0].url" class="image" style="display: inline;height: 80px;width:80px;float:left;margin-left: 2%;margin-top: -2%">
      </div>
      <!--      产品描述信息-->
      <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 140px;margin-top: -1%;float: left;margin-left: 2%;">
        <span style="display: block;margin-bottom: 8%">
          产品名称
        </span>
        <span class="productName" style="display: block">
          {{producte[0].name}}
        </span>
      </div>

      <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 200px;margin-top: -1%;float: left;margin-left: 2%">
        <span style="display: block;margin-bottom: 8%">
          产品描述
        </span>
      <span class="productName" style="display: block">
          {{producte[0].desc}}
        </span>
    </div>

    <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 200px;margin-top: -1%;float: left;margin-left: 2%">
      <span style="display: block;margin-bottom: 8%">
        产品状态
      </span>
      <span class="productName" style="display: block">
        {{producte[0].status}}
      </span>
    </div>

    <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 200px;margin-top: -1%;float: left;margin-left: 2%">
    <span style="display: block;margin-bottom: 8%">
      上/下架产品
    </span>
      <span class="productName" style="display: block">
        <a href="#">上</a><span>/</span><a href="#">下架</a>
    </span>
    </div>

    <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 200px;margin-top: -1%;float: left;margin-left: 2%">
      <span style="display: block;margin-bottom: 8%">
        产品价格
      </span>
        <span class="productName" style="display: block">
        ￥：{{producte[0].price}}
      </span>
    </div>

      <div style="display: inline;float: left;margin-left: 8%;text-align: left;width: 40px;margin-top: -1%;float: left;margin-left: 2%">
        <span style="display: block;margin-bottom: 8%">
          <a href="#">编辑</a>
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
                            productGroup.forEach(function(obj){
                                if(obj.id===id){
                                    obj.number=number;
                                }
                            });
                        }
                    }


                    //将数据传递给父组件
                    this.toShopCard(productGroup,totalPriceer);
                })
            },
            toShopCard(productList,totalPriceer){
                // 应该传的是个数组

                //总线传递
                // bus.$emit("sendPorductList",productList);

                //向父组件传递消息
                this.$emit("sendPordoctList",productGroup,totalPriceer);
            }
        },
        props:["producte"]
    };

</script>

<style>
  a {
    text-decoration: none;
  }
</style>
