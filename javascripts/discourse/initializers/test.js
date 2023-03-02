import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'with-plugin-sample',
    initialize() {

        withPluginApi('0.8', api => {
            api.onPageChange(x => {
                if (x == "/login") {
                    fetch("http://ip.jsontest.com/")
                        .then((response) => response.json())
                        .then((data) => console.log(data));
                }
            });
        });

    }
}