

var text = document.querySelector('h1');
        var chars = text.textContent.split('');
        text.textContent = '';
        chars.forEach(function(char, i) {
            var span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.transformOrigin = '50% 50%';
            span.addEventListener('click', function() {
                gsap.to(span, {rotationY:360, duration:1, ease: "power1.out"});
            });
            text.append(span);
        });