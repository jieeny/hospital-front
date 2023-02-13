<template>
    <div class="content">
        <div class="content-top">
            <div class="content-topTitle">
                选择医生
            </div>
            <div class="content-preStep" @click="toPreStep()">
                返回
            </div>
        </div>
        <div>
            <table class="table">
                <tr class="top-menu">
                    <td class="table-td1">医生</td>
                    <td class="table-td2">职别</td>
                    <td class="table-td3">所在医院</td>
                    <td class="table-td4">当前就诊人数</td>
                    <td class="table-td7">操作</td>
                </tr>
                <tr v-for="(item,i) in doctorList" :key="i">
                    <td class="table-td1">{{item.name}}</td>
                    <td class="table-td2">{{item.level}}</td>
                    <td class="table-td3">{{item.hosp}}</td>
                    <td class="table-td4">{{item.nowpatientsNumber}}</td>
                    <td class="table-td7">
                        <button class="select-button" @click="selectDotor(item)">选择</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="pagination-par">
            <el-pagination background layout="pager,next" next-text="下一页" :page-size="5" :total="doctorList.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

           
            doctorList:[
                    {
                        doctorId:"1",
                        headImg: "@/assets/images/userImg.png",                     //头像
                        name: "医生1",                                              //姓名
                        hosp: "湛江市人民医院",                                      //医院
                        level: "主任医师",                                           //级别
                        nowpatientsNumber: "1",                                      //当前病人数量   
                    },
                    {
                        doctorId:"2",
                        headImg: "@/assets/images/userImg.png",                     //头像
                        name: "医生1",                                              //姓名
                        hosp: "湛江市人民医院",                                      //医院
                        level: "主任医师",                                           //级别
                        nowpatientsNumber: "1",                                      //当前病人数量   
                    },
                    {
                        doctorId:"3",
                        headImg: "@/assets/images/userImg.png",                     //头像
                        name: "医生1",                                              //姓名
                        hosp: "湛江市人民医院",                                      //医院
                        level: "主任医师",                                           //级别
                        nowpatientsNumber: "1",                                      //当前病人数量   
                    },
                    {
                        doctorId:"4",
                        headImg: "@/assets/images/userImg.png",                     //头像
                        name: "医生1",                                              //姓名
                        hosp: "湛江市人民医院",                                      //医院
                        level: "主任医师",                                           //级别
                        nowpatientsNumber: "1",                                      //当前病人数量   
                    },
                    {
                        doctorId:"5",
                        headImg: "@/assets/images/userImg.png",                     //头像
                        name: "医生1",                                              //姓名
                        hosp: "湛江市人民医院",                                      //医院
                        level: "主任医师",                                           //级别
                        nowpatientsNumber: "1",                                      //当前病人数量   
                    }
                ],
        }
    },

    methods: {
        
        //获取选择医生的编号
        selectDotor(value){
            console.log(value.doctorId);
            this.$store.state.active++;
        },
        toPreStep(){
            if (this.$store.state.active-- < 0) this.$store.state.active = 0;
        }

    },
}
</script>
<style scoped>

.content{
    background: #fff;
    padding: 37px 33px;
} 

.content-top{
    display: flex;
    justify-content: flex-start;
}

.content-topTitle{
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

.content-preStep{
    border-bottom: 1px solid #e5e5e5;
    height: 40px;
    line-height: 40px;
    /* color: #5a75f6; */
    color: white;
    font-size: 1;
    font-family: "microsoft yahei";
    font-weight: 700;
    margin-bottom: 20px;
    margin-left: 450px;
    margin-right: 30px;
    cursor: pointer;
    background-color: #5a75f6;
    width: 100px;
    text-align: center;
    border-radius: 20px;
}
.table tr{
    height: 45px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* cursor: pointer; */
    width: 100%;
}
.table td{
    text-align: center;
}
   

.table .top-menu{
    height: 54px;
    background: #f3f6ff !important;
}

.table-td1{
    width: 80px;
}

    
.table-td2{
    width: 140px;
}

    
.table-td3{
    width: 150px;
}

.table-td4{
    width: 130px;
}

.table-td5{
    width: 80px;
}

    
.table-td6{
    width: 120px;
}

.table-td7{
    width: 175px;
}

.table td button{
    width: 75px;
    height: 29px;
    border-radius: 5px;
    color: #fff;
    border: 0;
}

.pagination-par{
    margin-top: 42px;
}

    
.select-button{
    background: #39bef9;
    cursor: pointer;
}


.pagination-par /deep/ .el-pagination{
    padding: 0;
    display: flex;
    align-items: center;
}

.pagination-par /deep/ .number{
    width: 39px;
    height: 39px;
    line-height: 39px;
    border-radius: 50% !important;
    background: #fff !important;
    color: #989898 !important;
    box-sizing: border-box;
    border: 1px solid #dfe5f6;
}

.pagination-par /deep/ .active{
    background: #5a75f6 !important;
    border: 0 !important;
    color: #fff  !important;
}

.pagination-par /deep/ .btn-next{
    width: 80px;
    height: 37px;
    background: #fff;
    border: 1px solid #dfe5f6;
    border-radius: 37px;
    color: #989898;
}

.pagination-par /deep/ .btn-next:hover{
    border-color: #5a75f6;
    color: #5a75f6;
}

</style>