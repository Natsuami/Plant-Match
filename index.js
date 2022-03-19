const checkPothos = () => {
    let correctAns = 0;
    let questionOne = document.quiz.questionOne.value;
    let questionTwo = document.quiz.questionTwo.value;
    let questionThree = document.quiz.questionThree.value;
    let questionFour = document.quiz.questionFour.value;
    let questionFive = document.quiz.questionFive.value;

    if (questionOne === 'Underwatering') {
        correctAns++;
    }
    if (questionTwo === 'Spring and Summer') {
        correctAns++;
    }
    if (questionThree === 'Bright and Indirect') {
        correctAns++;
    }
    if (questionFour === 'All of the Above') {
        correctAns++;
    }
    if (questionFive === 'Completely Dry') {
        correctAns++;
    }
    document.getElementById("results").innerHTML = (`You answered ${correctAns} out of 5 correctly!`);
};

const checkMonstera = () => {
    let correctAns = 0;
    let questionOne = document.quiz.questionOne.value;
    let questionTwo = document.quiz.questionTwo.value;
    let questionThree = document.quiz.questionThree.value;
    let questionFour = document.quiz.questionFour.value;
    let questionFive = document.quiz.questionFive.value;

    if (questionOne === 'Bright indirect sunlight') {
        correctAns++;
    }
    if (questionTwo === '60-80 degrees') {
        correctAns++;
    }
    if (questionThree === 'Not enough sun') {
        correctAns++;
    }
    if (questionFour === 'About every 4-6 weeks') {
        correctAns++;
    }
    if (questionFive === '10-15 feet') {
        correctAns++;
    }
    document.getElementById("results").innerHTML = (`You answered ${correctAns} out of 5 correctly!`);
};

const checkPhilodendron = () => {
    let correctAns = 0;
    let questionOne = document.quiz.questionOne.value;
    let questionTwo = document.quiz.questionTwo.value;
    let questionThree = document.quiz.questionThree.value;
    let questionFour = document.quiz.questionFour.value;
    let questionFive = document.quiz.questionFive.value;

    if (questionOne === 'Under watering') {
        correctAns++;
    }
    if (questionTwo === 'Too long/leggy') {
        correctAns++;
    }
    if (questionThree === 'Bright and Indirect') {
        correctAns++;
    }
    if (questionFour === 'Humans and Pets') {
        correctAns++;
    }
    if (questionFive === '500') {
        correctAns++;
    }
    document.getElementById("results").innerHTML = (`You answered ${correctAns} out of 5 correctly!`);
};
