module.exports = function () {
  return async (context) => {
    const categoryId = context.data.category;
    const categoryService = context.app.service("categories");
    const category = await categoryService.get(categoryId);
    context.data.category = category;
    return context;
  };
};
