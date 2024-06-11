const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            console.log(entry.target);
            if (entry.target.classList.contains('hide-image1-scroll')){
                entry.target.classList.add('show-image1-scroll');
            } 
            if (entry.target.classList.contains('hide-image2-scroll')){
                entry.target.classList.add('show-image2-scroll');
            }
            if (entry.target.classList.contains('hide-dresscode-title1-scroll')){
                entry.target.classList.add('show-dresscode-title1-scroll');
            }
            if (entry.target.classList.contains('hide-dresscode-title2-scroll')){
                entry.target.classList.add('show-dresscode-title2-scroll');
            } 
            // if (entry.target.classList.contains('hide-rsvp1-scroll')){
            //     entry.target.classList.add('show-rsvp1-scroll');
            // }
            // if (entry.target.classList.contains('hide-rsvp2-scroll')){
            //     entry.target.classList.add('show-rsvp2-scroll');
            // }
            // if (entry.target.classList.contains('hide-rsvp3-scroll')){
            //     entry.target.classList.add('show-rsvp3-scroll');
            // }
            // if (entry.target.classList.contains('hide-rsvp4-scroll')){
            //     entry.target.classList.add('show-rsvp4-scroll');
            // }
            // if (entry.target.classList.contains('hide-rsvp5-scroll')){
            //     entry.target.classList.add('show-rsvp5-scroll');
            // }
            // if (entry.target.classList.contains('hide-rsvp6-scroll')){
            //     entry.target.classList.add('show-rsvp6-scroll');
            // }
            // entry.target.classList.remove('hidden-scroll');
        } else {
            // if (entry.target.classList.contains('hide-image1-scroll')){
            //     entry.target.classList.remove('show-image1-scroll');
            // }
            // entry.target.classList.remove('show-scroll');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden-scroll');
hiddenElements.forEach((el) => observer.observe(el));

var audio = document.getElementById('my-audio');
var audioController = document.getElementById('audio-control');


function toggleAudio(){
    if (audio.paused){
        audioController.src = 'assets/ic-pause.svg';
        audio.play();
    } else {
        audioController.src = 'assets/ic-play.svg';
        audio.pause();
    }
}



// CLOSE COVER
function openInvitation(){
    audio.play();
    var cover = document.getElementById('cover');
    var placetime = document.getElementById('hide-placetime-scroll');
    placetime.classList.add('show-placetime-scroll');
    cover.classList.add('hide-cover');
    document.body.style.overflow = 'auto';
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('for')){
    console.log(urlParams.get('for'));
    $('#invited-name').text(urlParams.get('for'));
} else {
    $('#invited-name-main').hide();
}

// COUNTDOWN LOGIC
    // TODO: setup time
const eventTime = new Date('December 16 2023 17:00:00');

const day = document.getElementById('Days');
const hour = document.getElementById('Hours');
const minute = document.getElementById('Minutes');
const second = document.getElementById('Seconds');

function updateCountdown(){
    const currTime = new Date();
    diff = eventTime - currTime;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    day.innerHTML = d < 10 ? '0' + d : d;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(updateCountdown, 1000);

//save data to spreadsheet
const apiURL = 'https://sheetdb.io/api/v1/sy47pmrrlz9a6';
const form = document.getElementById('sheetdb-form');
const rsvpFormContainer = document.getElementById('rsvpFormContainer');
var isRSVPSubmited = false;

form.addEventListener("submit", e => {
    $('#btn-submit-0').hide();
    $('#btn-submit-1').show();

    e.preventDefault();
    fetch(apiURL, {
        method : "POST",
        body: new FormData(form),
    }).then(
        // response => response.json()
        response => { 
            isRSVPSubmited = true; 
            $('#sheetdb-form').hide();
            $('#success-state').show();
            // rsvpFormContainer.
        }

    ).catch(e => console.error('ERROR!', e.message));
});

    // }
// function submitRSVP(){
//     let data = new URLSearchParams();
//     data.append('fullname', document.getElementById('fullname').value);
//     data.append('fullname', document.getElementsByName('confirmation').value);
    
//     console.log(data);
// }
