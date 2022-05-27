var smileFace = document.querySelector('.smile');
var laughFace = document.querySelector('.laugh');
var neutralFace = document.querySelector('.neutral');
var activator =document.querySelector('[button]')

// Add Event Listener

neutralFace.addEventListener('mouseenter', () => {
        if (smileFace.classList.contains('smile')) {
            smileFace.classList.add('active');
            neutralFace.classList.remove('active');
            laughFace.classList.remove('active');
        }
    });



smileFace.addEventListener('mouseleave', () => {
        if (smileFace.classList.contains('smile')) {
            neutralFace.classList.add('active');
            smileFace.classList.remove('active');
            laughFace.classList.remove('active');
        }
    });

    smileFace.addEventListener('click', () => {
        if (laughFace.classList.contains('laugh')) {
            laughFace.classList.add('active');
             smileFace.classList.remove('active');
         }
        });
activator.addEventListener('click', button => {
    laughFace.classList.add('active');
    smileFace.classList.remove('active');
    neutralFace.classList.remove('active');
    setTimeout(function() {
        laughFace.classList.remove('active');
        smileFace.classList.add('active');
    }, 500);
});
