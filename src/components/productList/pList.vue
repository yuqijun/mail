<template>
  <el-row :gutter="20"   >
    <el-col :span="4" v-for="product in productList" :key="product.id" style="margin-top:20px;margin-bottom: 2%">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>{{product.name}}</span>
          <span>$:{{product.price}}</span>
          </br>
          <span style="display: block; color: deepskyblue">店铺：{{product.shopName}}---{{productNames}}</span>
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
                productList:'',
                productNames:''
            }
        },
        methods:{
            pushList(pName){
                this.axios
                    .post("product/search",{"productName":pName})
                    .then((res=>{

                        const {data} = res;

                        // console.log("pList.respCode----"+data.respCode)

                        if(data.respCode==="000000"){
                            this.productList = data.info;

                            // console.log("pList----data.info---"+JSON.stringify(this.productList));
                        }else{
                            this.$message.error("请求借口失败.......")
                        }

                    }))
            },
            byIt (Id) {
                this.$router.push({path:"/business",query:{shopId:Id}});
            }
        },
        watch:{
            '$store.state.searchProductName'(newV,oldV){
                this.axios
                    .post("product/search",{"productName":newV})
                    .then((res=>{

                        const {data} = res;

                        // console.log("pList.respCode----"+data.respCode)

                        if(data.respCode==="000000"){
                            this.productList = data.info;

                            // console.log("pList----data.info---"+JSON.stringify(this.productList));
                        }else{
                            this.$message.error("请求借口失败.......")
                        }

                    }))
            }
        },

        mounted(){
            var  pName = this.$route.params.reqStr;
            // console.log("pList从搜索框获取的 productName-----"+pName);

            this.axios
                .post("product/search",{"productName":pName})
                .then((res=>{

                    const {data} = res;

                    // console.log("pList.respCode----"+data.respCode)

                    if(data.respCode==="000000"){
                        this.productList = data.info;

                        // console.log("pList----data.info---"+JSON.stringify(this.productList));
                    }else{
                        this.$message.error("请求借口失败.......")
                    }

                }))
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
