export class Result {
 id: number;
  category: string;
  date: Date;
  title: string;
  details: string;
  url: string;

  constructor(id: number,
    category: string,
    date: Date,
    title: string,
    url: string) {
    this.id = id;
    this.category = category;
    this.date = date;
    this.title = title;
    this.details = this.createLorem(600);
    this.url = url;
  }


  createLorem(length?: number): string {
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing ';
    lorem += 'elit, sed do eiusmod tempor incididunt ut labore et ';
    lorem += 'dolore magna aliqua. Ut enim ad minim veniam, quis ';
    lorem += 'nostrud exercitation ullamco laboris nisi ut aliquip';
    lorem += 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ';
    lorem += 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
    lorem += 'elit, sed do eiusmod tempor incididunt ut labore et ';
    lorem += 'dolore magna aliqua. Ut enim ad minim veniam, quis ';
    lorem += 'nostrud exercitation ullamco laboris nisi ut aliquip';
    lorem += 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ';
    lorem += 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';

    length = length || lorem.length;
    return  (lorem.slice(0, length) + '.');
  }
}
