const Contacts = () => {

    return (
        <footer className="contacts section">
            <div className="contacts-container">
                <div className="contacts-inner">
                    <div className="about-us footer-section">
                        <h3>О нас</h3>
                        <a>История компании</a>
                        <a>Карьера</a>
                        <a>Особенности</a>
                        <a>Пресса</a>
                    </div>
                    <div className="support footer-section">
                        <h3>Поддержка</h3>
                        <a>База знаний</a>
                        <a>Тарифы</a>
                        <a>Мобильное приложение</a>
                        <a>Условия использования</a>
                    </div>
                    <div className="contact-us footer-section">
                        <h3>Контакты</h3>
                        <a href="mailto:hello@music.box">hello@music.box</a>
                        <p>Russia, Moscow, Music Box studio</p>
                        <a href="tel:+79999999999">+7 999 999 99 99</a>
                    </div>
                    <div className="socials footer-section">
                        <h3>Подписывайтесь</h3>
                        <div className="socials-imgs">
                            <img className="social-icon" src="../public/instagram.png"></img>
                            <img className="social-icon" src="../public/whatsapp.png"></img>
                            <img className="social-icon" src="../public/youtube.png"></img>
                            <img className="social-icon" src="../public/tik-tok.png"></img>
                        </div>
                    </div>
                </div>
                <hr />
                <nav className="footer-nav">
                    <h3>Магазин</h3>
                    <h3>Обслуживание</h3>
                    <h3>Блог</h3>
                    <h3>Поддержка</h3>
                    <h3>Контакты</h3>
                </nav>
            </div>
        </footer>
    )
}

export default Contacts;
