function sorting(data, command) {
    let result = data;
    if(command === 'asc') {
        result = result.sort((a,b) => a-b);
    } else if (command === 'desc') {
        result = result.sort((a,b) => b-a );
    }

    return result;
}

sorting([14, 7, 17, 6, 8], 'asc');
sorting([14, 7, 17, 6, 8], 'desc');