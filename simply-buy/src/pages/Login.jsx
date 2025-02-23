import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SocialSignin from "../components/home/SocialSignin";

const Login = () => {
        
const {signIn} = useAuth();
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
    navigate('/')
  };
  return (
    <div className="hero bg-base-200 min-h-screen px-60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
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
                {...register('email', {
                  required: true,
                })}
              />
               {
                errors.email && <p className='text-red-400 text-sm'>Email is required</p>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('password', {
                  required: true,
                })}
              />
              {
                errors.password?.type === 'required' ? <p className='text-red-400 text-sm'>Password is required</p> : errors.password?.type === 'minLength' ? <p className='text-red-400 text-sm'>Password must have 7 characters</p> : ""
              }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                Don&apos;t have and account Signup
              </Link>
            </label>
          </form>
          <SocialSignin />
        </div>
      </div>
    </div>
  );
};

export default Login;
