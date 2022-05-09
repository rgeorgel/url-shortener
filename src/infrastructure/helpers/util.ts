class Util {
  removeUndefinedProps(model: any) {
    const keys = Object.keys(model);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (typeof model[key] === 'undefined') {
        delete model[key];
      }
    }

    return model;
  }
}

const util = new Util();
export default util;
