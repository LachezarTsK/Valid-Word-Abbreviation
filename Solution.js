
/**
 * @param {string} word
 * @param {string} abbreviation
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbreviation) {
    this.indexWord = 0;
    this.indexAbbreviation = 0;
    this.ASCII_ZERO = 48;

    while (this.indexAbbreviation < abbreviation.length && this.indexWord < word.length) {

        if (isNotValidAbbreviation(word, abbreviation)) {
            return false;
        }

        if (isLetter(abbreviation.charAt(this.indexAbbreviation))) {
            ++this.indexWord;
            ++this.indexAbbreviation;
            continue;
        }

        this.indexWord += calculateValueOfSubstitutionNumber(abbreviation);
    }

    return this.indexWord === word.length && this.indexAbbreviation === abbreviation.length;
};

/**
 * @param {string} word
 * @param {string} abbreviation
 * @return {boolean}
 */
function isNotValidAbbreviation(word, abbreviation) {
    return hasDifferentNonabbreviatedLetter(word, abbreviation)
            || hasLeadingZeroInSubstitutionNumber(abbreviation);
}

/**
 * @param {string} word
 * @param {string} abbreviation
 * @return {boolean}
 */
function hasDifferentNonabbreviatedLetter(word, abbreviation) {
    return isLetter(abbreviation.charAt(this.indexAbbreviation))
            && word.charAt(this.indexWord) !== abbreviation.charAt(this.indexAbbreviation);
}

/**
 * @param {string} abbreviation
 * @return {boolean}
 */
function hasLeadingZeroInSubstitutionNumber(abbreviation) {
    return abbreviation.charAt(this.indexAbbreviation) === '0';
}

/**
 * @param {string} abbreviation
 * @return {boolean}
 */
function calculateValueOfSubstitutionNumber(abbreviation) {
    let numberOfAbbreviatedLetters = 0;
    while (this.indexAbbreviation < abbreviation.length && isDigit(abbreviation.charAt(indexAbbreviation))) {
        numberOfAbbreviatedLetters = numberOfAbbreviatedLetters * 10 + (abbreviation.codePointAt(indexAbbreviation) - this.ASCII_ZERO);
        ++this.indexAbbreviation;
    }
    return numberOfAbbreviatedLetters;
}

/**
 * @param {string} character
 * @return {boolean}
 */
function isLetter(character) {
    // since the check is only for one character /^[a-z]/i will work as well
    // 'i' (for ignore case) can also be omitted because letters are only small case
    // but for the sake of completeness /^[a-z]+$/i is applied
    return /^[a-z+$]/i.test(character);
}

/**
 * @param {string} character
 * @return {boolean}
 */
function isDigit(character) {
    // since the check is only for one character /^\d/ will work as well
    // but for the sake of completeness /^\d+$/ is applied
    return /^\d+$/.test(character);
}
