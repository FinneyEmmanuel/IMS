module.exports = function () {
  const addCart = (hook) => {
    try {
      console.log("here1", hook.result);
      hook.app
        .service("cart")
        .create({ customerId: hook.result._id, items: [] });
    } catch (error) {
      console.log(e);
    }
    return hook;
  };
  return addCart;
};
