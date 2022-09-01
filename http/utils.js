const host =
  process.env.ENV_NODE === 'production'
    ? 'https://m.zhifuzi.com'
    : process.env.ENV_NODE === 'test'
    ? 'http://t.m.zhifuzi.com'
    : 'http://localhost:3009';
      // : 'http://192.168.10.202:3009';
      // : 'http://192.168.0.102:3009';
const env = process.env.NODE_ENV;

export { host, env };
