import instanceConfig from "./config-instance.js";
import deepmerge from 'deepmerge';

const baseConfig = {
    hostip: {
        endpoint: "service.rurylox.site",
        port: "80"
    },
    runtime: {
        enableLogging: true
    }    
}


const config = deepmerge(baseConfig, instanceConfig);

export default config;