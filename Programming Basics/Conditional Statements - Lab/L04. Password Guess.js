function guessPassword(input)
{
    let password = "s3cr3t!P@ssw0rd";
    let tryPassword = input[0];
    if(password == tryPassword)
    {
        console.log("Welcome");
    }
    else
    {
        console.log("Wrong password!");
    }
}

guessPassword();