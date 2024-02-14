"use strict";
        let btn = document.querySelector(".mobile-menu button");
        let ul = document.querySelector(".wrap-1 ul");
        let mobileMenu = document.querySelector(".mobile-menu");
        btn.addEventListener("click", function () {
            if (btn.className == "active") {
                btn.classList.remove("active");
                mobileMenu.classList.remove("active");
                ul.style.display = "none";
            }
            else {
                btn.classList.add("active");
                mobileMenu.classList.add("active");
                ul.style.display = "block";
            }
        })

        let link = document.querySelector(".overflow ul");
        let img = document.querySelectorAll(".wrap-6 .work img");
        let li = document.querySelectorAll(".overflow ul li");
        link.addEventListener("click", function (e) {
            if ("UL" != e.target.tagName) {
                let value = e.target.innerText;
                img.forEach(i => { i.style.display = "none"; });
                li.forEach(j => { j.classList.remove("active") });
                if (value == "PSD DESIGN") {
                    e.target.classList.add("active");
                    img[5].style.display = "block";
                    img[1].style.display = "block";

                }
                else if (value == "PRESENTATION") {
                    e.target.classList.add("active");
                    img[2].style.display = "block";
                    img[3].style.display = "block";
                    img[4].style.display = "block";
                }
                else if (value == "WORK IDEAS") {
                    e.target.classList.add("active");
                    img[0].style.display = "block";
                    img[5].style.display = "block";
                }
                else if (value == "MOCKUP") {
                    e.target.classList.add("active");
                    img[3].style.display = "block";
                    img[1].style.display = "block";
                }
                else if (value == "LOGO") {
                    e.target.classList.add("active");
                    img[0].style.display = "block";
                    img[2].style.display = "block";
                    img[5].style.display = "block";
                    img[3].style.display = "block";
                }
                else if (value == "ICONS") {
                    e.target.classList.add("active");
                    img[4].style.display = "block";
                    img[0].style.display = "block";
                }
                else {
                    img.forEach(i => { i.style.display = "block"; })
                    e.target.classList.add("active");
                }
            }

            // if (link.className != "active") {
            //     console.log("h");
            //     link.classList.add("active");
            // }
        })

        let element = document.querySelectorAll(".progress")
        window.addEventListener("scroll", function () {
            element.forEach(i=>{i.classList.add("animate")})


        })
