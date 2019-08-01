
module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      name: 'getGallery'
    }),
  };
  callback(null, response);
};