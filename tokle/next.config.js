/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Enable loose ESM externals so CommonJS modules are imported via default
	// and named exports are resolved at runtime when possible. This helps
	// interop with packages like @vanilla-extract/sprinkles/createUtils which
	// may be published as CommonJS.
	experimental: {
		esmExternals: "loose",
	},
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		return config;
	},
};

module.exports = nextConfig;
