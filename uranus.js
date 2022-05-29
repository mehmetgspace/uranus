const Uranus = function() {

};

/**
 * Matches any letter, digit and underscore character
 * @param value
 * @returns {boolean}
 */
Uranus.prototype.hasWordCharacter = function(value) {
  const regex = /\w/;
  return regex.test(value);
};

/**
 * Matches any digit
 * @param value
 * @returns {boolean}
 */
Uranus.prototype.hasDigitCharacter = function(value) {
  const regex = /\d/;
  return regex.test(value);
};

/**
 * Matches a whitespace character (space, tab)
 * @param value
 * @returns {boolean}
 */
Uranus.prototype.hasWhitespaceCharacter = function(value) {
  const regex = /\s/;
  return regex.test(value);
};

/**
 * Matches only a tab character
 * @param value
 * @returns {boolean}
 */
Uranus.prototype.hasTabCharacter = function(value) {
  const regex = /\t/;
  return regex.test(value);
};