const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {};
  }

  return {
    // See: https://github.com/zeit/next.js/issues/4998
    experimental: {
      basePath: "/sigurd",
    },
  };
};
