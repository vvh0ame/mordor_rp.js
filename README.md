# mordor_rp.js
Mobile-API for [MordorRP](https://mordor-rp.ru) an role-playing mobile game based on GTA San Andreas

## Example
```JavaScript
async function main() {
	const { MordorRp } = require("./mordor_rp.js")
	const mordorRp = new MordorRp()
	const online = await mordorRp.getOnline()
	console.log(online)
}

main()
```
