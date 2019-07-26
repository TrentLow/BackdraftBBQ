const corsResponse = require("./util/response").corsResponse;
const menuItemService = require("./app/service/MenuItemService");

module.exports.main = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		if (event.body) {
			const menuItem = await menuItemService.addMenuItem(event.body);
			return callback(null, corsResponse(200, menuItem));
		}
	} catch (error) {
		callback(null, corsResponse(404, {error: error});
	}
};