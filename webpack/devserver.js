module.exports = function() {
  return {
    devServer: {
      // host: '0.0.0.0',
      host: '127.0.0.1',
      port: 3001,
      stats: 'errors-only',
      overlay: true,
    },
  };
};
