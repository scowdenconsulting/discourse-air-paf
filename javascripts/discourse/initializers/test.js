import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'with-plugin-sample',
    initialize() {

        withPluginApi('0.8', api => {
            api.onPageChange(x => console.log(x));
        });

    }
}