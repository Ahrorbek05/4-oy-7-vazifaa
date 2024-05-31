// 1-masala

// function xabar() {
//     let word = prompt(`So'z kiriting!`);
//     while (word.toLowerCase !== "stop") {
//         word = prompt(`Xabarni kiriting (tugatish uchun "stop" ni kiriting):`);
//         if (word.toLowerCase == "stop") {
//             console.log("Kiritdingiz: " + word);
//         }
//     }
//     console.log(`Noto'g'ri ma'lumot kiritdinggiz!`);
// }
// xabar();


// 2-masala
// function vaqt(salomlashish) {
//     let soat = +prompt(`Vatqni kiriting!`);
//     switch (true) {
//         case (soat >= 5 && soat < 12):
//             console.log('Xayrli tong');
//             break;
//         case (soat >= 12 && soat < 17):
//             console.log('Xayrli kun');
//             break;
//         case (soat >= 17 && soat < 21):
//             console.log('Xayrli kech');
//             break;
//         case ((soat >= 21 && soat < 24) || (soat >= 0 && soat < 5)):
//             console.log('Xayrli tun');
//             break;
//         default:
//             console.log(`Noto'g'ri vaqt kiritildi!`);
//             break;
//     }
//     return salomlashish;
// }
// vaqt();

// 3-masala

// function raqam(Oy_nomi) {
//     let oy = +prompt(`Raqam kiriting!`)
//     switch (oy) {
//         case 1:
//             console.log(`Yanvar`);
//             break;
//         case 2:
//             console.log(`Fevral`);
//             break;
//         case 3:
//             console.log(`Mart`);
//             break;
//         case 4:
//             console.log(`Aprel`);  
//             break;
//         case 5:
//             console.log(`May`);   
//             break;  
//         case 6:
//             console.log(`Iyun`);   
//             break; 
//         case 7:
//             console.log(`Iyul`);   
//             break;  
//         case 8:
//             console.log(`Avgust`);   
//             break;
//         case 9:
//             console.log(`Sentabr`);   
//             break;
//         case 10:
//             console.log(`Oktabr`);   
//             break;
//         case 11:
//             console.log(`Noyabr`);   
//             break;
//         case 12:
//             console.log(`Dekabr`);   
//             break;
//         default:
//             console.log(`Bunday oy raqami mavjud emas!`);
//             break;
//     }
//     return Oy_nomi;   
// }
// raqam();

// 4-masala
// function daraja(Ballmiqdori) {
//     let ball = +prompt(`Ball kiriting!`);
//     switch (true) {
//         case (ball >= 90 && ball <= 100):
//             console.log('A');
//             break;
//         case (ball >= 80 && ball < 90):
//              console.log('B')
//             break;
//         case (ball >= 70 && ball < 80):
//              console.log('C');
//             break;
//         case (ball >= 60 && ball < 70):
//              console.log('D')
//             break;
//         case (ball >= 0 && ball < 60):
//              console.log('F')
//             break;
//         default:
//             console.log(`Bunday daraja mavjud emas!`);
//             break;
//     } 
//     return Ballmiqdori;  
// }
// daraja();

// 5-masala
// function hisoblash(qiymat) {
//     let sum = 0;
//     let count = 0;
//     let input;

//     while (true) {
//         input = prompt(`Raqamni kiriting (yoki tugatish uchun "to'xtatish" ni kiriting):`);
//         if (input.toLowerCase === "stop") {
//             break;
//         }

//         let number = parseFloat(input);
//         if (!isNaN(number)) {
//             sum += number;
//             count++;
//         } else {
//             console.log("Noto'g'ri kiritilgan. Iltimos, to'g'ri raqam kiriting.");
//         }
//     }

//     if (count > 0) {
//         let ortachaQiymat = sum / count;
//         console.log("Kiritilgan raqamlarning o'rtacha qiymati:" + ortachaQiymat);
//     } else {
//         console.log("Hech qanday to'g'ri raqamlar kiritilmagan.");
//     }
//     return qiymat;
// }
// hisoblash();

// 6-masala
// function raqamlar() {
//     let i = 0;
//     while (i <= 20) { 
//         if (i % 2 === 0) { 
//             console.log(i); 
//         }
//         i++;
//     }
// }
// raqamlar(20);

// 7-masala
// function taxminiyRaqam() {
//     const togriRaqam = 19;
//     let foydalanuvchi;

//     while (foydalanuvchi !== togriRaqam) {
//         foydalanuvchi = parseInt(prompt("Raqamni kiriting:")); 
//         if (foydalanuvchi !== togriRaqam) {
//             alert("Noto'g'ri raqam, qayta urinib ko'ring!"); 
//         }
//     }
    
//     alert("Tabriklaymiz! To'g'ri raqamni topdingiz.");
// }
// taxminiyRaqam(19);

