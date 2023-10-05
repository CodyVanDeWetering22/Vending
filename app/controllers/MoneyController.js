import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";



function _drawMoney() {
    let totalMoney = AppState.money
    setText('coinCount', totalMoney,)
}



export class MoneyController {
    constructor() {
        console.log('Money Controller Loaded ');

        AppState.on('money', _drawMoney)
    }








    addMoney() {
        moneyService.addMoney()
        console.log('added money');
    }


}








