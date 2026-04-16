// Copy BibTeX to clipboard
function copyBibtex(btn) {
  const bibtex = document.getElementById('bibtex').textContent;
  navigator.clipboard.writeText(bibtex).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1600);
  }).catch(() => {
    // fallback
    const range = document.createRange();
    range.selectNode(document.getElementById('bibtex'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 1600);
  });
}
