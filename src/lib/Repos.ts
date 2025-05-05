import { LocalStorageController } from "./LocalStoragController";
import type { TaskModel } from "./Models";

export const taskRepo = new LocalStorageController<TaskModel>("tasks");