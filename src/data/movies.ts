// Datos de ejemplo. Más adelante los puedes reemplazar por una API (por ejemplo TMDB).
export type Movie = {
  id: number;
  title: string;
  year: number;
  duration: number; // en minutos
  rating: number; // puntaje de 0 a 10
  genre: string;
  platform: string;
  synopsis: string;
  poster: string; // URL de la portada ('' = sin portada)
};

export const genres = ['Todos', 'Acción', 'Animación', 'Ciencia ficción', 'Comedia', 'Drama', 'Terror'];
export const platforms = ['Todas', 'Netflix', 'Max', 'Disney+', 'Prime Video'];

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    duration: 148,
    rating: 8.8,
    genre: 'Ciencia ficción',
    platform: 'Netflix',
    synopsis: 'Un ladrón especialista en entrar en los sueños recibe un trabajo imposible: plantar una idea en la mente de alguien.',
    poster: '',
  },
  {
    id: 2,
    title: 'El Rey León',
    year: 1994,
    duration: 88,
    rating: 8.5,
    genre: 'Animación',
    platform: 'Disney+',
    synopsis: 'Un joven león debe aprender a asumir su lugar en el reino mientras enfrenta su pasado.',
    poster: '',
  },
  {
    id: 3,
    title: 'Spider-Man: Un nuevo universo',
    year: 2018,
    duration: 117,
    rating: 8.4,
    genre: 'Animación',
    platform: 'Netflix',
    synopsis: 'Miles Morales descubre que no es el único Spider-Man y que debe salvar su ciudad con ayuda de otros héroes.',
    poster: '',
  },
  {
    id: 4,
    title: 'Get Out',
    year: 2017,
    duration: 104,
    rating: 7.7,
    genre: 'Terror',
    platform: 'Max',
    synopsis: 'Un joven viaja a conocer a la familia de su novia y empieza a notar que algo extraño ocurre.',
    poster: '',
  },
  {
    id: 5,
    title: 'Parásitos',
    year: 2019,
    duration: 132,
    rating: 8.5,
    genre: 'Drama',
    platform: 'Max',
    synopsis: 'Una familia humilde se las ingenia para trabajar en la casa de una familia adinerada.',
    poster: '',
  },
  {
    id: 6,
    title: 'El Gran Hotel Budapest',
    year: 2014,
    duration: 99,
    rating: 8.1,
    genre: 'Comedia',
    platform: 'Disney+',
    synopsis: 'Las aventuras de un conserje legendario y su joven ayudante en un famoso hotel europeo.',
    poster: '',
  },
  {
    id: 7,
    title: 'Mad Max: Furia en el camino',
    year: 2015,
    duration: 120,
    rating: 8.1,
    genre: 'Acción',
    platform: 'Max',
    synopsis: 'En un desierto sin ley, una mujer y un solitario conductor huyen de un tirano en una persecución sin descanso.',
    poster: '',
  },
 
];