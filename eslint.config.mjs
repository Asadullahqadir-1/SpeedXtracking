import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const config = [
	...nextCoreWebVitals,
	...nextTypeScript,
	{
		files: ["scripts/**/*.js"],
		rules: {
			"@typescript-eslint/no-require-imports": "off"
		}
	}
];

export default config;
