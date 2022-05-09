function suppliesForSchool(input)
{
    let packetPens = 5.80;
    let packetMarkers = 7.20;
    let washPerLtr = 1.20;

    let numbersOfPacketPens = Number(input[0]);
    let numbersOfPacketMarkers = Number(input[1]);
    let litresForWash = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let total = (packetPens * numbersOfPacketPens) + (packetMarkers * numbersOfPacketMarkers) + (washPerLtr * litresForWash);
    let discountToBill = total * discount;
    let final = total - discountToBill;

    console.log(final);
}

suppliesForSchool();