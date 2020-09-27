<template>
  <el-container>
    <el-main style="margin-top:-1%">
      <uploadavatar></uploadavatar>

      <el-row type="flex" class="row-bg" justify="center" style="padding-bottom: 19%">
        <el-form :model="ruleForm" status-icon  ref="ruleForm"  label-width="100px" class="demo-ruleForm">
          <div>
<!--            <label >昵称</label>-->
            </br>
            <el-input type="text" placeholder="昵称" v-model="ruleForm.nickName" id="nickName" autocomplete="off" style="width:300px"></el-input>
          </div>
          <div>
<!--            <label>密码</label>-->
            </br>
            <el-input type="password" placeholder="密码" v-model="ruleForm.passWord" id="passWord" autocomplete="off" style="width:300px"></el-input>
          </div>
          <div>
<!--            <label >确认密码</label>-->
            </br>
            <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.checkPassWord" id="checkPassWord" autocomplete="off" style="width:300px"></el-input>
          </div>
          </br>

          <div>
<!--            <label >邮箱</label>-->
            <el-input v-model="ruleForm.email" placeholder="邮箱号码" id="email" style="width:300px"></el-input>
          </div>
          </br>
          <div>
<!--            <label>手机号码</label>-->
            <el-input v-model="ruleForm.phone" placeholder="手机号码" id="phone" style="width:300px"></el-input>
          </div>
          </br>

          <template>
            <el-radio v-model="ruleForm.typeId" label="普通用户"></el-radio>
            <el-radio v-model="ruleForm.typeId" label="商家"></el-radio>
            <el-radio v-model="ruleForm.typeId" label="其他"></el-radio>
          </template>

          </br>

          <div>
            <el-button   type="success" plain @click="regist()" style="width:143px">注册</el-button>
            <el-button type="primary" plain @click="redirectLogin()" style="width:143px">登陆</el-button>
          </div>
        </el-form>
      </el-row>
    </el-main>
  </el-container>
<!--  <p>注册</p>-->
</template>
<script>

  import uploadavatar from '../common/upload'
  import $ from 'jquery'
    export default {
        data() {
            return {
                ra:[],
                ruleForm: {
                    nickName:'',
                    password:'',
                    checkPassWord:'',
                    email:'',
                    phone:'',
                    typeId:'2'
                },
                hideUpload:false,
                limitCount:1
            };
        },
        methods: {
            redirectLogin () {
                alert("点击了注册→登陆按钮");
                this.$router.push({name:"login"})
            },
            async regist () {

                var count = 1;

                if(this.ruleForm.typeId==='商家'){
                    this.ruleForm.typeId = '1';
                }else if(this.ruleForm.typeId==='普通用户'){
                    this.ruleForm.typeId = '2';
                }else{
                    this.$message.error('请选择商家或者普通用户...');
                    return;
                }
                console.log("注册法发往后端的数据===="+this.ruleForm);
                const {data} = await this.axios.post("/regist",this.ruleForm);
                console.log("服务端返回的注册结果=="+data.info);

                var messages ="";
                if(data.info==="success"){
                    this.$message({
                        message: '注册成功，3秒后即将跳转至登录页面...',
                        type: 'success'
                    });

                    $("#nickName").val("");
                    $("#phone").val("");
                    $("#passWord").val("");
                    $("#checkPassWord").val("");
                    $("#email").val("");

                    //跳转至登录页面
                    setTimeout(() => {
                        this.$router.push({path: "/login"}); // 强制切换当前路由 path
                    }, 3000);
                }else{
                    this.$message.error(data.info);
                }
            },
            onchanger () {
                this.hideUpload = fileList.length >= this.limitCount;
            },
            handleRemoveer () {
                this.hideUpload = fileList.length >= this.limitCount;
            }
        },
        components:{
            uploadavatar:uploadavatar
        },
        mounted () {
              //获取上传按钮
              var input1 = document.getElementById("uploaderer1");
              if(typeof FileReader === 'undefined') {
                  //result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
                  console.log("抱歉，你的浏览器不支持 FileReader")
                  input1.setAttribute('disabled', 'disabled');
              } else {
                  console.log("浏览器支持文件读取")
                  console.log("input1==="+input1)
                  input1.addEventListener('change', readFile, false);

              }

              function readFile() {
                  var file = this.files[0]; //获取上传文件列表中第一个文件
                  if(!/image\/\w+/.test(file.type)) {
                      //图片文件的type值为image/png或image/jpg
                      alert("文件必须为图片！");
                      return false;
                  }
                  // console.log(file);
                  var reader = new FileReader(); //实例一个文件对象
                  reader.readAsDataURL(file); //把上传的文件转换成url
                  //当文件读取成功便可以调取上传的接口
                  reader.onload = function(e) {

                      var image = new Image();
                      // 设置src属性
                      image.src = e.target.result;
                      var max = 200;
                      // 绑定load事件处理器，加载完成后执行，避免同步问题
                      image.onload = function() {
                          // 获取 canvas DOM 对象
                          var canvas = document.getElementById("cvs");
                          // 获取 canvas的 2d 环境对象,
                          var ctx = canvas.getContext("2d");
                          // canvas清屏
                          ctx.clearRect(0, 0, canvas.width, canvas.height);

                          ctx.drawImage(image, 0, 0, 200, 200);

                      };
                  }
              };
        }
    }
</script>

<style>
  .hide .el-upload--picture-card {
    display: none;
  }
</style>
