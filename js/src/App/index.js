import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
    }
    componentDidMount() {
        fetch(`/wp-json/wp/v2/pages/${pageId}`, {
            method: 'GET',
        }).then(response => response.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    content: json.content.rendered,
                })
            });
    }
    render() {
        return (
            <div
                className="wrap"
                dangerouslySetInnerHTML={{ __html: this.state.content }}
            />
        );
    }
}

// dangerouslySetInnerHTML={{__html: this.state.actions}}
module.exports = App;
