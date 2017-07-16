'use strict';

module.exports = app => {
    return class Home extends app.Controller {
        * index() {
            const ctx = this.ctx;
            const userInfo = yield ctx.proxy.userInfoQuery.findUserInfo(ctx.userId);
            const result = {
                userName: ctx.principal.userName,
                userInfo,
            };

            yield ctx.render('home/index.html', result);
        }
    };
};

exports.index = function* index() {
    const userInfo = yield this.proxy.userInfoQuery.findUserInfo(this.userId);
    const result = {
        name: this.principal.userName,
        userInfo,
    };

    yield this.render('home/index.html', result);
};
