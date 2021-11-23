const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>evet.key</small>
    </div>
    <div class="key">
    ${e.keyCode}
      <small>evet.keyCode</small>
    </div>
    <div class="key">
      ${e.code}
      <small>evet.code</small>
    </div>
  `;
});
