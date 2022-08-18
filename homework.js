// class cat {
//     constructor(color, eyeColor, gender) {
//         this.color = color
//         this.eyeColor = eyeColor
//         this.gender = gender
//         this.legs = 4
//     }
//     jump() {
//         return `jump`
//     }
//     dogFight() {
//         this.legs--
//         return this.legs
        
//     }
//     gotANewHome(newHome){
//         return this.home = newHome
//     }
// }
// const iHop = new cat('black', 'gray', 'male')
// console.log(iHop)
// console.log(iHop.jump())
// console.log(iHop.dogFight())
// console.log(iHop.gotANewHome('street'))
// const iHome = new cat('yellow', 'blue', 'female')
// console.log(iHome)
// console.log(iHome.jump())
// console.log(iHome.dogFight())
// console.log(iHome.gotANewHome('barn'))


class Pirate {
    constructor (hair, age, weight){
        this.hair = hair
        this.age = age 
        this.weight = weight
        this.arms = 2
    }
    foughtInBattle(){
        this.arms --
    }
    didNotEatOrange(){
        console.log(`I GOT SCURVY`)
    }
    drown(){
        console.log(`GURGLE GURGLEEE`)
    }
}

const luckyLuke = new Pirate('black', 22, 144)
const pestyPete = new Pirate('blonde', 15, 124)
const buffBrock = new Pirate('red', 29, 225)
const blackPeal = [luckyLuke, pestyPete, buffBrock]

blackPeal.forEach(person => {
    console.log(person)
});

const pastyPat = new Pirate('gray', 61, 114)
const tenaciuosTat = new Pirate('blonde', 21, 205)
const creepyCarl = new Pirate('bald', 25, 216)
const shooterOnTheGLead = [luckyLuke, pestyPete, buffBrock]

shooterOnTheGLead.forEach(person => {
    console.log(person)
});