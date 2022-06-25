module.exports = function () {
  return async (context) => {
    const itemClassId = context.data.itemClass;
    const itemClassService = context.app.service("item-classes");
    const itemClass = await itemClassService.get(itemClassId);
    context.data.itemClass = itemClass;
    return context;
  };
};
