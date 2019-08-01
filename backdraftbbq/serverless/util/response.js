module.exports.corsResponse = (code, body) => {
	return {
		statusCode: code,
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
	};
};

module.exports.corsRedirect = location => {
	return {
		statusCode: 303,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			Location: location,
		},
	};
};
