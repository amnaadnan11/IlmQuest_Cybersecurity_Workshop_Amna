/*--------------------------------------------------------------
  Cookie misconfiguration challenge
--------------------------------------------------------------*/
(function () {
  // If cookie not set on first visit, set the insecure default.
  if (!document.cookie.includes("secret")) {
    document.cookie = "secret=true; path=/";
  }

  const flagHTML = `
    <h2>🎉 Congratulations! 🎉</h2>
    <p>You flipped the cookie correctly. Here is your flag:</p>
    <code>amna{flip_the_cookie}</code>
  `;

  function revealIfSolved() {
    if (document.cookie.match(/secret=false/)) {
      const flagDiv = document.getElementById("cookieFlag");
      // Only inject once
      if (!flagDiv.innerHTML.trim()) {
        flagDiv.innerHTML = flagHTML;
      }
      flagDiv.style.display = "block";
    }
  }

  // Overwrite every visit
  document.cookie = "secret=true; path=/";  

  // Run immediately, and again if students tweak cookies live.
  revealIfSolved();
  // Optional: watch for future cookie edits every second.
  setInterval(revealIfSolved, 1000);
})();
