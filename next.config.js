

// module.exports = nextConfig;
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  env: {
    LOCAL_STORAGE_KEY: 'token',
  },
};

module.exports = withNextIntl(nextConfig);
