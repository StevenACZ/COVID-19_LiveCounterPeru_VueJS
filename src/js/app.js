let vue = new Vue({
  el: '#app',
  data: {

  },
  methods: {
    getCovidCases() {
      fetch(`https://api.thevirustracker.com/free-api?countryTotal=PE`).
      then((responde) => {
        return responde.json();
      }).then((cases) => {
        this.insertCard(this.createCard(cases.countrydata[0]));
      })
    },
    createCard(cases) {
      const { 
        total_cases,
        total_recovered,
        total_deaths,
        total_active_cases
      } = cases;

      const card = document.createElement('article');
      card.classList.add('card')
      card.innerHTML = `
        <h1 class="card__title">Total de casos: ${total_cases}</h1>
        <p>Fallecidos: ${total_deaths}</p>
        <p>Recuperados: ${total_recovered}</p>
        <p>Casos activos: ${total_active_cases}</p>
        `;
        
      return card;
    },
    insertCard(card) {
      let cardContainer = document.querySelector('.cardContainer')
      cardContainer.appendChild(card)
    }
  }
})