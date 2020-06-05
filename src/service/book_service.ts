import { Book } from '../type/book'

export default class BookService {
  private static mockBookList: Array<Book> = [
    {
      id: 1,
      title: 'The Maze Runner',
      detail: 'The Maze Runner (Maze Runner, Book One)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3995/9780399567056.jpg',
      author: 'James Dashner',
      price: 100,
      quantity: 0,
    },
    {
      id: 2,
      title: 'The Scorch Trials',
      detail: 'The Scorch Trials (Maze Runner, Book Two)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3995/9780399567063.jpg',
      author: 'James Dashner',
      price: 100,
      quantity: 0,
    },
    {
      id: 3,
      title: 'The Death Cure',
      detail: 'The Death Cure (Maze Runner, Book Three)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3995/9780399567483.jpg',
      author: 'James Dashner',
      price: 100,
      quantity: 0,
    },
    {
      id: 4,
      title: 'The Kill Order',
      detail: 'The Kill Order (Maze Runner, Book Four)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4490/9780449014363.jpg',
      author: 'James Dashner',
      price: 100,
      quantity: 0,
    },
    {
      id: 5,
      title: 'The Fever Code',
      detail: 'The Fever Code (Maze Runner, Book Five)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5535/9780553513127.jpg',
      author: 'James Dashner',
      price: 100,
      quantity: 0,
    },
    {
      id: 6,
      title: 'Divergent',
      detail: 'Divergent',
      cover:
        ' https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0620/9780062024022.jpg',
      author: 'Veronica Roth',
      price: 100,
      quantity: 0,
    },
    {
      id: 7,
      title: 'Allegiant',
      detail: 'Allegiant',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0620/9780062024060.jpg',
      author: 'Veronica Roth',
      price: 100,
      quantity: 0,
    },
    {
      id: 8,
      title: ' Fantastic Beasts and Where to Find Them',
      detail: ' Fantastic Beasts and Where to Find Them',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4087/9781408708989.jpg',
      author: 'J. K. Rowling',
      price: 100,
      quantity: 0,
    },
    {
      id: 9,
      title: 'Harry Potter and the Cursed Child ',
      detail: 'Harry Potter and the Cursed Child ',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7515/9780751565362.jpg',
      author: 'J. K. Rowling',
      price: 100,
      quantity: 0,
    },
  ]

  public static getAll(): Promise<Array<Book>> {
    return new Promise((resolve) => resolve(this.mockBookList))
  }
}
