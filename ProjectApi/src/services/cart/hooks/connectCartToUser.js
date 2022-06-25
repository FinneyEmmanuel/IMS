module.exports = function () {
  const connectCartToUser = (hook) => {
    try {
      console.log("here2", hook.result);
      hook.app
        .service("users")
        .patch(hook.result.customerId, { $set: { cartId: hook.result._id } });
    } catch (error) {}
    return hook;
  };
  return connectCartToUser;
};
//connectCartTouser
