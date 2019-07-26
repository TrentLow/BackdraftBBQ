const corsResponse = require("./util/response").corsResponse;
const menuItemService = require("./app/service/MenuItemService");

module.exports.main = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		if (event.pathParameters) {
			if (event.pathParameters.id) {
				if (event.body) {
					const menuItem = await menuItemService.editMenuItem(event.body, event.pathParameters.id);
					return callback(null, corsResponse(204));
				}
			}
		}
	} catch (error) {
		callback(null, corsResponse(404, {error: error});
	}
};