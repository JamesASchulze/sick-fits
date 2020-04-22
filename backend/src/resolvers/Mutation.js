const mutations = {
   createDog(parent, args, ctx, info) {
      global.dogs = global.dogs || [];
      // Create the dog!
      const newDog = { name: args.name };
      global.dogs.push(newDog);
      return newDog;
   }
};

module.exports = mutations;
