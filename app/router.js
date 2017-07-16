'use strict';

module.exports = app => {
  // GET / 302 to /portal/i.htm
  app.redirect('/', '/portal/i.htm', 302);
  // GET /portal/i.htm => controllers/home.js
  app.get('root', '/portal/i.htm', app.role.can('ROLE_USER'), 'home.index');
};
