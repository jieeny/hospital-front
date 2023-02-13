<template>
<div>
    <div class="empty">

    </div>
    <div class="start">
        <img src="@/assets/images/noCommon.png" alt=""/>
        <el-row>
            <el-button type="primary" round @click="start()">开始就诊</el-button>
        </el-row>
    </div>
</div>
</template>
<script>
export default{
    methods:{
        start(){
            if (this.$store.state.active++ > 6) this.$store.state.active = 0;
        }
    }
}
</script>
<style scoped>
.start{
    height: 100%;
    text-align: center;

}
.empty{
    height: 180px;
}
</style>