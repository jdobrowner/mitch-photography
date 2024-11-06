import { mount } from "svelte";
import "./style/app.scss";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
