class MordorRp {
	constructor() {
		this.api = "http://mordormail.ru/launcher"
		this.headers = {
			"user-agent": "okhttp/3.12.12"
		}
	}

	async getOnline() {
		const response = await fetch(
			`${this.api}/monitoring/online.php`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getProtectFiles() {
		const response = await fetch(
			`${this.api}/protect/protect_file.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getConfig() {
		const response = await fetch(
			`${this.api}/config/config_mordor.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {MordorRp}
