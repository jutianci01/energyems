<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改故障信息</h1>
		
		<el-row>
		<el-col :span="12"><el-select v-model='devid' style='width: 300px; margin-top: 20px;' placeholder='设备名称'>
		<el-option v-for='(item,index) in dljarr' :value="item.devid" :key="item.devname" :label='item.devname' >{{item.devname}}</el-option>
		</el-select></el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='故障原因' v-model='cause'></el-input> </el-col>
		</el-row>
		
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报告人' v-model='faultuser'></el-input> </el-col>
		</el-row>
	
		
	
		
		<el-row>
		<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='故障时间' v-model='faulttime'></el-input> </el-col>
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
				faultId:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				dljarr:[],
				devid:''
				
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var data = {faultId:this.faultId,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime,devid:this.devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/faultList'});
				})
			},
			//返回
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.dljarr = res.data;
			})
			
			
				//接收路由传递的数据
			var faultId = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/produceFault/load";
			// 传递给后端的数据
			var data = {faultId:faultId};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.faultId = obj.faultId;
				this.devid = obj.devid;
				this.faulttime = obj.faulttime;
				this.faultuser = obj.faultuser;
				this.cause = obj.cause;
			})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>