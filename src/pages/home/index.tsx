import './styles.css';

const HomePage = () => {
    return <div className="home-container">
        <img className="logo" alt="React logo" src={process.env.PUBLIC_URL + '/logo.png'} />
    </div>
}

export default HomePage;