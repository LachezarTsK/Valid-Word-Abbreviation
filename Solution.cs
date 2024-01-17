
using System;

public class Solution
{
    private int indexWord;
    private int indexAbbreviation;

    public bool ValidWordAbbreviation(string word, string abbreviation)
    {


        while (indexAbbreviation < abbreviation.Length && indexWord < word.Length)
        {

            if (IsNotValidAbbreviation(word, abbreviation))
            {
                return false;
            }

            if (char.IsLetter(abbreviation[indexAbbreviation]))
            {
                ++indexWord;
                ++indexAbbreviation;
                continue;
            }

            indexWord += CalculateValueOfSubstitutionNumber(abbreviation);
        }

        return indexWord == word.Length && indexAbbreviation == abbreviation.Length;
    }

    private bool IsNotValidAbbreviation(String word, String abbreviation)
    {
        return HasDifferentNonabbreviatedLetter(word, abbreviation)
                || HasLeadingZeroInSubstitutionNumber(abbreviation);
    }

    private bool HasDifferentNonabbreviatedLetter(String word, String abbreviation)
    {
        return char.IsLetter(abbreviation[indexAbbreviation])
                && word[indexWord] != abbreviation[indexAbbreviation];
    }

    private bool HasLeadingZeroInSubstitutionNumber(String abbreviation)
    {
        return abbreviation[indexAbbreviation] == '0';
    }

    private int CalculateValueOfSubstitutionNumber(String abbreviation)
    {
        int numberOfAbbreviatedLetters = 0;
        while (indexAbbreviation < abbreviation.Length && char.IsDigit(abbreviation[indexAbbreviation]))
        {
            numberOfAbbreviatedLetters = numberOfAbbreviatedLetters * 10 + (abbreviation[indexAbbreviation] - '0');
            ++indexAbbreviation;
        }
        return numberOfAbbreviatedLetters;
    }
}
