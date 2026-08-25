// document.addEventListener("DOMContentLoaded", function() {
  //     /** -------------------------------
  //      *  PRESTIGE EXPERIENCE CAROUSEL
  //      * ------------------------------- */
  //     const experienceCarousel = document.querySelector(".experience-carousel");
  //     const experienceItems = document.querySelectorAll(".experience-item");
  //     const expPrevBtn = document.getElementById("prevBtn");
  //     const expNextBtn = document.getElementById("nextBtn");
  //     let currentExperienceIndex = 0;

  //     function updateExperienceCarousel() {
  //         experienceItems.forEach((item) => item.classList.remove("active", "next", "hidden"));

  //         const total = experienceItems.length;
  //         const activeIndex = currentExperienceIndex;
  //         const nextIndex = (currentExperienceIndex + 1) % total;

  //         experienceItems[activeIndex].classList.add("active");
  //         experienceItems[nextIndex].classList.add("next");

  //         experienceItems.forEach((item, index) => {
  //             if (index !== activeIndex && index !== nextIndex) {
  //                 item.classList.add("hidden");
  //             }
  //         });

  //         experienceCarousel.style.transform = `translateX(-${currentExperienceIndex * 53.5}%)`;
  //         experienceCarousel.style.transition =
  //             "transform 0.9s cubic-bezier(0.6, 0.05, 0.28, 0.91)";
  //     }

  //     expNextBtn?.addEventListener("click", () => {
  //         currentExperienceIndex =
  //             (currentExperienceIndex + 1) % experienceItems.length;
  //         updateExperienceCarousel();
  //     });

  //     expPrevBtn?.addEventListener("click", () => {
  //         currentExperienceIndex =
  //             (currentExperienceIndex - 1 + experienceItems.length) %
  //             experienceItems.length;
  //         updateExperienceCarousel();
  //     });

  //     updateExperienceCarousel();

  // });