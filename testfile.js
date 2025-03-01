let date1 = new Date(2025,3,1)
console.log(date1)
console.log(date1.getFullYear)

let date2 = new Date()
console.log(date2)
console.log(date2.getFullYear())
console.log(date2.getDay())
console.log(date2.getHours())
console.log(date2.getMinutes())
console.log(date2.getSeconds())

// get day
let today = new Date()
let dayName = today.getDay()
console.log(dayName)
if (dayName === 5) {
    console.log(today)
} else {
    console.log('another day')
}
