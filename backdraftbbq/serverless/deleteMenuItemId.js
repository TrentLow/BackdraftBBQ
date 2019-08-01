const corsResponse = require("./util/response").corsResponse;
const menuItemService = require("./app/service/MenuItemService");

module.exports.main = async (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		if (event.pathParameters) {
			if (event.pathParameters.id) {
				await menuItemService.deleteMenuitem(event.pathParameters.id);
				return callback(null, corsResponse(204));
			}
		}
	} catch (error) {
		callback(null, corsResponse(404, {error: error}));
	}
};