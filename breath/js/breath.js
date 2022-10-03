export default class Breath{
    constructor(type, long=5, count=10){
        this.type = type
        this.long = long
        this.count = count
        
    }

    get type(){
        return this.type
    }

    get long(){
        return this.long
    }

    get count(){
        return this.count
    }
}