import Button from "../shared/Button";

const InfoCard = ({ title, description, buttonText }) => {
  return (
    <div className="bg-neon-green-700/10 p-6 rounded-2xl shadow-lg w-72 text-center text-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <Button buttonStyle='ghost' variant='outlined' py='py-2'>{buttonText}</Button>
    </div>
  );
};

export default InfoCard;
