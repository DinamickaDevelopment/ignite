function printNum(args) {
    document.write(args.map((arg) => `${arg}`)); 
}

let args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export {printNum, args as nums};