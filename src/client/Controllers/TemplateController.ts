import { KnitClient } from "@rbxts/knit";

declare global {
	interface KnitControllers {
		TemplateController: typeof TemplateController;
	}
}

const TemplateController = KnitClient.CreateController({
	Name: "TemplateController",

	KnitInit() {
		print(`${TemplateController.Name} Loaded`);
	},
});
