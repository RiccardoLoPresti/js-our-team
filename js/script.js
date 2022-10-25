//DATABASE MEMBRI TEAM
const members = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
    adjectives:[
      "Capelli molto belli",
      "Nome molto difficile, per gli amici Vino Bar",
      "Molto puntuale perchè ha il rolex"
    ],
  },
  {
    name: "Angela Caroll",
    role:"Chief Editor",
    pic:"angela-caroll-chief-editor.jpg",
    adjectives:[
      "Cappello da strega 10pt a Griffondoro",
      "Nome più facile rispetto al capo dei capi",
      "Sempre con il torcicollo per il troppo lavoro"
    ],
  },
  {
    name: "Walter Gordon",
    role:"Office Manager",
    pic:"walter-gordon-office-manager.jpg",
    adjectives:[
      "Testa tra le nuvole 50pt a Serpeverde",
      "Ha il rolex più grande del suo capo, forse è lui il vero ceo?"
    ],
  },
  {
    name: "Angela Lopez",
    role:"Social Media Manager",
    pic:"angela-lopez-social-media-manager.jpg",
    adjectives:[
      "Vero nome Darlene Alderson",
      "Modalità mr robot 24/7",
      "Mani in tasca per aspetto più tosto"
    ],
  },
  {
    name: "Scott Estrada",
    role:"Developer",
    pic:"scott-estrada-developer.jpg",
    adjectives:[
      "Risata a 59 denti",
      "Utilizzto per rilfettere la luce ai pannelli solari tramite i suoi denti bianchissimi",
      "Outfit impeccabile"
    ],
  },
  {
    name: "Barbara Ramos",
    role:"Graphic Designer",
    pic:"barbara-ramos-graphic-designer.jpg",
    adjectives:[
      "Risata a 127 denti",
      "Quella brava con i disegni",
    ],
  }
]


for(let member of members){
  let el = '';

  for(let adjective of member.adjectives){
    el += `<li class="list-group-item">${adjective}</li>`
  }
  console.log(el);

  //creo output con template litteral
  const output = `
  <div class="col py-4">
    <div class="card" style="width: 18rem;">
      <img src="img/${member.pic}" class="card-img-top" alt="${member.pic}">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
        <ul class="list-group list-group-flush">
          ${el}
        </ul>
      </div>
    </div>
  </div>
  `;
  const row = document.querySelector('.row');
  row.innerHTML += output;
  console.log(output);
}