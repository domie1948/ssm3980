import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangongfawen from '@/views/modules/yuangongfawen/list'
    import huiyixinxi from '@/views/modules/huiyixinxi/list'
    import zichanzhejiu from '@/views/modules/zichanzhejiu/list'
    import qingjiashenqing from '@/views/modules/qingjiashenqing/list'
    import danganxinxi from '@/views/modules/danganxinxi/list'
    import gongzuohuibao from '@/views/modules/gongzuohuibao/list'
    import gudingzichan from '@/views/modules/gudingzichan/list'
    import xitongwenjian from '@/views/modules/xitongwenjian/list'
    import gongsitushu from '@/views/modules/gongsitushu/list'
    import xiangmuguanli from '@/views/modules/xiangmuguanli/list'
    import baoxiaoshenqing from '@/views/modules/baoxiaoshenqing/list'
    import bangongyongpin from '@/views/modules/bangongyongpin/list'
    import gongsifawen from '@/views/modules/gongsifawen/list'
    import bumenleixing from '@/views/modules/bumenleixing/list'
    import gongzuojihua from '@/views/modules/gongzuojihua/list'
    import yongpinshenqing from '@/views/modules/yongpinshenqing/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huiyishenqing from '@/views/modules/huiyishenqing/list'
    import tushujieyue from '@/views/modules/tushujieyue/list'
    import tushuguihai from '@/views/modules/tushuguihai/list'
    import xitongrizhi from '@/views/modules/xitongrizhi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yuangongfawen',
        name: '员工发文',
        component: yuangongfawen
      }
      ,{
	path: '/huiyixinxi',
        name: '会议信息',
        component: huiyixinxi
      }
      ,{
	path: '/zichanzhejiu',
        name: '资产折旧',
        component: zichanzhejiu
      }
      ,{
	path: '/qingjiashenqing',
        name: '请假申请',
        component: qingjiashenqing
      }
      ,{
	path: '/danganxinxi',
        name: '档案信息',
        component: danganxinxi
      }
      ,{
	path: '/gongzuohuibao',
        name: '工作汇报',
        component: gongzuohuibao
      }
      ,{
	path: '/gudingzichan',
        name: '固定资产',
        component: gudingzichan
      }
      ,{
	path: '/xitongwenjian',
        name: '系统文件',
        component: xitongwenjian
      }
      ,{
	path: '/gongsitushu',
        name: '公司图书',
        component: gongsitushu
      }
      ,{
	path: '/xiangmuguanli',
        name: '项目管理',
        component: xiangmuguanli
      }
      ,{
	path: '/baoxiaoshenqing',
        name: '报销申请',
        component: baoxiaoshenqing
      }
      ,{
	path: '/bangongyongpin',
        name: '办公用品',
        component: bangongyongpin
      }
      ,{
	path: '/gongsifawen',
        name: '公司发文',
        component: gongsifawen
      }
      ,{
	path: '/bumenleixing',
        name: '部门类型',
        component: bumenleixing
      }
      ,{
	path: '/gongzuojihua',
        name: '工作计划',
        component: gongzuojihua
      }
      ,{
	path: '/yongpinshenqing',
        name: '用品申请',
        component: yongpinshenqing
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huiyishenqing',
        name: '会议申请',
        component: huiyishenqing
      }
      ,{
	path: '/tushujieyue',
        name: '图书借阅',
        component: tushujieyue
      }
      ,{
	path: '/tushuguihai',
        name: '图书归还',
        component: tushuguihai
      }
      ,{
	path: '/xitongrizhi',
        name: '系统日志',
        component: xitongrizhi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
