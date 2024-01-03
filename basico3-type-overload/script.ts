function arrendondar(value: string): string;
function arrendondar(value: number): number;
function arrendondar(value: number | string): string | number {
    if (typeof value === 'number') return Math.ceil(value);
    else {
        return Math.ceil(Number(value)).toString();
    }
}

console.log(arrendondar(4.5));
// console.log(arrendondar(4.61111111111));
// console.log(arrendondar(4.4));
// console.log(arrendondar(4.1));

// console.log(arrendondar('8.5'));
// console.log(arrendondar('8.61111111111'));
// console.log(arrendondar('8.4'));
console.log(arrendondar('8.1'));
