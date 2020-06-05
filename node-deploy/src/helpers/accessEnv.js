const cache = {};

const accessEnv(key, defaultValue) => {
	if(!(key in process.env)) {
		if(defaultValue) return defaultValue;
		throw new Error(`${key} not found in process.env file!`);
	}

	if (cache[key]) return cahce[key];

	cache[key] = process.env[key];

  return process.env[key];
};

module.exports = accessEnv;
