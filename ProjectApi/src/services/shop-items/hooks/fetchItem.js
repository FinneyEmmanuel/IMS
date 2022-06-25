module.exports = function () {
  return async (context) => {
    const itemId = context.data.item;
    const itemService = context.app.service("items");
    const item = await itemService.get(itemId);
    context.data.item = item;
    return context;
  };
};
