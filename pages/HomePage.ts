import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private static readonly PATH = "/";

  async navigate(): Promise<void> {
    await super.navigate(HomePage.PATH);
  }
}
