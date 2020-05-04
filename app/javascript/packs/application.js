// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("chartkick")
require("chart.js")

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('datatables.net-bs4')

import $ from 'jquery';
global.$ = jQuery;

import 'bootstrap'
import '/app/app/assets/stylesheets/application.scss'


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
$(document).on("turbolinks:load", function() {
    console.log("Togglemenu Ready");
    const toggleMenu = document.querySelector(".navigation button");
    const menu = document.querySelector(".navigation ul");

    toggleMenu.addEventListener("click", function () {
        console.log("Togglemenu clicked");
        const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
        toggleMenu.setAttribute("aria-expanded", !open);
        menu.hidden = !menu.hidden;
    });
});
