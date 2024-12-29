import { Component } from 'react';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: true,
        };
    }
    render() {
        const { isSignUp } = this.state;

        // Using if-else for conditional rendering
        if (isSignUp) {
            return <HomePage />;
        } else {
            return <SignUpPage />;
        }

        // Storing the element in a variable and rendering it
        let element;
        if (isSignUp) {
            element = <HomePage />;
        } else {
            element = <SignUpPage />;
        }
        return <div>{element}</div>;

        // Using the ternary operator for concise conditional rendering
        return <div>{isSignUp ? <HomePage /> : <SignUpPage />}</div>;

        // Using a logical AND operator
        return <div>{isSignUp && <HomePage />}</div>;
    }
}
export default ConditionalRendering;