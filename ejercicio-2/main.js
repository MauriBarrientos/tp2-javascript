let cardContainer = document.querySelector('.container');

let cards = [
    {
        title: 'Sanseveiria',
        description: 'También conocida como "Espada de San Jorge" es una planta de interiores y pocos cuidados.',
        image: './imágenes/sanseveiria.webp'
    },
    {
        title: 'Cinta',
        description: 'También conocida como "Ramo de Novia" es de interiores, de riego constante y luz solar indirecta.',
        image: './imágenes/cinta.webp'
    },
    {
        title: 'Jazmín Mango',
        description: 'Variante del jazmín, crece en zonas tropicales o subtropicales, requiere mucha luz solar.',
        image: './imágenes/jazminmango.webp'
    },
    {
        title: 'Alegría del hogar',
        description: 'Planta floral de diversos colores, requiere regado constante y luz solar indirecta. Florece casi todo el año',
        image: './imágenes/alegriadelhogar.webp'
    },
    {
        title: 'Kalanchoe',
        description: 'Es una planta de tipo fibrosa, no requiere muchos cuidados, solo riegos una vez por semana y puede recibir luz solar directa. Viene en diferentes colores.',
        image: './imágenes/kalanchoe.jpg'
    },
    {
        title: 'Kalas',
        description: 'Flor con brotes en bollo, necesita mucha humedad mas no encharcado. Es de sombra y florece en primavera y otoño.',
        image: './imágenes/kalas.jpg'
    }
]

let createCards = () => {
    cards.map (card => {

        let cardElements = document.createElement('article');
        cardElements.classList.add('card', 'm-3');
        cardElements.innerHTML +=`
        <img class="card-img-top" src="${card.image}" alt="${card.title}">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text text-truncate">${card.description}</p>
          <a href="#" class="btn btn-primary">Saber más</a>
        </div>`;
        cardContainer.appendChild(cardElements);
    });
}

createCards();