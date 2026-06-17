import http from 'k6/http';

/** 10 concurrent users */ 
// export const options = {
//   vus: 10,
//   duration: '10s',
// };

/** 100 concurrent users */ 
export const options = {
  vus: 100,
  duration: '30s',
};

/** 500 concurrent users */ 
export const options = {
  vus: 500,
  duration: '60s',
};

export default function () {
  http.get('https://test.k6.io');
}