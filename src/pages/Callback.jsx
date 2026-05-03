import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "../api/axios";

export default function Callback() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const called = useRef(false);

    useEffect(() => {
        if (called.current) return;
        called.current = true;

        const exchangeToken = searchParams.get("exchangeToken");
        const codeVerifier = sessionStorage.getItem("code_verifier");
        sessionStorage.removeItem("code_verifier");

        if (!exchangeToken || !codeVerifier) {
            navigate("/login");
            return;
        }

        axios.post("/auth/github/exchange", { exchangeToken, codeVerifier })
            .then(res => {
                const { username, userId } = res.data.data;
                setUser({ username, userId });
                navigate("/dashboard");
            })
            .catch(() => navigate("/login"));
    }, []);

    return (
        <div className="callback-loading">
            <div className="spinner"></div>
            <p>Authenticating with GitHub...</p>
        </div>
    );
}