import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Welcome from '@/components/home/Welcome'
import MainTable from '@/components/home/MainTable'
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import DevtypeList from '@/components/baseInfo/DevtypeList'
import DevtypeAdd from '@/components/baseInfo/DevtypeAdd'
import devtypeAdd from '@/components/baseDevtype/devtypeAdd'
import devtypeList from '@/components/baseDevtype/devtypeList'
import DevtypeEdit from '@/components/baseDevtype/DevtypeEdit'

import userAdd from '@/components/baseUser/userAdd'
import usertypeList from '@/components/baseUser/usertypeList'
import usertypeEdit from '@/components/baseUser/usertypeEdit'

import DeviceAdd from '@/components/baseDevice/DeviceAdd'
import Devicelist from '@/components/baseDevice/Devicelist'
import DeviceEdit from '@/components/baseDevice/DeviceEdit'

import Login from '@/components/home/Login'

import FlowAdd from '@/components/baseFlow/FlowAdd'
import FlowEdit from '@/components/baseFlow/FlowEdit'
import FlowList from '@/components/baseFlow/FlowList'

import faultadd from '@/components/fault/faultadd'
import faultedit from '@/components/fault/faultedit'
import faultList from '@/components/fault/faultList'

import repairadd from '@/components/repair/repairadd'
import repairedit from '@/components/repair/repairedit'
import repairList from '@/components/repair/repairList'

import Jobadd from '@/components/produceJob/Jobadd'
import Jobedit from '@/components/produceJob/Jobedit'
import JobList from '@/components/produceJob/JobList'

import ReportAdd from '@/components/produceReport/ReportAdd'
import ReportEdit from '@/components/produceReport/ReportEdit'
import ReportList from '@/components/produceReport/ReportList'

import Control from '@/components/produceReport/Control'

import energyadd from '@/components/energyStandradcoal/energyadd'
import energydit from '@/components/energyStandradcoal/energydit'
import energyList from '@/components/energyStandradcoal/energyList'

import reportsList from '@/components/reports/reportsList'

import consumeList  from '@/components/devInfo/consumeList '

import usageList   from '@/components/devInfo/usageList '

import costList    from '@/components/devInfo/costList '

import EnergyModelList from '@/components/EnergyModel/EnergyModelList'

import yongnengModel from '@/components/EnergyModel/yongnengModel'
Vue.use(Router)

export default new Router({
     mode:'history',
  routes: [
	  	{path:'/Login',name:'Login',component:Login},
    {
      path: '/',name: 'Index',component:Index,
			children:[
					{path:'/',component:Welcome},
					{path:'CompList',component:CompList,name:'CompList'},
					{path:'CompAdd',component:CompAdd},
					{path:'CompEdit',component:CompEdit,name:'CompEdit'},
					{path:'MainTable',component:MainTable},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'devtypeAdd',component:devtypeAdd},
					{path:'devtypeList',component:devtypeList,name:'devtypeList'},
					{path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
					
					{path:'userAdd',component:userAdd},
					{path:'usertypeList',component:usertypeList,name:'usertypeList'},
					{path:'usertypeEdit',component:usertypeEdit,name:'usertypeEdit'},
					
					{path:'DeviceAdd',component:DeviceAdd},
					{path:'Devicelist',component:Devicelist,name:'Devicelist'},
					{path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
					
					{path:'FlowAdd',component:FlowAdd},
					{path:'FlowList',component:FlowList,name:'FlowList'},
					{path:'FlowEdit',component:FlowEdit,name:'FlowEdit'},
					
					{path:'faultadd',component:faultadd},
					{path:'faultList',component:faultList,name:'faultList'},
					{path:'faultedit',component:faultedit,name:'faultedit'},
					
					{path:'repairadd',component:repairadd},
					{path:'repairList',component:repairList,name:'repairList'},
					{path:'repairedit',component:repairedit,name:'repairedit'},
					
					{path:'Jobadd',component:Jobadd},
					{path:'JobList',component:JobList,name:'JobList'},
					{path:'Jobedit',component:Jobedit,name:'Jobedit'},
					
					{path:'ReportAdd',component:ReportAdd},
					{path:'ReportList',component:ReportList,name:'ReportList'},
					{path:'ReportEdit',component:ReportEdit,name:'ReportEdit'},
					{path:'Control',component:Control,name:'Control'},
					
						
					{path:'energyadd',component:energyadd},
					{path:'energyList',component:energyList,name:'energyList'},
					{path:'energydit',component:energydit,name:'energydit'},
					
					{path:'reportsList',component:reportsList,name:'reportsList'},
					
					{path:'consumeList',component:consumeList,name:'consumeList'},
					
					{path:'usageList',component:usageList,name:'usageList'},
					
					{path:'EnergyModelList',component:EnergyModelList,name:'EnergyModelList'},
					
					{path:'yongnengModel',component:yongnengModel,name:'yongnengModel'},
					
					{path:'costList',component:costList,name:'costList'}
					
			]
    }

		
		
  ]
})
