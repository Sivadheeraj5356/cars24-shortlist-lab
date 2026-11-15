/* Independent demo. All inventory is synthetic. No pricing/inspection claims. */
(function(root){
const inventory=[{id:'s1',name:'Maruti Swift',year:2021,km:36000,price:580000,fuel:'Petrol'},{id:'s2',name:'Hyundai i20',year:2020,km:48000,price:640000,fuel:'Petrol'},{id:'s3',name:'Honda City',year:2019,km:61000,price:790000,fuel:'Petrol'},{id:'s4',name:'Tata Nexon',year:2022,km:29000,price:910000,fuel:'Diesel'},{id:'s5',name:'Maruti Baleno',year:2022,km:24000,price:710000,fuel:'Petrol'},{id:'s6',name:'Hyundai Grand i10',year:2018,km:75000,price:420000,fuel:'Petrol'}];
function shortlist(cars,budget,maxKm){
 if(!Number.isFinite(budget)||budget<=0||!Number.isFinite(maxKm)||maxKm<0)throw Error('Enter a positive budget and a non-negative mileage limit.');
 return cars.filter(c=>Number.isFinite(c.price)&&c.price>0&&Number.isFinite(c.km)&&c.km>=0&&c.price<=budget&&c.km<=maxKm).sort((a,b)=>a.km-b.km||a.price-b.price||a.id.localeCompare(b.id)).map(c=>({...c,headroom:budget-c.price,reason:`${c.km.toLocaleString('en-IN')} km; within both limits. Sorted by mileage, then price.`}));
}
const api={inventory,shortlist};if(typeof module!=='undefined')module.exports=api;else root.ShortlistLab=api;
})(typeof window!=='undefined'?window:globalThis);
