'use strict';

// tr 服务依赖配置
// 详细文档: http://chair.alibaba-inc.com/manual/rpc/tr

module.exports = {
  mavenType: 'alipay',
  // mavenName: 'dev',
  services: [
    {
      appname: 'cif', // 自动对应的 testURL 是 config['cif.tr.service.url']
      api: {
        userInfoQuery: 'com.alipay.cif.user.UserInfoQueryService',
      },
      dependency: {
        groupId: 'com.alipay.cif.service',
        artifactId: 'cif-service-facade',
        version: '1.6.0.20140624',
      },
    },
  ],
};
