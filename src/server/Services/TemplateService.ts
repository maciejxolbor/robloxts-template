import { KnitServer } from "@rbxts/knit";

declare global {
	interface KnitServices {
		TemplateService: typeof TemplateService;
	}
}

const TemplateService = KnitServer.CreateService({
	Name: "TemplateService",

	KnitInit() {
		print(`${TemplateService.Name} Loaded`);
	},
});
