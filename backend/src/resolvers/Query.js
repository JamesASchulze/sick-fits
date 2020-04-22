const Query = {
   dogs(parent, args, ctx, info) {
      global.dogs = global.dogs || [];
      //return [{ name: 'Snickers'}, { name: 'Sonny'}];
      return global.dogs;
   },
};

module.exports = Query;
