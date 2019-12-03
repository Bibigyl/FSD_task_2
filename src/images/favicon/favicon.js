const faviconsContext = require.context(
    '!!file-loader?name=favicon/[name].[ext]!.',
    true,
    /\.(svg|png|ico|xml|json|webmanifest)$/
);
faviconsContext.keys().forEach(faviconsContext);