import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialSignin from "../components/home/SocialSignin";
import toast from 'react-hot-toast'
import { saveUser } from "../api/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();


  const { createUser } = useAuth();
  const onSubmit = (data) => {
    
    const email = data.email;
    const role = data.role;
    const status = role === 'buyer' ? 'approved' : 'pending';
    const whishList = [];

    const userData = { email, role, status, whishList};

    createUser(data.email, data.password).then(() => {
      saveUser(userData, email).then( (data) =>{
        console.log(data);
          if(data.upsertedCount){
            reset();
            toast.success('Singed up successfully');
            navigate('/');
          }
      })
    })
    console.log(userData)
  };
  return (
    <div className="hero bg-base-200 min-h-screen px-60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 7,
                })}
              />
              {errors.password?.type === "required" ? (
                <p className="text-red-400 text-sm">Password is required</p>
              ) : errors.password?.type === "minLength" ? (
                <p className="text-red-400 text-sm">
                  Password must have 7 characters
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value)
                      return "Passwords do not match";
                    return true;
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm">Passwords do not match</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", {
                  required: true,
                })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="text-red-400 text-sm">Select a role</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
          <SocialSignin />
        </div>
      </div>
    </div>
  );
};

export default Register;
