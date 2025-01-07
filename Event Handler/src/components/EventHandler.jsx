import { useState } from 'react';
function EventHandler() {
    const handleClick = () => {
        alert('Button Clicked!');
    };

    const handleClickPara = (name) => {
        alert(`Hello, ${name}!`);
    };

    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="container">
            {/* Inline Event Handler */}
            <button className="btn btn-primary m-3" onClick={() => alert('Button Clicked!')}>
                Click Me
            </button>

            {/* Separate Event Handler Function */}
            <button className="btn btn-success m-3" onClick={handleClick}>
                Click Me
            </button>

            {/* Event Handler with Parameter */}
            <button className="btn btn-warning m-3" onClick={() => handleClickPara('Touhid')}>
                Click Me
            </button>

            {/* Event Handler with State */}
            <div>
                <h2>Count: {count}</h2>
                <button className="btn btn-danger m-3" onClick={handleDecrement}>
                    Decrement
                </button>
                <button className="btn btn-info m-3" onClick={handleIncrement}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default EventHandler;
