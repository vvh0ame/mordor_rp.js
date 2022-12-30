from requests import get

class MordorRP:
	def __init__(self) -> None:
		self.api = "http://mordormail.ru/launcher"
		self.headers = {
			"user-agent": "okhttp/3.12.12"
		}

	def get_online(self) -> list:
		return get(
			f"{self.api}/monitoring/online.php",
			headers=self.headers).json()

	def get_protect_files(self) -> list:
		return get(
			f"{self.api}/protect/protect_file.json",
			headers=self.headers).json()

	def get_config(self) -> dict:
		return get(
			f"{self.api}/config/config_mordor.json",
			headers=self.headers).json()
		
