
#include <string>
#include <ctype.h>
using namespace std;

class Solution {
    int indexWord = 0;
    int indexAbbreviation = 0;

public:
    bool validWordAbbreviation(const string& word, const string& abbreviation) {

        while (indexAbbreviation < abbreviation.length() && indexWord < word.length()) {

            if (isNotValidAbbreviation(word, abbreviation)) {
                return false;
            }

            if (isalpha(abbreviation[indexAbbreviation])) {
                ++indexWord;
                ++indexAbbreviation;
                continue;
            }

            indexWord += calculateValueOfSubstitutionNumber(abbreviation);
        }

        return indexWord == word.length() && indexAbbreviation == abbreviation.length();
    }

private:
    bool isNotValidAbbreviation(string_view word, string_view abbreviation) const {
        return hasDifferentNonabbreviatedLetter(word, abbreviation)
                || hasLeadingZeroInSubstitutionNumber(abbreviation);
    }

    bool hasDifferentNonabbreviatedLetter(string_view word, string_view abbreviation) const {
        return isalpha(abbreviation[indexAbbreviation])
                && word[indexWord] != abbreviation[indexAbbreviation];
    }

    bool hasLeadingZeroInSubstitutionNumber(string_view abbreviation) const {
        return abbreviation[indexAbbreviation] == '0';
    }

    int calculateValueOfSubstitutionNumber(string_view abbreviation) {
        int numberOfAbbreviatedLetters = 0;
        while (indexAbbreviation < abbreviation.length() && isdigit(abbreviation[indexAbbreviation])) {
            numberOfAbbreviatedLetters = numberOfAbbreviatedLetters * 10 + (abbreviation[indexAbbreviation] - '0');
            ++indexAbbreviation;
        }
        return numberOfAbbreviatedLetters;
    }
};
