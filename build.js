var tsbuild = require("tsbuild");

tsbuild("eventsim.ts", "./src", "./lib", "./dist", "EventSim");
