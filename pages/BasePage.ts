import { BaseContext } from "../core/BaseContext";

export abstract class BasePage extends BaseContext {

  protected abstract readonly path: string;

  async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  getTitle(): Promise<string> {
    return this.page.title();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({
      path,
      fullPage: true,
    });
  }
}
