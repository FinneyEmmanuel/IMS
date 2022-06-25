module.exports = function () {
  return async (context) => {
    const shopId = context.data.shop;
    const shopService = context.app.service("shops");
    const shop = await shopService.get(shopId);
    context.data.shop = shop;
    return context;
  };
};
