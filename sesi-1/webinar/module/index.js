/*
    #Algoritma linier search
    1. buat perulangan yang berlajalan melalui setiap elemen array, 
    dimulai dari index ke 0;
    2. pada setiap iterasi (perulangan) periksa apakah elemen saat ini
    sama dengan nilai yang di cari
    3. jika elemen saat ini sama dengna elemen yang di cari maka kembalikan index elemen tersebut
    4. jika tidak ada elemen yang cocok setelah selesai perulangan maka
    kembalikan nilai -1
    5. selesai
*/

function linierSearch(data, target) {
    for(let index=0; index < data.length; index++) {
        if(data[index] === target) {
            return index;
        }
    }
    return -1;
}

const myData = [1,2,3,4,5,6,7,8,9,10];
let target = 8;

let result = linierSearch(myData, target);

if(result != -1) {
    console.log(`data ditemukan pada index ke-${result}`)
} else {
    console.log("data tidak ditemukan dalam array!!")
}