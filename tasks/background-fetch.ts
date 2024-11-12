import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const BACKGROUND_SYNC_TASK = "background-sync";

console.log("background-fetch");

TaskManager.defineTask(BACKGROUND_SYNC_TASK, async () => {
  console.log("background-sync");
  return BackgroundFetch.BackgroundFetchResult.NoData;
});

BackgroundFetch.registerTaskAsync(BACKGROUND_SYNC_TASK, {
  minimumInterval: 60, // 1 minute
});
