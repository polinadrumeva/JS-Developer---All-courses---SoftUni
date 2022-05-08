function yardGreening(input)
{
    let priceForOne = 7.61;
    let discount = 0.18;
    let yard = input[0];

    let total = priceForOne * yard;
    let discountForTotal = total * discount;
    let finalPrice = total - discountForTotal;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountForTotal} lv.`);

}

yardGreening();