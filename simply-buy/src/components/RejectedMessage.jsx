const RejectedMessage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-red-50 p-8 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-semibold text-red-600">Your seller application has been rejected.</h2>
            <p className="mt-4 text-gray-700">Unfortunately, you cannot access the seller&apos;s features at this time.</p>
            <div className="mt-6">
                <button className="btn btn-error w-full">
                    Contact Support
                </button>
            </div>
        </div>
    </div>
    );
};

export default RejectedMessage;
