/* eslint-disable react/prop-types */
const variants = [
    {
        variant: "free",
        title: "Бесплатная",
        price: 0,
        note: `Оплата в месяц.
        Бесплатный тариф предоставляет доступ ко всей коллекции музыки.
        Присутствует реклама`,
    },
    {
        variant: "standart",
        title: "Стандартная",
        price: 250,
        note: `Оплата в месяц.
        Стандартный тариф предоставляет доступ ко всей коллекции музыки в среднем качестве`,
    },
    {
        variant: "premium",
        title: "Премиум",
        price: 500,
        note: `Оплата в месяц.
        Премиум тариф предоставляет доступ ко всей коллекции музыки в высоком качестве`,
    },
]

const PricingCard = ({ variant, title, price, note }) => {
    const classname = "card " + variant;

    return (
        <div className={classname}>
            <div className="inner-card">
                <h2 className="pricing-variant-title">{title}</h2>
                <div className="price">{price}<span className="rubble">руб.</span></div>
                <button className="pricing-subscribe-button" action="" type="submit">Оформить</button>
                <p className="variant-note">{note}</p>
            </div>
        </div >
    );
}



const Pricing = () => {

    return (
        <section className="pricing section">
            <div className="pricing-container">
                <div className="pricing-title">
                    <h2>Формы подписки</h2>
                </div>
                <div className="cards-container">
                    {variants.map((variant, idx) => <PricingCard key={idx} {...variant} />)}
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
