<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改报岗信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='流程名称' v-model='shipname'></el-input> </el-col>
		</el-row>
		
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='装载量(吨)' v-model='capacity'></el-input> </el-col>
		</el-row>
		
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='预计到港时间' v-model='planjobtime'></el-input> </el-col>
		</el-row>
		
		
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='实际到港时间' v-model='startjobtime'></el-input> </el-col>
		</el-row>
		
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='完成时间' v-model='completetime'></el-input> </el-col>
		</el-row>
		
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报岗人' v-model='reportuser'></el-input> </el-col>
		</el-row>
		
		<el-row>
		<el-col :span="12"><el-select v-model='compid' style='width: 300px; margin-top: 20px;' placeholder='所属企业'>
		<el-option v-for='(obj,index) in baseCompany' :value="obj.compid" :key="obj.compid" :label='obj.compname' >{{obj.compname}}</el-option>
		</el-select></el-col>
		</el-row>
		
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				shipname:'',
				capacity:'',
				planjobtime:'',
				startjobtime:'',
				completetime:'',
				reportuser:'',
				compid:'',
				baseCompany:[],
				reportid:''

				
			};
		},
		methods:{
			saveAdd(){
				// 后端网址reportid
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data = {reportid:this.reportid, shipname:this.shipname, capacity:this.capacity, planjobtime:this.planjobtime,startjobtime:this.startjobtime,completetime:this.completetime,reportuser:this.reportuser,
				compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/ReportList'});
				})
			},
			//返回
			cancel(){
				this.$router.go(-1);
			}
		},
mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.baseCompany = res.data;
			})
			
			
			//接收路由传递的数据
			var reportid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/produceReport/load";
			// 传递给后端的数据
			var data = {reportid:reportid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.reportid = obj.reportid;
				this.shipname = obj.shipname;
				this.capacity = obj.capacity;
				this.planjobtime = obj.planjobtime;
				this.reportuser = obj.reportuser;
				this.compid = obj.compid;
				this.startjobtime = obj.startjobtime;
				this.completetime = obj.completetime;
				this.flowid = obj.flowid;
				
			})
			
		}

		}
</script>
<!-- css部分 -->
<style>

</style>