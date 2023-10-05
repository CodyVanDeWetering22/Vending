


export class Snacks {

    constructor(data) {
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.price = data.price

    }

    get SnackCatalogCard() {
        return `<div class="col-4 text-center m-3 border border-dark border-2">
    <img class='snackImg'
    src="${this.imgUrl}"
    alt=${this.name}>
    <p>${this.name}</p>
    <p>$ ${this.price}</p>
    <button>Buy Now
    </button>
</div>
    `
    }



}