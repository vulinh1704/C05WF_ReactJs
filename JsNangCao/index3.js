/*
1. Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
2. Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
3. Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
4. Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
5. Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
7. Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
8. Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
9. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
10. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
*/

let sumArray = (arr) => {
    /*
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
    */
    let sum = arr.reduce(
        (sum1, item) => {
            return sum1 + item;
            // sum1 = 1 + 4 = 5 
            // sum1 = sum1 + 5 = 5 + 5 = 10
            // sum1 = sum1 + 6 = 6 + 10 = 16
            // sum1 = sum1 + 7 = 15 + 7 = 23
        }
    )
    return sum;
}

let squareArray = (arr) => {
    /*
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;
    */
    let newArr = arr.map(
        (item) => {
            return item * item;
            // 1 => newArr [1]
            // 4 => newArr [1, 16]
            // 5 => newArr [1, 16, 25]
            //...
        }
    )
    return newArr;
}

let filterGreaterThan = (arr, number) => {
    /*
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > number) {
            newArr.push(arr[i])
        }
    }
    return newArr;
    */
   let newArr = arr.filter(
    (item) => {
        return item > number;
        // 1 > 4 (false) => []
        // 4 > 4 (false) => []
        // 5 > 4 (true) => [5]
        // 6 > 4 (true) => [5, 6]
        //...
    }
   )
   return newArr;
}

let convert = (arr) => {
    let newArr = arr.map(
        (item) => {
            if(item % 2 === 0) return "even"
            else return "odd";
        }
    )
    return newArr;
}

let convertToUpperCase = (arrStr) => {
    let newArr = arrStr.map(
        (item) => {
            return item.toUpperCase();
        }
    )
    return newArr;
}

let findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

let array = [1, 4, 5, 6, 7];
let max = findMax(array);
console.log(max);


// let array2 = ["linh", "phúc", "hoang", "nhan"];
// let newArr = convertToUpperCase(array2);
// console.log(newArr);

// let newArr = convert(array);
// console.log(newArr);

// let newArr = filterGreaterThan(array, 4);
// console.log(newArr);

// let newArr = squareArray(array);
// console.log(newArr);
// let sum = sumArray(array);
// console.log(sum);