function repainting(input)
{
    let neededNaylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededWaterPaint = Number(input[2]);
    let hoursForWork = Number(input[3]);

    let naylon = 1.50;
    let paint = 14.50;
    let waterForPaint = 5.00;
    let bag = 0.40;

    let allPaint = ((neededPaint * paint) * 0.10) + (neededPaint * paint);
    let allNaylon = (neededNaylon + 2) * naylon;
    let workForHour = (allPaint + allNaylon + (neededWaterPaint * waterForPaint) + bag) * 0.30;
    let total = allNaylon + allPaint + bag + (neededWaterPaint * waterForPaint) + (workForHour * hoursForWork);

    console.log(total);
}

repainting();