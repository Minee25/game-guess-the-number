let inputNumber = document.querySelector('.input-number');
let button = document.querySelector('.btn');
let playAgainBtn = document.querySelector('.play-again-btn');
let answerElement = document.querySelector('.answer');
let errMessage = document.querySelector('.err-message');
let hint = document.querySelector('.hint');
let minElement = document.querySelector('.min');
let maxElement = document.querySelector('.max');

let min = 0;
let max = 1001;

// สุ่มตัวเลข
let answer = Math.floor(Math.random() * 1000 + 1);

function start() {
    if (inputNumber.value.trim() === "") {
        errMessage.innerHTML = "ใส่ตัวเลขด้วยนะเว้ย!";
    } else {
        let inputNumberValue = parseInt(inputNumber.value); // ดึง value จาก input แล้วเปลี่ยนเป็น int
        errMessage.innerHTML = ""; // ลบ errMessage  

        if (inputNumberValue == answer) {
            // ถ้าตัวเลขตรงกัน
            hint.innerHTML = "ถูกต้องจ้า!";
            answerElement.innerHTML = answer;
            button.classList.add('btn-hidden');
            playAgainBtn.classList.remove('btn-hidden');
        } else {
            // ถ้า input มากกว่า และ input มากกว่าคำตอบ
            if (inputNumberValue > min && !(inputNumberValue > answer)) {
                min = inputNumberValue; // เปลี่ยน min ให้เป็นค่าของ input
                minElement.innerHTML = inputNumberValue; // ส่งค่าไปยัง HTML
                hint.innerHTML = `ต้องมากกว่า ${min}`; // ส่งค่าไปยัง HTML
            }
            // ถ้า input น้อยกว่า และ input น้อยกว่าคำตอบ
            else if (inputNumberValue < max && !(inputNumberValue < answer)) {
                max = inputNumberValue; // เปลี่ยน max ให้เป็นค่าของ input
                maxElement.innerHTML = inputNumberValue; // ส่งค่าไปยัง HTML
                hint.innerHTML = `ต้องน้อยกว่า ${max}`; // ส่งค่าไปยัง HTML
            }
        }
    }
    inputNumber.value = '';
}

// เมือคลิกปุ่มให้รัน function start();
button.addEventListener('click', function () {
    start();
});

// เมื่อกดปุ่ม Enter บนคีบอร์ด ให้รัน function start();
document.addEventListener('keydown', (event) => {
    // เมื่อกดปุ่ม Enter บนคีบอร์ด ให้รัน function start();
    if (event.code === "Enter") {
        start();
    }
    // เมื่อกดปุ่ม Enter ตรง Numpad บนคีบอร์ด ให้รัน function start();
    else if (event.code === "NumpadEnter") {
        start();
    }
});

// เล่นอีกครั้ง
playAgainBtn.addEventListener('click', () => {
    // รีเซ็ตเป็นค่าเริ่มต้น
    min = 0;
    max = 0;
    random = Math.floor(Math.random() * 1000 + 1);
    answerElement.innerHTML = '...?...';
    minElement.innerHTML = '1';
    maxElement.innerHTML = '1000';
    hint.innerHTML = 'ทายมาเลยจ้า...';
    inputNumber.value = '';
    errMessage.innerHTML = '';

    button.classList.remove('btn-hidden');
    playAgainBtn.classList.add('btn-hidden');
});