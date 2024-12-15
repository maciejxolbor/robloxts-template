import { KnitClient } from "@rbxts/knit";
import Make from "@rbxts/make";
import { ReplicatedStorage } from "@rbxts/services";

const modules = (script.Parent!.FindFirstChild("Controllers") as Folder).GetDescendants();
for (const module of modules) {
	if (module.IsA("ModuleScript")) {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require(module);
	}
}

KnitClient.Start()
	.catch(warn)
	.andThen(() => {
		Make("BoolValue", { Value: true, Name: "KnitClientLoaded" }).Parent = ReplicatedStorage;
	});
