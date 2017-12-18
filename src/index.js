import numeral from 'numeral';
import './style.css';

const courseVal = numeral(1000).format('$0,0.00');
console.log(`I would not pay ${courseVal} for this shitty course`);