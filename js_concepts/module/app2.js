//? Module
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { addUser, getUsers } from './app.js';

console.log(getUsers());
addUser('Autumn');
console.log(getUsers());

//* 요렇게 하면 users를 감출수 있다.
//* browser는 import, export를 모르기 때문에 type="module" 로 알려준다
//* <script type="module" src="app.js"></script>
//*	<script type="module" src="app2.js"></script>
