
public class Solution {

    private int indexWord;
    private int indexAbbreviation;

    public boolean validWordAbbreviation(String word, String abbreviation) {

        while (indexAbbreviation < abbreviation.length() && indexWord < word.length()) {

            if (isNotValidAbbreviation(word, abbreviation)) {
                return false;
            }

            if (Character.isLetter(abbreviation.charAt(indexAbbreviation))) {
                ++indexWord;
                ++indexAbbreviation;
                continue;
            }

            indexWord += calculateValueOfSubstitutionNumber(abbreviation);
        }

        return indexWord == word.length() && indexAbbreviation == abbreviation.length();
    }

    private boolean isNotValidAbbreviation(String word, String abbreviation) {
        return hasDifferentNonabbreviatedLetter(word, abbreviation)
                || hasLeadingZeroInSubstitutionNumber(abbreviation);
    }

    private boolean hasDifferentNonabbreviatedLetter(String word, String abbreviation) {
        return Character.isLetter(abbreviation.charAt(indexAbbreviation))
                && word.charAt(indexWord) != abbreviation.charAt(indexAbbreviation);
    }

    private boolean hasLeadingZeroInSubstitutionNumber(String abbreviation) {
        return abbreviation.charAt(indexAbbreviation) == '0';
    }

    private int calculateValueOfSubstitutionNumber(String abbreviation) {
        int numberOfAbbreviatedLetters = 0;
        while (indexAbbreviation < abbreviation.length() && Character.isDigit(abbreviation.charAt(indexAbbreviation))) {
            numberOfAbbreviatedLetters = numberOfAbbreviatedLetters * 10 + (abbreviation.charAt(indexAbbreviation) - '0');
            ++indexAbbreviation;
        }
        return numberOfAbbreviatedLetters;
    }
}
