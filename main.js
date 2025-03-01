// import object in a json file

//const deter = require('./outputJson/df_deter.json')


const adj = require('./outputJson/df_adj.json ')
const adv = require('./outputJson/df_adv.json ')
const conj = require('./outputJson/df_conj.json ')
const deter = require('./outputJson/df_deter.json ')
const inter = require('./outputJson/df_inter.json ')
const numer = require('./outputJson/df_numer.json ')
const prep = require('./outputJson/df_prep.json ')
const pron = require('./outputJson/df_pron.json ')
const subs = require('./outputJson/df_subs.json ')
const verb = require('./outputJson/df_verb.json ')



function getNewWord(obj) {

    /* calculate how many words the object has in a column.
    The number will be used to set the limit to the random formula*/
    let objLength = Object.values(obj.English).length;
    console.log(`object length: ${objLength}`)

    // calculte a random number based on the total length of a column. It will be used as index 
    let objRandomIndex = Math.floor(Math.random() * objLength);
    console.log(`random index: ${objRandomIndex}`)
    
    // return a word in French, English and the type of word based on the random index
    let french = obj.Word[objRandomIndex];
    let english = obj.English[objRandomIndex]
    let nature = obj.Nature[objRandomIndex]

    // display the information in a string
    let word = `Mot du jours: \n French: ${french}; \n English: ${english}; \n Type of word: ${nature}`;
    return word
}


let wordForToday = getNewWord(deter)
console.log(wordForToday)