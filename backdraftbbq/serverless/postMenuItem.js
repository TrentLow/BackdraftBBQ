const corsResponse = require("./util/response").corsResponse;
const menuItemService = require("./app/service/MenuItemService");

module.exports.main = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    if (event.body) {
      const menuItem = await menuItemService.addMenuItem(
        JSON.parse(event.body)
      );
      callback(null, corsResponse(200, menuItem));
    }
  } catch (error) {
    callback(null, corsResponse(404, { error: error }));
  }
};
