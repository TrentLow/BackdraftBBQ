const corsResponse = require("./util/response").corsResponse;
const clipService = require("./app/service/ClipService");

module.exports.main = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      name: 'deleteGalleryId'
    }),
  };
  callback(null, response);
};