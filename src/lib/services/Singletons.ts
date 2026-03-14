import { PocketBaseService } from './PocketBaseService.svelte';
import { ApplicationController } from './AppController.svelte';

export const pbService = new PocketBaseService();
export const appController = new ApplicationController(pbService);
