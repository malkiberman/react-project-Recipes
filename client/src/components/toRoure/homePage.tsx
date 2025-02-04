import './homeCSS.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to Our Culinary Journey! 🍲✨</h1>
        <p>
          Welcome, dear friends, to a place where time-honored traditions meet modern culinary inspiration. Here, every recipe is crafted with care, respect, and a touch of wit—just as our families have always cherished.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our kitchen is a humble sanctuary of flavors, where classic recipes blend with creative ideas to brighten your table. Whether preparing a festive Shabbat dinner or a simple family meal, you'll find guidance, inspiration, and a few gentle smiles along the way. 😊
        </p>
        <ul className="mt-6 text-left text-gray-700">
          <li className="mb-2"><strong>🥘 Tradition and Taste:</strong> Honoring heritage while inviting modern twists.</li>
          <li className="mb-2"><strong>📜 Practical Wisdom:</strong> Step-by-step guidance for meaningful meals.</li>
          <li><strong>🤝 Community and Connection:</strong> Authenticity, warmth, and good humor in every bite.</li>
        </ul>
        <p className="mt-6 text-gray-600 italic">May you find comfort in every bite and inspiration in every recipe. Enjoy your culinary journey with us! 🙏🍽️</p>
      </div>
    </div>
  );
};

export default HomePage;
