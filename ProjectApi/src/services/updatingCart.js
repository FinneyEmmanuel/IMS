module.exports = function () {
  const updatingCart = (hook) => {
    try {
      console.log("here", hook.data);
      console.log(hook.id);
      hook.data.$push.items.itemId = mongoose.Types.ObjectId(
        hook.data.$push.items.itemId
      );
    } catch (e) {
      console.log(e);
    }
  };
  return updatingCart;
};
