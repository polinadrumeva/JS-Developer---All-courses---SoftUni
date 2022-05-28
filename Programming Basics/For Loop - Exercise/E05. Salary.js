function salary (input) {
    let openTab = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= openTab + 2; i++) {
        let nameSait = input[i];
        switch (nameSait) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }

        if (salary <= 0 && i <= openTab) {
            console.log("You have lost your salary.");
            break;
        } else if (i >= openTab && salary !== 0) {
           console.log(salary);
           break;
        }

    }
}

salary();