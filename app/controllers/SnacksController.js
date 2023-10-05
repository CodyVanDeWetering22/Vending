import { AppState } from "../AppState.js";
import { Snacks } from "../models/Snacks.js";
import { setHTML } from "../utils/Writer.js";


function _drawSnackCatologCard() {
    const snacks = AppState.Snacks
    console.log('[SNACKS CONTROLLER] DRAWING SNACKS:', snacks)
    let content = ''
    snacks.forEach(snack => content += snack.SnackCatalogCard);
    console.log('[SNACKS CONTROLLER] Draw snacks Content:', content)
    setHTML('snackCard', content)

}

export class SnacksController {
    constructor() {
        _drawSnackCatologCard()
    }
}