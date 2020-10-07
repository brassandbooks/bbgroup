$(document).ready(function () {

    let links = document.querySelectorAll('.nav-item')


    links.forEach(link => {
        link.addEventListener('click', e => {
            links.forEach(l => {
                if (l.className.includes('active')) {
                    l.classList.remove('active')
                }
                e.target.parentNode.classList.add('active')
            });
        })
    })



    // Gets the video src from the data-src on each button
    function initModal() {
        var $videoSrc;
        $('.video-btn').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function (e) {

            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src', $videoSrc);
        })
    }

    initModal()

    //Smooth Scrolling
    //declare variables
    let btnSub = document.getElementById('subsidiaries-btn')
    let btnHome = document.getElementById('home-btn')
    let btnContact = document.getElementById('contact-btn')
    let btnTeam = document.getElementById('team-btn')
    let btnOurApproach = document.getElementById('our-approach-btn')


    cont button = [btnSub, btnHome, btnContact, btnTeam, btnOurApproach]


    //Get form details 
    let form = document.getElementById('form')
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')
    let subject = document.getElementById('subject')
    let message = document.getElementById('message')
    let btn = document.getElementById('submit-btn')

    form.addEventListener('submit', e => {
        e.preventDefault()

        const details = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value
        }

        console.log(details);
    })
})