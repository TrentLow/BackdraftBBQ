const corsResponse = require("./util/response").corsResponse;
const menuItemService = require("./app/service/MenuItemService");

module.exports.main = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    if (event.pathParameters) {
      if (event.pathParameters.id) {
        const menuItem = await menuItemService.getMenuItem(
          event.pathParameters.id
        );
        callback(null, corsResponse(200, menuItem));
      }
    }
    callback(null, corsResponse(404, "not found"));
  } catch (error) {
    callback(null, corsResponse(404, { error: error }));
  }
};
