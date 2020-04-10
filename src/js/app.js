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
        total_active_cases,
        total_serious_cases,
        total_new_deaths_today,
        total_new_cases_today,
      } = cases;

      const card = document.createElement('article');
      card.classList.add('card')
      card.innerHTML = `
        <div class="subCard">
          <h2>${total_cases}</h2>
          <h1 class="card__title">Total de casos</h1>
        </div>

        <section class="subCard__Container">
          <div class="subCard">
            <p>${total_deaths}</p>
            <p class="subCard__subTitle">Fallecidos</p>
          </div>
          <div class="subCard">
            <p>${total_recovered}</p>
            <p class="subCard__subTitle">Recuperados</p>
          </div>
          <div class="subCard">
            <p>${total_active_cases}</p>
            <p class="subCard__subTitle">Casos activos</p>
          </div>
          <div class="subCard">
            <p>${total_new_cases_today}</p>
            <p class="subCard__subTitle">Nuevos casos</p>
          </div>
          <div class="subCard">
            <p>${total_new_deaths_today}</p>
            <p class="subCard__subTitle">Nuevos fallecidos</p>
          </div>
          <div class="subCard">
            <p>${total_serious_cases}</p>
            <p class="subCard__subTitle">Casos delicados</p>
          </div>
        </section>
        `;
        
      return card;
    },
    insertCard(card) {
      let cardContainer = document.querySelector('.cardContainer')
      cardContainer.appendChild(card)
    }
  }
})