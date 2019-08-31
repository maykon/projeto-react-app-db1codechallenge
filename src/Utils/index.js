// eslint-disable-next-line no-extend-native
Object.prototype.pick = function() {
  if (arguments.length === 0) return this;
  const args = [...arguments];
  return args.reduce((obj, arg) => {
    if (this[arg] !== undefined) return { ...obj, [arg]: this[arg] };
    return obj;
  }, {});
};
