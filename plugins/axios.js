export default function ({ $axios, $config: {apiUrl} }, inject) {
		const host = $axios.create()
		host.setBaseURL(apiUrl)
		inject('host', host)
}