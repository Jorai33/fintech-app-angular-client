import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { News } from "./news.model";

@Injectable()
export class MarketNewsService {
  oneNewsSelected = new EventEmitter<News>();

  // private news: News[] = [
  //   new News(
  //     "Financial Times",
  //     null,
  //     "Stocks to watch: Aston Martin, RSA, Bakkavor, Zalando",
  //     "There are few marginal buyers of Rio Tinto, warns Merrill Lynch",
  //     new URL(
  //       "https://www.ft.com/content/d0f83684-3b41-11e9-b856-5404d3811663"
  //     ),
  //     new URL(
  //       "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F7a80e81c-3b52-11e9-9988-28303f70fcff?source=next-opengraph&fit=scale-down&width=900"
  //     ),
  //     "Thursday 11:00 GMT\r\nWhat’s happening\r\n● Aston Martin fell to a record low after missing profit forecasts with its maiden full-year results as a listed company. The car maker’s guidance for 2019 also disappointed, particularly as the shares had rallied 12 per … ",
  //     new Date("2019-02-28T12:17:57Z")
  //   ),
  //   new News(
  //     "Trilu Li Lu",
  //     null,
  //     "Another Stocks to watch: Aston Martin, RSA, Bakkavor, Zalando",
  //     "There are few marginal buyers of Rio Tinto, warns Merrill Lynch",
  //     new URL(
  //       "https://www.ft.com/content/d0f83684-3b41-11e9-b856-5404d3811663"
  //     ),
  //     new URL(
  //       "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F7a80e81c-3b52-11e9-9988-28303f70fcff?source=next-opengraph&fit=scale-down&width=900"
  //     ),
  //     "Thursday 11:00 GMT\r\nWhat’s happening\r\n● Aston Martin fell to a record low after missing profit forecasts with its maiden full-year results as a listed company. The car maker’s guidance for 2019 also disappointed, particularly as the shares had rallied 12 per … ",
  //     new Date("2019-02-28T12:17:57Z")
  //   )
  // ];

  private news: News[];

  constructor(private httpClient: HttpClient) {}

  // getNews() {
  //   return this.news.slice();
  // }

  getTopHeadlines() {
    return this.httpClient.get(
      "https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=4e79f209bce14d29835701ba06bcc41e"
    );
  }

  getQueryTopHeadlines() {
    return this.httpClient.get(
      "https://newsapi.org/v2/top-headlines?q=trump&apiKey=4e79f209bce14d29835701ba06bcc41e"
    );
  }

  // .map(recipes => {
  //   console.log(recipes);
  //   for (let recipe of recipes) {
  //     if (!recipe["ingredients"]) {
  //       recipe["ingredients"] = [];
  //     }
  //   }
  //   return recipes;
  // })
  // .subscribe((news: News[]) => {
  //   console.log("The latest news are: ", news);
  //   // this.recipeService.setRecipes(recipes);
  // });
}
