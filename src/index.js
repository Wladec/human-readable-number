const HUNDRED = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];
const TEN = ['', 'ten ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
const ONE = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const SPECIAL_TEN = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

module.exports = function toReadable (number) {
    let result = '';

    if(number == 0) return 'zero';

    result += HUNDRED[Math.floor(number / 100)];
    if((number / 10 % 10) > 1 && (number / 10 % 10) < 2) {
        result += SPECIAL_TEN[Math.floor(number % 10)];
    } else {
        result += TEN[Math.floor(number / 10 % 10)];
        result += ONE[Math.floor(number % 10)];
    }

    return result.trim();
}
