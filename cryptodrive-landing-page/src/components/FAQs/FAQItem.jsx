

const FAQItem = ({question, answer, id}) => {
    return (
        <div className={`text-start pb-6 ${id >= 5 && id <= 6 ? '' : 'border-b'}  text-gray-300 border-gray-500`}>
        <h3 className="text-lg font-semibold mb-2">
          {question}
        </h3>
       
        <p className="leading-relaxed">
          {answer}
        </p>
      </div>
    );
};

export default FAQItem;