/*--------------------------------------------------------------
  Cookie misconfiguration challenge – obfuscated version
  --------------------------------------------------------------*/
(function () {
  // Set insecure default cookie on first visit.
  if (!document.cookie.includes("secret")) {
    document.cookie = "secret=true; path=/";
  }

  /* ROT13 decode helper */
  const rot13 = (str) =>
    str.replace(/[A-Za-z]/g, (c) => {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
    });

  /* ---- Encoded flag & markup ---- */
  const encodedFlag = "znan{sYvc_gur_pbbxvr}"; // ROT13 → amna{flip_the_cookie}

  const flagHTML = `
    <h2>🎉 Congratulations! 🎉</h2>
    <p>You flipped the cookie correctly. Here is your flag:</p>
    <code>${rot13(encodedFlag)}</code>
  `;

  function revealIfSolved() {
    if (document.cookie.match(/secret=false/)) {
      const div = document.getElementById("cookieFlag");
      if (!div.innerHTML.trim()) div.innerHTML = flagHTML;
      div.style.display = "block";
    }
  }

  /* Run immediately & poll for live edits */
  revealIfSolved();
  setInterval(revealIfSolved, 1000);
})();
