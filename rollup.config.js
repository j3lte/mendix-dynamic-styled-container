import { terser } from 'rollup-plugin-terser';
// import livereload from "rollup-plugin-livereload";
import pkg from './package.json';

export default args => {
    const configArray = args.configDefaultConfig;

    const result = configArray.map(config => {

        const plugins = config.plugins.map(plugin => {
            if (plugin && plugin.name && plugin.name === 'terser') {

                return terser({
                    format: {
                        comments: false,
                        preamble: `/* -> Script Loader v${pkg.version} | Build date: ${(new Date()).toISOString()} | Developer: ${pkg.author} | Copyright (c) CaffCode 2022. All Rights Reserved | https://caffcode.com <- */`
                    }
                })
            }

            // if (plugin && plugin.name && plugin.name === 'livereload') {
            //     const PORT = 35729;

            //     //return livereload({ clientURL: `'//' + (self.location.host || 'localhost').split(':')[0] + ':${PORT}}/livereload.js?snipver=1'`, port: PO, });

            //     // // return livereload({ clientUrl: `//localhost:${PORT}/livereload.js?snipver=1`, port: PORT, });
            //     // return livereload({ clientUrl: `https://4.tcp.eu.ngrok.io/livereload.js?snipver=1`, port: PORT, });
            // }



            return plugin;
        });

        config.plugins = plugins;

        return config;
    });

    return result;
};
