import App from './App.svelte';
import { initFirestore, registerServiceWorker } from './store/dbfirestore';

initFirestore();
registerServiceWorker();

const app = new App({
	target: document.body,
});

export default app;
