class ShortLink {
  private alphabet: string;

  constructor () {
    this.alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  }

  /**
 * Generate random string from alphabet
 * @param {Number} count Number of characters
 * @return {String}
 */
  generate(count: number = 8) {
    let result = '';
    const length = this.alphabet.length;

    for (let i = 0; i < count; i++) {
        let index = Math.floor(Math.random() * length);
        index = (index === 0 && i === 0) ? 1 : index;
        result += this.alphabet[index];
    }

    return result;
  };
}

const shortLink = new ShortLink();
export default shortLink;
