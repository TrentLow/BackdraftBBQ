const corsResponse = require("./util/response").corsResponse;
const menuItemService = require("./app/service/MenuItemService");

module.exports.main = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		if (event.pathParameters) {
			if (event.pathParameters.id) {
				const menuItems = await menuItemService.getMenuItems();
				return callback(null, corsResponse(200, menuItems));
			}
		}
	} catch (error) {
		callback(null, corsResponse(404, {error: error});
	}
};