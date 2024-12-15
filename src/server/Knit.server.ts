import { KnitServer } from "@rbxts/knit";
import Make from "@rbxts/make";
import { ReplicatedStorage } from "@rbxts/services";

const modules = (script.Parent!.FindFirstChild("Services") as Folder).GetDescendants();
for (const module of modules) {
	if (module.IsA("ModuleScript")) {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require(module);
	}
}

KnitServer.Start()
	.catch(warn)
	.andThen(() => {
		Make("BoolValue", { Value: true, Name: "KnitServerLoaded" }).Parent = ReplicatedStorage;
	});
