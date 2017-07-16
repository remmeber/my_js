'use strict';

const mm = require('@ali/mm');

describe('test/controller/home.test.js', () => {
  // 注意：app 必须等 ready 之后才能使用！！
  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  // 每次 it 运行完毕都回滚 mock
  afterEach(mm.restore);

  describe('GET /', () => {
    it('should 302 to /portal/i.htm', () => {
      return app.httpRequest()
        .get('/')
        .expect(302)
        .expect('Location', '/portal/i.htm');
    });
  });

  describe('GET /portal/i.htm', () => {
    it('should 302 to authcenter when user not login', () => {
      return app.httpRequest()
        .get('/portal/i.htm')
        .expect(302)
        .expect('Location', /http:\/\/authcenter\.stable\.alipay\.net\/login\/index\.htm/);
    });

    it('should 200 and show login user name', () => {
      // mock 默认用户登录
      app.mockContext();
      return app.httpRequest()
        .get('/portal/i.htm')
        .expect(200)
        .expect(/<h1>欢迎, 陈诚！<\/h1>/);
    });
  });
});
