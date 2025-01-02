export default class BaseController {
    constructor() {
    }

    getRequestWithParams(url, id, complement) {
        const fullUrl = `${url}/${id}/${complement}`;
        return this.getRequest(fullUrl);
    }

    async getRequest(url) {
        debugger;
        try {
            let response = await axios.get(url);
            debugger;
            if (response.status == 200) {
                return response.data;
            } else {
                console.log('Error en GET:', response.data.message);
                return null;
            }
        } catch (error) {
            console.error('Error al hacer la solicitud GET:', error.response.data.errors);
            return null;
        }
    }


    async postRequest(url, data) {
        debugger;
        try {
            let response = await axios.post(url, data, {
                headers: {
                    'user': 'banking-system-webiu',
                    'source': 'banking-system-webiu',
                    'Content-Type': 'application/json'
                }
            });
            debugger;
            if (response.status == 200) {
                return response.data;
            } else {
                console.log('Error en POST:', response.data.message);
                return null;
            }
        } catch (error) {
            console.error('Error al hacer la solicitud POST:', error.response.data.errors);
            return null;
        }
    }

    async patchRequest(url) {
        debugger;
        try {
            let response = await axios.patch(url, {
                headers: {
                    'user': 'banking-system-webiu',
                    'source': 'banking-system-webiu',
                    'Content-Type': 'application/json'
                }
            });
            debugger;
            if (response.status == 200) {
                return response.data;
            } else {
                console.log('Error en PATCH:', response.data.message);
                return null;
            }
        } catch (error) {
            console.error('Error al hacer la solicitud PATCH:', error.response.data.errors);
            return null;
        }
    }

    patchRequest(url, data) {
        return axios.patch(url, data, {
            headers: {
                'user': 'banking-system-webiu',
                'source': 'banking-system-webiu',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.data.success) {
                return response.data;
            } else {
                console.log('Error en PATCH:', response.data.message);
                return null;
            }
        })
        .catch(error => {
            console.error('Error al hacer la solicitud PATCH:', error.response.data.errors);
            return null;
        });
    }
}
