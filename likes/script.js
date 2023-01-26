// var likeCount1 = 9;
// var countElement1 = document.querySelector("#like-count1");

// var likeCount2 = 12;
// var countElement2 = document.querySelector("#like-count2");

// var likeCount3 = 9;
// var countElement3 = document.querySelector("#like-count3");



function increaseCount(likeCount) {
    var countElement = document.querySelector(likeCount);
    likeCount = parseInt(countElement.innerText)+1;
    countElement.innerText = likeCount;

}