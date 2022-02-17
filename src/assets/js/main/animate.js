// Q ANIMATE

function q_animate(element, animation, delay) {

    if (animation === 'stagTop') {
        TweenMax.staggerFromTo(
            element, 1,
            { alpha: 0, y: 130 },
            { alpha: 1, y: 0, ease: Expo.easeOut, delay: delay }, 0.15
        );
    }


    else if (animation === 'blurScale') {

        var content = element.textContent;
        var letters = content.split(" ");
        element.innerHTML = "";
        for (var idx = 0; idx < letters.length; idx++) {
            element.innerHTML += "<span>" + letters[idx] + "</span>";
        }

        var chars = element.querySelectorAll('span');
        TweenMax.set(chars, { alpha: 0 });
        setTimeout(function () {
            TweenMax.staggerTo(
                chars, 2.5,
                { alpha: 1, ease: Power3.easeOut, onStart: applyBlur(chars) }, 0.8
            );
        }, delay);

        function applyBlur(chars) {
            for (var i = chars.length - 1; i >= 0; i--) {
                var char = chars[i];
                char.classList.add('unblur');
            };
        }

    }


    else if (animation === 'blurLeft') {
        var content = element.textContent;
        var letters = content.split(" ");
        element.innerHTML = "";
        element.setAttribute('data-content', content);
        for (var idx = 0; idx < letters.length; idx++) {
            element.innerHTML += "<span>" + letters[idx] + "</span>";
        }

        var chars = element.querySelectorAll('span');
        TweenMax.set(chars, { css: { x: 30, alpha: 0 } });

        setTimeout(function () {
            TweenMax.staggerTo(
                chars, 2,
                { css: { x: 0, alpha: 1 }, ease: Power3.easeOut, onStart: applyBlur(chars) }, 0.25
            );
        }, delay);

        function applyBlur(chars) {
            for (var i = chars.length - 1; i >= 0; i--) {
                var char = chars[i];
                char.classList.add('unblur');
            };
        }
    }

    else if (animation === 'blurLeftAlt') {
        var content = element.textContent;
        var letters = content.split(" ");
        element.innerHTML = "";
        element.setAttribute('data-content', content);
        for (var idx = 0; idx < letters.length; idx++) {
            element.innerHTML += "<span>" + letters[idx] + "</span>";
        }

        var chars = element.querySelectorAll('span');
        TweenMax.set(chars, { css: { scale: 1.2, x: 30, alpha: 0 } });

        setTimeout(function () {
            TweenMax.staggerTo(
                chars, 2,
                { css: { scale: 1, x: 0, alpha: 1 }, ease: Power3.easeOut, onStart: applyBlur(chars) }, 0.05
            );
        }, delay);

        function applyBlur(chars) {
            for (var i = chars.length - 1; i >= 0; i--) {
                var char = chars[i];
                char.classList.add('unblur');
            };
        }
    }

    else if (animation === 'unWord') {
        element[0].innerHTML = "";
        element[0].innerHTML += element[0].getAttribute('data-content');

    }


    else if (animation === 'maskIn') {
        function continueAnim() {
            TweenMax.to(element, .5, {
                webkitMaskImage: "linear-gradient(170deg, rgb(0, 0, 0) ".concat(100, "%, rgba(255, 255, 255, 0) ").concat(100, "%)"),
                ease: Linear.easeNone
            });
        }
        TweenMax.to(element, 1, {
            alpha: 1,
            webkitMaskSize: "cover",
            webkitMaskImage: "linear-gradient(170deg, rgb(0, 0, 0) ".concat(0, "%, rgba(255, 255, 255, 0) ").concat(100, "%)"),
            ease: Linear.easeNone, delay: delay, onComplete: continueAnim
        });
    }

    else if (animation === 'maskImgIn') {
        function continueAnim() {
            TweenMax.to(element, .5, {
                webkitMaskImage: "radial-gradient(rgb(0, 0, 0) ".concat(100, "%, rgba(255, 255, 255, 0) ").concat(100, "%)"),
                ease: Linear.easeNone
            });
        }
        TweenMax.to(element, .5, {
            alpha: 1,
            webkitMaskSize: "cover",
            webkitMaskImage: "radial-gradient(rgb(0, 0, 0) ".concat(50, "%, rgba(255, 255, 255, 0) ").concat(100, "%)"),
            ease: Linear.easeNone, delay: delay, onComplete: continueAnim
        });
    }

    else if (animation === 'maskOut') {
        TweenMax.to(element, 1, {
            alpha: 0,
            webkitMaskSize: "cover",
            webkitMaskImage: "linear-gradient(170deg, rgb(0, 0, 0) ".concat(0, "%, rgba(255, 255, 255, 0) ").concat(0, "%)"),
            ease: Linear.easeNone, delay: delay
        });
    }

};
