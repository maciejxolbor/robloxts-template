import { ReplicatedStorage, RunService } from "@rbxts/services";

export const Functions = {
	KnitAwait: () => {
		ReplicatedStorage.WaitForChild("KnitServerLoaded", 60);
		if (RunService.IsClient()) {
			ReplicatedStorage.WaitForChild("KnitClientLoaded", 60);
		}
	},
};
