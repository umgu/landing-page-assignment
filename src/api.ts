import axios from 'axios';

export const ASKITECT_SERVICE = axios.create({
    baseURL: "https://dev-abt1u4l9bzxp4ml.api.raw-labs.com/",
});

ASKITECT_SERVICE.interceptors.request.use((config: any) => {
    return {
        ...config,
        headers: {
            'authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("uid")}` : ""
        }
    }
});

