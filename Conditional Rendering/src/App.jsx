import ConditionalRendering from './components/ConditionalRendering';
function App() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'wrap',
        gap: '20px',
        height: '100vh',
    };

    return (
        <>
            <div style={containerStyle}>
                <ConditionalRendering />
            </div>
        </>
    );
}
export default App;
