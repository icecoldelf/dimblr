var contentNode = document.getElementById('contents');
var component = <div className="happy">
                    <h1>Hello World!</h1>
                    <p>
                        happy
                        <a href="www.google.com">Google</a>
                    </p>
                </div>;
ReactDOM.render(component, contentNode);