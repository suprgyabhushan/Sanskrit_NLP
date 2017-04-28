# Execution
`python split.py <wordInSLP1> [<dictname>]`

## Dictnames
dictionaryname = ["ACC","CAE","AE","AP90","AP","BEN","BHS","BOP","BOR","BUR","CCS","GRA","GST","IEG","INM","KRM","MCI","MD","MW72","MW","MWE","PD","PE","PGN","PUI","PWG","PW","SCH","SHS","SKD","SNP","STC","VCP","VEI","WIL","YAT","ALL","mwb"]

ALL stands for all Cologne dictionaries combined.

# Dictionary

1. As the speed decreases with too many headwords, currently we are using only 'MW' as our base dictionary. If you want to change the dictionary, it can be changed by altering the dictionaryname in `createhwlist('MW')`

2. Only words having >1 length are taken.

3. The dictionary (hwsorted.txt) is sorted in the following logic.

	3.1. In decreasing order of the occurrence in number of dictionaries in sanhw2.txt.
	e.g. headword occurring in 29 dictionaries (and therefore more common) are sorted first, then 28, 27,..... 1.

	3.2. In decreasing order of length of the words. Longest words are sorted first. Shortest ones at the end.

	3.3. If the above two conditions are satisfied, they are sorted in alphabetic order.

# Further projects

Analyse Sanskrit headwords from GRETIL sanskrit texts.