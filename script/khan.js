// typing effect

var type = new Typed('.type', {
	strings: [ 'Web Developer', 'DevOps Engineer', 'Freelancer' ],
	typeSpeed: 45,
	backSpeed: 60,
	loop: true
});

// top-scroll button

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 40) {
			$('#myBtn').fadeIn();
		} else {
			$('#myBtn').fadeOut();
		}
	});

	$('#myBtn').click(function() {
		$('html ,body').animate({ scrollTop: 0 }, 600);
	});
});

// ṣmooth scrolling bahaviour

$(document).ready(function() {
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				500,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
});

// current element navigation

(function() {
	var navLinks = $('nav ul li a'),
		navH = $('nav').height(),
		section = $('section'),
		documentEl = $(document);

	documentEl.on('scroll', function() {
		var currentScrollPos = documentEl.scrollTop();

		section.each(function() {
			var self = $(this);
			if (
				self.offset().top < currentScrollPos + navH &&
				currentScrollPos + navH < self.offset().top + self.outerHeight()
			) {
				var targetClass = '.' + self.attr('class') + '-marker';
				navLinks.removeClass('active');
				$(targetClass).addClass('active');
			}
		});
	});
})();

// Load More button

$(function() {
	$('.box-hidden').slice(0, 3).show();

	$('#loadMore').on('click', function(e) {
		e.preventDefault();
		$('.box-hidden:hidden').slice(0, 3).slideDown();
		if ($('.box-hidden:hidden').lenght == 0) {
			$('#load').fadeOut('slow');
		}

		$('html, body').animate(
			{
				scrollBottom: $(this).offset().top
			},
			1500
		);
	});
});

(function() {
	var button = document.getElementById('loadMore');
	var myDiv = document.getElementById('wrap-button');

	function toggle() {
		if (myDiv.style.visibility === 'hidden') {
			myDiv.style.visibility = 'visible';
		} else {
			myDiv.style.visibility = 'hidden';
		}
	}

	button.addEventListener('click', toggle, false);
})();

// preloader
