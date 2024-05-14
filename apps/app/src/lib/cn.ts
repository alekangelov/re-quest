export default function cn(...args: any[]) {
  return args.reduce((acc, arg) => {
    if (!arg) return acc;
    if (!arg.constructor) return acc;

    if (arg.constructor === String) {
      acc[arg.toString()] = true;
    }

    if (arg.constructor === Object) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          acc[key] = arg[key];
        }
      });
    }

    if (arg.constructor === Array) {
      acc = { ...acc, ...cn(...arg) };
    }

    return acc;
  }, {});
}

export const cns = (...args: any[]) => {
  return Object.keys(cn(...args)).join(" ");
};
