const PendingMessage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-yellow-50 p-8 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-semibold text-yellow-600">Your seller application is still pending.</h2>
                <p className="mt-4 text-gray-700">Please wait for approval before you can access the seller&apos;s features.</p>
                <div className="mt-6">
                    <button className="btn btn-warning w-full">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PendingMessage;
