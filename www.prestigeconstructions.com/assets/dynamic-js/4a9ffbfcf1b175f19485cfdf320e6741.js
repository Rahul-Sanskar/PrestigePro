// (function() {
  //     const carousel = document.querySelector('.projects-carousel');
  //     if (!carousel) return;

  //     let currentStartIndex = 0; // which item is the "hero" (left-most active)

  //     // find viewport (overflow hidden parent)
  //     function findViewport(el) {
  //         let node = el.parentElement;
  //         while (node) {
  //             const cs = window.getComputedStyle(node);
  //             if (/(hidden|clip)/.test((cs.overflow || '') + (cs.overflowX || '') + (cs.overflowY || '')))
  //                 return node;
  //             node = node.parentElement;
  //         }
  //         return el.parentElement || el;
  //     }
  //     const viewportEl = findViewport(carousel);

  //     function getItems() {
  //         return Array.from(carousel.querySelectorAll('.project-item'));
  //     }

  //     // measure positions of each item along the track
  //     function measurePositions(items) {
  //         const cs = window.getComputedStyle(carousel);
  //         const gap = parseFloat(cs.gap || cs.columnGap || 0) || 0;
  //         const positions = [];
  //         let left = 0;

  //         items.forEach(it => {
  //             const w = Math.round(it.getBoundingClientRect().width);
  //             positions.push({
  //                 left: Math.round(left),
  //                 width: w
  //             });
  //             left += w + gap;
  //         });

  //         const contentWidth = Math.round(Math.max(0, left - gap));
  //         return {
  //             positions,
  //             contentWidth,
  //             gap
  //         };
  //     }

  //     // how many items fit into viewport starting from index 0
  //     function computeVisibleCountFromPositions(positions, gap, viewportWidth) {
  //         if (!positions.length) return 1;
  //         let count = 0;
  //         let total = 0;

  //         for (let i = 0; i < positions.length; i++) {
  //             total += positions[i].width + (i === 0 ? 0 : gap);
  //             if (total <= viewportWidth + 0.0001) {
  //                 count++;
  //             } else {
  //                 break;
  //             }
  //         }
  //         return Math.max(1, count);
  //     }

  //     function clamp(v, a, b) {
  //         return Math.max(a, Math.min(b, v));
  //     }

  //     function updateProjectsCarousel() {
  //         const items = getItems();
  //         const total = items.length;
  //         if (!total) return;

  //         const viewportWidth = Math.round(viewportEl.getBoundingClientRect().width);
  //         const {
  //             positions,
  //             contentWidth,
  //             gap
  //         } = measurePositions(items);

  //         const visibleCount = computeVisibleCountFromPositions(positions, gap, viewportWidth);
  //         const maxStartIndex = Math.max(0, total - visibleCount);

  //         // keep currentStartIndex in range (for when window resized)
  //         currentStartIndex = clamp(currentStartIndex, 0, maxStartIndex);

  //         const firstIndex = currentStartIndex;

  //         // translate so that firstIndex item is the left-most hero
  //         let rawTarget = 0;
  //         if (positions[firstIndex]) {
  //             rawTarget = positions[firstIndex].left;
  //         }

  //         // IMPORTANT: no clamping to maxTranslate — we want same hero position for all,
  //         // including the last one, even if that means empty space off-screen.
  //         const targetTranslate = Math.round(rawTarget);

  //         // visual state: hero & preview
  //         items.forEach((it, i) => it.classList.remove('active', 'next', 'hidden'));
  //         if (items[firstIndex]) items[firstIndex].classList.add('active');
  //         if (items[firstIndex + 1]) items[firstIndex + 1].classList.add('next');
  //         items.forEach((it, i) => {
  //             if (i !== firstIndex && i !== firstIndex + 1) it.classList.add('hidden');
  //         });

  //         carousel.style.transition = 'transform 0.9s cubic-bezier(0.6,0.05,0.28,0.91)';
  //         carousel.style.transform = `translate3d(-${targetTranslate}px,0,0)`;
  //     }

  //     // go forward: move by visibleCount; if past end, loop to 0 (infinite)
  //     function pageForward() {
  //         const items = getItems();
  //         const total = items.length;
  //         if (!total) return;

  //         const viewportWidth = Math.round(viewportEl.getBoundingClientRect().width);
  //         const {
  //             positions,
  //             contentWidth,
  //             gap
  //         } = measurePositions(items);
  //         const visibleCount = computeVisibleCountFromPositions(positions, gap, viewportWidth);
  //         const maxStartIndex = Math.max(0, total - visibleCount);

  //         let nextIndex = currentStartIndex + visibleCount;
  //         if (nextIndex > maxStartIndex) {
  //             // loop back to start (infinite scroll)
  //             nextIndex = 0;
  //         }
  //         currentStartIndex = nextIndex;
  //         updateProjectsCarousel();
  //     }

  //     // go back: move by visibleCount; if before 0, loop to last page
  //     function pageBack() {
  //         const items = getItems();
  //         const total = items.length;
  //         if (!total) return;

  //         const viewportWidth = Math.round(viewportEl.getBoundingClientRect().width);
  //         const {
  //             positions,
  //             contentWidth,
  //             gap
  //         } = measurePositions(items);
  //         const visibleCount = computeVisibleCountFromPositions(positions, gap, viewportWidth);
  //         const maxStartIndex = Math.max(0, total - visibleCount);

  //         let prevIndex = currentStartIndex - visibleCount;
  //         if (prevIndex < 0) {
  //             prevIndex = maxStartIndex; // loop to last page
  //         }
  //         currentStartIndex = prevIndex;
  //         updateProjectsCarousel();
  //     }

  //     const nextBtn = document.getElementById('nextProjectsBtn');
  //     const prevBtn = document.getElementById('prevProjectsBtn');
  //     nextBtn?.addEventListener('click', pageForward);
  //     prevBtn?.addEventListener('click', pageBack);

  //     document.addEventListener('keydown', (e) => {
  //         if (e.key === 'ArrowRight') pageForward();
  //         if (e.key === 'ArrowLeft') pageBack();
  //     });

  //     let resizeTO;
  //     window.addEventListener('resize', () => {
  //         clearTimeout(resizeTO);
  //         resizeTO = setTimeout(() => updateProjectsCarousel(), 120);
  //     });

  //     const mo = new MutationObserver(() => {
  //         clearTimeout(resizeTO);
  //         resizeTO = setTimeout(() => updateProjectsCarousel(), 80);
  //     });
  //     mo.observe(carousel, {
  //         childList: true,
  //         subtree: true,
  //         attributes: true
  //     });

  //     window.addEventListener('load', () => setTimeout(updateProjectsCarousel, 80));
  //     setTimeout(updateProjectsCarousel, 140);

  //     // for debugging in console
  //     window.__projectsCarousel = {
  //         update: updateProjectsCarousel,
  //         pageForward,
  //         pageBack
  //     };
  // })();