<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<!-- 菜单 -->
		<el-menu :default-active='$store.state.defaultActive'>
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/CompList'},
						 {text:'设备类别',index:'1023',url:'/DevtypeList'},
						 {text:'人员信息',index:'1022',url:'/usertypeList'},
						 {text:'设备信息',index:'1024',url:'/Devicelist'},
						 {text:'流程信息',index:'1025',url:'/FlowList'}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'/ReportList'},
						  {text:'中控',index:'1034',url:'/Control'},
						 {text:'作业信息',index:'1035',url:'/JobList'},
						 {text:'故障信息',index:'1033',url:'/faultList'},
						 {text:'维修记录',index:'1034',url:'/repairList'}
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'能耗信息',index:'1041',url:''},
						  {text:'折标煤系数',index:'1044',url:'/energyList'}
					 ]},
					 {text:'作业信息',index:'105',children:[
					 	 {text:'作业量信息',index:'1051',url:''},
					 	 {text:'作业时间信息',index:'1052',url:''},
					 	 {text:'故障信息',index:'1053',url:''}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061',url:''},
					 	 {text:'实时监控',index:'1062',url:''},
					 	 {text:'异常处理',index:'1063',url:''}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071',url:''}
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'作业量统计',index:'1081',url:'/reportsList'},
					 	 {text:'港口能耗对比',index:'1082',url:'/consumeList'},
					 	 {text:'设备运行信息',index:'1083',url:'/usageList'},
						 {text:'成本核算信息',index:'1084',url:'/costList'}
					 ]},
					 
					 {text:'能源产销模型',index:'1010',children:[
					 	 {text:'企业产销模型',index:'10102',url:'/EnergyModelList'},
						 {text:'企业用能模型',index:'10102',url:'/yongnengModel'}
					 ]}
				]
			};
		},
		methods:{
			fn(obj){
				// 路由跳转
				this.$router.push({path:obj.url});
				// 添加到tags
				this.$store.commit('addTag',{name:obj.text,type:'warning',url:obj.url,index:obj.index});
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #F4F4F4;
}
</style>
