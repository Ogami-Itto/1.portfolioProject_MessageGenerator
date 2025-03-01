French words generator
======================

# Project Objective

Create an application that will output 3 words to learn French vocabulary

the application will share 3 random different words a day
1. monday to wednesday: adj, subst, verb
2. thursday: det., prep., conj.
3. friday: adj, subst, verb: 
4. saturday: pron., adv
5. sunday: numer., interj

# Data shared
the words shared will have the following information:
+ Word in French
+ Translation in English
+ type of word

# Methodologie

##  Export the data from Excel 

### Option 1 

Use Pandas to read an excel file and export 3 random words depending on the day of the week.

### Option 2

Use pandas to filter data by type and export to individual arrays to individual json file
We will use option 2 to practice more JS.

## Treat the information in JS

The exported file will be imported by a javascript application that will output the words randomly depending on the day of week.


