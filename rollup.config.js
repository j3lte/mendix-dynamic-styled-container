import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default args => {
    const configArray = args.configDefaultConfig;

    const result = configArray.map(config => {

        const plugins = config.plugins.map(plugin => {
            if (plugin && plugin.name && plugin.name === 'terser') {

                return terser({
                    format: {
                        comments: false,
                        preamble: `/* -> Dynamic Styled Container v${pkg.version} | Build date: ${(new Date()).toISOString()} | Developer: ${pkg.author} | Copyright (c) CaffCode 2022-2023. All Rights Reserved | https://caffcode.com <- */`
                    }
                })
            }

            return plugin;
        });

        config.plugins = plugins;

        return config;
    });

    return result;
};
