const addTwoNumbers = function (
  num1: number,
  num2: number,
  num3?: number
): number {
  return num1 + num2;
};
function printInput<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

console.log(printInput<number>([1, 2, 3]).length);

let empList: Array<number>;
empList = new Array<number>(5);
console.log(empList);
