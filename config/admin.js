module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c1498bf4c18dde38240faa48a6e06f84'),
  },
});
