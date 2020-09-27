<template>
  <el-container >
    <el-main >
      <el-row type="flex" class="row-bg" justify="center" style="padding-top: 8%;padding-bottom: 19%">
        <div>
          <el-avatar  style="margin-bottom: 10%;float:left;margin-left: 41%" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <el-form   label-width="80px" :model="formLabelAlign" >

            </br>
            <el-input v-model="formLabelAlign.phone"  placeholder="手机号/账号" id="account" style="width:300px"></el-input>
            </br>
            </br>

            </br>
            <el-input type="password" v-model="formLabelAlign.password" id="password"  placeholder="密码" style="width:300px"></el-input>
            </br>
            </br>
            <el-row>
              <el-button @click="login()" type="primary" plain style="width:143px">登录</el-button>
              <el-button @click="redirectRegister()"  type="warning" plain style="width:143px">注册</el-button>
            </el-row>
          </el-form>
        </div>
      </el-row>
    </el-main>
  </el-container>
</template>


<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                formLabelAlign: {
                    phone: '',
                    password: '',
                    type: ''
                }
            };
        },
        methods : {
            login () {
                if(this.formLabelAlign.account===''||this.formLabelAlign.password===''){
                    this.$message.error("账户/密码不能为空......");
                    return ;
                }else {
                    console.log("向后端发送登录的信息："+JSON.stringify(this.formLabelAlign));
                    this.axios
                        .post("login/", this.formLabelAlign).then((res => {
                            const{data} = res;
                            console.log("登陆后的返回信息："+JSON.stringify(data));
                            if (data.respCode === "000000") {
                                localStorage.setItem("userType",data.typeId);
                                localStorage.setItem("perm",data.info.typeId);
                                localStorage.setItem("userId",data.info.id);
                                localStorage.setItem("shopId",data.shopId);

                                console.log("当前登录用户角色ID----"+localStorage.getItem("perm"));
                                console.log("当前登录用户ID-----"+localStorage.getItem("userId"));
                                console.log("当前用户持有店铺id："+localStorage.getItem("shopId"));
                                this.$message({
                                    message:"登录成功,即将跳转至首页....",
                                    type:"success"
                                });
                                //重定向到主页
                                this.$router.push({name:"home"});
                                return ;
                            }
                    }))
                }
            },
            redirectRegister () {
                this.$router.push({path:'/register'});
                return ;
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
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
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
  *{
    /*font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;*/
    font-family: "PingFang SC"
  }
</style>
