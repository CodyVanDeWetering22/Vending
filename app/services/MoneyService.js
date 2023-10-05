import { AppState } from "../AppState.js";


class MoneyService {
    addMoney() {
        AppState.money += .25
        console.log('money added', AppState.money)
    }

}


export const moneyService = new MoneyService()