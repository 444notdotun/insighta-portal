import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Callback() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const called = useRef(false);

    useEffect(() => {
        if (called.current) return;
        called.current = true;

        const username = searchParams.get("username");
        const userId = searchParams.get("userId");

        if (!username || !userId) {
            navigate("/login");
            return;
        }

        setUser({ username, userId });
        navigate("/dashboard");
    }, []);

    return (
        <div className="callback-loading">
            <div className="spinner"></div>
            <p>Authenticating with GitHub...</p>
        </div>
    );
}