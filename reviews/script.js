const profile = [{
        name: 'John Smith',
        position: "CEO of ABC Inc.",
        image: 'http://127.0.0.1:5500/images/profile-2.jpg',
        comment: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto optio quibusdam quod temporibus delectus.'
    },
    {
        name: 'Sally Weeb',
        position: "web Developer",
        image: 'http://127.0.0.1:5500/images/profile-1.jpg',
        comment: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto optio quibusdam quod temporibus delectus.'
    },
    {
        name: 'Sean Doe',
        position: "Photogapher",
        image: 'http://127.0.0.1:5500/images/profile-3.jpg',
        comment: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto optio quibusdam quod temporibus delectus.'
    }
];


//geting the ids from the HTML page
const imgHolder = document.querySelector('.image');
const nameHolder = document.getElementById('name');
const positionHolder = document.getElementById('position');
const commentHolder = document.getElementById('comment');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

let slideIndex = 1;
let count = 0;

const getposProfile = (arrayPos) => {
    for (let i = 0; i < profile.length; i++) {
        return profile[arrayPos];
    }
}

const next = () => {
    if (count < profile.length) { count++ }
    if (count == profile.length)(count = 0)
    return count;
}
const prev = () => {
    if (count == -1 || count == 0) {
        count = profile.length
    }
    count--;
    return count;
}

const showProfile = () => {
    nameHolder.textContent = getposProfile(count).name;
    imgHolder.src = getposProfile(count).image;
    commentHolder.textContent = getposProfile(count).comment;
    positionHolder.textContent = getposProfile(count).position;
}


prevBtn.addEventListener('click', () => {
    prev();
    showProfile();
});
nextBtn.addEventListener('click', () => {
    next();
    showProfile();
});

window.addEventListener('load', showProfile());