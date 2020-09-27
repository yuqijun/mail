<template>
  <div class="con4 " >
    <canvas class="preview" id="cvs" width="150" height="150" ></canvas> <span class="btn upload">上传头像<input type="file" class="upload_pic" id="uploaderer1" /></span>
  </div>
</template>

<script type="text/javascript" defer="true">



</script>

<style>
  .con4 {
    width: 300px;
    height: auto;
    overflow: hidden;
    margin: 20px auto;
    color: #FFFFFF;
  }

  .con4 .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #d8b49c;
    display: block;
    font-size: 16px;
    border-radius: 5px;
  }

  .upload {
    float: left;
    position: relative;
  }

  .upload_pic {
    display: block;
    width: 100%;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    border-radius: 5px;
  }
  .preview{
  }

  #cvs {
    border: 1px solid #C0C0C0;
    margin: 20px 0 20px 50px;
    border-radius: 10px;
  }


</style>
