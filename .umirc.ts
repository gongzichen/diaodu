import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '监控页',
      path: '/dashboardmonitortwo',
      component: './DashboardMonitorTwo',
    },
    {
      name: '监控页',
      path: '/dashboardmonitor',
      component: './DashboardMonitor',
    },
    {
      name: '登录页',
      path: '/userlogin',
      component: './UserLogin',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
  dva: {},
  antd: {},
});
