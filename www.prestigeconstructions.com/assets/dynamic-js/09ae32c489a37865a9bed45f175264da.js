document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.getElementById("prestige-accordion");
    const items = Array.from(accordion.querySelectorAll(".accordion-item"));

    // Ensure single open: close all then open first
    function closeItem(i) {
      const body = i.querySelector(".accordion-body");
      i.classList.remove("is-active");
      i.querySelector(".accordion-header").setAttribute("aria-expanded", "false");

      // animate: set current height then collapse to 0
      const height = body.scrollHeight;
      body.style.maxHeight = height + "px"; // set to current height
      // next frame, set to 0 so transition runs
      requestAnimationFrame(() => {
        body.style.maxHeight = "0px";
        body.style.opacity = "0";
        body.style.paddingTop = "0px";
        body.style.paddingBottom = "0px";
      });
    }

    function openItem(i) {
      const body = i.querySelector(".accordion-body");
      i.classList.add("is-active");
      i.querySelector(".accordion-header").setAttribute("aria-expanded", "true");

      // ensure padding visible for animation
      body.style.paddingTop = "15px";
      body.style.paddingBottom = "15px";

      // set maxHeight to scrollHeight to animate open
      const height = body.scrollHeight;
      body.style.maxHeight = height + "px";
      body.style.opacity = "1";

      // after transition completes, remove fixed max-height so it can grow/shrink naturally
      const onTransitionEnd = (e) => {
        if (e.propertyName === "max-height") {
          // clear the explicit maxHeight so future content changes don't break layout
          body.style.maxHeight = "none";
          body.removeEventListener("transitionend", onTransitionEnd);
        }
      };
      body.addEventListener("transitionend", onTransitionEnd);
    }

    // initialize: close all then open first
    items.forEach(it => {
      it.classList.remove("is-active");
      const header = it.querySelector(".accordion-header");
      header.setAttribute("aria-expanded", "false");

      // ensure body style is in collapsed state
      const body = it.querySelector(".accordion-body");
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
      body.style.paddingTop = "0px";
      body.style.paddingBottom = "0px";
    });

    if (items.length) {
      // open the first item
      openItem(items[0]);
    }

    // interaction
    items.forEach(item => {
      const header = item.querySelector(".accordion-header");

      function handleOpen() {
        // close others
        items.forEach(i => {
          if (i !== item && i.classList.contains("is-active")) {
            closeItem(i);
          }
        });

        // if already active, keep it open (or close if you want toggle behaviour)
        if (!item.classList.contains("is-active")) {
          openItem(item);
        }
      }

      header.addEventListener("click", handleOpen);

      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      });
    });

    // Recalculate open panel heights on window resize
    window.addEventListener("resize", () => {
      items.forEach(i => {
        if (i.classList.contains("is-active")) {
          const body = i.querySelector(".accordion-body");
          // temporarily set maxHeight to scrollHeight; if it's 'none' restore a proper value
          body.style.maxHeight = body.scrollHeight + "px";
          // cleanup after a moment so layout remains flexible
          setTimeout(() => {
            body.style.maxHeight = "none";
          }, 500);
        }
      });
    });
  });


  // Toggle active button (unchanged)
  document.querySelectorAll(".infrastructure-tags .button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".infrastructure-tags .button")
        .forEach((b) => b.classList.remove("is-gold"));
      btn.classList.add("is-gold");
    });
  });