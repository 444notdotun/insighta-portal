import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://insighta-labs-183135031185.us-central1.run.app";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "X-API-Version": "1",
    },
    withCredentials: true,
});

instance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config;
        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;
            try {
                await instance.post("/auth/refresh", {});
                return instance(original);
            } catch {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default instance;