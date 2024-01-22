import $ from "jquery";
import 'slick-slider';
import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
import './functions/burger';
import './functions/auto-height';

// "slick-slider": "^1.8.2",
// import "@fancyapps/fancybox";

$('.variable-width').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
  
$('.booking-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
