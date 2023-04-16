
import { DateTime } from './modules/luxon.js'; 
import { F1, F2, F3 } from './modules/initializeNavigation.js';
import { Book, BookList } from './modules/BookLists.js';

const bookList = new BookList();


navL1.addEventListener('click', F1);
navL2.addEventListener('click', F2);
navL3.addEventListener('click', F3);