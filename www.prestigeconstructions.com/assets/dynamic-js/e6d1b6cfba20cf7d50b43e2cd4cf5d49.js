// (function() {
  //     // CONFIG
  //     const breakpoints = {
  //         mobile: 480,
  //         tablet: 768,
  //         desktop: 1024
  //     };

  //     // target grids by ID
  //     const grids = [{
  //             id: 'leadership-grid',
  //             name: 'Leadership'
  //         },
  //         {
  //             id: 'office-grid',
  //             name: 'Office 2.0 Team'
  //         }
  //     ];

  //     // helper selectors
  //     const qs = (sel, ctx = document) => ctx.querySelector(sel);
  //     const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // build a carousel for a given grid element (columns container)
  // function buildCarousel(gridEl) {
  //     if (!gridEl) return null;

  //     // avoid double-init
  //     if (gridEl.dataset.carouselInit === 'true') return gridEl._carousel;

  //     // get existing column nodes (these are the .column elements)
  //     const colNodes = qsa('.column', gridEl);
  //     if (colNodes.length === 0) return null;

  //     // create wrapper elements
  //     const wrapper = document.createElement('div');
  //     wrapper.className = 'people-carousel';
  //     // set data-slides attribute later
  //     const track = document.createElement('div');
  //     track.className = 'carousel-track';

  //     // move columns into items inside track
  //     colNodes.forEach(col => {
  //         const item = document.createElement('div');
  //         item.className = 'carousel-item';
  //         // keep original column classes for styling fallback
  //         item.classList.add(...Array.from(col.classList));
  //         // move the column's children into the new item
  //         while (col.firstChild) item.appendChild(col.firstChild);
  //         track.appendChild(item);
  //         // remove original column node
  //         col.remove();
  //     });

  //     wrapper.appendChild(track);

  //     // add prev/next arrows
  //     const prev = document.createElement('button');
  //     prev.className = 'carousel-arrow prev';
  //     prev.setAttribute('aria-label', 'Previous');
  //     prev.innerHTML =
  //         '<svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  //     const next = document.createElement('button');
  //     next.className = 'carousel-arrow next';
  //     next.setAttribute('aria-label', 'Next');
  //     next.innerHTML =
  //         '<svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  //     wrapper.appendChild(prev);
  //     wrapper.appendChild(next);

  //     // dots container
  //     const dotsWrap = document.createElement('div');
  //     wrapper.appendChild(dotsWrap);

  //     // insert the wrapper into DOM where the original grid was
  //     gridEl.appendChild(wrapper);

  //     // carousel state
  //     const carousel = {
  //         el: wrapper,
  //         track,
  //         prev,
  //         next,
  //         items: Array.from(track.children),
  //         currentPage: 0,
  //         slidesToShow: calculateSlides(),
  //         totalItems: Array.from(track.children).length,
  //         resizeObserver: null
  //     };

  //     // set data attribute for CSS default widths
  //     carousel.el.dataset.slides = carousel.slidesToShow;

  //     // compute pages
  //     function pagesCount() {
  //         return Math.max(1, Math.ceil(carousel.totalItems / carousel.slidesToShow));
  //     }

  //     function slideToPage(pageIndex, animate = true) {
  //         const pages = pagesCount();
  //         if (pageIndex < 0) pageIndex = pages - 1;
  //         if (pageIndex >= pages) pageIndex = 0;
  //         carousel.currentPage = pageIndex;

  //         const containerWidth = carousel.el.clientWidth;
  //         const gap = parseFloat(getComputedStyle(carousel.track).gap) || 0;
  //         // calculate item width based on slidesToShow and gaps
  //         const slides = carousel.slidesToShow;
  //         const visibleGapsWidth = gap * (slides - 1);
  //         const itemWidth = (containerWidth - visibleGapsWidth) / slides;

  //         // translateX by pageIndex * (itemWidth * slides + gap * slides)
  //         const offset = pageIndex * (itemWidth * slides + gap * slides);
  //         // but ensure not to over-scroll beyond max
  //         const maxOffset = Math.max(0, (carousel.totalItems * itemWidth + (carousel.totalItems - 1) * gap) -
  //             containerWidth);
  //         const finalOffset = Math.min(offset, maxOffset);

  //         carousel.track.style.transition = animate ? '' : 'none';
  //         carousel.track.style.transform = `translateX(-${finalOffset}px)`;

  //         // update dots active
  //         Array.from(dotsWrap.children).forEach((d, idx) => {
  //             d.classList.toggle('is-active', idx === carousel.currentPage);
  //         });

  //         // toggle arrow disabled states (optional)
  //         // prev/next stay always active (loop behavior). If you prefer disable at ends, implement checks here.
  //     }

  //     // slide next/prev (loop behavior)
  //     prev.addEventListener('click', () => {
  //         slideToPage((carousel.currentPage - 1 + pagesCount()) % pagesCount());
  //     });
  //     next.addEventListener('click', () => {
  //         slideToPage((carousel.currentPage + 1) % pagesCount());
  //     });

  //     // swipe support
  //     attachSwipe(carousel.el, () => slideToPage((carousel.currentPage + 1) % pagesCount()), () => slideToPage((
  //         carousel.currentPage - 1 + pagesCount()) % pagesCount()));

  //     // compute slidesToShow based on viewport
  //     function calculateSlides() {
  //         const w = window.innerWidth;
  //         if (w <= breakpoints.mobile) return 1;
  //         if (w <= breakpoints.tablet) return 2;
  //         if (w <= breakpoints.desktop)
  //             return 3; // optional: choose 3 for medium desktops if you prefer; we will default to 4 below
  //         return 4;
  //     }

  //     // responsive handler: recompute slidesToShow and realign
  //     function onResize() {
  //         const newSlides = calculateSlides();
  //         if (newSlides !== carousel.slidesToShow) {
  //             carousel.slidesToShow = newSlides;
  //             carousel.el.dataset.slides = newSlides;
  //         }
  //         slideToPage(carousel.currentPage, false);
  //     }
  //     slideToPage(0, false);

  //     // observe resize
  //     window.addEventListener('resize', onResize);
  //     // prefer a ResizeObserver on the element for more precise layout changes
  //     if (window.ResizeObserver) {
  //         carousel.resizeObserver = new ResizeObserver(() => onResize());
  //         carousel.resizeObserver.observe(carousel.el);
  //     }

  //     // store state
  //     gridEl.dataset.carouselInit = 'true';
  //     gridEl._carousel = carousel;
  //     return carousel;
  // }

  // Utility: attach swipe to element (simple)
  //     function attachSwipe(el, onLeft, onRight) {
  //         let startX = null,
  //             startY = null;
  //         const threshold = 30;
  //         el.addEventListener('touchstart', function(e) {
  //             const t = e.touches[0];
  //             startX = t.clientX;
  //             startY = t.clientY;
  //         }, {
  //             passive: true
  //         });
  //         el.addEventListener('touchend', function(e) {
  //             if (startX === null) return;
  //             const t = (e.changedTouches && e.changedTouches[0]) || e;
  //             const dx = t.clientX - startX;
  //             const dy = t.clientY - startY;
  //             if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
  //                 if (dx < 0) onLeft && onLeft();
  //                 else onRight && onRight();
  //             }
  //             startX = null;
  //             startY = null;
  //         }, {
  //             passive: true
  //         });
  //     }

  //     // Initialize both carousels if their grids exist
  //     const carouselInstances = {};
  //     grids.forEach(g => {
  //         const gridEl = document.getElementById(g.id);
  //         if (gridEl) {
  //             const c = buildCarousel(gridEl);
  //             if (c) carouselInstances[g.id] = c;
  //         }
  //     });

  //     // Re-init on tab switch: watch for class changes (is-hidden toggles when you switch)
  //     const observerTargets = Object.keys(carouselInstances).map(id => document.getElementById(id)).filter(Boolean);
  //     if (observerTargets.length) {
  //         const mo = new MutationObserver((muts) => {
  //             // small debounce
  //             clearTimeout(window._carouselReinitTimer);
  //             window._carouselReinitTimer = setTimeout(() => {
  //                 Object.keys(carouselInstances).forEach(id => {
  //                     const gridEl = document.getElementById(id);
  //                     if (!gridEl) return;
  //                     // if grid is now visible and not initialized, initialize; if was initialized, force recalculation
  //                     if (gridEl.dataset.carouselInit !== 'true') {
  //                         const c = buildCarousel(gridEl);
  //                         if (c) carouselInstances[id] = c;
  //                     } else {
  //                         // resize/refresh
  //                         const c = gridEl._carousel;
  //                         if (c) {
  //                             c.slidesToShow = (function() {
  //                                 const w = window.innerWidth;
  //                                 if (w <= breakpoints.mobile) return 1;
  //                                 if (w <= breakpoints.tablet) return 2;
  //                                 if (w <= breakpoints.desktop) return 3;
  //                                 return 4;
  //                             })();
  //                             c.el.dataset.slides = c.slidesToShow;
  //                             // rebuild dots and snap to first page
  //                             // update dots requires access to private function — easiest to simulate a resize
  //                             window.dispatchEvent(new Event('resize'));
  //                         }
  //                     }
  //                 });
  //             }, 120);
  //         });

  //         observerTargets.forEach(t => mo.observe(t, {
  //             attributes: true,
  //             attributeFilter: ['class']
  //         }));
  //     }

  //     // final: expose a simple method to programmatically refresh (optional)
  //     window._PrestigeCarousels = {
  //         refresh: function() {
  //             window.dispatchEvent(new Event('resize'));
  //         }
  //     };

  // })();