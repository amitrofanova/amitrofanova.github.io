(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function changeNav() {
  if (document.documentElement.clientWidth > 767) {
    $(".navbar").removeClass("navbar-default");
    $(".navbar").removeClass("navbar-scrolled");
    $(".navbar").addClass("navbar-fixed-top");
    $(".navbar-brand").addClass("visible-xs");

    if ($(this).scrollTop() > 0) {
      $(".navbar").removeClass("navbar-transparent");
      $(".navbar").addClass("navbar-white");
    } else {
      $(".navbar").removeClass("navbar-white");
      $(".navbar").addClass("navbar-transparent");
    }

    if ($(this).scrollTop() > $("#top").height()) {
      document.getElementsByClassName("to-top")[0].style.display = "block";
    } else {
      document.getElementsByClassName("to-top")[0].style.display = "none";
    }
  } else {
    if ($(this).scrollTop() > 0) {
      $(".navbar-brand").removeClass("visible-xs");
      $(".navbar").addClass("navbar-scrolled");
      $(".navbar").addClass("navbar-fixed-top");
      $(".navbar-brand").addClass("hidden-xs");
      document.getElementsByClassName("about")[0].style.paddingTop = "80px";
    } else {
      $(".navbar").removeClass("navbar-scrolled");
      $(".navbar-brand").removeClass("hidden-xs");
      $(".navbar-brand").addClass("visible-xs");
      $(".navbar").addClass("navbar-default");
    }
  }
}

function changeNavHeight() {
  var top_offset = $(".main").offset().top;

  if ($(document).scrollTop() < top_offset) {
    document.getElementsByClassName("navbar-white")[0].style.paddingBottom = 0;
  } else {
    document.getElementsByClassName("navbar-white")[0].style.paddingBottom = "40px";
  }
}

function animateSkills() {
  var top_offset = $("#skills_section").offset().top;
  var bottom_offset = top_offset - $(window).height() + 150;

  if ($(document).scrollTop() > bottom_offset) {
    $.getJSON("assets/data/skills.json", function (data) {
      $.each(data, function (key, val) {
        $(document.getElementById(key)).animate({
          width: val + "%",
          opacity: '1'
        }, 2000);
      });
    });
  }
}

function openModal(modal) {
  $(modal).show();
}

function closeModal() {
  $(this).parent().hide();
}

function showSlides(slides) {
  // const slides = $('.slides');
  var slideIndex = 0;

  function showCurrentSlide(n) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[n].style.display = 'block';
  }

  function showPreviousSlide() {
    slideIndex = slideIndex - 1;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    showCurrentSlide(slideIndex);
  }

  function showNextSlide() {
    slideIndex = slideIndex + 1;

    if (slideIndex === slides.length) {
      slideIndex = 0;
    }

    showCurrentSlide(slideIndex);
  }

  showCurrentSlide(0);
  $('.prev').on('click', showPreviousSlide);
  $('.next').on('click', showNextSlide);
}

