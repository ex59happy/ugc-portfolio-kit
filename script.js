/* ============================================================
   UGC PORTFOLIO  -  behavior
   You should never need to edit this file.

   What it does:
   1. Plays each video (muted) only while it is on screen, and
      pauses it when it scrolls away. Keeps the page fast.
   2. Lets a visitor tap the speaker button to hear one video.
      Turning sound on for one video mutes all the others.
   3. Sets the year in the footer.
   ============================================================ */

(function () {
  'use strict';

  var ICON_MUTED = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 7.5 8H4v8h3.5L12 20V4Zm4.2 3.8 1.4-1.4A8 8 0 0 1 17.6 18l-1.4-1.4a6 6 0 0 0 0-8.8ZM14.5 10l1.4-1.4a4 4 0 0 1 0 6.8L14.5 14a2 2 0 0 0 0-4Z" opacity=".35"/><path d="M3.2 2.5 21.5 20.8l-1.4 1.4L1.8 3.9 3.2 2.5Z"/></svg>';
  var ICON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 7.5 8H4v8h3.5L12 20V4Zm4.2 3.8 1.4-1.4A8 8 0 0 1 17.6 18l-1.4-1.4a6 6 0 0 0 0-8.8ZM14.5 10l1.4-1.4a4 4 0 0 1 0 6.8L14.5 14a2 2 0 0 0 0-4Z"/></svg>';

  var videos = Array.prototype.slice.call(document.querySelectorAll('.phone video'));

  /* --- 1. play only what is on screen --- */
  if (videos.length) {
    videos.forEach(function (v) {
      v.muted = true;
      v.setAttribute('playsinline', '');
      v.loop = true;
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var p = e.target.play();
            if (p && p.catch) { p.catch(function () {}); }
          } else {
            e.target.pause();
            if (!e.target.muted) { setMuted(e.target, true); }
          }
        });
      }, { threshold: 0.25 });

      videos.forEach(function (v) { io.observe(v); });
    } else {
      videos.forEach(function (v) {
        var p = v.play();
        if (p && p.catch) { p.catch(function () {}); }
      });
    }
  }

  /* --- 2. sound toggle --- */
  function setMuted(video, muted) {
    video.muted = muted;
    var btn = video.parentNode.querySelector('.sound');
    if (btn) {
      btn.innerHTML = muted ? ICON_MUTED : ICON_ON;
      btn.setAttribute('aria-label', muted ? 'Unmute video' : 'Mute video');
    }
  }

  document.querySelectorAll('.phone .sound').forEach(function (btn) {
    var video = btn.parentNode.querySelector('video');
    if (!video) { btn.remove(); return; }

    setMuted(video, true);

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var turningOn = video.muted;
      videos.forEach(function (v) { setMuted(v, true); });
      if (turningOn) {
        setMuted(video, false);
        var p = video.play();
        if (p && p.catch) { p.catch(function () {}); }
      }
    });
  });

  /* --- 3. footer year --- */
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
