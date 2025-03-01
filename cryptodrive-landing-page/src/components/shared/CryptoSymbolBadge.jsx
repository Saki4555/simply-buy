const CryptoSymbolBadge = ({ crypto, hero }) => {
  return (
    <div
      className={`rounded-full ${crypto.bgColor} ${ hero ? crypto.position : ''} p-2 ${
        hero && (crypto.name === "Ethereum" || crypto.name === "Solana")
          ? "w-9"
          : "w-12"
      }`}
    >
      <img src={crypto.icon} alt={crypto.symbol} />
    </div>
  );
};

export default CryptoSymbolBadge;
