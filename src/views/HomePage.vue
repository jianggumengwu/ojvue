<template>
    <div>
        <el-container>
            <el-header>
                <el-menu class="el-menu-demo" mode="horizontal" router>
                    <el-menu-item style="width: 200px" disabled/>
                    <el-menu-item index="index">首页</el-menu-item>
                    <el-menu-item index="home" style="padding-right: 100px">考试</el-menu-item>
                    <el-menu-item>
                        <el-input placeholder="请输入题目" v-model="input" style="width: 500px; padding-left: 100px;" clearable/>
                    </el-menu-item>
                    <el-menu-item style="padding-right: 200px" disabled/>
                    <el-menu-item index="5">注册</el-menu-item>
                    <el-menu-item index="6">登录</el-menu-item>
                </el-menu>
                <div class="line"></div>
            </el-header>
            <div class="demo-image__placeholder" align="center">
                <div class="block" style="width: 30%; padding-left: 55px; padding-right: 30px; margin-top: 30px; float: left;">
                    <span class="demonstration">周赛</span>
                    <el-image :src="src"/>
                </div>
                <div class="block" style="width: 30%; padding-right: 25px; margin-top: 30px; float: left;">
                    <span class="demonstration">学校比赛</span>
                    <el-image :src="src"/>
                </div>
                <div class="block" style="width: 30%; padding-left: 10px; margin-top: 30px; float: left;">
                    <span class="demonstration">其他比赛</span>
                    <el-image :src="src"/>
                </div>
            </div>
            <el-main>
                <el-table :data="tableData" style="width: 100%" align="center" @sort-change="sortChange">
                    <el-table-column prop="state" label="状态"  width="200" align="center" sortable/>
                    <el-table-column prop="titled" label="题目"  width="400" align="center" sortable/>
                    <el-table-column prop="PassRate" label="通过率" width="400" align="center" sortable/>
                    <el-table-column prop="degree" label="难度" width="400" align="center" sortable/>
                </el-table>
                <el-pagination background layout="prev, pager, next"
                               :total="100" @current-change="pageData" page-size="10"/>
            </el-main>
            <el-footer>

            </el-footer>
        </el-container>
        <router-view/>
    </div>
</template>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 250px;
        height: auto;
    }

    .el-table {
        line-height: 70px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>

<script>
    export default {
        methods: {
            sortChange(column){
                alert(column.prop)
            },
            pageData(currPage){
                alert(currPage)
            }
        },
        data() {
            return {
                input: '',
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                tableData: [{
                    state: '-',
                    titled: '2016-05-02',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1518 弄'
                }, {
                    state: '-',
                    titled: '2016-05-04',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1517 弄'
                }, {
                    state: '-',
                    titled: '2016-05-01',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1519 弄'
                }, {
                    state: '-',
                    titled: '2016-05-03',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1516 弄'
                }, {
                    state: '-',
                    titled: '2016-05-03',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1516 弄'
                }, {
                    state: '-',
                    titled: '2016-05-03',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1516 弄'
                }, {
                    state: '-',
                    titled: '2016-05-03',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1516 弄'
                }, {
                    state: '-',
                    titled: '2016-05-03',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1516 弄'
                }, {
                    state: '-',
                    titled: '2016-05-03',
                    PassRate: '王小虎',
                    degree: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>
