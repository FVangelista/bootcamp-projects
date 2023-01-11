const btn = document.querySelector('.btn');

function quoteGen(quoteText, quoteAuthor) {
  const quoteEl = document.createElement('div');
  const textEl = document.createElement('p');
  const authorName = document.createElement('footer');
  const quoteListEl = document.querySelector('.quote-list');

  quoteEl.className = 'quote';
  textEl.textContent = quoteText;
  authorName.textContent = quoteAuthor;

  btn.addEventListener('click', () => {
    if (quoteEl.classList.contains('card-back')) {
      quoteEl.classList.remove('card-back');
    } else {
      quoteEl.classList.add('card-back');
    }
  });

  quoteEl.appendChild(textEl);
  quoteEl.appendChild(authorName);
  quoteListEl.appendChild(quoteEl);
}

export default quoteGen;
