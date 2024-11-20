const PricingCard = () => {
    return (
        <div className="card"></div>
    );
}

const Pricing = () => {

    return (
        <section className="pricing section">
            <div className="pricing-container">
                <div className="pricing-title">
                    <h2>Формы подписки</h2>
                </div>
                <div className="card-container">
                    <PricingCard />
                    <PricingCard />
                    <PricingCard />
                </div>
                <div className="pricing-note">
                    <span>На всех тарифах возможно прослушивание музыки с мобильных устройств.
                        На премиум тарифе вы можете скачать все композиции на ваше устройство и слушать музыку без подключения к интернету
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Pricing;
