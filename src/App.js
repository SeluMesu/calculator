import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const renderNums = (isWhite) => {
    const nums = ["C", "±", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "−", "1", "2", "3", "+", "GT", "0", ".", "="];
    return nums.map((num, index) => {
      return <Button isWhite={isWhite} value={num} key={index} />
    })
  }

  return (
    <div>
      <p>This project is from uplabs. </p>
      <a href="https://www.uplabs.com/posts/calculator-app-ios-13" target="_blank">UI Design</a>
      <div className="container">
        <div>
          <div className="screen white-bg">
            <div className="status">
            </div>
            <div className="screen-body">
              <p>45 + (1250 * 100) / 10</p>
              <h1>12,545</h1>
            </div>
          </div>
          <div className="button-container white-bg">
            {renderNums(true)}
            <div className="control w"></div>
          </div>
        </div>

        <div>
          <div className="screen dark-bg">
            <div className="status">
            </div>
            <div className="screen-body">
              <p>45 + (1250 * 100) / 10</p>
              <h1 className="result">12,545</h1>
            </div>
          </div>
          <div className="button-container dark-bg">
            {renderNums(false)}
            <div className="control d"></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
