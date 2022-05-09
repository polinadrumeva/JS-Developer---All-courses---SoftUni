function vacationBook (input)
{
    let pagesToCurrentBook = Number(input[0]);
    let pagesReadForHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = (pagesToCurrentBook / pagesReadForHour) / days;
    console.log(hours);
}

vacationBook();  