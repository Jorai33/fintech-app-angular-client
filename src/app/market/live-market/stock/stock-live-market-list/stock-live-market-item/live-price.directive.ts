import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { LiveMarketService } from "../../../live-market.service";
import { Subscription } from "rxjs";

@Directive({
  selector: "[livePrice]"
})
export class LivePriceDirective {
  @Input("livePrice") stockSymbol: string;

  private subscription: Subscription;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private liveMarketService: LiveMarketService
  ) {}

  ngOnInit() {
    this.subscription = this.liveMarketService.livePriceAAPLChanged.subscribe(
      (stockClosingPrice: number) => {
        if (this.stockSymbol == "AAPL") {
          this.renderer.setProperty(
            this.elRef.nativeElement,
            "innerHTML",
            (stockClosingPrice || 1).toLocaleString()
          );
        }
      }
    );
    this.subscription = this.liveMarketService.livePriceMSFTChanged.subscribe(
      (stockClosingPrice: number) => {
        if (this.stockSymbol == "MSFT") {
          this.renderer.setProperty(
            this.elRef.nativeElement,
            "innerHTML",
            (stockClosingPrice || 1).toLocaleString()
          );
        }
      }
    );
    this.subscription = this.liveMarketService.livePriceFBChanged.subscribe(
      (stockClosingPrice: number) => {
        if (this.stockSymbol == "FB") {
          this.renderer.setProperty(
            this.elRef.nativeElement,
            "innerHTML",
            (stockClosingPrice || 1).toLocaleString()
          );
        }
      }
    );
    this.subscription = this.liveMarketService.livePriceAMZNChanged.subscribe(
      (stockClosingPrice: number) => {
        if (this.stockSymbol == "AMZN") {
          this.renderer.setProperty(
            this.elRef.nativeElement,
            "innerHTML",
            (stockClosingPrice || 1).toLocaleString()
          );
        }
      }
    );
    this.subscription = this.liveMarketService.livePriceGOOGChanged.subscribe(
      (stockClosingPrice: number) => {
        if (this.stockSymbol == "GOOG") {
          this.renderer.setProperty(
            this.elRef.nativeElement,
            "innerHTML",
            (stockClosingPrice || 1).toLocaleString()
          );
        }
      }
    );
    this.subscription = this.liveMarketService.livePriceBABAChanged.subscribe(
      (stockClosingPrice: number) => {
        if (this.stockSymbol == "BABA") {
          this.renderer.setProperty(
            this.elRef.nativeElement,
            "innerHTML",
            (stockClosingPrice || 1).toLocaleString()
          );
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
