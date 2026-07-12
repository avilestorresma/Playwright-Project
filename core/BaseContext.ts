import { Page } from '@playwright/test';

export abstract class BaseContext {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}