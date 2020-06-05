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
    },
    {
      id: 2,
      title: 'The Scorch Trials',
      detail: 'The Scorch Trials (Maze Runner, Book Two)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3995/9780399567063.jpg',
      author: 'James Dashner',
      price: 100,
    },
    {
      id: 3,
      title: 'The Death Cure',
      detail: 'The Death Cure (Maze Runner, Book Three)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3995/9780399567483.jpg',
      author: 'James Dashner',
      price: 100,
    },
    {
      id: 4,
      title: 'The Kill Order',
      detail: 'The Kill Order (Maze Runner, Book Four)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4490/9780449014363.jpg',
      author: 'James Dashner',
      price: 100,
    },
    {
      id: 5,
      title: 'The Fever Code',
      detail: 'The Fever Code (Maze Runner, Book Five)',
      cover:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5535/9780553513127.jpg',
      author: 'James Dashner',
      price: 100,
    },
  ]

  public static getAll(): Promise<Array<Book>> {
    return new Promise((resolve) => resolve(this.mockBookList))
  }
}
