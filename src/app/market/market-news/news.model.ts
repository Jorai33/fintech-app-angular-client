export class News {
  constructor(
    public source: string,
    public author: string,
    public title: string,
    public description: string,
    public url: URL,
    public urlToImage: URL,
    public content: string,
    public publishedAt: Date
  ) {}
}
