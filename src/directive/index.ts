import { type App } from "vue";

const directive: any[] = [];
const getDire = function (resolve: any) {
  Object.keys(resolve).forEach((fileName: string) => {
    if (fileName) {
      const s = fileName.replace(/(\.|\/|ts|\$)/g, "");
      directive.push({
        name: s,
        file: resolve[fileName].default,
      });
    }
  });
};

getDire(import.meta.glob("./*.ts", { eager: true }));

export default {
  install: (app: App) => {
    directive.forEach((item: any) => {
      app.directive(item.name, item.file);
    });
  },
};
