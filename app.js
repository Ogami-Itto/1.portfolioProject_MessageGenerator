// import object in a json file

const adj = require('./outputJson/df_adj.json')
const adv = require('./outputJson/df_adv.json')
const conj = require('./outputJson/df_conj.json')
const deter = require('./outputJson/df_deter.json')
const inter = require('./outputJson/df_inter.json')
const numer = require('./outputJson/df_numer.json')
const prep = require('./outputJson/df_prep.json')
const pron = require('./outputJson/df_pron.json')
const subs = require('./outputJson/df_subs.json')
const verb = require('./outputJson/df_verb.json')


// 
function getNewWord(obj) {

    /* calculate how many words the object has in a column.
    The number will be used to set the limit to the random formula*/
    let objLength = Object.values(obj.English).length;
    // controle the column length to check if the value is right.
    //console.log(`object length: ${objLength}`)

    // calculte a random number based on the total length of a column. It will be used as index 
    let objRandomIndex = Math.floor(Math.random() * objLength);
    // controle the index if needed
    //console.log(`random index: ${objRandomIndex}`)
    
    // return a word in French, English and the type of word based on the random index
    let french = obj.Word[objRandomIndex];
    let english = obj.English[objRandomIndex]
    let nature = obj.Nature[objRandomIndex]

    // display the information in a string
    let word = `Mot du jours: \n French: ${french}; \n English: ${english}; \n Type of word: ${nature}`;
    return word
}

// check for one word only
let wordForToday = getNewWord(deter)
// console.log(wordForToday)


/* create logic to output 3 different words of a different type every day.
    - if monday or tuesday or  wednesday: adj, subst, verb
    - if thursday: det., prep., conj.
    - if friday: adj, subst, verb: 
    - if saturday: pron., adv
    - if sunday: numer., interj

to create this logic we need to:
    get the current-day
    get the mapping of days in js
    create a switch case that will output 3 words depending on the day of the week.


*/

// get day
let today = new Date()
let dayName = today.getDay()

// check the date number to validate the case
//console.log(dayName)

switch (dayName) {
    case 0 :
        let today_numer = getNewWord(numer);
        let today_inter = getNewWord(inter);
        console.log('Today is Sunday');
        console.log(today_numer,today_inter);
        break;
    case 1:
        let today_adj = getNewWord(adj);
        let today_subst = getNewWord(subs);
        let today_verb = getNewWord(verb);
        console.log('Today is Monday');
        console.log(today_adj,today_subst,today_verb);
        break;

    case 2:
        today_adj = getNewWord(adj);
        today_subst = getNewWord(subs);
        today_verb = getNewWord(verb);
        console.log('Today is Tuesday');
        console.log(today_adj,today_subst,today_verb);
        break;
    case 3:
        today_adj = getNewWord(adj);
        today_subst = getNewWord(subs);
        today_verb = getNewWord(verb);
        console.log('Today is Wednesday')
        console.log(today_adj,today_subst,today_verb);
        break;
    case 4:
        let today_deter = getNewWord(deter);
        let today_prep = getNewWord(prep);
        let today_conj = getNewWord(conj);
        console.log('Today is Thursday')
        console.log(today_deter,today_prep,today_conj);
        break;
    case 5:
        today_adj = getNewWord(adj);
        today_subst = getNewWord(subs);
        today_verb = getNewWord(verb);
        console.log('Today is Friday')
        console.log(today_adj,today_subst,today_verb);
        break;
    case 6:
        let today_pron = getNewWord(pron);
        let today_adv = getNewWord(adv);
        console.log('Today is Saturday \n')
        console.log(`${today_pron} \n \n ${today_adv}`);
}