function lookupWord() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(event.target);
      const word = data.get("word");

      const options = {
          method: 'GET',
      };

      document.getElementById('results').innerHTML = `<p>Searching for <em>${word}'</em>...</p>`;
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, options)

        .then(response => response.json())
        .then(data => {
          const structuredData = {
            word: data[0].word,
            phonetic: data[0].phonetic,
            audio: data[0].phonetics[0].audio,
            meanings: []
          };

          data[0].meanings.forEach(meaning => {
            structuredData.meanings.push({
              partOfSpeech: meaning.partOfSpeech,
              definitions:  meaning.definitions,
              examples: meaning.definitions,

            });

          });
          const template = document.getElementById('results-template').innerText;
          const compiledFunction = Handlebars.compile(template);
          document.getElementById('results').innerHTML = compiledFunction(structuredData);
        });
      });;
}
function lookupSynonym() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(event.target);
      const word = data.get("word");

      const options = {
          method: 'GET',
      };

      document.getElementById('results').innerHTML = `<p>Searching for <em>${word}'</em>...</p>`;
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, options)

      .then(response => response.json())
      .then(data => {
        console.log(data[0].meanings[0].synonyms)

        data = {
          word: data[0].word,
          phonetic: data[0].phonetic,
          partOfSpeech: data[0].meanings[0].partOfSpeech,
          synonym: data[0].meanings[0].synonyms,

      };

        const template = document.getElementById('results-template').innerText;
        const compiledFunction = Handlebars.compile(template);
        document.getElementById('results').innerHTML = compiledFunction(data);
      });
    });;
}

function lookupAntonym() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(event.target);
      const word = data.get("word");

      const options = {
          method: 'GET',
      };

      document.getElementById('results').innerHTML = `<p>Searching for <em>${word}'</em>...</p>`;
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, options)

        .then(response => response.json())
        .then(data => {
          console.log(data[0].meanings[0].antonyms)

          data = {
            word: data[0].word,
            phonetic: data[0].phonetic,
            partOfSpeech: data[0].meanings[0].partOfSpeech,
            antonym: data[0].meanings[1].antonyms,

        };

          const template = document.getElementById('results-template').innerText;
          const compiledFunction = Handlebars.compile(template);
          document.getElementById('results').innerHTML = compiledFunction(data);
        });
      });;
}



// tag::router[]
window.addEventListener('load', () => {
const app = $('#app');

const defaultTemplate = Handlebars.compile($('#default-template').html());
const dictionaryTemplate = Handlebars.compile($('#dictionary-template').html());
const synonymTemplate = Handlebars.compile($('#synonym-template').html());
const antonymTemplate = Handlebars.compile($('#antonym-template').html());
const thesaurusTemplate = Handlebars.compile($('#thesaurus-template').html());

const router = new Router({
  mode:'hash',
  root:'app-5b.html',
  page404: (path) => {
    const html = defaultTemplate();
    app.html(html);
  }
});

router.add('/dictionary', async () => {
  html = dictionaryTemplate();
  app.html(html);
  lookupWord();
});
router.add('/synonym', async () => {
  html = synonymTemplate();
  app.html(html);
  lookupSynonym();
});
router.add('/antonym', async () => {
  html = antonymTemplate();
  app.html(html);
  lookupAntonym();
});


router.add('/thesaurus', async () => {
  html = thesaurusTemplate();
  app.html(html);
});

router.addUriListener();

$('a').on('click', (event) => {
  event.preventDefault();
  const target = $(event.target);
  const href = target.attr('href');
  const path = href.substring(href.lastIndexOf('/'));
  router.navigateTo(path);
});

router.navigateTo('/');
});
// end::router[]