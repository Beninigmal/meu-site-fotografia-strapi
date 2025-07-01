module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
  // Configuração crítica para serverless:
  emitErrors: false,
  url: env('PUBLIC_URL', 'https://meu-site-fotografia.up.railway.app'),
});
