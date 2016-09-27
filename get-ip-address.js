'use strict'

const os = require("os")
const DEFAULT_IFNAME = "eth0"

function get_ip_address (ifname) {
	const ifaces = os.networkInterfaces()
	ifname = ifname || DEFAULT_IFNAME

	const iface = ifaces[ifname].find(function (iface) {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			return false;
		}

		return true
	})

	return iface.address
}

module.exports = get_ip_address
