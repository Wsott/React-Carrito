import estilo from "./ShoppingCart.module.css";

type shoppingCartData = {
    amount: number;
}

function ShoppingCart(data: shoppingCartData) {
    return (
        <div className={estilo.container}>
            <img src="src\assets\shopping-cart.png" alt="" />
            <span>${data.amount}</span>
        </div>
    )
}

export default ShoppingCart;