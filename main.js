const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

//mobile hamburg menu
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
  }
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
}

//close when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

//Showreel
const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];
const imgWarp = document.getElementsByClassName("img-warp")[0];

if (next && prev && imgWarp) {
    const imgs =
        document
        .getElementsByClassName("img-warp")[0]
        .getElementsByTagName("img");
    let idx = 0;

    function nextSlide() {
        idx++;

        if (idx > imgs.length - 1) {
            idx = 0;
        }
        imgWarp.style.transform =
            `translateX(${-idx * 100}%)`;
    }
    function prevSlide() {

        idx--;

        if (idx < 0) {
            idx = imgs.length - 1;
        }

        imgWarp.style.transform =
            `translateX(${-idx * 100}%)`;
    }

    let autoSlide = setInterval(nextSlide, 3000);

    next.onclick = () => {
        nextSlide();
    };  

    prev.onclick = () => {
    prevSlide();
    };
}

//video modal
const videoModal =
    document.getElementById("video-modal");
const closeVideo =
    document.getElementById("close-video");
const showreelVideo =
    document.getElementById("showreel-video");

if (videoModal && closeVideo && showreelVideo) {
    //videos reference
    const videos = [
        "videos/Bromo Lowres.webm",
        "videos/ClosingEfor V1_1.webm",
        "videos/Enthu Webinar Recap V1_1.webm"
    ];

    //open modal
    const imgs = document.getElementsByClassName("img-warp")[0]?.getElementsByTagName("img");
    if (imgs) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].onclick = () => {
                clearInterval(autoSlide);
                showreelVideo.src = videos[i];
                videoModal.classList.add("active");
                showreelVideo.play();
            };
        }
    }

    //close button
    closeVideo.onclick = () => {

        videoModal.classList.remove("active");

        showreelVideo.pause();

        showreelVideo.currentTime = 0;
    };
}

//Submit button
const submitButton = document.getElementById("submitbtn");
if (submitButton) {
    submitButton.onclick = () => {
        alert("Message sent!");
    };
}