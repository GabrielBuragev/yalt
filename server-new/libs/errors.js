
class InvalidParamsError extends Error {
    constructor(params){
        super();
        this.message = `Invalid parameters : ${params}`
    }
} 

module.exports = {
    InvalidParamsError,
}