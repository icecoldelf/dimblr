const contentNode = document.getElementById('contents');
const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c => 'Hello ${c}').join(' ');

const component = <div className="happy">
                    <h1>Hello World!</h1>
                    <p>
                        {message}
                    </p>
                </div>;
                    
ReactDOM.render(component, contentNode);