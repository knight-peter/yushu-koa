const {
    LinValidator,
    Rule
}= require('../../core/lin-validator.js');

class PositiveIntegerValidator extends LinValidator{
    constructor(){
        // 给this增加属性，得先使用super()
        super()
        this.id = [
            new Rule('isInt','需要是正整数',{min:1})
        ]
    }
}

module.exports = {
    PositiveIntegerValidator
}
