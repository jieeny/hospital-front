<template>
    <div>
        <div class="title-line">就诊流程</div>
        <div style="height:60px;margin-top:30px">
            <el-steps :active="this.$store.state.active" align-center >
                <el-step title="点击就诊按钮" icon="fas fa-briefcase-medical fa-2x"></el-step>
                <el-step title="选择科室" icon="fas fa-hospital fa-2x"></el-step>
                <el-step title="选择医生" icon="fas fa-user-md fa-2x"></el-step>
                <el-step title="填写问诊信息" icon="fas fa-pencil-alt fa-2x"></el-step>
                <el-step title="支付挂号费用" icon="fab fa-alipay fa-2x"></el-step>
                <el-step title="就诊" icon="fas fa-bell fa-2x"></el-step>             
                <el-step title="查看问诊信息" icon="fas fa-notes-medical fa-2x"></el-step>            
            </el-steps>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        data(){
            return{
                active: 0
            }
        },
        methods:{
            
        }
    }
    </script>
            
    <style scoped>
    .title-line {
        border-bottom: 1px solid #e5e5e5;
        height: 40px;
        line-height: 40px;
        color: #5a75f6;
        font-size: 1;
        font-family: "microsoft yahei";
        font-weight: 700;
        margin-bottom: 20px;
        margin-left: 30px;
        margin-right: 30px;
    }
            
    .icon {
        width: 0.3em;
        height: 0.3em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }    
    </style>
            