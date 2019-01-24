import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

import Comment from './Comment';

const checkScrolled = (offset, visible, content) => {
    return Math.ceil(offset) + Math.ceil(visible) >= content;
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit)
        }
    }
};

export default class Screen extends React.Component {
    isScrolled = false;
    handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const contentSize = event.nativeEvent.contentSize.height;
        const viewSize = event.nativeEvent.layoutMeasurement.height;

        this.isScrolled = checkScrolled(offsetY, viewSize, contentSize);
    };

    render() {
        const {comments} = this.props;
        return (
            <ScrollView
                onScroll={throttle(this.handleScroll, 500)}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                ref="scrollView"
                onContentSizeChange={(width, height) => this.refs.scrollView.scrollTo({y: height})}

            >
                {
                    comments.map(comment => {
                        return (
                            <Comment key={comment.id} item={comment}/>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
