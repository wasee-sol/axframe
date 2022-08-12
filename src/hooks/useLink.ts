import { useNavigate } from "react-router-dom";

export function useLink() {
  const navigate = useNavigate();
  const linkTo = (to: string) => {
    navigate(to, { replace: true });
  };

  return {
    linkTo,
  };
}
