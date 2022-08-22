// có 2 cách viết components
// class component
// function component
import React from "react";
class MyComponent extends React.Component {
    // JSX là cho phép viết code js trong html
    render() {
        return (
            <div>
                My first Component
                {/* cặp dấu {} là đang muốn sử dụng biến cũng như viết logic */}
                {Math.random()}
            </div>
        );
    }
}
export default MyComponent;