import React from 'react';

const Card = ({ logo, name }) => (
  <div className="card">
    <img src={logo} alt={name} />
    <p>{name}</p>
  </div>
);

const Container = () => {
  const cardsData = [
    { logo: 'logo1.png', name: 'Card 1' },
    { logo: 'logo2.png', name: 'Card 2' },
    { logo: 'logo3.png', name: 'Card 3' },
    // Add more card data here...
    { logo: 'logo12.png', name: 'Card 12' }
  ];

  return (
    <div className="container">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="row">
          {[...Array(4)].map((_, subIndex) => {
            const cardIndex = index * 4 + subIndex;
            const cardData = cardsData[cardIndex];
            return cardData ? (
              <Card key={subIndex} logo={cardData.logo} name={cardData.name} />
            ) : null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Container;
