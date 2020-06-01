import got from "got";

const USERS_SERVICE_API = "http://users-service:7101";

// using an object is best for named parameters being passed into the function

export default class UsersService {
	static async createUser({email, password}) {
		const body = await got.post(`${USERS_SERVICE_API}/users`, {
			json: {
				email,
				password
			}
		}).json();
		return body;
	}

	// one method for each resolver/mutation
	static async fetchUser({userId}) {
		const body = await got.get(`${USERS_SERVICE_API}/users/${userId}`).json();
		return body;
	}

	static async createUserSession({email, password}) {
		const body = await got.post(`${USERS_SERVICE_API}/sessions`, {
			json: {
				email,
				password
			}
		}).json();
		return body;
	}

	static async deleteUserSession({sessionId}) {
		const body = await got.delete(`${USERS_SERVICE_API}/sessions/${sessionId}`).json();
		return body;
	}

	static async fetchUserSession({sessionId}) {
		const body = await got.get(`${USERS_SERVICE_API}/sessions/${sessionId}`).json();
		return body;
	}
}
