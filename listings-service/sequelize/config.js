module.exports.development = {
	dialect: "mysql",
	seederStorage: "sequelize",
	url: process.env.DB_URI
}

// The env is defined inside the docker-composer file
// will refer to the password regardless of the IP address assigned, which is pretty cool