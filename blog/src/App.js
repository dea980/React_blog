/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// {} 는 중괄호
function App() {
  // var [a, b] = [1, 100]
  //state는 변수 대신 쓰는 데이터 저장공간
  //useState()를 이용해 만들어야함
  //State의 장점, 웹이 app처럼 동작하게 만들고 싶어서
  // State는 제랜더링이됨.
  let [title,edit] = useState(['남자 코트 추천','여자 코트 추천', '코트추천']); //[a,b] ES6 distructuring 이라는 문법
  let [date, locate] = useState(['2022-06-11', '2022-06-12', '2022-06-13'])
  let [like, likeedit] = useState(0);
  // edit... 대체할데이터
  let posts = '대엽의 Dev blog'
  function titleedit(){
    //deep copy가 필요 
    var newArray = [...title]; // ... 을 사용함으로써 title에 있는 데이터만 복사하여 세로운 array에 넣기
    //var newArray = title; // 참조형 자료형
    
    newArray[0] = 'Recommendation for Women coat';
    edit( newArray );
    //edit(['남자 코트 추천','여자 코트 추천', '코트추천']);
  }
  // modal UI 디자인하기
// retrun 안에는 하나의 div만 가능(평행은 안됨)

  return (
  
    <div className="App">
      <div className="black-nav"> 
        <div>{ posts }</div>
      </div>
      <button onClick= { titleedit }>
        change gender
      </button>
      <div className='list'>
        <h3> { title[0] }<span onClick={ ()=>{likeedit(like + 1)} }>👍</span> {like} </h3>
      
        <p>{ date[0] }</p>
      </div>
      <div className='list'>
        <h3> { title[1] }<span onClick={ ()=>{likeedit(like + 1)} }>👍</span> {like} </h3>
        <p>{ date[1] }</p>

      </div>
      <div className='list'>
        <h3> { title[2] }}<span onClick={ ()=>{likeedit(like + 1)} }>👍</span> {like}</h3>
        <p>{ date[2] }</p>
      </div>

      <Modal/ >
      
    </div>
  );
}
// 반복적인 것들은 component 로 만들면 html이 더 정리쉬어짐
// 자주 많이 바뀌는 것들을 component 로 바꾸면 성능적으로 좋아짐
// 다흔 페이지로 만들때도 component로 만듬
// component의 단점 => state쓸때 복잡해짐 (상위 component에서 만든 state 쓰려면 props 문법 이용해야함)
//compenent 문법
//component 만드는법
// Component 는 대문자로 해아됨
// return() 묶을때 의미없는 <div> </div> 쓰기 싫으면 <></>로 묶기
function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;
