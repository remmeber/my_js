# alipay 应用示例

## 初始化

```bash
$ tnpm i
$ tnpm run init
```

## 启动本地服务

因为需要接入 alipay 开发环境的登录，所以需要本地绑定一下 `helloalipay.local.alipay.net` 开发域名。
修改 hosts 文件：

```bash
127.0.0.1 helloalipay.local.alipay.net
```

启动本地开发环境：

```bash
$ tnpm run dev
```

测试用户:

- stable:
  - money02@alitest.com/111111
  - yunqian01@alitest.com/111111
- lab6: @宗翰
  - authuca081@alitest.com/111111

浏览器打开: http://helloalipay.local.alipay.net:7001

```bash
$ open http://helloalipay.local.alipay.net:7001
```

## 运行单元测试

```bash
$ tnpm test
```

## 运行覆盖率

```bash
$ tnpm run ci
```