$(document).ready(function () {
  changeNav();
  animateSkills();
  $(window).on("resize", changeNav);
  $(window).on("scroll", changeNav);
  $(window).on("scroll", animateSkills);
  $('.portfolio__hospital').on('click', function () {
    openModal('#hospital');
    var slides = $('.slider__hospital').children('.slider__item');
    showSlides(slides);
  });
  $('.portfolio__recipes').on('click', function () {
    openModal('#recipes');
    var slides = $('.slider__recipes').children('.slider__item');
    showSlides(slides);
  });
  $('.close').on('click', closeModal);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsU0FBVCxHQUFvQjtBQUNuQixNQUFJLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQXpCLEdBQXVDLEdBQTNDLEVBQStDO0FBQzlDLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLFdBQWIsQ0FBeUIsZ0JBQXpCO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsV0FBYixDQUF5QixpQkFBekI7QUFDQSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxRQUFiLENBQXNCLGtCQUF0QjtBQUNBLElBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixRQUFuQixDQUE0QixZQUE1Qjs7QUFDQSxRQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxTQUFSLEtBQW9CLENBQXZCLEVBQXlCO0FBQ3hCLE1BQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLFdBQWIsQ0FBeUIsb0JBQXpCO0FBQ0EsTUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsUUFBYixDQUFzQixjQUF0QjtBQUNBLEtBSEQsTUFJSTtBQUNILE1BQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLFdBQWIsQ0FBeUIsY0FBekI7QUFDQSxNQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxRQUFiLENBQXNCLG9CQUF0QjtBQUNBOztBQUNELFFBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFNBQVIsS0FBb0IsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsRUFBdkIsRUFBMEM7QUFDekMsTUFBQSxRQUFRLENBQUMsc0JBQVQsQ0FBZ0MsUUFBaEMsRUFBMEMsQ0FBMUMsRUFBNkMsS0FBN0MsQ0FBbUQsT0FBbkQsR0FBMkQsT0FBM0Q7QUFDQSxLQUZELE1BR0k7QUFDSCxNQUFBLFFB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VixDQUFhLFFBQWIsRUFBdUIsU0FBdkI7QUFDQSxFQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QixTQUF2QjtBQUNBLEVBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLGFBQXZCO0FBRUEsRUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQixFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFXO0FBQ2hELElBQUEsU0FBUyxDQUFDLFdBQUQsQ0FBVDtBQUNBLFFBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCLFFBQXZCLENBQWdDLGVBQWhDLENBQWY7QUFDQSxJQUFBLFVBQVUsQ0FBQyxNQUFELENBQVY7QUFDQSxHQUpEO0FBTUEsRUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QixFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQy9DLElBQUEsU0FBUyxDQUFDLFVBQUQsQ0FBVDtBQUNBLFFBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLFFBQXRCLENBQStCLGVBQS9CLENBQWY7QUFDQSxJQUFBLFVBQVUsQ0FBQyxNQUFELENBQVY7QUFDQSxHQUpEO0FBTUEsRUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBeEI7QUFDQSxDQXJCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIGNoYW5nZU5hdigpe1xuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gNzY3KXtcblx0XHQkKFwiLm5hdmJhclwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhci1kZWZhdWx0XCIpO1xuXHRcdCQoXCIubmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNjcm9sbGVkXCIpO1xuXHRcdCQoXCIubmF2YmFyXCIpLmFkZENsYXNzKFwibmF2YmFyLWZpeGVkLXRvcFwiKTtcblx0XHQkKFwiLm5hdmJhci1icmFuZFwiKS5hZGRDbGFzcyhcInZpc2libGUteHNcIik7XG5cdFx0aWYoJCh0aGlzKS5zY3JvbGxUb3AoKT4wKXtcblx0XHRcdCQoXCIubmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXRyYW5zcGFyZW50XCIpO1xuXHRcdFx0JChcIi5uYXZiYXJcIikuYWRkQ2xhc3MoXCJuYXZiYXItd2hpdGVcIik7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHQkKFwiLm5hdmJhclwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhci13aGl0ZVwiKTtcblx0XHRcdCQoXCIubmF2YmFyXCIpLmFkZENsYXNzKFwibmF2YmFyLXRyYW5zcGFyZW50XCIpO1xuXHRcdH1cblx0XHRpZigkKHRoaXMpLnNjcm9sbFRvcCgpPiQoXCIjdG9wXCIpLmhlaWdodCgpKXtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0by10b3BcIilbMF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG8tdG9wXCIpWzBdLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG5cdFx0fVxuXHR9XG5cdGVsc2V7XG5cdFx0aWYoJCh0aGlzKS5zY3JvbGxUb3AoKT4wKXtcblx0XHRcdCQoXCIubmF2YmFyLWJyYW5kXCIpLnJlbW92ZUNsYXNzKFwidmlzaWJsZS14c1wiKTtcblx0XHRcdCQoXCIubmF2YmFyXCIpLmFkZENsYXNzKFwibmF2YmFyLXNjcm9sbGVkXCIpO1xuXHRcdFx0JChcIi5uYXZiYXJcIikuYWRkQ2xhc3MoXCJuYXZiYXItZml4ZWQtdG9wXCIpO1xuXHRcdFx0JChcIi5uYXZiYXItYnJhbmRcIikuYWRkQ2xhc3MoXCJoaWRkZW4teHNcIik7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWJvdXRcIilbMF0uc3R5bGUucGFkZGluZ1RvcD1cIjgwcHhcIjtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkKFwiLm5hdmJhclwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhci1zY3JvbGxlZFwiKTtcblx0XHRcdCQoXCIubmF2YmFyLWJyYW5kXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXhzXCIpO1xuXHRcdFx0JChcIi5uYXZiYXItYnJhbmRcIikuYWRkQ2xhc3MoXCJ2aXNpYmxlLXhzXCIpO1xuXHRcdFx0JChcIi5uYXZiYXJcIikuYWRkQ2xhc3MoXCJuYXZiYXItZGVmYXVsdFwiKTtcblx0XHR9XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBjaGFuZ2VOYXZIZWlnaHQoKXtcblx0dmFyIHRvcF9vZmZzZXQgPSAkKFwiLm1haW5cIikub2Zmc2V0KCkudG9wO1xuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk8dG9wX29mZnNldCl7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhci13aGl0ZVwiKVswXS5zdHlsZS5wYWRkaW5nQm90dG9tPTA7XG5cdH1cblx0ZWxzZXtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyLXdoaXRlXCIpWzBdLnN0eWxlLnBhZGRpbmdCb3R0b209XCI0MHB4XCI7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBhbmltYXRlU2tpbGxzKCl7XG5cdHZhciB0b3Bfb2Zmc2V0ID0gJChcIiNza2lsbHNfc2VjdGlvblwiKS5vZmZzZXQoKS50b3A7XG5cdHZhciBib3R0b21fb2Zmc2V0ID0gdG9wX29mZnNldC0kKHdpbmRvdykuaGVpZ2h0KCkrMTUwO1xuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk+Ym90dG9tX29mZnNldCl7XG5cdFx0JC5nZXRKU09OKCBcImFzc2V0cy9kYXRhL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdCQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbCkge1xuXHRcdFx0XHQkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkpLmFuaW1hdGUoe3dpZHRoOiB2YWwrXCIlXCIsIG9wYWNpdHk6ICcxJ30sIDIwMDApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcblx0JChtb2RhbCkuc2hvdygpO1xufVxuXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG5cdCQodGhpcykucGFyZW50KCkuaGlkZSgpO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dTbGlkZXMoc2xpZGVzKSB7XG5cblx0Ly8gY29uc3Qgc2xpZGVzID0gJCgnLnNsaWRlcycpO1xuXHR2YXIgc2xpZGVJbmRleCA9IDA7XG5cblx0ZnVuY3Rpb24gc2hvd0N1cnJlbnRTbGlkZShuKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0XHRzbGlkZXNbbl0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93UHJldmlvdXNTbGlkZSgpIHtcblx0XHRzbGlkZUluZGV4ID0gc2xpZGVJbmRleCAtIDE7XG5cdFx0aWYgKHNsaWRlSW5kZXggPCAwKSB7XG5cdFx0XHRzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXHRcdHNob3dDdXJyZW50U2xpZGUoc2xpZGVJbmRleCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93TmV4dFNsaWRlKCkge1xuXHRcdHNsaWRlSW5kZXggPSBzbGlkZUluZGV4ICsgMTtcblx0XHRpZiAoc2xpZGVJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCkge1xuXHRcdFx0c2xpZGVJbmRleCA9IDA7XG5cdFx0fVxuXHRcdHNob3dDdXJyZW50U2xpZGUoc2xpZGVJbmRleCk7XG5cdH1cblxuXHRzaG93Q3VycmVudFNsaWRlKDApO1xuXG5cdCQoJy5wcmV2Jykub24oJ2NsaWNrJywgc2hvd1ByZXZpb3VzU2xpZGUpO1xuXHQkKCcubmV4dCcpLm9uKCdjbGljaycsIHNob3dOZXh0U2xpZGUpO1xuXG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0Y2hhbmdlTmF2KCk7XG5cdGFuaW1hdGVTa2lsbHMoKTtcblx0JCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGNoYW5nZU5hdik7XG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCBjaGFuZ2VOYXYpO1xuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgYW5pbWF0ZVNraWxscyk7XG5cblx0JCgnLnBvcnRmb2xpb19faG9zcGl0YWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRvcGVuTW9kYWwoJyNob3NwaXRhbCcpO1xuXHRcdGNvbnN0IHNsaWRlcyA9ICQoJy5zbGlkZXJfX2hvc3BpdGFsJykuY2hpbGRyZW4oJy5zbGlkZXJfX2l0ZW0nKTtcblx0XHRzaG93U2xpZGVzKHNsaWRlcyk7XG5cdH0pO1xuXG5cdCQoJy5wb3J0Zm9saW9fX3JlY2lwZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRvcGVuTW9kYWwoJyNyZWNpcGVzJyk7XG5cdFx0Y29uc3Qgc2xpZGVzID0gJCgnLnNsaWRlcl9fcmVjaXBlcycpLmNoaWxkcmVuKCcuc2xpZGVyX19pdGVtJyk7XG5cdFx0c2hvd1NsaWRlcyhzbGlkZXMpO1xuXHR9KTtcblxuXHQkKCcuY2xvc2UnKS5vbignY2xpY2snLCBjbG9zZU1vZGFsKTtcbn0pO1xuIl19
