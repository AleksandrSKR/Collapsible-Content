import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi, itaque sit eaque ullam. Doloribus ducimus aperiam, ab, vitae commodi, eius amet nihil fugit quod, enim consectetur saepe aut molestias.</p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi et pariatur nobis magnam, ab, aperiam.</p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
