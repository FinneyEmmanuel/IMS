module.exports = function () {
  return async (context) => {
    const shopItemId = context.data.shopItemId;
    const shopItemService = context.app.service("shop-items");
    const shopItem = await shopItemService.get(shopItemId);
    context.data.shopItem = shopItem;
    return context;
  };
};
