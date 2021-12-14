export interface Book {
  title: string;
  poster: string;
  author: string;
  price: number;
  averageRating: number;
  ratingPeople: number;
  id: string;
}

export interface BookImg {
  img: string;
  id: string;
}

export const booksList: Book[] = [
  {
    id: '1',
    poster:
      'https://kbimages1-a.akamaihd.net/7490f8c3-a8cc-45ba-8d9e-810474b768f7/1200/1200/False/harry-potter-and-the-goblet-of-fire-5.jpg',
    author: 'J.K. Rowling',
    price: 19.99,
    title: 'Harry Potter and the Goblet of Fire',
    averageRating: 4.8,
    ratingPeople: 2390,
  },
  {
    id: '2',
    poster:
      'https://alternativemovieposters.com/wp-content/uploads/2016/04/ollymoss_junglebook.jpg',
    author: 'Rudyard Kipling',
    price: 15.99,
    title: 'The Jungle Book',
    averageRating: 4.3,
    ratingPeople: 1390,
  },
  {
    id: '3',
    poster:
      'https://img.goldposter.com/2015/04/Star-Wars-Episode-VI-Return-of-the-Jedi_poster_goldposter_com_11.jpg',
    author: 'James Kahn',
    price: 20.99,
    title: 'Star Wars Return of the Jedi',
    averageRating: 4.4,
    ratingPeople: 4302,
  },
  {
    id: '4',
    poster: 'https://images.booksense.com/images/935/974/9780812974935.jpg',
    author: 'Greg Bear',
    price: 11.99,
    title: 'King Kong',
    averageRating: 4.1,
    ratingPeople: 2480,
  },
  {
    id: '5',
    poster:
      'https://kbimages1-a.akamaihd.net/b8dab43d-a4bd-401a-9b23-e42056bc206a/353/569/90/False/harry-potter-y-el-prisionero-de-azkaban-1.jpg',
    author: 'Greg Bear',
    price: 13.99,
    title: 'Hary Potter Prisionero de Azcaban',
    averageRating: 4.4,
    ratingPeople: 2760,
  },
];

export const imgsPreview: BookImg[] = [
  {
    img: 'https://alternativemovieposters.com/wp-content/uploads/2016/04/ollymoss_junglebook.jpg',
    id: '2',
  },
  {
    img: 'https://images.booksense.com/images/935/974/9780812974935.jpg',
    id: '4',
  },
  {
    img: 'https://kbimages1-a.akamaihd.net/b8dab43d-a4bd-401a-9b23-e42056bc206a/353/569/90/False/harry-potter-y-el-prisionero-de-azkaban-1.jpg',
    id: '5',
  },
  {
    id: '1',
    img: 'https://kbimages1-a.akamaihd.net/7490f8c3-a8cc-45ba-8d9e-810474b768f7/1200/1200/False/harry-potter-and-the-goblet-of-fire-5.jpg',
  },
];

export const imgsAlsoLike = [
  'https://img.goldposter.com/2015/04/Star-Wars-Episode-VI-Return-of-the-Jedi_poster_goldposter_com_11.jpg',
  'https://www.themoviedb.org/t/p/original/csOv5H7R2zdnKaYuTrGVWohmo8d.jpg',
  'https://kbimages1-a.akamaihd.net/b8dab43d-a4bd-401a-9b23-e42056bc206a/353/569/90/False/harry-potter-y-el-prisionero-de-azkaban-1.jpg',
  'https://m.media-amazon.com/images/I/71Cx-rnPQAL._SL1368_.jpg',
  'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
  ...imgsPreview.map(item => item.img),
];
