/* global pageId */
import React from 'react';
import fetchPage from './functions/fetchPage';
import fetchMedia from './functions/fetchMedia';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            featuredImageLink: '',
        };
    }
    componentDidMount() {
        fetchPage(pageId)
            .then((json) => {
                console.log(json);
                this.setState({
                    content: json.content.rendered,
                });
                if (json.featured_media !== 0) {
                    fetchMedia(json.featured_media)
                        .then((medInfo) => {
                            console.log(medInfo);
                            this.setState({
                                featuredImageLink: medInfo.source_url,
                            });
                        });
                }
            });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.featuredImageLink !== '' &&
                    <img
                        src={this.state.featuredImageLink}
                        alt="The featured thing"
                        style={{
                            width: '320px',
                        }}
                    />
                }
                <div
                    dangerouslySetInnerHTML={{ __html: this.state.content }}
                />
            </React.Fragment>
        );
    }
}

module.exports = App;
