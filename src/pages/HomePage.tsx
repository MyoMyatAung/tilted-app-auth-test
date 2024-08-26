import { useCallback, useEffect, useState } from "react"
import Container from "../components/shared/Container"
import { ApiClient } from "../api/client";
import { API_ENDPOINTS, LocalStorageKeys, RoutesPath } from "../libs/constants";
import { useNavigate } from "react-router-dom";
import { useProtectedRouteWrapper } from "../hooks/useCheckAuth";

interface ResponsePayload {
  _id: string,
  name: string,
  email: string,
  __v: 0,
  iat: number,
  exp: number
}

const HomePage = () => {
  useProtectedRouteWrapper();
  const navigate = useNavigate();
  const [user, setUser] = useState<ResponsePayload | null>(null);

  const handleSignout = useCallback(() => {
    localStorage.clear();
    navigate(`/${RoutesPath.SIGN_IN}`);
  }, [navigate]);

  const fetchUser = useCallback(async (): Promise<ResponsePayload | null> => {
    try {
      const client = new ApiClient(
        {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN)}`,
          "x-refresh-token": localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN) as string
        },
        false
      );

      const response = await client.get<ResponsePayload>(API_ENDPOINTS.GET_ME);
      return response;
    } catch (error) {
      handleSignout();
      return null;
    }
  }, [handleSignout])

  useEffect(() => {

    fetchUser().then(res => setUser(res)).catch(e => alert(e));
  }, [fetchUser]);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div>
          <h1 className="text-lg font-semibold">{user?.name}</h1>
          <h1 className="text-lg font-semibold">{user?.email}</h1>
        </div>
        <button onClick={handleSignout} className="text-white bg-primary-main font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2">Sign Out</button>
      </div>
    </Container>
  )
}

export default HomePage