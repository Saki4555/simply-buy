import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../api/auth";
const SocialSignin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const userData = {
          email: loggedUser.email,
          role: "buyer",
          status: "approved",
          wishList: [],
        };
        saveUser(userData, loggedUser.email)
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="pr-6 pl-6 pb-6">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignin}
        className="border py-2 w-full flex flex-row gap-2 items-center justify-center border-blue-300 transition-colors hover:border-blue-700 rounded-lg"
      >
        {" "}
        <FcGoogle /> <span className="text-sm">Continue with google</span>
      </button>
    </div>
  );
};

export default SocialSignin;
